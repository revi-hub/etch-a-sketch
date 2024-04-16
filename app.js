const pixelsContainer = document.getElementById("pixels-container");
let pixels = [];

for(var i = 0; i < 256; i++) {
    pixels.push(document.createElement("div"));
    flexContainer.appendChild(pixels[i]);
}
