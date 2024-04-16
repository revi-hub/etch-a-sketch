const pixelsContainer = document.getElementById("pixels-container");
const btn = document.querySelector("button");
let pixels;

function createGrid(size){
    if(size > 0 && size <= 100){
        let pixels = [];
        let width = 1 / size * 100;
        width = width.toFixed(3);
        width = width.toString() + '%'
        size = size * size;
        for(let i = 0; i < size; i++) {
            pixels.push(document.createElement("div"));
            pixels[i].style.width = width;
            pixels[i].classList.add("pixel");
            pixelsContainer.appendChild(pixels[i]);
        }
        console.log('SUCCESS: Built a new grid');
        return pixels.length;
    } else {
        console.log('ERROR: Specified invalid number');
        return null;
    }   
}

createGrid(16);


pixelsContainer.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("pixel"))
    e.target.classList.add("drawn");
});

btn.addEventListener("click", () => {

    const numberOfPixels = prompt("Please specify number of pixels per side: ");
    pixels = createGrid(numberOfPixels);
});


