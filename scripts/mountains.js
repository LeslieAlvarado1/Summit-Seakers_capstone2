"use strict";

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

async function loadData() {
  const selectElement = document.getElementById("mountainsSelect");
  const selectedMountainName = selectElement.value;
  const selectedMountain = mountainsArray.find(
    (mountain) => mountain.name === selectedMountainName
  );

  if (selectedMountain) {
    const sunTimes = await getSunsetForMountain(
      selectedMountain.coords.lat,
      selectedMountain.coords.lng
    );
    document.getElementById("app").innerHTML = mountainTemplate(
      selectedMountain,
      sunTimes.results
    );
  }
}

function mountainTemplate(mountain, sunTimes) {
  return `
      <div class="mountain-card">
          <img class="mountain-photo" src="images/${mountain.img}" alt="${mountain.name}">
          <div class="mountain-info">
              <h2 class="mountain-name"><strong>${mountain.name}</strong></h2>
              <p class="mountain-elevation">Elevation: ${mountain.elevation} feet</p>
              <p class="mountain-desc">${mountain.desc}</p>
              <p class="mountain-effort"><strong>Effort:</strong> ${mountain.effort}</p>
              <p class="mountain-coordinates"><strong>Coordinates:</strong> lat: ${mountain.coords.lat}, lng: ${mountain.coords.lng}</p>
              <p class="mountain-sunrise"><strong>Sunrise (UTC):</strong> ${sunTimes.sunrise}</p>
              <p class="mountain-sunset"><strong>Sunset (UTC):</strong> ${sunTimes.sunset}</p>
          </div>
      </div>
  `;
}

async function getSunsetForMountain(lat, lng) {
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
  );
  let data = await response.json();
  return data;
}
