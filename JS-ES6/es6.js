// METODOS DE ARRAYS ES6 (Mirar la leccion map tambien es metodo array)

// Constantes
const superheroes = [
  {
    nombre: "Superman",
    edad: 35,
    ciudad: "Metrópolis",
    nombreReal: "Clark Kent (Kal-El)"
  },
  {
    nombre: "Batman",
    edad: 40,
    ciudad: "Gotham City",
    nombreReal: "Bruce Wayne"
  },
  {
    nombre: "Wonder Woman",
    edad: 3000,
    ciudad: "Themyscira",
    nombreReal: "Diana Prince"
  },
  {
    nombre: "Spider-Man",
    edad: 25,
    ciudad: "Nueva York",
    nombreReal: "Peter Parker"
  },
  {
    nombre: "Iron Man",
    edad: 40,
    ciudad: "Nueva York / Malibu",
    nombreReal: "Tony Stark"
  },
  {
    nombre: "Captain America",
    edad: 105,
    ciudad: "Brooklyn, Nueva York",
    nombreReal: "Steve Rogers"
  },
  {
    nombre: "Thor",
    edad: 1500,
    ciudad: "Asgard",
    nombreReal: "Thor Odinson"
  },
  {
    nombre: "Hulk",
    edad: 40,
    ciudad: "Dayton, Ohio / Nueva York",
    nombreReal: "Bruce Banner"
  },
  {
    nombre: "Black Panther",
    edad: 35,
    ciudad: "Wakanda",
    nombreReal: "T’Challa"
  },
  {
    nombre: "Flash",
    edad: 30,
    ciudad: "Central City",
    nombreReal: "Barry Allen"
  },
  {
    nombre: "Green Lantern",
    edad: 32,
    ciudad: "Coast City",
    nombreReal: "Hal Jordan"
  },
  {
    nombre: "Wolverine",
    edad: 150,
    ciudad: "Alberta, Canadá",
    nombreReal: "James 'Logan' Howlett"
  }
];

// Filter

const youngSuperheroes = superheroes.filter((superheroes) => superheroes.age < 40);
const superheroesWithB = superheroes.filter((superheroes) => superheroes.name.toLowerCase().includes("b"));

console.log(superheroesWithB);
console.log(youngSuperheroes);

// Find

const batman = superheroes.find((superheroes) => superheroes.name === "Batman");

console.log(batman);

// Every

const todosjovenes = superheroes.every((superheroes) => superheroes.age < 40);
console.log(todosjovenes);

// Some

const algunosjovenes = superheroes.some((superheroes) => superheroes.age < 40);
console.log(algunosjovenes);

// Reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const total = numbers.reduce((acumulator, number) => acumulator + number, 0);

console.log(total);

// Filter con Reduce

//const youngSuperheroes = superheroes.filter((superheroes) => superheroes.age < 40);

const youngSuperheroes2 = superheroes.reduce((acc, superheroes) => {
  if(superheroes.age < 40){
    acc.push(superheroes)
  }
  return acc;
}, []);

console.log(youngSuperheroes2);  


