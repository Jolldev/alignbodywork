

const carouselInner = document.querySelector('.carousel-inner');
const carouselImg = document.querySelector('.carousel-img');
const topSection = document.querySelector('.top-section');
const marble = document.querySelector('.marble-container');
const marbleHeight = marble.offsetHeight;


function setTest(){
   

    carouselImg.style.height= window.innerHeight-marbleHeight +"px";
    // image.style.height = test.offsetHeight - alignHeight + "px";
    // console.log(test.offsetHeight);
    // console.log(alignHeight);
    // console.log(test.offsetHeight - alignHeight + "px");
    // console.log(image.style.height);
}
setTest();
 
