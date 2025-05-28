// fade.js
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // ป้องกันการดูซ้ำ
      }
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(fader => {
    observer.observe(fader);
  });
});

