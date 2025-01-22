const sliderContainer = document.querySelector('.slider-container');
const innerSlider = document.querySelector('.inner-slider');

let pressed = false;
let startX;
let X;

sliderContainer.addEventListener('mousedown', (e) => {
    pressed  = true
    startX = e.offsetX - innerSlider.offsetleft;
    sliderContainer.style.cursor = "grabbing"
})

sliderContainer.addEventListener('mouseenter', () => {
    sliderContainer.style.cursor = "grab"
})

sliderContainer.addEventListener('mouseup', () => {
    sliderContainer.style.cursor = "grab"
    pressed = false;
})
