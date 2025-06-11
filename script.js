const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", "light");
    toggleBtn.textContent = "🌙 Switch to Dark Mode";
  } else {
    document.body.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️ Switch to Light Mode";
  }
});

function toggleDropdown() {
  const arrow = document.querySelector(".arrow");
  const menu = document.querySelector(".dropdown-menu");
  arrow.classList.toggle("rotate");
  menu.classList.toggle("show");
}

const wrapper = document.querySelector(".glow-wrapper");
const image = document.querySelector(".glow-image");
const glow = wrapper;

wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (y - centerY) / 25;
  const rotateY = (x - centerX) / 25;

  image.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

  // Move gradient glow with cursor
  const percentX = (x / rect.width) * 100;
  const percentY = (y / rect.height) * 100;
  glow.style.setProperty("--mouse-x", `${percentX}%`);
  glow.style.setProperty("--mouse-y", `${percentY}%`);
  glow.style.setProperty("--bg-pos", `${percentX}% ${percentY}%`);
  glow.style.setProperty("background-position", `${percentX}% ${percentY}%`);
  glow.style.setProperty("--shadow-x", `${rotateY}px`);
  glow.style.setProperty("--shadow-y", `${rotateX}px`);
});

wrapper.addEventListener("mouseleave", () => {
  image.style.transform = `rotateX(0) rotateY(0)`;
});

const rocket = document.getElementById("rocket");
const trail = document.getElementById("trail");
const button = document.getElementById("target-btn");

rocket.addEventListener("click", () => {
  rocket.classList.add("fly");
  trail.style.opacity = 1;

  rocket.addEventListener(
    "animationend",
    () => {
      trail.style.opacity = 0;
      button.click();
    },
    { once: true }
  );
});

button.addEventListener("click", () => {});

const box1 = document.querySelector(".courses-box1");

box1.addEventListener("mousemove", (e) => {
  const rect = box1.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const deltaX = (x - centerX) / 10; // Adjust sensitivity
  const deltaY = (y - centerY) / 10;

  box1.style.transform = `rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
});

box1.addEventListener("mouseleave", () => {
  box1.style.transform = "rotateX(0deg) rotateY(0deg)";
});

const box2 = document.querySelector(".courses-box2");

box2.addEventListener("mousemove", (e) => {
  const rect = box2.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const deltaX = (x - centerX) / 10; // Adjust sensitivity
  const deltaY = (y - centerY) / 10;

  box2.style.transform = `rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
});

box2.addEventListener("mouseleave", () => {
  box2.style.transform = "rotateX(0deg) rotateY(0deg)";
});

const box3 = document.querySelector(".courses-box3");

box3.addEventListener("mousemove", (e) => {
  const rect = box3.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const deltaX = (x - centerX) / 10; // Adjust sensitivity
  const deltaY = (y - centerY) / 10;

  box3.style.transform = `rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
});

box3.addEventListener("mouseleave", () => {
  box3.style.transform = "rotateX(0deg) rotateY(0deg)";
});
