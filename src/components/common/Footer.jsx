// src/components/common/Footer.jsx
// This component renders a consistent footer at the bottom of every page.
import React from "react";
import "../../styles/Footer.css";
// Why a footer is important:
// A footer provides a professional and consistent look across all pages of your application.
// It's a standard practice for web development.
const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Fresh Grocery Store</p>
      <p>Freshness delivered to your doorstep •</p>
    </footer>
  );
};
export default Footer;
