import React from "react";
import "../styles/ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            We’re here to make your celebration perfect — get in touch today!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-left">
          <h4 className="get-in-touch">Get in Touch</h4>
          <h2>Have a question or want to plan an event?</h2>
          <p>
            Whether it’s a wedding, birthday, or corporate event — Shri Sai
            Events is ready to make it unforgettable. Share your ideas or
            queries and our team will respond quickly.
          </p>
        </div>

        <div className="contact-right">
          <form className="contact-form custom-form">

            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Mobile Number" required />
              <input type="date" placeholder="mm/dd/yyyy" required />
            </div>

            <div className="form-row">
              <select required>
                <option>—Please choose an option—</option>
                <option value="Birthday">Birthday Event</option>
                <option value="Wedding">Wedding Event</option>
                <option value="Decoration">Decoration</option>
                <option value="Corporate">Corporate Event</option>
                <option value="Corporate">Other</option>
              </select>

              <input type="text" placeholder="Venue or Location" />
            </div>

            <div className="form-row">
              <input type="number" placeholder="Budget in ₹" required />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>

      {/* Image Section */}
      <section className="contact-image-section">
        <div className="image-container">
          <img
            src="/images/contactlogo.jpg"
            alt="Contact Shri Sai Events"
            className="contact-image"
          />
        </div>

        <div className="location-info">
          <h4 className="get-in-touch">Location</h4>
          <h2>We’re here to help.</h2>
          <p>
            Visit our office or contact us to start planning your next event.
          </p>
          <ul>
            <li>📍 Shri Sai Events, Kolhapur, Maharashtra - 416416</li>
            <li>✉️ shrisai.events@gmail.com</li>
            <li>📞 +91 8208 202 203</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;