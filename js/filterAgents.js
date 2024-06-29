const agents = document.querySelectorAll(".team-member-card");
const filters = document.querySelectorAll(".agent-filter");
const agentsContainer = document.querySelector('.team-members');
const emptyMsg = document.createElement('p');
emptyMsg.classList.add('empty-msg');
emptyMsg.innerHTML = 'Няма намерени резултати';

function filterAgents(btn) {
  if(agentsContainer.contains(emptyMsg)){
    agentsContainer.removeChild(emptyMsg);
  };
  
  let empty = true;
  
  agents.forEach((agent) => {
      if (!agent.classList.contains(btn.value)) {
        agent.style.display = "none";
      }
      else{
        agent.style.display = "flex";
        empty = false;
      }
  });

  if(empty){
    agentsContainer.appendChild(emptyMsg);
  }
}

filters.forEach((filter) => {
  filter.addEventListener("change", () => {
    if (filter.checked) {
      filterAgents(filter);
    }
  });
});
