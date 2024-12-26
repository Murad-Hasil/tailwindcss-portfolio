import Image from 'next/image';
import React from 'react';
import '@/app/styles/about.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hello! I&apos;m Murad Hasil, a passionate frontend developer and AI enthusiast. Currently, I&apos;m deeply immersed in AI and Metaverse technologies at the Governor IT Initiative.
          </p>
          <p className="about-description">
            I&apos;m focused on mastering frontend development with Next.js and continuously exploring new tech trends. My journey is driven by curiosity and a love for turning ideas into reality.
          </p>
          <p className="about-description">
            Let&apos;s connect and create something amazing together!
          </p>
        </div>
        <div className="about-image">
          <Image 
            src="/profile.jpg" 
            alt="About Me Image" 
            width={350} 
            height={350} 
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
