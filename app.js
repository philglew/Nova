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
  
  function showPricing() {
    const hero = document.getElementById('hero-section');
    const pricing = document.getElementById('pricing-section');
  
    // Fade out hero
    hero.classList.remove('fade-in');
    hero.classList.add('fade-out');
    
    // Once fade-out is done, hide hero & show pricing
    setTimeout(() => {
      hero.classList.add('hidden');
      hero.classList.remove('fade-out');
  
      // Show pricing
      pricing.classList.remove('hidden');
      pricing.classList.add('fade-in');
    }, 500);
  }
  
  function showHome() {
    const hero = document.getElementById('hero-section');
    const pricing = document.getElementById('pricing-section');
  
    // Fade out pricing
    pricing.classList.remove('fade-in');
    pricing.classList.add('fade-out');
  
    setTimeout(() => {
      pricing.classList.add('hidden');
      pricing.classList.remove('fade-out');
  
      // Show hero
      hero.classList.remove('hidden');
      hero.classList.add('fade-in');
    }, 500);
  }
  