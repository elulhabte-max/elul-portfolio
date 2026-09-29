// Dark / Light Mode
const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeButton.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Typing Animation
const typingText = document.getElementById("typingText");
const careers = ["Future Tech Professional", "Cybersecurity Enthusiast", "IT Support Professional", "Future Project Manager"];
let careerIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeAnimation() {
  const currentCareer = careers[careerIndex];

  if (!deleting) {
    typingText.textContent = currentCareer.substring(0, letterIndex + 1);
    letterIndex++;
    if (letterIndex === currentCareer.length) {
      deleting = true;
      setTimeout(typeAnimation, 1500);
      return;
    }
  } else {
    typingText.textContent = currentCareer.substring(0, letterIndex - 1);
    letterIndex--;
    if (letterIndex === 0) {
      deleting = false;
      careerIndex = (careerIndex + 1) % careers.length;
    }
  }

  setTimeout(typeAnimation, deleting ? 50 : 100);
}
typeAnimation();

// Project Image Popup
const projectImages = document.querySelectorAll(".project-image");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

projectImages.forEach(image => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = image.src;
    modalImage.alt = image.alt;
  });
});

closeModal.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", event => {
  if (event.target === modal) modal.style.display = "none";
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") modal.style.display = "none";
});

// Back To Top Button
const topButton = document.getElementById("topButton");
window.addEventListener("scroll", () => {
  topButton.style.display = window.scrollY > 500 ? "block" : "none";
});
topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

console.log("Welcome to Elul Tekeste's Portfolio!");
