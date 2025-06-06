document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".typing-effect");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.dataset.text || "";
        const speed = parseInt(el.dataset.speed) || 100;
        let index = 0;

        function type() {
          if (index <= text.length) {
            el.textContent = text.substring(0, index);
            index++;
            if (index <= text.length) {
              setTimeout(type, speed);
            }
          }
        }

        type();
        observer.unobserve(el); 
      }
    });
  }, {
    threshold: 0.7, 
  });

  elements.forEach(el => {
    observer.observe(el);
  });
});
