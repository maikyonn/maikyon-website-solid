import { createSignal, onMount, createEffect } from "solid-js";
import "./app.css";
import Ukiyo from "ukiyojs";
import maplemai from "./assets/maplemai.webp";

import { Centerpiece } from "./components/centerpiece";
import { Icons } from "./components/icons";
import { Projects } from "./components/projects";
import { Prompt } from "./components/prompt";
import { Portfolio } from "./components/portfolio";
import { About } from "./components/About";
import { Development } from "./components/Development";

export default function App() {
  // Initialize active section based on URL path
  const initialSection = () => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('/portfolio')) return 'portfolio';
    if (path.includes('/about')) return 'about';
    return 'development';
  };

  const [activeSection, setActiveSection] = createSignal(initialSection());
  let parallaxBg = null;

  // Update URL when section changes
  const updateUrlForSection = (section) => {
    const newPath = section === 'development' ? '/' : `/${section}`;
    
    // Use history API to update URL without refreshing page
    window.history.pushState(
      { section },
      section,
      newPath
    );
  };

  // Listen for browser back/forward buttons
  onMount(() => {
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.section) {
        setActiveSection(event.state.section);
      } else {
        // If no state (e.g., initial load), determine from URL
        setActiveSection(initialSection());
      }
    });
  });

  // Initialize or destroy Ukiyo based on active section
  createEffect(() => {
    const homeSection = document.querySelector('.home-section');
    const backgroundWrapper = document.querySelector('.background-wrapper');
    const developmentBg = document.querySelector('.development-background');
    
    if (activeSection() === 'portfolio') {
      // Show portfolio background with fade effect
      backgroundWrapper.style.display = 'block';
      homeSection.classList.add('portfolio-active');
      
      // Start transition after a tiny delay to ensure display:block takes effect
      setTimeout(() => {
        backgroundWrapper.classList.add('visible');
        developmentBg.classList.remove('visible');
      }, 10);
      
      // Initialize parallax
      setTimeout(() => {
        if (!parallaxBg) {
          parallaxBg = new Ukiyo('.background-parallax', {
            scale: 1.2,
            speed: 1.5,
            willChange: true,
          });
        }
      }, 50);
      
    } else if (activeSection() === 'development') {
      // Show white background for development
      developmentBg.style.display = 'block';
      setTimeout(() => {
        developmentBg.classList.add('visible');
      }, 10);
      
      // Hide portfolio background with fade out
      backgroundWrapper.classList.remove('visible');
      homeSection.classList.remove('portfolio-active');
      
      // Hide after transition completes
      setTimeout(() => {
        backgroundWrapper.style.display = 'none';
      }, 600); // Match transition duration
      
      // Clean up Ukiyo
      if (parallaxBg) {
        parallaxBg.destroy();
        parallaxBg = null;
      }
      
    } else {
      // For about section, hide both backgrounds
      backgroundWrapper.classList.remove('visible');
      developmentBg.classList.remove('visible');
      homeSection.classList.remove('portfolio-active');
      
      // Hide after transition completes
      setTimeout(() => {
        backgroundWrapper.style.display = 'none';
        // Don't hide development background - let it fade out
      }, 600);
      
      // Clean up Ukiyo
      if (parallaxBg) {
        parallaxBg.destroy();
        parallaxBg = null;
      }
    }
  });

  const handleNavClick = (section) => {
    setActiveSection(section);
    updateUrlForSection(section);
    
    // if (section) {
    //   // Wait for the section to render and then scroll
    //   setTimeout(() => {
    //     const element = document.querySelector('.additional-section');
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     }
    //   }, 200);
    // } else {
    //   // Scroll to top when clicking development
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }
  };

  return (
    <div class="app-container">
      <div class="main-content">
        {/* White background for development section */}
        <div class="development-background"></div>
        
        {/* Parallax Background - Initially hidden */}
        <div class="background-wrapper">
          <img 
            src={maplemai} 
            alt="Background" 
            class="background-parallax"
            data-u-speed="0.5"
          />
          <div class="background-overlay"></div>
        </div>

        {/* Home content */}
        <div class="home-section">
          <Prompt />
          <Centerpiece class="centerpiece" />
          <Icons />
          <nav class="subtle-nav">
            <span 
              class={`nav-link ${activeSection() === 'development' ? 'active' : ''}`}
              onClick={() => handleNavClick('development')}
            >
              development
            </span>
            <span class="nav-separator">/</span>
            <span 
              class={`nav-link ${activeSection() === 'portfolio' ? 'active' : ''}`}
              onClick={() => handleNavClick('portfolio')}
            >
              portfolio
            </span>
            {/* <span class="nav-separator">/</span>
            <span 
              class={`nav-link ${activeSection() === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              about
            </span> */}
          </nav>
        </div>
        
        {/* Additional sections */}
        {activeSection() && (
          <div class="additional-section">
            {activeSection() === 'portfolio' && <Portfolio />}
            {activeSection() === 'about' && <About />}
            {activeSection() === 'development' && <Development />}
          </div>
        )}
      </div>
    </div>
  );
}
