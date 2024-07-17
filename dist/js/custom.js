window.addEventListener("scroll", function () {
    var header = document.querySelector(".header"); // Use querySelector instead of getElementById
    if (window.scrollY > 50) {
      header.classList.add("fixed");
      header.style.opacity = "1";
    } else {
      header.classList.remove("fixed");
      header.style.opacity = "1";
    }
  });
  

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Designing web", "Front-End Development", "Back-End Development"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = textArray[0].length; // Start at the end of the first text

// Initially display the first text
typedTextSpan.textContent = textArray[0];

// Initially hide the cursor
cursorSpan.style.display = "none";

function type() {
  cursorSpan.style.display = "inline-block"; // Ensure cursor is visible when typing starts
  if (charIndex < textArray[textArrayIndex].length) {
    cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(() => {
      cursorSpan.style.display = "none"; // Hide cursor when typing completes
      setTimeout(erase, newTextDelay);
    }, 500); // Add a short delay before hiding the cursor
  }
}

function erase() {
  cursorSpan.style.display = "inline-block"; // Ensure cursor is visible when erasing starts
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
  // Start erasing after the initial text is shown
  setTimeout(() => setTimeout(erase, newTextDelay), newTextDelay);
});

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.about-link');
  const contents = document.querySelectorAll('.content');

  links.forEach(link => {
      link.addEventListener('click', function() {
          // Remove active class from all links
          links.forEach(link => link.classList.remove('active'));
          // Add active class to the clicked link
          this.classList.add('active');

          // Hide all content divs
          contents.forEach(content => content.classList.remove('active'));

          // Show the content div that corresponds to the clicked link
          const target = this.getAttribute('data-target');
          document.querySelector(`.${target}`).classList.add('active');
      });
  });
});



