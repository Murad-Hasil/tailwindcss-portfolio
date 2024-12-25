import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-[#f8f9fa] py-20 px-5 md:px-20 pt-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800">Hi, I’m Murad Hasil 👋</h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-4">Aspiring Frontend Developer | AI Enthusiast</h2>
          <p className="text-lg text-gray-700 mb-4">
            Transforming Ideas into Digital Realities. Pursuing excellence in web development with a passion for innovation.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            I’m a dedicated student of the Governor IT Initiative, specializing in AI and Metaverse technologies. Currently, I’m honing my skills in frontend development and nearing the completion of my journey with Next.js. My enthusiasm for learning drives me to continuously explore and experiment with new technologies. Let’s build the future together, one line of code at a time.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Download CV</button>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-900">Contact Me</button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
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
