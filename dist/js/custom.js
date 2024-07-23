


window.addEventListener("scroll", function () {
  var header = document.querySelector(".header"); 
  if (window.scrollY > 50) {
      header.classList.add("fixed");
      header.style.opacity = "1";
  } else {
      header.classList.remove("fixed");
      header.style.opacity = "1";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const offcanvasLinks = document.querySelectorAll(".offcanvas-link");
  const offcanvas = document.getElementById("offCanvas");
  const bootstrapOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvas);

  offcanvasLinks.forEach((link) => {
      link.addEventListener("click", function () {
          bootstrapOffcanvas.hide();
      });
  });
});

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Designing web", "Front-End Development", "Back-End Development"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 500; 
let textArrayIndex = 0;
let charIndex = textArray[0].length;

typedTextSpan.textContent = textArray[0];

cursorSpan.style.display = "none";

function type() {
  cursorSpan.style.display = "inline-block";
  if (charIndex < textArray[textArrayIndex].length) {
      cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
  } else {
      cursorSpan.classList.remove("typing");
      setTimeout(() => {
          cursorSpan.style.display = "none";
          setTimeout(erase, newTextDelay);
      }, 500); 
  }
}

function erase() {
  cursorSpan.style.display = "inline-block"; 
  if (charIndex > 0) {
      cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
  } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex = (textArrayIndex + 1) % textArray.length;
      charIndex = 0;
      setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => setTimeout(erase, newTextDelay), newTextDelay);
});

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".about-link");
  const contents = document.querySelectorAll(".content");

  links.forEach((link) => {
      link.addEventListener("click", function () {
          links.forEach((link) => link.classList.remove("active"));
          this.classList.add("active");

          contents.forEach((content) => content.classList.remove("active"));

          const target = this.getAttribute("data-target");
          document.querySelector(`.${target}`).classList.add("active");
      });
  });
});

function updateActiveLink(sectionId) {
  document.querySelectorAll("#main-nav a").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === sectionId);
  });
}

document.querySelectorAll("#main-nav a, .hire-btn").forEach((link) => {
  link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href");
      document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
      updateActiveLink(sectionId);
  });
});

function updateActiveSection() {
  const sections = document.querySelectorAll("section");
  let currentSection = "#home";

  sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.offsetHeight) {
          currentSection = `#${section.id}`;
      }
  });

  updateActiveLink(currentSection);
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  updateActiveSection();
});

window.addEventListener("scroll", () => {
  updateActiveSection();
});


jQuery(document).ready(function () {
  jQuery(".progress-bar-skill").each(function () {
      jQuery(this)
          .find(".progress-content")
          .animate(
              {
                  width: jQuery(this).attr("data-percentage"),
              },
              2000
          );

      jQuery(this)
          .find(".progress-number-mark")
          .animate(
              { left: jQuery(this).attr("data-percentage") },
              {
                  duration: 2000,
                  step: function (now, fx) {
                      var data = Math.round(now);
                      jQuery(this)
                          .find(".percent")
                          .html(data + "%");
                  },
              }
          );
  });
});


// Function to initialize Slick Slider
function initializeSlickSlider() {
  $('.testi-slider').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '.prev-btn',
      nextArrow: '.next-btn',
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false // Fixed typo 'flase' to 'false'
              }
          },
      ]
  });
}

// Handle the loading animation and initialize the slider
function handleLoadingAnimation() {
  $(".loader").fadeOut(2000, function() {
      $(".main-container").fadeIn(1000, function() {
          initializeSlickSlider();
      });
  });
}

// Call the function to handle loading animation
$(document).ready(function() {
  handleLoadingAnimation();
});

