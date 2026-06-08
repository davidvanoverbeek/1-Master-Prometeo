// LET - CONST
// AMBITO GENERAL

let name = "Hades";
name = "Byron";

// AMBITO DE BLOQUE

if(true){
    let x = 10;
    console.log(x);
}

// DIFERENCIAS LET - CONST

const movie1 = "The Evil Dead";
// No se puede modificar
console.log(movie1);

let movie2 = "Fast and Furious";
movie2 = "Rapido y Furioso";
console.log(movie2);