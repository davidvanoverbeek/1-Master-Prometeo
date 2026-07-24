const express = require("express");
const connectDB = require("./src/config/db");
const videogamesRouter = require("./src/routes/videojuegos.routes");

// Definimos el puerto
const PORT = 8080;

// Conectamos con la base de datos
connectDB();

// Creamos el servidor
const server = express();
// tenemos que indicarle que vamos a trabajar con JSON
server.use(express.json());

// Definimos las rutas que tenemos
server.use("/api/videogames", videogamesRouter);

// Definimos el controlador de rutas no encontradas
server.use((req, res) => {
    return res.status(404).json({message: "Route not found"});
});

// Definimos una ruta especial para errores basicos
server.use((err, req, res) => {
    console.log(err);
    return res.status(500).json({message: "Internal Server Error"});
});

// Levantamos y escuchamos el servidor
server.listen(PORT, () => {
    console.log(`🛜 Servidor levantado en http://localhost:${PORT}`);
});