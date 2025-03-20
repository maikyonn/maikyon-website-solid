import { FaBrandsGithub, FaBrandsLinkedin, FaBrandsTwitter } from 'solid-icons/fa';
import "./about.css";

export const About = () => {
  return (
    <div class="about-container">
      <div class="about-grid">
        <div class="profile-image">
          {/* Replace the src with your actual profile picture */}
          <img src="https://via.placeholder.com/400" alt="Profile picture" />
        </div>
        
        <div class="about-content">
          <h1>Your Name</h1>
          <div class="bio">
            <p>
              Hello! I'm a passionate developer with expertise in web development
              and creative design. I love building beautiful, functional websites
              and applications that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>

          <div class="skills-section">
            <h2>Skills</h2>
            <div class="skills-grid">
              <span class="skill-item">JavaScript</span>
              <span class="skill-item">React</span>
              <span class="skill-item">Node.js</span>
              <span class="skill-item">Python</span>
              <span class="skill-item">UI/UX Design</span>
              <span class="skill-item">SolidJS</span>
            </div>
          </div>

        <div class="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaBrandsGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaBrandsLinkedin size={24} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaBrandsTwitter size={24} />
          </a>
          <a href="mailto:your.email@example.com">
            <FaBrandsTwitter size={24} />
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}; 