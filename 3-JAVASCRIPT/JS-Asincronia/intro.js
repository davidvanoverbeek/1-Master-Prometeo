const miPromesa = new Promise((resolve, reject) => {
    const exito = true;

    if (exito) {
        resolve("Me he resuelto");
    } else {
        reject("Me he rechazado");
    }
});

// Gestionamos la Promesa
miPromesa
    .then((resultado => {
        console.log("Resultado", resultado)
    }))
    .catch((error) => {
        console.error("Error", error)
    })
    

// TRY CATCH FINALLY
const x = 10;

try {
    x += 5;
    console,log("He sumado")
} catch (error) {
    console.log("Ha fallado -", error.message)
} finally {
    console.log("Terminado")
}

