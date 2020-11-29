
const marble= document.querySelector('.marble-container');
const marbleHeight = marble.offsetHeight;

var test = document.querySelector('.test-box');
var image = document.querySelector('.test');
var align = document.querySelector('.align-cell');

var imageHeight = image.offsetHeight;
var alignHeight = align.offsetHeight;

function setTest(){
   

    test.style.height= window.innerHeight-marbleHeight +"px";
    // image.style.height = test.offsetHeight - alignHeight + "px";
    // console.log(test.offsetHeight);
    // console.log(alignHeight);
    // console.log(test.offsetHeight - alignHeight + "px");
    // console.log(image.style.height);
}
setTest();
 
