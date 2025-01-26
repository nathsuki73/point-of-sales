const sliderContainer = document.querySelector('.slider-container');
const innerSlider = document.querySelector('.inner-slider');

let ctrlPressed = false;
let pressed = false;
let startX;
let X;

sliderContainer.addEventListener('mousedown', (e) => {
    if (!ctrlPressed) {
        return;
    }
    pressed  = true
    startX = e.clientX - innerSlider.style.transform.match(/-?\d+/);
    sliderContainer.style.cursor = "grabbing"

})

sliderContainer.addEventListener('mouseenter', () => {
    if (!ctrlPressed) {
        return;
    }
    sliderContainer.style.cursor = "grab"
})


sliderContainer.addEventListener('mouseleave', () => {
    if (!ctrlPressed) {
        return;
    }
    pressed = false
})


sliderContainer.addEventListener('mouseup', () => {
    if (!ctrlPressed) {
        return;
    }
    sliderContainer.style.cursor = "grab"
    pressed = false;
})

document.body.addEventListener('mouseup', () => {
    if (!ctrlPressed) {
        return;
    }
    pressed = false;
})

innerSlider.addEventListener('transitionend', () => {
    checkBoundary();
})


sliderContainer.addEventListener('mousemove', (e) => {
    if (!ctrlPressed) {
        return;
    }
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
        innerSlider.style.transform = `translateX(${loc}px)`;
    }
    
};

// add function to make it draggable and clickable
document.body.addEventListener('keydown', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        ctrlPressed = true;
    }
})

document.body.addEventListener('keyup', (e) => {
    if (e.key == 'Control') {
        ctrlPressed = false;
        sliderContainer.style.cursor = "default"

    }
})
// scroll function
const buttonWidth = document.querySelector('.radio-button').offsetWidth;
lastScrollTop = 0;
let isThrottled = false;


sliderContainer.addEventListener('mousewheel', (e) => {
    if (isThrottled) return;
    isThrottled = true;
    
    let currentTransform = innerSlider.style.transform;

    let currentValue = 0; 
    if (currentTransform.includes('translateX')) {
        currentValue = parseInt(currentTransform.split('(')[1].split('px')[0]);
    }

    if (e.deltaY > 0) {
        currentValue = currentValue - buttonWidth;
    } else {
        currentValue = currentValue + buttonWidth;

    }
    innerSlider.style.transform = `translateX(${currentValue}px)`;


    setTimeout(() => {
        isThrottled = false;
    }, 100);
}, {passive: true});


