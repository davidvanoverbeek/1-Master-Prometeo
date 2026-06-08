
const toy = {
    color: "black",
    material: "plastico",
    name: "Teacher",
    brand: "Legami",
    new: true,
};

// ACCESO
const name = toy.name;
console.log(name);
console.log(toy.name);
console.log(toy["name"]);

// CREAR
toy.price = 10;
console.log(toy);


// ACTUALIZAR I MODIFICAR 
toy.new = false;
console.log(toy);

// DELETE
delete toy.color;
console.log(toy)