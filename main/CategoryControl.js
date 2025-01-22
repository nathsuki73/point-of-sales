const sliderContainer = document.querySelector('.slider-container');
const innerSlider = document.querySelector('.inner-slider');

let pressed = false;
let startX;
let X;

sliderContainer.addEventListener('mousedown', (e) => {
    pressed  = true
    startX = e.clientX
    console.log(`startX: ${startX}\noffsetX: ${e.offsetX}\ninnerslider offsetX: ${innerSlider.offsetX}\n`)
    sliderContainer.style.cursor = "grabbing"
})

sliderContainer.addEventListener('mouseenter', () => {
    sliderContainer.style.cursor = "grab"
})

sliderContainer.addEventListener('mouseup', () => {
    sliderContainer.style.cursor = "grab"
    pressed = false;
})

sliderContainer.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    innerSlider.style.transform = `translateX(${x - startX}px)`;
})
