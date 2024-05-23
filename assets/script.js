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
const arrowPrevious = document.getElementById("arrowPrevious");
const arrowNext = document.getElementById("arrowNext");
const dotsContainer = document.querySelector(".dots");

slides.forEach((slide, index) => {
  const dotElement = document.createElement("div");
  dotElement.classList.add("dot");
  if (index == currentSlide) {
    dotElement.classList.add("dot_selected");
  }
  dotsContainer.appendChild(dotElement);
});
