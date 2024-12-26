import Image from 'next/image';
import React from 'react';
import '@/app/styles/hero.css'
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I’m Murad Hasil 👋</h1>
          <h2 className="hero-subtitle">Aspiring Frontend Developer | AI Enthusiast</h2>
          <p className="hero-description">
            Transforming Ideas into Digital Realities. Pursuing excellence in web development with a passion for innovation.
          </p>
          <p className="hero-description">
            I’m a dedicated student of the Governor IT Initiative, specializing in AI and Metaverse technologies. Currently, I’m honing my skills in frontend development and nearing the completion of my journey with Next.js. My enthusiasm for learning drives me to continuously explore and experiment with new technologies. Let’s build the future together, one line of code at a time.
          </p>
          <div className="hero-buttons">
            <button className="download-cv-btn">Download CV</button>
            <button className="contact-me-btn">Contact Me</button>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={350}
            height={350}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
