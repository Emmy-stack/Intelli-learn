// IMG SLIDER
let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function moveSlide(step) {
  index += step;
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(() => moveSlide(1), 3000); // Auto slide every 3s

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
