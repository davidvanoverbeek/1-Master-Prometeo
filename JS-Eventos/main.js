// Recuepramos el boton
const btn = document.querySelector("btn");

// Le añadimos un escuchador evevnt eventos
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

//

// Recupero el input y el h2
const myInput = document.querySelector("myInput")
const h2 = document.querySelector("h2")

myInput.addEventListener("input", (event) => {
    h2.textContent = event.target.value
});

//

// Le vamos a añadir un evento scroll a la ventana
window.addEventListener("scroll", (ev) => { 

})
// Le vamos a añadir un evento resize a la ventana
window.addEventListener("resize", (ev) => {  
    h2.textContent = event.currentTarget.innerHeight + " x " + ev.currentTarget.innerWidht
})  

//Vamos a añadir un evento que se lance cuando todo el html, css y js se cargue por completo en el DOM
window.addEventListener("DOMContentLoaded", (ev) => {
  if (ev.currentTarget.innerWidth < 600) {
    document.body.innerHTML = `<h1>Comprate un ordenador, esto no es para moviles</h1>`;
  }
});