function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Scroll Animations
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  function handleScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      if (isElementInViewport(section)) {
        section.classList.add('appear');
      } else {
        section.classList.remove('appear');
      }
    });
  }
  
  // Initial check on load
  window.addEventListener('load', handleScrollAnimations);
  
  // Check on scroll
  window.addEventListener('scroll', handleScrollAnimations);