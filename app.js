const projects = [
  {
    name: "Website Refresh",
    status: "On Track",
    summary: "Version 2 UI shipped and pending stakeholder demo.",
    progress: "82%",
    updated: "2026-04-14",
    owner: "Alex",
  },
  {
    name: "Mobile App",
    status: "In Review",
    summary: "QA cycle running with regression checks in progress.",
    progress: "67%",
    updated: "2026-04-13",
    owner: "Sam",
  },
  {
    name: "Automation Bot",
    status: "Blocked",
    summary: "Waiting on API key rotation before deployment.",
    progress: "45%",
    updated: "2026-04-12",
    owner: "Jordan",
  },
  {
    name: "Analytics Migration",
    status: "On Track",
    summary: "Warehouse schema complete; dashboard backfill underway.",
    progress: "74%",
    updated: "2026-04-14",
    owner: "Taylor",
  },
];

const generatedAt = document.querySelector("#generatedAt");
const projectGrid = document.querySelector("#projectGrid");
const cardTemplate = document.querySelector("#projectCardTemplate");

generatedAt.textContent = `Generated: ${new Date().toLocaleString()}`;

const statusClassMap = {
  "On Track": "status-on-track",
  "In Review": "status-in-review",
  Blocked: "status-blocked",
};

projects.forEach((project) => {
  const card = cardTemplate.content.cloneNode(true);

  card.querySelector(".project-name").textContent = project.name;
  card.querySelector(".project-summary").textContent = project.summary;
  card.querySelector(".project-progress").textContent = project.progress;
  card.querySelector(".project-updated").textContent = project.updated;
  card.querySelector(".project-owner").textContent = project.owner;

  const status = card.querySelector(".project-status");
  status.textContent = project.status;
  status.classList.add(statusClassMap[project.status] || "status-in-review");

  projectGrid.appendChild(card);
});
