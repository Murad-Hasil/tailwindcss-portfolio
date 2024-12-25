import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-10 px-5 text-white">
      <div className="container mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Murad Hasil</h2>
          <p className="text-gray-400">
            Passionate frontend developer and AI enthusiast. Let’s build the future together!
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400">
            <li className="mb-2"><a href="#about" className="hover:text-white">About</a></li>
            <li className="mb-2"><a href="#projects" className="hover:text-white">Projects</a></li>
            <li className="mb-2"><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <ul className="text-gray-400">
            <li className="mb-2">Email: mbmuradhasil@gmail.com</li>
            <li className="mb-2">Phone: +123 456 7890</li>
          </ul>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10">
        © 2024 Murad Hasil. All rights reserved.
      </div>
    </footer>
  );
}
