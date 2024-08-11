


const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Image Slider for Category
const images = [
  ["ele.png", "lep.png", "pan.png"],
  ["cro.png", "sah.png", "roj.png"],
  ["kong.png", "jira.png", "fox.png"],
];
const imageElements = document.querySelectorAll(".image-row img");

let currentImageIndex = 0;

setInterval(() => {
  imageElements[0].classList.add("fade-out");
  imageElements[1].classList.add("fade-out");
  imageElements[2].classList.add("fade-out");

  setTimeout(() => {
    imageElements[0].src = images[0][currentImageIndex];
    imageElements[1].src = images[1][currentImageIndex];
    imageElements[2].src = images[2][currentImageIndex];

    imageElements[0].classList.remove("fade-out");
    imageElements[1].classList.remove("fade-out");
    imageElements[2].classList.remove("fade-out");
  }, 500);

  currentImageIndex = (currentImageIndex + 1) % images[0].length;
}, 3000);
