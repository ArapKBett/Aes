import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <h2>About Arap's Escrow</h2>
      <div className="about-content">
        <section>
          <h3>Our Mission</h3>
          <p>
            Arap's Escrow provides secure transactions for buyers and sellers in both goods and currency exchanges.
            We protect both parties by holding funds until all conditions are met.
          </p>
        </section>
        <section>
          <h3>How It Works</h3>
          <ol>
            <li>Buyer creates an escrow transaction</li>
            <li>Funds are held securely in our smart contract</li>
            <li>Seller delivers goods or completes exchange</li>
            <li>Buyer releases funds to seller</li>
            <li>Transaction is completed with 3-5% commission</li>
          </ol>
        </section>
        <section>
          <h3>Our Fees</h3>
          <p>
            We charge 5% for transactions under $100 and 3% for transactions $100 and above.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
