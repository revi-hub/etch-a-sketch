const flexContainer = document.getElementById("flex-container");
let pixels = [];
const pixel = document.createElement("div");

for(var i = 0; i < 16; i++) {
    pixels.push(document.createElement("div"));
    flexContainer.appendChild(pixels[i]);
}
