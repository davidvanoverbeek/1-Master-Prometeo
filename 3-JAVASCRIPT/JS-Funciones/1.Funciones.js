function saludar() {
    const texto = "Hola";
    console.log(texto);
};

saludar();

console.log("");

function saludarConNombre(nombre) {
    const text = "Hola " + nombre;
    console.log(text);
};

saludarConNombre("Antonio");
saludarConNombre("Estefania");
saludarConNombre("Jheremi");
saludarConNombre();

console.log("");

function sumarDosNumeros(numeroA, numeroB) {
    const total = numeroA + numeroB;
    console.log("El total de " + numeroA + " + " + numeroB + " = " + total);
};

sumarDosNumeros(5, 10);

console.log("");

function calcularElDoble(numero) {
    const total = numero * 2;
    return total;
};

console.log(calcularElDoble(6));

console.log("");

function guardiaDeSeguridad(edad) {
    if(typeof edad !== "number"){
        console.log("No es un numero");
        return
    }
}

guardiaDeSeguridad("Hola");

console.log("");

function calcularEdad(usuario) {
    const edad = usuario.añoActual - usuario.añoNacimiento;
    console.log(usuario.nombre + " tiene " + edad + " años.")
};

const antonio = {
    añoNacimiento: 1990,
    añoActual: 2025,
    nombre: "Antonio"
};

calcularEdad(antonio);

console.log("")

// ARROW FUNCTIONS

const saludadorConNombre = (nombre) => {
    return "Hola " + nombre;
};

saludadorConNombre("Antonio");