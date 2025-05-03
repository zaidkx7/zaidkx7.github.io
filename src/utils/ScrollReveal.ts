
export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealElementOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const element = revealElements[i];
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    }
  };

  window.addEventListener('scroll', revealElementOnScroll);
  // Trigger on initial load
  revealElementOnScroll();
}
