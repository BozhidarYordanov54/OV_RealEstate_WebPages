const agents = document.querySelectorAll(".team-member-card");
const filters = document.querySelectorAll(".agent-filter");

function filterAgents(btn) {
  // Set all agents to display: flex initially
  agents.forEach((agent) => {
    agent.style.display = "flex";
    requestAnimationFrame(() => {
      agent.classList.remove("show"); // Remove show class to start the transition
    });
  });

  // Ensure the 'transitionend' event listener is not duplicated
  agents.forEach((agent) => {
    const handleTransitionEnd = () => {
      if (!agent.classList.contains(btn.value)) {
        agent.style.display = "none"; // Set display: none if the agent does not match the filter
      }
      agent.removeEventListener("transitionend", handleTransitionEnd);
    };

    agent.addEventListener("transitionend", handleTransitionEnd);

    // Check if the agent matches the filter criteria
    if (agent.classList.contains(btn.value)) {
      requestAnimationFrame(() => {
        agent.classList.add("show"); // Add show class to start the transition
      });
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
