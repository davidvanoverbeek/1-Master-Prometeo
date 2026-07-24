const express = require("express");

const server = express();

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Servidor levantado en https://localhost${PORT}`)
})