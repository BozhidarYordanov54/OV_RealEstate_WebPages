const imageContainer = document.querySelector(".listing-background-img");
const floatingInfo = document.querySelector(".listing-floating-info");
const header = document.querySelector(".site-header");
const carousel = document.querySelectorAll(".swiper-slide");
const btnExpand = document.querySelector(".expand-listing-images");

function expandImg() {
  imageContainer.classList.toggle("active");
  if (window.innerWidth > 768) {
    floatingInfo.classList.toggle("active");
  }
  header.classList.toggle("active");
  carousel.forEach((element) => {
    element.classList.toggle("active");
  });

  let expandIcon = document.createElement("i");
  expandIcon.className = "fa-solid fa-expand";

  let compressIcon = document.createElement("i");
  compressIcon.className = "fa-solid fa-compress";

  if (btnExpand.innerHTML.includes("fa-expand")) {
    btnExpand.innerHTML = "";
    btnExpand.appendChild(compressIcon);
  } else {
    btnExpand.innerHTML = "";
    btnExpand.appendChild(expandIcon);
  }

  console.log(btnExpand.innerHTML);
}

btnExpand.addEventListener("click", expandImg);
