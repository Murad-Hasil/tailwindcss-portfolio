import Image from 'next/image';
import React from 'react';
import '@/app/styles/projects.css';

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
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <Image 
                src={project.imageUrl} 
                alt={project.imageAlt} 
                width={600} 
                height={400} 
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
