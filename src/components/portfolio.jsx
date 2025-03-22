import { onMount, createSignal, createEffect } from "solid-js";
import { Portal } from "solid-js/web";
import Ukiyo from "ukiyojs";
import "./portfolio.css";

// Import all images from the finished_work directory
// Note: You'll need to replace these with your actual image imports
import work0 from "../assets/finished_work/compressed1080p/0.webp";
import work1 from "../assets/finished_work/compressed1080p/1.webp";
import work2 from "../assets/finished_work/compressed1080p/2.webp";
import work3 from "../assets/finished_work/compressed1080p/3.webp";
import work4 from "../assets/finished_work/compressed1080p/4.webp";
import work5 from "../assets/finished_work/compressed1080p/5.webp";
import work6 from "../assets/finished_work/compressed1080p/6.webp";
import work7 from "../assets/finished_work/compressed1080p/7.webp";
import work8 from "../assets/finished_work/compressed1080p/8.webp";
import work9 from "../assets/finished_work/compressed1080p/9.webp";
import work10 from "../assets/finished_work/compressed1080p/10.webp";
import work11 from "../assets/finished_work/compressed1080p/11.webp";
import work12 from "../assets/finished_work/compressed1080p/12.webp";
import work13 from "../assets/finished_work/compressed1080p/13.webp";
import work14 from "../assets/finished_work/compressed1080p/14.webp";
import work15 from "../assets/finished_work/compressed1080p/15.webp";
import work16 from "../assets/finished_work/compressed1080p/16.webp";
import work17 from "../assets/finished_work/compressed1080p/17.webp";
import work18 from "../assets/finished_work/compressed1080p/18.webp";
import work19 from "../assets/finished_work/compressed1080p/19.webp";
import work20 from "../assets/finished_work/compressed1080p/20.webp";
import work21 from "../assets/finished_work/compressed1080p/21.webp";
import work22 from "../assets/finished_work/compressed1080p/22.webp";
import work23 from "../assets/finished_work/compressed1080p/23.webp";
import work24 from "../assets/finished_work/compressed1080p/24.webp";

