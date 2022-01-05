
const spans = document.querySelectorAll('[data-js="span"]');
const root = document.querySelector(':root');
const seconds = 3000;
let count = 0;

const changeSlideImg = index => {
    const img = document.querySelector('[data-js="img"]');
    img.src = `/img/${index}.jpg`;
}

const toggleSlideClass = index => {
    Array
        .from(spans)
        .filter(span => span.dataset.index !== index)
        .forEach(span => span.classList.remove('active'));

        spans[index].classList.add('active');
        root.style.setProperty('--bg', `url("/img/${index}.jpg")`);
}

const interval = setInterval(() => {
    count++;

    if (count === spans.length) {
        count = 0;
    }
    
    toggleSlideClass(count);
    changeSlideImg(count);
    
}, seconds);