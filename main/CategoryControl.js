const sliderContainer = document.querySelector('.slider-container');
const innerSlider = document.querySelector('.inner-slider');

let pressed = false;
let startX;
let X;

sliderContainer.addEventListener('mousedown', (e) => {
    pressed  = true
    startX = e.clientX - innerSlider.style.transform.match(/-?\d+/);
    sliderContainer.style.cursor = "grabbing"

})

sliderContainer.addEventListener('mouseenter', () => {
    sliderContainer.style.cursor = "grab"
})

sliderContainer.addEventListener('mouseup', () => {
    sliderContainer.style.cursor = "grab"
    checkBoundary();
    pressed = false;
})

sliderContainer.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.clientX;
    innerSlider.style.transform = `translateX(${x - startX}px)`;
})

const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    console.log(`${inner.left}`)
console.log(`${inner.width}`)
    if (inner.x > 0) {
        innerSlider.style.transform = `translateX(0px)`;
    }
    
    
    
    
};