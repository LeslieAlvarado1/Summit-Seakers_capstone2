"use strict";

// Populate the dropdowns
window.onload = function () {
  const mountTypeDropdown = document.getElementById("mountainsSelect");
  // Populate park types dropdown
  mountainsArray.forEach((mountain) => {
    const option = document.createElement("option");
    option.value = mountain.name;
    option.textContent = mountain.name;
    mountTypeDropdown.appendChild(option);
  });
  // Add event listeners for dropdowns
  mountTypeDropdown.addEventListener("change", loadData);
};

function loadData() {
  const selectElement = document.getElementById("mountainsSelect");
  const selectedMountainName = selectElement.value;
  const selectedMountain = mountainsArray.find(
    (mountain) => mountain.name === selectedMountainName
  );
  if (selectedMountain) {
    document.getElementById("app").innerHTML =
      mountainTemplate(selectedMountain);
  }
}

function mountainTemplate(mountain) {
  return `
      <div class="mountain-card">
          <img class="mountain-photo" src="images/${mountain.img}" alt="${mountain.name}">
          <div class="mountain-info">
              <h2 class="mountain-name">${mountain.name}</h2>
              <p class="mountain-elevation">Elevation: ${mountain.elevation} feet</p>
              <p class="mountain-desc">${mountain.desc}</p>
              <p class="mountain-effort"><strong>Effort:</strong> ${mountain.effort}</p>
              <p class="mountain-coordinates"><strong>Coordinates:</strong> lat: ${mountain.coords.lat}, lng: ${mountain.coords.lng}</p>
          </div>
      </div>
  `;
}


