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


sliderContainer.addEventListener('mouseleave', () => {
    pressed = false
})


sliderContainer.addEventListener('mouseup', () => {
    sliderContainer.style.cursor = "grab"
    pressed = false;
})

document.body.addEventListener('mouseup', () => {
    pressed = false;
})

innerSlider.addEventListener('transitionend', () => {
    checkBoundary();
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
    const loc = (innerSlider.scrollWidth * -1) + outer.width;

    if (inner.x > 0 && inner.left > loc) {
        innerSlider.style.transform = `translateX(0px)`;
    }

    if (inner.left < loc && inner.x < 0) {
        console.log(`${loc} location`)
        innerSlider.style.transform = `translateX(${loc}px)`;
    }
    
};

