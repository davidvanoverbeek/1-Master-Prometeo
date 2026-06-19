import "./Card.css"

const Card = (element) => {
    return `
    <h2>${element.nombre}</h2>
    <h3>${element.entorno}</h3>
    `;
}

export default Card;