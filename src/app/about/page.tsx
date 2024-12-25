import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-5 text-gray-800">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            Hello! I&apos;m Murad Hasil, a passionate frontend developer and AI enthusiast. Currently, I&apos;m deeply immersed in AI and Metaverse technologies at the Governor IT Initiative.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I&apos;m focused on mastering frontend development with Next.js and continuously exploring new tech trends. My journey is driven by curiosity and a love for turning ideas into reality.
          </p>
          <p className="text-lg text-gray-700">
            Let&apos;s connect and create something amazing together!
          </p>
        </div>
        <div className="flex-1 flex justify-center">
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
