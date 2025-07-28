function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  const main = document.getElementById("mainContent");
  const header = document.querySelector("header");

  drawer.classList.toggle("open");
  main.classList.toggle("shift");
  header.classList.toggle("shift");
}

// === SLIDER === //
let currentImage = 1;
const slider = document.getElementById("slider");
const sliderLink = document.getElementById("sliderLink");

const sliderPages = [
  "ürünler1.html",
  "ürünler2.html",
  "ürünler1.html",
  "ürünler2.html",
  "ürünler1.html",
  "ürünler2.html"
];

setInterval(() => {
  currentImage++;
  if (currentImage > 6) currentImage = 1;

  slider.src = `images/slider/${currentImage}.png`;
  sliderLink.href = sliderPages[currentImage - 1];
}, 3000);

// === THUMBNAILS === //
document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
  const folder = thumb.getAttribute("data-folder");
  let imgIndex = 1;

  thumb.style.backgroundImage = `url('${folder}/1.png')`;

  setInterval(() => {
    imgIndex++;
    if (imgIndex > 6) imgIndex = 1;
    thumb.style.backgroundImage = `url('${folder}/${imgIndex}.png')`;
  }, 2500 + index * 100);
});
