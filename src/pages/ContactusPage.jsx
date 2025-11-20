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
            We're here to help you achieve your fitness goals—get in touch today!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-left">
          <h4 className="get-in-touch">Get in Touch</h4>
          <h2>​Have a question about a product or your order?</h2>
          <p>
           Whether it's a question about product ingredients,
            your order status, shipping, or supplements that are right for you,
            the Protein Point team is ready to help. Share your questions or queries,
            and our team will respond quickly.
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
              <input type="text" placeholder="Order Number" required />
            </div>

            <div className="form-row">
              <select required>
                <option value="Product_Inquiry">Product Inquiry</option>
                <option value="Order_Status">Order Status</option>
                <option value="Shipping_Returns">Shipping & Returns</option>
                <option value="Ingredient_Question">Ingredient/Nutrition Question</option>
                <option value="Wholesale">Wholesale/Partnership</option>
                <option value="Other">Other</option>
              </select>

                <input type="text" placeholder="Product Name (Optional)" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Message/Query Details" required />
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>

      {/* Image Section */}
      <section className="contact-image-section">
        {/* <div className="image-container">
          <img
            src="/images/contactlogo.jpg"
            alt="Contact Shri Sai Events"
            className="contact-image"
          />
        </div> */}

        <div className="location-info">
          <h4 className="get-in-touch">Location</h4>
          <h2>We're here to help you reach your goals.</h2>
          <p>
           ​Visit our store or contact us for expert advice on choosing the right supplements or for assistance with your order.
          </p>
          <ul>
            <li>📍 ​Protein Point Store, 666 B Ward, Opp. Aadarsh Foot Wear,
                 Azad Chowk, Kolhapur, Maharashtra-416002 
                Kolhapur, Maharashtra - 416001</li>
            <li>✉️ proteinpoint@gmail.com</li>
            <li>📞 +91 9096973298</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;