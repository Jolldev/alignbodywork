// Sets height of main page landscape oriented carousel images to equal the space between
// the bottom of navbar and bottom of window
const logo = document.querySelector('.logo-nav');

function setHeight() {
    const logoHeight = logo.offsetHeight;
    $('.landscape-slide-img').each(function () {
        this.style.height = window.innerHeight - logoHeight + "px";
    });
}

// var aspectRatio = window.innerWidth / window.innerHeight

function windowSize() {
    if (window.innerWidth / window.innerHeight > 1.5 && window.innerHeight > 460) {
        setHeight();
    } else {
        return;
        // portraitHeight();
    }
}

// Sets all main page carousel images (screen in portrait orientation) to the same height (Don't need if
// using same aspect ratios)


// function portraitHeight() {
//     var maxHeightSlide = 100;
//     $('.portrait-slide-img').each(function () {
//         $(this).css({ width: '100%' });
//         $(this).css({ height: 'auto' });
//         maxHeightSlide = Math.max(maxHeightSlide, $(this).outerHeight());
//         return maxHeightSlide;
//     });

//     $('.portrait-slide-img').each(function () {
//         $(this).css({ width: '100%' });
//         $(this).css({ height: maxHeightSlide + 'px' });
//     });
    
// };


// window.addEventListener('load', windowSize);
window.addEventListener('resize', windowSize);
window.addEventListener("orientationchange", windowSize);
// window.addEventListener('load', portraitHeight);
// window.addEventListener('resize', windowSize);


// Makes all testimonial text boxes on main page same height by matching heighest
function carouselNormalization() {
    var items = $('.testimonial-cell'), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    if (items.length) {
        function normalizeHeights() {
            items.each(function () { //add heights to array
                heights.push($(this).height());
            });
            tallest = Math.max.apply(null, heights); //cache largest value
            items.each(function () {
                $('.testimonial-cell').css('height', tallest + 'px');
            });
        };
        normalizeHeights();

        $(window).on('orientationchange', function () {
            $('.carousel').carousel(0); //resets carousel to first (tallest) slide
            tallest = 0, heights.length = 0; //reset vars
            items.each(function () {
                $(this).css({ height: '0' });
                $(this).css('min-height', '0'); //reset min-height
                $(this).css({height: 'auto'});
            });
            carouselNormalization(); //run it again 
        });

        $(window).on('resize', function () {
            tallest = 0, heights.length = 0; //reset vars
            $('.carousel').carousel(0); //resets carousel to first (tallest) slide
            items.each(function () {
                $(this).css({ height: '0' });
                $(this).css('min-height', '0'); //reset min-height
                $(this).css({ height: 'auto' });
            });
            carouselNormalization(); //run it again 
        });
    }
}



/**
 * Wait until all the assets have been loaded so a maximum height 
 * can be calculated correctly.
 */
window.onload = function () {
    carouselNormalization();
}

document.addEventListener("DOMContentLoaded", windowSize);

// Lazy load images on main page
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages = document.querySelectorAll(".lazy");
    var lazyloadThrottleTimeout;

    function lazyload() {
        if (lazyloadThrottleTimeout) {
            clearTimeout(lazyloadThrottleTimeout);
        }

        lazyloadThrottleTimeout = setTimeout(function () {
            var scrollTop = window.pageYOffset;
            for (var i = 0; i < lazyloadImages.length; i++) {
                if (lazyloadImages[i].offsetTop < (window.innerHeight + scrollTop)) {
                    lazyloadImages[i].src = lazyloadImages[i].dataset.src;
                    lazyloadImages[i].classList.remove('lazy');
                }
            }
            if (lazyloadImages.length == 0) {
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});