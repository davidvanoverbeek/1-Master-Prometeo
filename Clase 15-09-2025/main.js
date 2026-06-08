const themeBtn = document.querySelector("#themeBtn");

themeBtn.addEventListener("Click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️"
    } else {
        themeBtn.textContent = "🌑"
    }
})