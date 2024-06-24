let light = document.querySelector("#light")
let button1 = document.querySelector("#onBtn")
let button = document.querySelector("#offBtn")


button1.addEventListener("click", () => {
    light.style.backgroundColor = "yellow";
});

button.addEventListener("click", () => {
    light.style.backgroundColor = "white";
})

