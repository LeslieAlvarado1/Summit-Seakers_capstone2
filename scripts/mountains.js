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
    const selectedMountain = mountainsArray.find(mountain => mountain.name === selectedMountainName);
    if (selectedMountain) {
        document.getElementById("app").innerHTML = mountainTemplate(selectedMountain);
    }
}

function mountainTemplate(mountain) {
  return `
      <div class="mountain">
          <img class="mountain-photo" src="images/${mountain.img}">
          <h2 class="mountain-name">${mountain.name} <span class="species">(${mountain.elevation} feet)</span></h2>
          <h4 class="mountain-desc">${mountain.desc} </h4>
          <p><strong>Effort:</strong> ${mountain.effort}</p>
          <strong>Coordinates:</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng}
      </div>
  `;
}

