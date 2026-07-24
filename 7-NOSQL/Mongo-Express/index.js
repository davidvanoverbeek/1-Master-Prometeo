const express = require("express");

const server = express();

const PORT = 8080;

server.listen(PORT, () => {
    cpnsole.log(`Servidor levantado en http://localhost:${PORT}`);
});