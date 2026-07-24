const mongoose = require("mongoose");

const Album = require("../models/album.model");

// Estos son datos en un array de objetos 'corriente'
const discos = [
  {
    title: "Paranoid",
    artist: "Black Sabbath",
    year: 1970,
    genre: "Heavy Metal"
  },
  {
    title: "British Steel",
    artist: "Judas Priest",
    year: 1980,
    genre: "Heavy Metal"
  },
  {
    title: "The Number of the Beast",
    artist: "Iron Maiden",
    year: 1982,
    genre: "Heavy Metal"
  },
  {
    title: "Painkiller",
    artist: "Judas Priest",
    year: 1990,
    genre: "Heavy Metal"
  },
  {
    title: "Master of Puppets",
    artist: "Metallica",
    year: 1986,
    genre: "Thrash Metal"
  },
  {
    title: "Peace Sells... but Who's Buying?",
    artist: "Megadeth",
    year: 1986,
    genre: "Thrash Metal"
  },
  {
    title: "Reign in Blood",
    artist: "Slayer",
    year: 1986,
    genre: "Thrash Metal"
  },
  {
    title: "Beneath the Remains",
    artist: "Sepultura",
    year: 1989,
    genre: "Thrash Metal"
  },
  {
    title: "Transilvanian Hunger",
    artist: "Darkthrone",
    year: 1994,
    genre: "Black Metal"
  },
  {
    title: "De Mysteriis Dom Sathanas",
    artist: "Mayhem",
    year: 1994,
    genre: "Black Metal"
  },
  {
    title: "Hvis lyset tar oss",
    artist: "Burzum",
    year: 1994,
    genre: "Black Metal"
  },
  {
    title: "Filosofem",
    artist: "Burzum",
    year: 1996,
    genre: "Black Metal"
  }
];

// Vamos a convertir todos los discos en instancias de Album (modelo de mongo)
const discosToAlbum = discos.map(disco => new Album(disco));

// Vamos a conectarnos temporalmente a nuestro server local de la base de datos
mongoose
    .connect('mongodb://localhost:27017/musicdb').then(async () => {
        // Utilizando el metodo find de mongo, vamos a comprobar si tenemos un array de discos en nuestra base de datos
        const allAlbums = await Album.find();

        // Comprobamos si en nuestra base de datos ya existen estos album
        if(allAlbums.length) {
            // Si encuentrea albums en la base de datos los borramos todos, si no hay albums no hace nada
            await Album.collection.drop();
        };
    })
    .catch((error) => console.error("Error borrando los albums", error))
    .then(async() => {
        // Insertamos todos los albums en la colleccion correspondiente al modelo Album
        await Album.insertMany(discosToAlbum);
    })
    .catch((error) => console.error("Error inseretando los albums", error))
    // Por seguridad, al terminar todo, haya o no errores, nos desconectamos de la base de datos
    .finally(() => mongoose.disconnect());