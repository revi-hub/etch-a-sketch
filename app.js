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

function deleteGrid(pixels){
    for(let i = 0; i < pixels; i++){
        pixelsContainer.lastElementChild.remove();
    }
}

pixels = createGrid(16);


pixelsContainer.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("pixel"))
    e.target.classList.add("drawn");
});

btn.addEventListener("click", () => {
    while(true){
    const numberOfPixels = prompt("Please specify number of pixels per side: ");
    if(numberOfPixels == null)
    break;
    deleteGrid(pixels);
    pixels = createGrid(numberOfPixels);
    if(pixels != null){
        break;
    }
    alert("Error, the number should be between 1 and 100 inclusively!");
    }
});


