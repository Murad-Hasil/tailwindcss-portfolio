import Image from 'next/image';
import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Watch World',
      description: 'Crafted with Next.js and custom CSS, Watch World offers a sleek and dynamic platform for watch enthusiasts.',
      imageUrl: '/watch-world.png',
      imageAlt: 'Project One Image'
    },
    {
      title: 'Figma Design Portfolio',
      description: 'A showcase of creativity and skill, built with Next.js and custom CSS to highlight stunning design projects.',
      imageUrl: '/figma-portfolio.png',
      imageAlt: 'Project Two Image'
    },
    {
      title: 'Tech Skills',
      description: 'Developed using HTML and CSS, Tech Skills is a simple, clean interface demonstrating core web development competencies.',
      imageUrl: '/tech-skills.png',
      imageAlt: 'Project Three Image'
    }
  ];

  return (
    <section className="py-20 px-5 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image 
                src={project.imageUrl} 
                alt={project.imageAlt} 
                width={600} 
                height={400} 
                className="object-cover w-full h-[250px]"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
