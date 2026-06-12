const photos = [
  "images/grandbaie.jpg",
  "images/pereybere.jpg",
  "images/flicenflac.jpg",
  "images/trouauxbiches.jpg",
  "images/lemorne.jpg",
  "images/bellemare.jpg",
  "images/bluebay.jpg",
  "images/mahebourg.jpg"
];

const locations = [
  "Grand Baie",
  "Pereybere",
  "Flic en Flac",
  "Trou aux Biches",
  "Le Morne",
  "Belle Mare",
  "Blue Bay",
  "Mahebourg"
];

const guesthouses = [];

for (let i = 1; i <= 500; i++) {
  guesthouses.push({
    name: `MOstay Guesthouse ${i}`,
    location: locations[Math.floor(Math.random() * locations.length)],
    price: Math.floor(Math.random() * 700) + 300,
    image: photos[Math.floor(Math.random() * photos.length)]
  });
}

function displayGuesthouses(data) {
  const container = document.getElementById("guesthouses");

  container.innerHTML = data.map(item => `
    <div class="card">
      <img src="${item.image}" alt="${item.name}">
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>📍 ${item.location}</p>
        <p>💰 Rs ${item.price}/jour</p>
        <button onclick="bookNow('${item.name}')">
          Réserver
        </button>
      </div>
    </div>
  `).join("");
}

function bookNow(name) {
  alert("Réservation : " + name);
}

window.onload = () => {
  displayGuesthouses(guesthouses);

  const search = document.getElementById("search");

  if (search) {
    search.addEventListener("input", () => {
      const value = search.value.toLowerCase();

      const filtered = guesthouses.filter(g =>
        g.name.toLowerCase().includes(value) ||
        g.location.toLowerCase().includes(value)
      );

      displayGuesthouses(filtered);
    });
  }
};