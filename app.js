document.addEventListener('DOMContentLoaded', () => {
  // Vanta background
  VANTA.FOG({
      el: "#bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      highlightColor: 0x6622dd,
      midtoneColor: 0x3311bb,
      lowlightColor: 0x1100aa,
      baseColor: 0x000000,
      blurFactor: 0.60,
      speed: 1.50,
      zoom: 0.50
  });
});

// Helper function to handle section transitions
function switchSection(showSectionId) {
  const sections = ['hero-section', 'pricing-section', 'modules-section', 'api-section'];
  
  // Fade out all visible sections
  sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (!section.classList.contains('hidden')) {
          section.classList.remove('fade-in');
          section.classList.add('fade-out');
          setTimeout(() => {
              section.classList.add('hidden');
              section.classList.remove('fade-out');
          }, 500);
      }
  });

  // Fade in the target section
  setTimeout(() => {
      const targetSection = document.getElementById(showSectionId);
      targetSection.classList.remove('hidden');
      targetSection.classList.add('fade-in');
  }, 500);
}

// Simplified section-specific functions
function showHome() {
  switchSection('hero-section');
}

function showPricing() {
  switchSection('pricing-section');
}

function showModules() {
  switchSection('modules-section');
}

function showAPI() {
  switchSection('api-section');
}

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav-content');
  
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');

  // Prevent body scrolling when menu is open
  document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
}

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
      const mobileNav = document.querySelector('.mobile-nav-content');
      const hamburger = document.querySelector('.hamburger');
      if (mobileNav.classList.contains('active')) {
          mobileNav.classList.remove('active');
          hamburger.classList.remove('active');
          document.body.style.overflow = 'auto';
      }
  });
});

// Add this code to your existing JavaScript file or script tag
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const pricingCards = document.querySelector('.pricing-cards');
const cardWidth = document.querySelector('.card').offsetWidth;

pricingCards.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIV' && event.target.classList.contains('pricing-cards')) {
    pricingCards.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  }
});