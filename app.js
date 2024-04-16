const pixelsContainer = document.getElementById("pixels-container");

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
            pixelsContainer.appendChild(pixels[i]);
        }
        console.log('SUCCESS: Built a new grid');
        return pixels;
    } else {
        console.log('ERROR: Specified invalid number');
        return null;
    }   
}

createGrid(16);

