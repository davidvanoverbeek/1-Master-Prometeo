const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/videojuegos";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Conectando con la base de datos ✅");
    } catch (error) {
        console.log("❌ Error conectando con la base de datos", error.message);
    }
};

module.exports = connectDB;