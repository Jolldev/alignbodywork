

const carouselInner = document.querySelector('.carousel-inner');
const carouselImg = document.querySelectorAll('.carousel-img');
const topSection = document.querySelector('.top-section');
const marble = document.querySelector('.marble-container');
const marbleHeight = marble.offsetHeight;

const carouselArray = Array.from(carouselImg);
console.log(carouselArray);

function setHeight() {
carouselArray.forEach(element => {
    
element.style.height= window.innerHeight-marbleHeight +"px";
   
    });
}

function setHeightHalf() {
    carouselArray.forEach(element => {

        element.style.height = (window.innerHeight - marbleHeight + "px")/2;

    });
}

// setHeight(carouselArray);
 
if (window.innerWidth >= 992) { 
    setHeight();
} else {
    setHeightHalf();
}

