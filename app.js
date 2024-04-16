const pixelsContainer = document.getElementById("pixels-container");
let pixels = [];

for(var i = 0; i < 256; i++) {
    pixels.push(document.createElement("div"));
    pixelsContainer.appendChild(pixels[i]);
}

pixelsContainer.addEventListener("mouseover", (e) => {
    e.target.classList.add("drawn")
});
