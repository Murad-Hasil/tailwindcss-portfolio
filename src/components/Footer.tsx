import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import '@/app/styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Murad Hasil</h2>
          <p className="footer-text">
            Passionate frontend developer and AI enthusiast. Let’s build the future together!
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li className="footer-link-item"><a href="#about" className="footer-link">About</a></li>
            <li className="footer-link-item"><a href="#projects" className="footer-link">Projects</a></li>
            <li className="footer-link-item"><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-subtitle">Get in Touch</h3>
          <ul className="footer-contact">
            <li className="footer-contact-item">Email: mbmuradhasil@gmail.com</li>
            <li className="footer-contact-item">Phone: +123 456 7890</li>
          </ul>
          <div className="footer-social">
            <a href="https://linkedin.com" className="footer-social-link">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" className="footer-social-link">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com" className="footer-social-link">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        © 2024 Murad Hasil. All rights reserved.
      </div>
    </footer>
  );
}
