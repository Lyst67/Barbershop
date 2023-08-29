import "./mobile-menu.js";
import "./modal.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 500,
});

// ---------- Up-Tu-Top ---------
const arrow = document.querySelector(".arrow-up-icon");
arrow.addEventListener("click", handleUpToTop);
function handleUpToTop(e) {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
