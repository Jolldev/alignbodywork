

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

function windowSize(){
 if (window.innerWidth > 1024) { 
    setHeight();
} else {
    setHeightHalf();
}
}

window.onload = windowSize();
window.addEventListener('resize', windowSize);


var maxHeight = 0;
$('.testimonial-cell').each(function () {
    maxHeight = Math.max(maxHeight, $(this).outerHeight());
    return maxHeight;
});
$('.quote-1, .quote-2, .quote-3').css({ height: maxHeight + 'px' });


// var inner = document.querySelectorAll('.testimonial-content');
// inner = Array.from(inner);


// function center() {
//     inner.forEach(element => {

//        console.log(element.offsetHeight);
       
//     });
// }

// center();

// $('#carouselTestimonials').on('slide.bs.carousel', function () {
//     console.log(testimonialBox.offsetHeight);
// })

