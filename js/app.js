document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Typed.js Initialization
  if (document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
      strings: ['MERN Stack Developer', 'DSA Enthusiast', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      cursorChar: '|',
    });
  }

  // 3. Scroll Reveal Animation via IntersectionObserver
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("show");
        // observer.unobserve(entry.target); // Uncomment to animate only once
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
