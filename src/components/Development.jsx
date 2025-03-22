import { createSignal } from "solid-js";
import "./development.css";

// Import project images
import harvest_image from "../assets/harvest.webp";
import vg_image from "../assets/vg.webp";
import ad_image from "../assets/ad.webp";
import ap_image from "../assets/ap.webp";
import joyless_image from "../assets/joyless.webp";
import optimat_image from "../assets/optimat.webp";
export const Development = () => {
  const projectsData = [
    {
      title: "OPTIMAT Transportation",
      description: "An agentic chatbot to help users with disabilities and special equipment needs navigate public transportation/paratransit system.",
      image: optimat_image,
      technologies: ["Svelte", "TailwindCSS", "Web Development"],
      link: "https://optimat.us/"
    },
    {
      title: "Joyless",
      description: "A solo developed horror game made for UC Berkeley's 1 Day Game Jam",
      image: joyless_image,
      technologies: ["Unity", "C#", "Game Development"],
      link: "https://maikyon.itch.io/joyless"
    },
    {
      title: "Harvest Festival",
      description: "A short and aesthetic RPG game made in Java",
      image: harvest_image,
      technologies: ["Java", "Game Development", "Pixel Art"],
      link: "https://www.youtube.com/watch?v=8uKiM5fHUTA"
    },
    {
      title: "Artpond",
      description: "An artist-focused social media platform made with Svelte.",
      image: ap_image,
      technologies: ["Svelte", "JavaScript", "CSS", "Web Development"],
      link: "https://github.com/maikyonn/greenteastudioswebsite"
    },
    {
      title: "Vainglory 3v3 Draft",
      description: "A Vainglory 3v3 Drafting tool made in React using the Vainglory API",
      image: vg_image,
      technologies: ["React", "API Integration", "JavaScript"],
      link: "https://na-3v3s-tournament-select.vercel.app/"
    },
    {
      title: "cal.moe",
      description: "A website dedicated to Cal Animage Alpha, a club at UC Berkeley",
      image: ad_image,
      technologies: ["Web Development", "JavaScript", "HTML/CSS"],
      link: "https://cal.moe/animedestiny"
    }
  ];
  
  // Assign IDs to projects in a loop
  const projects = projectsData.map((project, index) => ({
    id: index,
    ...project
  }));

  return (
    <div class="development-container">
      <h1 class="development-title">Development Projects</h1>
      <p class="development-subtitle">A collection of my recent work and ongoing projects</p>
      
      <div class="projects-grid">
        {projects.map(project => (
          <div class="project-card" key={project.id}>
            <div class="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div class="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div class="technology-tags">
                {project.technologies.map(tech => (
                  <span class="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" class="project-link">
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 