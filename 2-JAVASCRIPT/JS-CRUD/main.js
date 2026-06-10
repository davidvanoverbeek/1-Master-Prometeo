// Voy a pintar dinamicamente el footer para que salga siempre al lado del Copyright
const footer = document.querySelector("footer");
const year = new Date().getFullYear() || 2025;
footer.textContent = `Copyright ${year} - My videogames`;

// Tenemos un array de objetos
const videogames = [
  {
    title: "The Witcher 3: Wild Hunt",
    releaseYear: 2015,
    cover: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    platform: "PC / PS4 / Xbox One / Switch",
    developer: "CD Projekt Red",
    genre: "RPG"
  },
  {
    title: "Dark Souls",
    releaseYear: 2011,
    cover: "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg",
    platform: "PS3 / Xbox 360 / PC",
    developer: "FromSoftware",
    genre: "Action RPG"
  },
  {
    title: "Half-Life 2",
    releaseYear: 2004,
    cover: "https://upload.wikimedia.org/wikipedia/en/2/25/Half-Life_2_cover.jpg",
    platform: "PC / Xbox / Xbox 360",
    developer: "Valve",
    genre: "First-Person Shooter"
  },
  {
    title: "Portal 2",
    releaseYear: 2011,
    cover: "https://upload.wikimedia.org/wikipedia/en/f/f9/Portal2cover.jpg",
    platform: "PC / PS3 / Xbox 360",
    developer: "Valve",
    genre: "Puzzle-Platform"
  },
  {
    title: "Super Mario Odyssey",
    releaseYear: 2017,
    cover: "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg",
    platform: "Nintendo Switch",
    developer: "Nintendo EPD",
    genre: "Platform / Adventure"
  },
  {
    title: "Red Dead Redemption 2",
    releaseYear: 2018,
    cover: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    platform: "PS4 / Xbox One / PC",
    developer: "Rockstar Games",
    genre: "Action-Adventure"
  },
  {
    title: "Grand Theft Auto V",
    releaseYear: 2013,
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
    platform: "PS3 / PS4 / PS5 / Xbox 360 / Xbox One / Xbox Series X/S / PC",
    developer: "Rockstar North",
    genre: "Action-Adventure"
  },
];

// Vamos a pintar todas las cartas de videojuegos
const vg_container = document.querySelector("#vg-container");

// Recorro todos los videojuegos

for(const videogame of videogames) {
    // Creamos un li para cada videojuego
    const li = document.createElement("li");
    // Modificamos contenido de cada li
    li.innerHTML = 
    `
    <img src="${videogame.cover}" alt="${videogame.title} cover"/>
    <h2>${videogame.title}</h2>
    <h3>${videogame.platform}</h3>
    <p>${videogame.developer} - ${videogame.releaseYear}</p>
    <p>${videogame.genre}</p>
    `
    // Inyectamos cada uno de los li en el contenedor
    vg_container.appendChild(li);
}