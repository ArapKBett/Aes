// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArapEscrow {
    address public owner;
    address public commissionWallet;
    
    enum EscrowStatus { Pending, Completed, Disputed, Cancelled }
    
    struct Transaction {
        address buyer;
        address seller;
        uint256 amount;
        uint256 commission;
        EscrowStatus status;
        bool buyerApproved;
        bool sellerApproved;
        string currencyFrom;
        string currencyTo;
        string description;
    }
    
    mapping(uint256 => Transaction) public transactions;
    uint256 public transactionCount;
    
    event EscrowCreated(uint256 indexed transactionId, address indexed buyer, address indexed seller, uint256 amount);
    event FundsReleased(uint256 indexed transactionId);
    event DisputeRaised(uint256 indexed transactionId);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    constructor(address _commissionWallet) {
        owner = msg.sender;
        commissionWallet = _commissionWallet;
    }
    
    function createEscrow(
        address _seller,
        uint256 _amount,
        string memory _currencyFrom,
        string memory _currencyTo,
        string memory _description
    ) external payable {
        require(_seller != address(0), "Invalid seller address");
        require(_amount > 0, "Amount must be greater than 0");
        
        uint256 commission = _amount < 100 ether ? (_amount * 5) / 100 : (_amount * 3) / 100;
        require(msg.value >= _amount + commission, "Insufficient funds sent");
        
        transactionCount++;
        transactions[transactionCount] = Transaction({
            buyer: msg.sender,
            seller: _seller,
            amount: _amount,
            commission: commission,
            status: EscrowStatus.Pending,
            buyerApproved: false,
            sellerApproved: false,
            currencyFrom: _currencyFrom,
            currencyTo: _currencyTo,
            description: _description
        });
        
        payable(commissionWallet).transfer(commission);
        emit EscrowCreated(transactionCount, msg.sender, _seller, _amount);
    }
    
    function buyerApprove(uint256 _transactionId) external {
        Transaction storage txn = transactions[_transactionId];
        require(txn.buyer == msg.sender, "Only buyer can approve");
        require(txn.status == EscrowStatus.Pending, "Transaction not pending");
        
        txn.buyerApproved = true;
        if (txn.sellerApproved) _releaseFunds(_transactionId);
    }
    
    function sellerApprove(uint256 _transactionId) external {
        Transaction storage txn = transactions[_transactionId];
        require(txn.seller == msg.sender, "Only seller can approve");
        require(txn.status == EscrowStatus.Pending, "Transaction not pending");
        
        txn.sellerApproved = true;
        if (txn.buyerApproved) _releaseFunds(_transactionId);
    }
    
    function _releaseFunds(uint256 _transactionId) private {
        Transaction storage txn = transactions[_transactionId];
        txn.status = EscrowStatus.Completed;
        payable(txn.seller).transfer(txn.amount);
        emit FundsReleased(_transactionId);
    }
    
    function updateCommissionWallet(address _newWallet) external onlyOwner {
        commissionWallet = _newWallet;
    }
}
