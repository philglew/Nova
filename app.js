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