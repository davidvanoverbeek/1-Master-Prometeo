// NODODS -> Recuperar un elemento existente del documento
const title = document.querySelector("#title");
title.textContent = "Ahoras este es otro titulo";
title.id = "titulito";

// NODOS -> Recuperar varios elementos existentes
const parrafos = document.querySelectorAll(".parrafo");

for( const parrafo of parrafos) {
    parrafo.textContent = "PARRAFO";
}

// NODOS -> Eliminar elementos
const parraf = document.querySelectorAll(".parrafo");

for(const parrafe of parraf) {
    parrafe.remove();
}

// NODO -> Crear un nuevo nodo
const h2 = document.createElement("h2");
h2.id = "subtitulo";
h2.textContent = "Esto es un subtitulo";

document.body.appendChild(h2);

// ALTERAR EL ORDEN DE INYTECCION DINAMICA
const mejoresVideojuegos = [
  "The Legend of Zelda: Ocarina of Time",
  "Super Mario 64",
  "Tetris",
  "The Witcher 3: Wild Hunt",
  "The Legend of Zelda: Breath of the Wild",
  "Dark Souls",
  "Bloodborne",
  "Elden Ring",
  "Half-Life 2",
  "Portal 2",
  "Metal Gear Solid",
  "Resident Evil 4",
  "Final Fantasy VII",
  "Final Fantasy X",
  "Super Mario World",
  "Super Mario Odyssey",
  "Red Dead Redemption 2",
  "Grand Theft Auto V",
  "Grand Theft Auto: San Andreas",
  "Mass Effect 2",
  "Halo: Combat Evolved",
  "Halo 3",
  "The Last of Us",
  "The Last of Us Part II",
  "Uncharted 4: A Thief’s End",
  "Chrono Trigger",
  "Street Fighter II",
  "Super Smash Bros. Ultimate",
  "Pokémon Red/Blue",
  "Pokémon Gold/Silver",
  "World of Warcraft",
  "Minecraft",
  "Doom (1993)",
  "Overwatch",
  "God of War (2018)",
  "Shadow of the Colossus",
  "Celeste",
  "Hollow Knight",
  "Sekiro: Shadows Die Twice",
  "Bioshock"
];

const ul = document.querySelector("#lista");

mejoresVideojuegos.sort();
mejoresVideojuegos.reverse();

for (const videojuego of mejoresVideojuegos) {
    const li = document.createElement("li");
    li.textContent = videojuego;
    ul.appendChild(li);
}