export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = createSignal(null);
  const [isClosing, setIsClosing] = createSignal(false);
  const [bioExpanded, setBioExpanded] = createSignal(false);
  
  // Array of finished work images with priority values
  const finishedWorks = [
    { src: work0, alt: "Finished Work 0", priority: 6 },
    { src: work1, alt: "Finished Work 1", priority: 2 },
    { src: work2, alt: "Finished Work 2", priority: 0 },
    { src: work3, alt: "Finished Work 3", priority: 5 },
    { src: work4, alt: "Finished Work 4", priority: 0 },
    { src: work5, alt: "Finished Work 5", priority: 4 },
    { src: work6, alt: "Finished Work 6", priority: 10 },
    { src: work7, alt: "Finished Work 7", priority: 5 },
    { src: work8, alt: "Finished Work 8", priority: 0 },
    { src: work9, alt: "Finished Work 9", priority: 0 },
    { src: work10, alt: "Finished Work 10", priority: 6 },
    { src: work11, alt: "Finished Work 11", priority: 7 },
    { src: work12, alt: "Finished Work 12", priority: 7 },
    { src: work13, alt: "Finished Work 13", priority: 4 },
    { src: work14, alt: "Finished Work 14", priority: 7 },
    { src: work15, alt: "Finished Work 15", priority: 7},
    { src: work16, alt: "Finished Work 16", priority: 5 },
    { src: work17, alt: "Finished Work 17", priority: 0 },
    { src: work18, alt: "Finished Work 18", priority: 4 },
    { src: work19, alt: "Finished Work 19", priority: 10 },
    { src: work20, alt: "Finished Work 20", priority: 4 },
    { src: work21, alt: "Finished Work 21", priority: 3 },
    { src: work22, alt: "Finished Work 22", priority: 2 },
    { src: work23, alt: "Finished Work 23", priority: 8 },
    { src: work24, alt: "Finished Work 24", priority: 9 },
  ];

  // Filter out works with priority 0, then sort the remaining by priority (highest first)
  const sortedWorks = finishedWorks
    .filter(work => work.priority > 0)
    .sort((a, b) => b.priority - a.priority);

  onMount(() => {
    // Initialize Ukiyo
    const parallax = new Ukiyo('.ukiyo', {
      scale: 1.5,
      speed: 1.5,
      willChange: true,
    });

    // Initialize Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '50px' // Start animation slightly before element comes into view
      }
    );

    // Observe all sections except the hero
    document.querySelectorAll('.portfolio-section:not(.hero)').forEach(section => {
      section.classList.add('fade-in');
      observer.observe(section);
    });
  });

  const handleImageClick = (src) => {
    setIsClosing(false);
    setSelectedImage(src);
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsClosing(true);
    // Re-enable scrolling
    document.body.style.overflow = '';
    
    // Wait for animation to complete before removing modal
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300);
  };

  const toggleBio = () => {
    setBioExpanded(!bioExpanded());
  };

  return (
    <>
      <div class="portfolio-container">
        {/* Hero image */}
        {/* <section class="portfolio-section hero">
          <h2>Welcome to My Portfolio</h2>
          <img
            class="ukiyo"
            src={maplemai}
            alt="Portfolio hero image"
            onClick={() => handleImageClick(maplemai)}
            data-u-scale="1.2"
            data-u-speed="0.8"
          />
        </section>
         */}
        {/* Finished Work Grid */}
        <section class="portfolio-section finished-works">
          {/* <h2>Finished Work</h2> */}
          <Portal mount={document.querySelector('.home-section')}>
            <div class={`bio-button-container ${bioExpanded() ? 'bio-expanded' : ''}`}>
              <button 
                class="bio-toggle-button" 
                onClick={toggleBio}
                aria-expanded={bioExpanded()}
                aria-controls="bio-content"
              >
                <span class="bio-button-text">
                  {bioExpanded() ? 'Hide Bio' : 'About the Artist'}
                </span>
                <span class="bio-button-icon">{bioExpanded() ? '−' : '+'}</span>
              </button>
              
              <div id="bio-content" class="bio-container" aria-hidden={!bioExpanded()}>
                <div class="bio-profile-image">
                  <img src={work9} alt="Profile" />
                  <div class="mt-4 profile-info flex flex-col items-center">
                    <h3 class="font-bold text-center">maple_bgs</h3>
                    <a href="https://www.instagram.com/maple_bgs" target="_blank" rel="noopener noreferrer" class="instagram-link text-center">
                      @maple_bgs
                    </a>
                  </div>
                </div>
                <div class="bio-content">
                  <div class="bio-text">
                    I started drawing when the COVID lockdown started, and I studied art for 3 years till my first year of college.
                    During that time, I've been mentored by many professional artists, most notably Kat Tsai (Across The Spiderverse), Khang Le (Promare), and Sinix Design. 
                    I've done commission art for Seycara Orchestral, various game projects, and more. 
                  </div>
                  <div class="bio-text">
                    My art represents the ideal, harmony, and feelings of the world. My painting style is inspired by western vis-dev animation style, as taught to me by my mentors,
                    with a focus on eastern color approaches and anime aesthetics.
                  </div>
                </div>
              </div>
            </div>
          </Portal>

          <div class="finished-works-grid">
            {/* Left Column */}
            <div class="column">
              {sortedWorks.filter((_, i) => i % 2 === 0).map((work, index) => (
                <div class="work-item" key={index}>
                  <img 
                    src={work.src} 
                    alt={work.alt} 
                    onClick={() => handleImageClick(work.src)}
                  />
                </div>
              ))}
            </div>
            
            {/* Right Column */}
            <div class="column">
              {sortedWorks.filter((_, i) => i % 2 === 1).map((work, index) => (
                <div class="work-item" key={index}>
                  <img 
                    src={work.src} 
                    alt={work.alt} 
                    onClick={() => handleImageClick(work.src)}
                  />
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>

      {/* Image Modal - Using Portal to render at document body level */}
      {selectedImage() && (
        <Portal mount={document.body}>
          <div class={`modal-overlay ${isClosing() ? 'closing' : ''}`} onClick={closeModal}>
            <div class="modal-content" onClick={(e) => e.stopPropagation()}>
              <button class="modal-close" onClick={closeModal}>×</button>
              <img src={selectedImage()} alt="Full size image" />
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
