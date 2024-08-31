import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container">
        <h2 className="section-title2">Contact Us</h2>
        <p className="section-description">
          We'd love to hear from you! Reach out to us via the contact form below or follow us on social media.
        </p>
        <div className="contact-info">
          <div className="contact-form">
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="social-info">
            <h3>Follow Us</h3>
            <p>Stay connected through our social media channels:</p>
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
