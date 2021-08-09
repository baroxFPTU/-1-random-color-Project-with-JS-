const btnRandom = document.querySelector('.btn-random');
const main = document.querySelector('.main');
const titleBox = document.querySelector('.box h2');
const outputColor = document.querySelector('.box h2 .hex-value');

// check the brightness of the background
function isTooDark(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return !(brightness > 155);
}

function randomColor() {
    let color = '#'+Math.floor(Math.random()*16777215).toString(16);
    
    // If the background too dark change the color of title
    titleBox.style.color =  (isTooDark(color)) ? '#fff' : '#333';

    // Change background
    main.style.backgroundColor = color;

    // Inner the HEX into the box
    outputColor.innerHTML = color;
}


btnRandom.addEventListener('click', randomColor);

// Change color on the press backspace
document.addEventListener('keydown', (e) => {
    if (e.keyCode == '32') {
        randomColor();
        return;
    }
})

// Run in the first sight
randomColor();