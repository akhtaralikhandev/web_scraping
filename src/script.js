const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navLinksLi = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  // Toggle Nav
  navLinks.classList.toggle("nav-active");

  // Animate Links
  navLinksLi.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `fade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  // Burger Animation
  burger.classList.toggle("toggle");
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navLinks.classList.remove("nav-active");
  }
});

const scrollButton = document.getElementById("scrollButton");

scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});
// document.addEventListener("DOMContentLoaded", function () {
//   const textContainer = document.getElementById("animated-text");
//   const text = textContainer.innerText;
//   let animatedText = "";

//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === " ") {
//       animatedText += " ";
//     } else {
//       animatedText += `<span class="animate-letter">${text[i]}</span>`;
//     }
//   }

//   textContainer.innerHTML = animatedText;
// });

// // Get all the slides
// const slides = document.querySelectorAll(".slide");

// let currentIndex = 0;
// const slideInterval = setInterval(showNextSlide, 2000); // Change slide every 2 seconds

// function showNextSlide() {
//   // Hide current slide
//   slides[currentIndex].style.opacity = 0;

//   // Increment the index
//   currentIndex = (currentIndex + 1) % slides.length;

//   // Show next slide
//   slides[currentIndex].style.opacity = 1;
// }

// animation javascript
// Select the slide container
