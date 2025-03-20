import { onMount, createSignal } from "solid-js";
import Ukiyo from "ukiyojs";
import "./portfolio.css";

// Import all images from the finished_work directory
// Note: You'll need to replace these with your actual image imports
import work0 from "../assets/finished_work/compressed/0.jpg";
import work1 from "../assets/finished_work/compressed/1.jpg";
import work2 from "../assets/finished_work/compressed/2.jpg";
import work3 from "../assets/finished_work/compressed/3.jpg";
import work4 from "../assets/finished_work/compressed/4.jpg";
import work5 from "../assets/finished_work/compressed/5.jpg";
import work6 from "../assets/finished_work/compressed/6.jpg";
import work7 from "../assets/finished_work/compressed/7.jpg";
import work8 from "../assets/finished_work/compressed/8.jpg";
import work9 from "../assets/finished_work/compressed/9.jpg";
import work10 from "../assets/finished_work/compressed/10.jpg";
import work11 from "../assets/finished_work/compressed/11.jpg";
import work12 from "../assets/finished_work/compressed/12.jpg";
import work13 from "../assets/finished_work/compressed/13.jpg";
import work14 from "../assets/finished_work/compressed/14.jpg";
import work15 from "../assets/finished_work/compressed/15.jpg";
import work16 from "../assets/finished_work/compressed/16.jpg";
import work17 from "../assets/finished_work/compressed/17.jpg";
import work18 from "../assets/finished_work/compressed/18.jpg";
import work19 from "../assets/finished_work/compressed/19.jpg";
import work20 from "../assets/finished_work/compressed/20.jpg";
import work21 from "../assets/finished_work/compressed/21.jpg";
import work22 from "../assets/finished_work/compressed/22.jpg";
import work23 from "../assets/finished_work/compressed/23.jpg";

export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = createSignal(null);
  const [isClosing, setIsClosing] = createSignal(false);
  
  // Array of finished work images with priority values
  const finishedWorks = [
    { src: work0, alt: "Finished Work 0", priority: 6 },
    { src: work1, alt: "Finished Work 1", priority: 2 },
    { src: work2, alt: "Finished Work 2", priority: 0 },
    { src: work3, alt: "Finished Work 3", priority: 5 },
    { src: work4, alt: "Finished Work 4", priority: 0 },
    { src: work5, alt: "Finished Work 5", priority: 4 },
    { src: work6, alt: "Finished Work 6", priority: 10 },
    { src: work7, alt: "Finished Work 7", priority: 0 },
    { src: work8, alt: "Finished Work 8", priority: 0 },
    { src: work9, alt: "Finished Work 9", priority: 0 },
    { src: work10, alt: "Finished Work 10", priority: 9 },
    { src: work11, alt: "Finished Work 11", priority: 7 },
    { src: work12, alt: "Finished Work 12", priority: 7 },
    { src: work13, alt: "Finished Work 13", priority: 4 },
    { src: work14, alt: "Finished Work 14", priority: 7 },
    { src: work15, alt: "Finished Work 15", priority: 7},
    { src: work16, alt: "Finished Work 16", priority: 5 },
    { src: work17, alt: "Finished Work 17", priority: 0 },
    { src: work18, alt: "Finished Work 18", priority: 4 },
    { src: work19, alt: "Finished Work 19", priority: 9 },
    { src: work20, alt: "Finished Work 20", priority: 4 },
    { src: work21, alt: "Finished Work 21", priority: 3 },
    { src: work22, alt: "Finished Work 22", priority: 1 },
    { src: work23, alt: "Finished Work 23", priority: 8 },
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
  };

  const closeModal = () => {
    setIsClosing(true);
    // Wait for animation to complete before removing modal
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300);
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

      {/* Image Modal */}
      {selectedImage() && (
        <div class={`modal-overlay ${isClosing() ? 'closing' : ''}`} onClick={closeModal}>
          <div class="modal-content" onClick={(e) => e.stopPropagation()}>
            <button class="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage()} alt="Full size image" />
          </div>
        </div>
      )}
    </>
  );
};
