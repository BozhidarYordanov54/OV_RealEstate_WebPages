const agents = document.querySelectorAll(".team-member-card");
const filters = document.querySelectorAll(".agent-filter");

function filterAgents(btn) {
  agents.forEach((agent) => {
    agent.style.display = "flex";
    if (!agent.classList.contains(btn.value)) {
      console.log(btn.value);
      agent.style.display = "none";
    }
  });
}

filters.forEach((filter) => {
  filter.addEventListener("change", () => {
    if (filter.checked) {
      filterAgents(filter);
    }
  });
});
