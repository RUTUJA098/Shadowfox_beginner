// Toggle menu
function toggleMenu() {
  let nav = document.getElementById("navLinks");
  nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}

// Animate on scroll
const elements = document.querySelectorAll('.fade-in, .slide-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, { threshold: 0.2 });
elements.forEach(el => { el.style.animationPlayState = "paused"; observer.observe(el); });

// Active nav link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Typing effect
// Typing effect
const roles = [
  "AI & Data Science Student",
  "Machine Learning Enthusiast",
  "RedHat Certified Intern",
  "Full-Stack Developer"
];
let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect() {
  current = roles[i];
  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // pause before deleting
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, 120);
}

typeEffect();


// Dark/Light mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  document.getElementById("theme-toggle").textContent = document.body.classList.contains("light-theme") ? "🌞" : "🌙";
});
