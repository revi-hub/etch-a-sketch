const pixelsContainer = document.getElementById("pixels-container");
const paletteContainer = document.getElementById("palette-container");
const btn = document.querySelector("button");
let selectedColor = "random";
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
            pixels[i].style.backgroundColor = "white";
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

function getRandomRGB(){
    const RGB = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
    return RGB;
}


pixelsContainer.addEventListener("mousemove", (e) => {
    if(e.target.classList.contains("pixel")){
        if(e.buttons == 1){
            if(!e.target.classList.contains("drawn")){
                e.target.classList.toggle("drawn");
                if(selectedColor == "random")
                    e.target.style.backgroundColor = getRandomRGB();
                else
                    e.target.style.backgroundColor = selectedColor;
                setTimeout(() => {
                    e.target.classList.toggle("drawn");
                }, 500);
            }
        }
    }
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

pixelsContainer.addEventListener("dragstart", (e)=>{
    e.preventDefault();
});

paletteContainer.addEventListener("click", (e) =>{
    selectedColor = e.target.getAttribute("id");
})




