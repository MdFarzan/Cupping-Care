/* 
    script.js
    main script file for cupping care
*/

console.info("main script loaded.");
// slider js starts
const slides = document.querySelectorAll('.testimonial .slide');
const timeLine = document.querySelectorAll('.testimonial .time-line li');
const slidesWrap = document.querySelector('.testimonial .slides-wrap');

var temp = Array.from(slides);

var slideHeights = temp.map((slide) => {
    return slide.offsetHeight;
});



var slideMaxHeight = Math.max.apply(null, slideHeights);
slidesWrap.style.height = slideMaxHeight + 'px';

var currentSlide = 0;


slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * index}%)`;
    slide.children[0].style.height = slideMaxHeight+"px";
});

setInterval(() => {
    next();
}, 4000);

function next() {
    currentSlide++;

    currentSlide = currentSlide == slides.length ? 0 : currentSlide;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });

       

}

console.log(timeLine);
// slider js ends