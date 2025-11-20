// src/pages/AboutUs.jsx
import React from "react";
import "../styles/AboutUsPage.css";

const AboutUsPage = () => {
  const galleryImages = [
    "/images/haldi1.jpg",
    "/images/birthday2.jpg",
    "/images/babyshower1.jpg",
    "/images/anniversary2.jpg",
    "/images/schoolevent1.jpg",
    "/images/wedding-stage2.jpg",
    "/images/collegeevent2.jpg",
    "/images/birthday2.jpg",
    "/images/haldi3.jpg",
    "/images/babyshower3.jpg",
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-heading animate-fadeInDown">About Shri Sai Events</h1>

        <div className="about-flex">
          <img
            src="/images/event-decor-5.jpg"
            alt="Shri Sai Events Decoration"
            className="about-main-img animate-fadeInLeft"
          />
          <div className="about-text animate-fadeInRight">
            <p>
              Welcome to <strong>Shri Sai Events</strong>, your trusted partner
              for creating unforgettable celebrations. Whether it’s a wedding,
              birthday, anniversary, or corporate event, we bring your dream
              décor to life with creativity, precision, and passion.
            </p>
            <p>
              Founded with a love for artful decoration and a commitment to
              quality, Shri Sai Events has become known for elegant stage
              setups, floral themes, lighting, and complete event design
              solutions.
            </p>
            <p>
              Every detail — from drapes to lighting — is crafted with care to
              match your theme, style, and budget. We believe in turning moments
              into lifelong memories.
            </p>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-card animate-fadeInUp">
            <h2>Our Mission</h2>
            <p>
              To deliver personalized, elegant, and memorable event decoration
              services that exceed client expectations — every single time.
            </p>
          </div>

          <div className="info-card animate-fadeInUp delay-1">
            <h2>Our Vision</h2>
            <p>
              To become one of the most trusted and creative event decoration
              brands, known for turning ideas into stunning realities with a
              touch of divine elegance.
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="scrolling-gallery">
          <div className="scrolling-track">
            {galleryImages.concat(galleryImages).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Event Decor ${idx + 1}`}
                className="scrolling-img"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;