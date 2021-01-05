alert("The about me slide isn't 100% done, I just wanted to see it on my phone. How you do you feel about it as is?")

const carouselImg = document.querySelectorAll(".carousel-img");
const carouselArray= Array.from(carouselImg);
// const slide = document.querySelectorAll('.slide');
const logo = document.querySelector('.logo-nav');
const logoHeight = logo.offsetHeight;

// const slideArray = Array.from(slide);
// console.log(carouselArray);

var maxHeightSlide = 0;
$('.portrait-slide-img').each(function () {
    maxHeightSlide = Math.max(maxHeightSlide, $(this).outerHeight());
    return maxHeightSlide;
});
$('.slide-1, .slide-2, .slide-3, .slide-4').css({ height: maxHeightSlide + 'px' });
$('.slide-1, .slide-2, .slide-3, .slide-4').css({maxHeight: "100%"});

function setHeight() {
carouselArray.forEach(element => {
    element.style.height= window.innerHeight-logoHeight +"px";

    });
    
}

// function setHeightHalf() {
//     carouselArray.forEach(element => {

//         element.style.height = (window.innerHeight - logoHeight)/2 + "px";

//     });
// }

function windowSize(){
 if (window.innerWidth > window.innerHeight) { 
    setHeight();
} else {
    // setHeightHalf();
    return;
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

