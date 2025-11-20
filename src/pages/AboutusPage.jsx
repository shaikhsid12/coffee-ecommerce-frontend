// src/pages/AboutUs.jsx
import React from "react";
import "../styles/AboutUsPage.css";

const AboutUsPage = () => {
  const galleryImages = [
    "frontend/public/BCAA's_.png",
    "frontend/public/BCAA's_01.png",
    "frontend/public/BCAA's_02.png",
    "frontend/public/BCAA's_DC_EAA.png",
    "frontend/public/creatine_01.png",
    "frontend/public/wheyP_DE.png",
    "frontend/public/wheyP_BNN.png",
    "frontend/public/wheyP_BNPC.png",

  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-heading animate-fadeInDown">About Protein Point</h1>

        <div className="about-flex">
          <img
            src="frontend/public/ProteinPoint.jpeg"
            alt="Protein Point"
            className="about-main-img animate-fadeInLeft"
          />
          <div className="about-text animate-fadeInRight">
             <p>
             Welcome to <strong> Protein Point </strong>, your dedicated source for premium health, fitness, and nutrition supplements. 
             Whether you're a seasoned athlete, a fitness enthusiast, 
             or just starting your wellness journey, 
             we are committed to providing you with high-quality products to fuel your goals.
             Every product we select—from the ingredients to the sourcing—is chosen with care to ensure it meets our high standards for quality and efficacy. We are here to help you turn your health and fitness aspirations into lifelong achievements.
            </p>
            <p>
             Founded with a passion for health, transparency, and results, 
             Protein Point has become a trusted name for carefully curated protein powders, vitamins, pre-workouts, 
             and essential health aids. We believe in providing products that are effective, safe, and backed by science.
            </p>
            <p>
              Every product we select—from the ingredients to the 
              sourcing—is chosen with care to ensure it meets our high standards for quality and efficacy.
               We are here to help you turn your health and fitness aspirations into lifelong achievements.
            </p>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-card animate-fadeInUp">
            <h2>Our Mission</h2>
            <p>
              ​To deliver a trusted, high-quality, and
               personalized selection of sports nutrition 
               and wellness supplements that helps 
               every customer meet and exceed their
               health and fitness goals.
            </p>
          </div>

          <div className="info-card animate-fadeInUp delay-1">
            <h2>Our Vision</h2>
            <p>
              To become the most reliable and 
              customer-focused supplement brand, 
              known for turning wellness aspirations 
              into tangible results through exceptional 
              products and expert support.
            </p>
          </div>
        </div>

        Horizontal Scrolling Gallery
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