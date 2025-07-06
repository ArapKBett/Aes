import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-methods">
        <div className="contact-card">
          <h3>Email Support</h3>
          <p>bettarap254@gmail.com</p>
        </div>
        <div className="contact-card">
          <h3>Live Chat</h3>
          <p>Available 24/7 on our platform</p>
        </div>
        <div className="contact-card">
          <h3>Dispute Resolution</h3>
          <p>bettarap254@gmail.com</p>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
