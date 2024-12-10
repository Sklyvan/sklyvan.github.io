document.addEventListener("DOMContentLoaded", () => {
  fetch("data/content.json")
    .then(response => response.json())
    .then(data => {
      loadProfile(data.profile);
      loadTimeline(data.timeline);
      loadProjects("valeo", data.projects.valeo);
      loadProjects("personal", data.projects.personal);
    })
    .catch(error => console.error("Error loading content:", error));
});

function loadProfile(profile) {
  document.getElementById("summary").textContent = profile.summary;

  const techList = document.getElementById("technologies");
  profile.technologies.forEach(tech => {
    const li = document.createElement("li");
    li.textContent = tech;
    techList.appendChild(li);
  });
}

function loadTimeline(timeline) {
  const container = document.getElementById("timeline-container");
  timeline.forEach(event => {
    const div = document.createElement("div");
    div.className = "timeline-item";
    div.innerHTML = `<h4>${event.title}</h4><p>${event.place} (${event.year})</p>`;
    container.appendChild(div);
  });
}

function loadProjects(sectionId, projects) {
  const container = document.getElementById(`${sectionId}-projects`);
  projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project-item";
    div.innerHTML = `
      <h4>${project.title}</h4>
      <p>${project.description}</p>
      <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
    `;
    container.appendChild(div);
  });
}
