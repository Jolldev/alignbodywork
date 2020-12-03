

const carouselInner = document.querySelector('.carousel-inner');
const carouselImg = document.querySelectorAll('.carousel-img');
const topSection = document.querySelector('.top-section');
const logo = document.querySelector('.logo-nav');
const logoHeight = logo.offsetHeight;

const carouselArray = Array.from(carouselImg);
console.log(carouselArray);

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

// setHeight(carouselArray);
 
if (window.innerWidth >= 768) { 
    setHeight();
} else {
    setHeightHalf();
}

