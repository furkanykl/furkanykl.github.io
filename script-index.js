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

if (slider && sliderLink) {
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
}

// === THUMBNAILS === //
// Artık döngü yok — sabit resimler atanıyor
const thumbnails = document.querySelectorAll(".thumbnail");
const kutuResimleri = [
  "images/kutular/1.png",
  "images/kutular/2.png",
  "images/kutular/3.png"
];

thumbnails.forEach((thumb, index) => {
  if (kutuResimleri[index]) {
    thumb.style.backgroundImage = `url('${kutuResimleri[index]}')`;
    thumb.style.backgroundSize = "contain"; // resim tam görünsün
    thumb.style.backgroundRepeat = "no-repeat";
    thumb.style.backgroundPosition = "center";
  }
});
