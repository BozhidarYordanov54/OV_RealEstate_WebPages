const menu = document.querySelector(".listings-filter-collapsable-wrapper");
const collapseBtn = document.querySelector(".collapse-filters-btn");
const filterHeading = document.querySelector(".filter-section-heading");
const listingFilterContainer = document.querySelector(".listings-filter-container");

function collapseMenu() {
  menu.classList.toggle("collapse-filters");
  filterHeading.classList.toggle("collapsed");
  collapseBtn.classList.toggle("hidden");
}

collapseBtn.addEventListener("click", collapseMenu);
