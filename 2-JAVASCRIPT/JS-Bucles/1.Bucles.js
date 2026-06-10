
// FOR
for(let i = 0; i < 4; i++){
    console.log("Hola", i);
};

// LANZAMOS EL SCRIPT
/* i = 0, true, se incrementa en 1 al final -> Hola 0*/
/* i = 1, true, se incrementa en 1 al final -> Hola 1*/
/* i = 2, true, se incrementa en 1 al final -> Hola 2*/
/* i = 3, true, se incrementa en 1 al final -> Hola 3*/
/* i = 4, false, se rompe el bucle -> FIN*/

console.log("")

const movies = [
    "Jhon Wick",
    "Nosferatu",
    "The Evil Dead",  
    "Dracula",   
    "The Godfather", 
    "Pulp Fiction",
    "Forrest Gump",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Matrix",
    "Gladiator",
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "Parasite"];

for(let i = 0; i < movies.length; i++){
    console.log(movies[i]);
};

console.log("")

// Ejemplo autosumatorio
const numbers = [5, 45, 67, 2, 78, 90, 45, 3, 2, 23, 87]

let counter = 0

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    counter += number;
    console.log(counter)
};

 console.log(counter)

// FOR OF
console.log("");

for(const number of numbers){
    console.log(number)
};

console.log("");

// FOR EACH
numbers.forEach((number) => {
    console.log(number);
});

// FOR IN
const batman = {
    name: "Bruce",
    lastName: "Wayne",
    city: "Gottham"
};

for(const propiedad in batman) {
    console.log(batman[propiedad]);
};

 