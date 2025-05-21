// script.js

// Handle the click event on experience items
const pengalamanItems = document.querySelectorAll('.pengalaman-item');

// Store the reference to the container where the new detail box will be added
const infoContainer = document.getElementById('new-info-container');

// Predefined details for each experience item
const experienceDetails = {
  "Infinity 2024": {
    description: "Event besar yang mengumpulkan lebih dari 1000 peserta, dengan berbagai sesi menarik.",
    image: "https://via.placeholder.com/150?text=Infinity+2024+Image"
  },
  "ISU": {
    description: "Sebuah organisasi yang fokus pada pengembangan teknologi, dengan proyek-proyek inovatif.",
    image: "https://via.placeholder.com/150?text=ISU+Image"
  },
  "O-Week 2025": {
    description: "Acara orientasi mahasiswa baru, dengan berbagai kegiatan yang membangun rasa kekeluargaan.",
    image: "https://via.placeholder.com/150?text=O-Week+2025+Image"
  },
  "DevForge": {
    description: "Kompetisi pengembangan perangkat lunak yang mengasah kemampuan coding dan teamwork.",
    image: "https://via.placeholder.com/150?text=DevForge+Image"
  }
};

// Handle clicking on each pengalaman item
pengalamanItems.forEach(item => {
  item.addEventListener('click', function() {
    const experienceTitle = this.querySelector('h4').textContent;

    // Remove any previously displayed info box
    const existingInfoBox = document.querySelector(`#${experienceTitle}-info`);
    if (existingInfoBox) {
      existingInfoBox.remove();
    }

    // Create a new info box for the clicked item
    const newBox = document.createElement('div');
    newBox.id = `${experienceTitle}-info`;
    newBox.classList.add('bg-white', 'border', 'border-red-200', 'rounded-xl', 'p-4', 'shadow-sm', 'mt-4');

    // Add the corresponding experience info inside the new box
    newBox.innerHTML = `
      <h5 class="text-xl font-semibold text-red-600">${experienceTitle} - Detail</h5>
      <p class="text-gray-700 mt-2">${experienceDetails[experienceTitle].description}</p>
      <img src="${experienceDetails[experienceTitle].image}" alt="${experienceTitle}" class="mt-4 w-32 h-32 rounded-md" />
    `;

    // Append the new box to the container
    infoContainer.appendChild(newBox);
  });
});
