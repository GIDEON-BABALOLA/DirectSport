document.addEventListener("DOMContentLoaded", function() {
    const scrollDuration = 1000; // Duration of the scroll animation in milliseconds
    
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
      section.addEventListener('click', function() {
        const targetId = section.getAttribute('id');
        const targetSection = document.getElementById(targetId);
        smoothScrollTo(targetSection.offsetTop, scrollDuration);
      });
    });
    
    function smoothScrollTo(targetPosition, duration) {
      const startPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();
      
      function scrollStep() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        window.scrollTo(0, easeInOutQuad(elapsed, startPosition, distance, duration));
        if (elapsed < duration) {
          requestAnimationFrame(scrollStep);
        }
      }
      
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
      
      requestAnimationFrame(scrollStep);
    }
  });
  