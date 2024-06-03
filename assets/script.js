const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentSlide = 0;

const banner = document.getElementById("banner");
const dotsContainer = document.querySelector(".dots");
const arrowPrevious = document.querySelector(".arrow_left");
const arrowNext = document.querySelector(".arrow_right");
const image = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tagline");

function createDots() {
  slides.forEach((slide, index) => {
    const dotElement = document.createElement("div");
    dotElement.classList.add("dot");
    if (index == currentSlide) {
      dotElement.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dotElement);
  });
}
createDots();

function updateDots() {
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("dot_selected", index === currentSlide);
  });
}

function updateSlide() {
  image.src = "./assets/images/slideshow/" + slides[currentSlide].image;
  tagLine.innerHTML = slides[currentSlide].tagLine;
}

arrowNext.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
  updateDots();
});

arrowPrevious.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
  updateDots();
});
