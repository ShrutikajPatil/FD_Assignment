// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
        <nav className="mb-6 space-x-6">
          <a href="#" className="hover:text-gray-700">
            About
          </a>
          <a href="#" className="hover:text-gray-700">
            Blog
          </a>
          <a href="#" className="hover:text-gray-700">
            Team
          </a>
          <a href="#" className="hover:text-gray-700">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-700">
            Contact
          </a>
          <a href="#" className="hover:text-gray-700">
            Terms
          </a>
        </nav>
        <div className="flex justify-center space-x-5 text-xl mb-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-700">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-700">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-700">
            <FaTwitter />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-gray-700">
            <FaGithub />
          </a>
          <a href="#" aria-label="Dribbble" className="hover:text-gray-700">
            <FaDribbble />
          </a>
        </div>
        <p className="text-sm">© 2021 SomeCompany, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
