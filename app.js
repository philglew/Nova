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
function fadeOutElement(element, time) {
  element.classList.remove('fade-in');
  element.classList.add('fade-out');
  setTimeout(() => {
    element.classList.add('hidden');
    element.classList.remove('fade-out');
  }, time);
}
function fadeInElement(element, time) {
  element.classList.remove('fade-out');
  element.classList.add('fade-in');
  setTimeout(() => {
    element.classList.remove('hidden');
    element.classList.remove('fade-in');
  }, time);
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
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const pricingCards = document.querySelector('.pricing-cards');

const scrollArrowRight = document.querySelector('.scroll-arrow');
const scrollArrowLeft = document.querySelector('.scroll-arrow-left');
const scrollFadeRight = document.querySelector('.fade-right');
const scrollFadeLeft = document.querySelector('.fade-left');

scrollArrowRight.addEventListener('click', () => {
  const singleCardWidth = document.querySelector('.card').offsetWidth + 32;
  pricingCards.scrollBy({
    left: singleCardWidth * 1.2, // or *2 or *3, adjust to your liking
    behavior: 'smooth'
  });
  setTimeout(() => {
    toggleArrows()
  }
    , 500);
});
scrollArrowLeft.addEventListener('click', () => {
  const singleCardWidth = document.querySelector('.card').offsetWidth + 32;
  pricingCards.scrollBy({
    left: -(singleCardWidth * 1.2), // or *2 or *3, adjust to your liking
    behavior: 'smooth'
  });
  setTimeout(() => {
    toggleArrows()
  }
    , 500);
});

pricingCards.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIV' && event.target.classList.contains('pricing-cards')) {
    pricingCards.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  }
});

// Check pricing cards overflow direction
function checkOverflowDirection(element) {
  const isOverflowingLeft = element.scrollLeft > 0;
  const isOverflowingRight = element.scrollWidth > element.clientWidth &&
    element.scrollLeft + element.clientWidth < element.scrollWidth;

  return {
    isOverflowingLeft,
    isOverflowingRight,
    isOverflowingBoth: isOverflowingLeft && isOverflowingRight
  };
}
function toggleArrows() {
  const pricingCardsOverflowStatus = checkOverflowDirection(pricingCards);
  if (pricingCardsOverflowStatus.isOverflowingBoth) {
    scrollArrowRight.classList.remove('hidden');
    fadeInElement(scrollFadeRight, 500);

    scrollArrowLeft.classList.remove('hidden');
    fadeInElement(scrollFadeLeft, 500);
  } else if (pricingCardsOverflowStatus.isOverflowingRight) {
    scrollArrowRight.classList.remove('hidden');
    fadeInElement(scrollFadeRight, 500);

    scrollArrowLeft.classList.add('hidden');
    fadeOutElement(scrollFadeLeft, 500);
  } else {
    scrollArrowRight.classList.add('hidden');
    fadeOutElement(scrollFadeRight, 500);

    scrollArrowLeft.classList.remove('hidden');
    fadeInElement(scrollFadeLeft, 500);
  }
}

//Try it free button
const tryItFreeBtnWrapper = document.querySelector('.try-it-free-btn-wrapper');
const tryItFreeBtn = document.querySelector('.try-it-free-btn');
const radialEffect = document.querySelector('.btn-radial-hover-effect');
tryItFreeBtn.addEventListener("mousemove", (e) => {
  const rect = tryItFreeBtn.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / tryItFreeBtn.clientWidth) * 100;
  // const y = ((e.clientY - rect.top) / tryItFreeBtn.clientHeight) * 100;
  console.log(parseInt(radialEffect.style.left));
  radialEffect.style.left = `${x}%`;

  if (x > 50) {
    if (!tryItFreeBtnWrapper.classList.contains('grad-right')){
      animateGradientDirection(270, 90, 500); // 500ms transition from 270deg to 90deg
      tryItFreeBtnWrapper.classList.remove('grad-left');
      tryItFreeBtnWrapper.classList.add('grad-right');
    }
  } else {
    if (!tryItFreeBtnWrapper.classList.contains('grad-left')) {
      animateGradientDirection(90, 270, 500); // 500ms transition from 90deg to 270deg
      tryItFreeBtnWrapper.classList.remove('grad-right');
      tryItFreeBtnWrapper.classList.add('grad-left');
    }
  }
});

tryItFreeBtn.addEventListener("mouseleave", (event) => {
  radialEffect.style.transition = `left 0.5s ease`;
  setTimeout(() => {
    radialEffect.style.left = `100%`;
    //reset gradient border
    if (!tryItFreeBtnWrapper.classList.contains('grad-right')) {
      animateGradientDirection(270, 90, 500); // 500ms transition from 270deg to 90deg
      tryItFreeBtnWrapper.classList.remove('grad-left');
      tryItFreeBtnWrapper.classList.add('grad-right');
    }
  }, 500);
  setTimeout(() => {
    radialEffect.style.transition = `none`;
  }, 1000);
  
});


// Variable to track if an animation is in progress
let isAnimating = false;

// Function to animate the background gradient direction
function animateGradientDirection(fromAngle, toAngle, duration) {
  if (isAnimating) return; // Prevent restarting the animation if it's already in progress
  isAnimating = true; // Mark animation as in progress
  const startTime = performance.now();
  const startAngle = fromAngle; // Starting angle
  const endAngle = toAngle; // Ending angle
  const transitionDuration = duration; // in milliseconds

  function updateGradient() {
    const currentTime = performance.now();
    const timeElapsed = currentTime - startTime;
    // Calculate the percentage of the transition (from 0 to 1)
    const progress = Math.min(timeElapsed / transitionDuration, 1);
    // Interpolate between the two angles
    const angle = startAngle + (endAngle - startAngle) * progress;
    // Set the new gradient background image
    tryItFreeBtnWrapper.style.backgroundImage = `linear-gradient(${angle}deg, rgba(255, 255, 255, 0) 50%, #ff7950 100%)`;
    if (progress < 1) {
      requestAnimationFrame(updateGradient); // Continue the animation
    } else {
      isAnimating = false; // Mark animation as finished
    }
  }
  // Start the gradient animation
  updateGradient();
}