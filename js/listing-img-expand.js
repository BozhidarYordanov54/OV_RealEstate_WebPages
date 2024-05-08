const imageContainer = document.querySelector(".listing-background-img");
const floatingInfo = document.querySelector(".listing-floating-info");
const compressImg = document.querySelector(".compress-listing-images");
const header = document.querySelector(".site-header");

function expandImg() {
  imageContainer.classList.toggle("active");
  floatingInfo.classList.toggle("active");
  header.classList.toggle("active");
  compressImg.style.display =
    window.getComputedStyle(compressImg).display === "none" ? "block" : "none";
}
const btnExpand = document.querySelector(".expand-listing-images");
const btnCompress = document.querySelector(".compress-listing-images");
btnExpand.addEventListener("click", expandImg);
btnCompress.addEventListener("click", expandImg);
