const imageContainer = document.querySelector(".listing-background-img");
const floatingInfo = document.querySelector(".listing-floating-info");
const header = document.querySelector(".site-header");
const carousel = document.querySelectorAll(".swiper-slide");
const btnExpand = document.querySelector(".expand-listing-images");
const btnExpandText = document.querySelector(".expand-listing-images > span");
const btnCompress = document.querySelector(".compress-listing-images");

function expandImg() {
  imageContainer.classList.toggle("active");
  if (window.innerWidth > 768) {
    floatingInfo.classList.toggle("active");
  }
  header.classList.toggle("active");
  carousel.forEach((element) => {
    element.classList.toggle("active");
  });
  btnExpand.style.display =
    window.getComputedStyle(btnExpand).display === "none" ? "flex" : "none";
  btnCompress.style.display =
    window.getComputedStyle(btnCompress).display === "none" ? "block" : "none";
  console.log("Executed");
}
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    btnExpand.classList.add("shrink");
  } else if (window.innerWidth >= 768) {
    btnExpand.classList.remove("shrink");
  }
});
btnExpand.addEventListener("click", expandImg);
btnCompress.addEventListener("click", expandImg);
