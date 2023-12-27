let image = [...document.querySelectorAll('.slider-img__image')];
let btnLeft = document.querySelector('.btn_left');
let btnRight = document.querySelector('.btn_right');

let i = 0;

function imageTime() {
    stop = setTimeout(() => {
        imageTime()
        image[i].style.display = 'none'
        i++
        if (i >= image.length) {
            i = 0;
        }
        image[i].style.display = 'block'
    }, 2000);
}
imageTime()

