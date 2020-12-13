

const carouselInner = document.querySelector('.carousel-inner');
const carouselImg = document.querySelectorAll('.carousel-img');
const topSection = document.querySelector('.top-section');
const logo = document.querySelector('.logo-nav');
const logoHeight = logo.offsetHeight;

const carouselArray = Array.from(carouselImg);
// console.log(carouselArray);

function setHeight() {
carouselArray.forEach(element => {
    
element.style.height= window.innerHeight-logoHeight +"px";
   
    });
}

function setHeightHalf() {
    carouselArray.forEach(element => {

        element.style.height = (window.innerHeight - logoHeight + "px")/2;

    });
}


 
if (window.innerWidth > 1024) { 
    setHeight();
} else {
    setHeightHalf();
}

// var cells = document.querySelectorAll('.testimonial-cell');
// cells = Array.from(cells);
// cells.forEach(element => {
//     console.log(element.offsetHeight);
// })

var maxHeight = 0;
$('.testimonial-cell').each(function () {
    maxHeight = Math.max(maxHeight, $(this).outerHeight());
});
$('.quote-1, .quote-2, .quote-3').css({ height: maxHeight + 'px' });
// document.querySelectorAll('.testimonial-content').style.verticalAlign = "middle;"
// $('.testimonial-content').addClass('.align-vertical');