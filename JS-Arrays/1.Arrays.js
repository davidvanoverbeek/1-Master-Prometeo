const colores = ["rojo", "amarillo", "verde", "azul"];

// ACCEDE
/* - POSICIONES -> INDICES -> INDEX */
console.log(colores[1]);

/* - LONGITUD */
console.log(colores.length);

// SOBREESCRIBIR VALORES LLAMANDO A SUS POSICIONES
colores[0] = "negro";
console.log(colores);

// METODOS QUE MODIFICAN EL ARRAY ORIGINAL
colores.push("blanco", "rojo"); /* EMPUJAR 1 O MAS ELEMENTOS */
console.log(colores);
colores.pop("rojo"); /* ELIMINAR POSICION DEL ARRAY */
console.log(colores);
colores.unshift("morado"); /* METE ELEMENTO AL INICIO DEL ARRAY */ 
console.log(colores);
colores.shift(); /* QUITA EL PRIMER ELEMENTO DEL ARRAY */
console.log(colores);
colores.sort(); /* ORDENA POR ORDEN ALFABETICO SEGUN ORDENADOR */
console.log(colores);
colores.reverse(); /* INVIERTE EL ARRAY */
console.log(colores);
colores.splice(1, 3, "rosa"); /* ELIMINA LA CANTIDAD DE ELEMENTOS DEL ARRAY POR DONDE ORDENES Y AÑADE ELEMENTO */
console.log(colores);

// METODOS DE CONSULTA DEL ARRAY
console.log(colores.indexOf("amarillo")); /* BUSCAR POSICION DE ELEMENTO EN ARRRAY, SI NO ESTA PONE -1 = FALSE */
console.log(colores.includes("amarillo")); /* DICE SI ESTA O NO EN ARRAY CON TRUE Y FALSE */

// Añadir mas para ejemplo
colores.push("rojo", "azul", "negro");
console.log(colores);
console.log(colores.slice(2, 4)); /* DIVIDIR Y CORTAR EL ARRAY */

// CONCATENAR ARRAYS
const juegosRetro = ["Mario Bros", "Tetris", "Arkanoid"];
const juegosNuevos = ["Elden Ring", "Death Stranding", "GTA VI"];
const juegos = juegosRetro.concat(juegosNuevos);
console.log(juegos);
console.log([...juegosRetro, ...juegosRetro]); /* METODOO MAS COMODO PARA CONCATENAR */

// INDEXOF
const eldenRingPos = juegos.indexOf("Elden Ring");
juegos.splice(eldenRingPos, 1);
console.log(juegos);

// ARRAYS BIDIMENSIONALES

const arrayPsicopata = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(arrayPsicopata[2][1]);
console.log(arrayPsicopata.flat(4)); /* APALNA EL ARRAY EN UNO */