const left = document.getElementById("arrow__left");
const right = document.getElementById("arrow__right");
const slider__items = document.querySelector(".slider__items");
const items = document.querySelectorAll(".slider__item");


function sliderTransform(direction){

    const width = document.querySelector('.slider__item').offsetWidth
    const currentPosition = +slider__items.style.left.replace('-', '').replace('px', '')

    let i = 0;

    if (direction == 'right') {
        if (currentPosition == 0 ) {
            i = 1
        } else if (currentPosition > 0 && currentPosition < width * (items.length - 3)) {
            i = currentPosition / width + 1
        }
    } else {
        if (currentPosition == 0 ) {
            i = (items.length - 3)
        } else if (currentPosition > 0) {
            i = currentPosition / width - 1
        }
    }
    slider__items.style.left = `-${width * i}px`
}

left.addEventListener('click', (e) => {
    e.preventDefault()
    sliderTransform('left')      
})
right.addEventListener('click', (e) => {
    e.preventDefault()
    sliderTransform('right')      
})