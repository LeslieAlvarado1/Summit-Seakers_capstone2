"use strict";

// Populate the dropdowns
window.onload = function () {
  const statesDropdown = document.getElementById("states");
  const parkTypeDropdown = document.getElementById("parktype");

  // Populate states dropdown
  locationsArray.forEach((location) => {
    const option = document.createElement("option");
    option.value = location;
    option.textContent = location;
    statesDropdown.appendChild(option);
  });

  // Populate park types dropdown
  parkTypesArray.forEach((parkType) => {
    const option = document.createElement("option");
    option.value = parkType;
    option.textContent = parkType;
    parkTypeDropdown.appendChild(option);
  });
};

// Search function
function searchLocation() {
  const selectedState = document.getElementById('states').value;
  const selectedParkType = document.getElementById('parktype').value;
  const searchInput = document.getElementById('inputLocation').value.toLowerCase();

  let filteredParks = nationalParksArray;

  if (selectedState) {
      filteredParks = filteredParks.filter(park => park.State === selectedState);
  }

  if (selectedParkType) {
      filteredParks = filteredParks.filter(park => park.ParkType === selectedParkType);
  }

  if (searchInput) {
      filteredParks = filteredParks.filter(park => park.LocationName.toLowerCase().includes(searchInput));
  }

  let message = `${filteredParks.length} National Park(s) to visit:`;
  message += filteredParks.map(parkTemplate).join("");

  document.getElementById("myParks").innerHTML = message;
}

function parkTemplate(park) {
  return `
        <div class="card" style="width: 18rem;">
        <img src="${park.Image}" class="card-img-top"  alt="${park.LocationName}">
        <div class="card-body">
            <h5 class="card-title">${park.LocationName}</h5>
            <p class="card-text">${park.State}.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`;
}
