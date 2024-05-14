const menu = document.querySelector(".listings-filter-collapsable-wrapper");
const collapseBtn = document.querySelector(".collapse-filters-btn");

function collapseMenu() {
  menu.classList.toggle("collapse-filters");
  collapseBtn.classList.toggle("hidden");
}

collapseBtn.addEventListener("click", collapseMenu);
