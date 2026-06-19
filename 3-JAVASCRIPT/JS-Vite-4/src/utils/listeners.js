import lenguajes from "./data";
import Card from "../components/Card/Card";

const themeBtnAction = () => {
    document.querySelector("#themeBtn").addEventListener("click", (ev) => {
        document.body.classList.toggle("dark");
        if(document,body,classList.contains("dark")) {
            ev.target.textContent = "☀️";
        } else {
            ev.target.textContent = "🌑";
        }
    });
};

const renderMainContent = () => {
    const container = document.querySelector("#mainContainer");

    for (const element of lenguajes) {
        const li = document.createElement("li");
        li.innerHTML = `
        ${Card(element)}
        `;
        container.appendChild(li);
    }    
};

const addListeners = () => {
    themeBtnAction();
    renderMainContent();
};

export default addListeners;
