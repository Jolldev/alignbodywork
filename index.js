// Sets height of main page landscape oriented carousel images to equal the space between
// the bottom of navbar and bottom of window
const landscapeImg = document.querySelectorAll(".landscape-slide-img");
const landscapeImgArray = Array.from(landscapeImg);
const logo = document.querySelector('.logo-nav');
const logoHeight = logo.offsetHeight;

function setHeight() {
    landscapeImgArray.forEach(element => {
        element.style.height = window.innerHeight - logoHeight + "px";
    });
}

var aspectRatio = window.innerWidth/window.innerHeight

function windowSize() {
    if (aspectRatio > 1.5 && window.innerHeight > 450) {
        setHeight();
    } else {
        // setHeightHalf();
        return;
    }
}


// Sets all main page carousel images (screen in portrait orientation) to the same height
var maxHeightSlide = 200;
function portraitHeight(){
$('.portrait-slide-img').each(function () {
    maxHeightSlide = Math.max(maxHeightSlide, $(this).outerHeight());
    return maxHeightSlide;
});
$('.slide-1, .slide-2, .slide-3, .slide-4').css({height: maxHeightSlide + 'px' });
// $('.slide-1, .slide-2, .slide-3, .slide-4').css({ maxHeight: "100%" });
};

window.addEventListener('load', windowSize);
window.addEventListener('load', portraitHeight);
window.addEventListener('resize', windowSize);


// Makes all testimonial text boxes on main page same height by matching heighest
function carouselNormalization() {
    var items = $('#carouselTestimonials .carousel-item'), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    if (items.length) {
        function normalizeHeights() {
            items.each(function () { //add heights to array
                heights.push($(this).height());
            });
            tallest = Math.max.apply(null, heights); //cache largest value
            items.each(function () {
                $('.testimonial-cell').css('min-height', tallest + 'px');
            });
        };
        normalizeHeights();

        // $(window).on('resize orientationchange', function () {
        //     tallest = 0, heights.length = 0; //reset vars
        //     items.each(function () {
        //         $(this).css('min-height', '0'); //reset min-height
        //     });
        //     normalizeHeights(); //run it again 
        // });
    }
}

/**
 * Wait until all the assets have been loaded so a maximum height 
 * can be calculated correctly.
 */
window.onload = function () {
    carouselNormalization();
    windowSize();
}