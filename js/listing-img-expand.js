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
  window.scrollTo({ top: 0, behavior: 'smooth' });

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
}

window.onscroll = function () {
  if (imageContainer.classList.contains("active")) {
    imageContainer.classList.remove("active");
  }
  if (window.innerWidth > 768 && floatingInfo.classList.contains("active")) {
    floatingInfo.classList.remove("active");
  }
  if (header.classList.contains("active")) {
    header.classList.remove("active");
  }
  carousel.forEach((element) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  });

  let expandIcon = document.createElement("i");
  expandIcon.className = "fa-solid fa-expand";

  if (!btnExpand.innerHTML.includes("fa-expand")) {
    btnExpand.innerHTML = "";
    btnExpand.appendChild(expandIcon);
  }
};

btnExpand.addEventListener("click", expandImg);

// Wait for the page to load
window.onload = function () {
  var images = document.querySelectorAll(".swiper-slide img");
  var colorThief = new ColorThief();

  images.forEach(function (img) {
    if (img.complete) {
      extractColor(img);
    } else {
      img.onload = function () {
        extractColor(img);
      };
    }
  });

  function extractColor(img) {
    var palette = colorThief.getPalette(img, 2); // Get the 2 most dominant colors
    var color1 = palette[0]; // Most dominant color
    var color2 = palette[1]; // Second most dominant color

    var orientation = color1[0] > color2[0] ? "to right" : "to bottom";

    img.parentElement.style.background =
      "linear-gradient(" +
      orientation +
      ", rgba(" +
      color1[0] +
      "," +
      color1[1] +
      "," +
      color1[2] +
      ", 0.5), rgba(" +
      color2[0] +
      "," +
      color2[1] +
      "," +
      color2[2] +
      ", 0.5))";
  }
};
