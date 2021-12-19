var backAcc01 = document.querySelector('.back-acc01'),
backAcc02 = document.querySelector('.back-acc02'),
backAcc03 = document.querySelector('.back-acc03'),
backAcc04 = document.querySelector('.back-acc04');

function setTranslate(xPos,yPos,el){
    el.style.transform='translate3d( '+ xPos +' , '+ yPos +'px , 0 )';
}

window.addEventListener('DOMContentLoaded',scrollLoop);

var xScrollPosition;
var yScrollPosition;

function scrollLoop(){
    xScrollPosition=window.scrollX;
    yScrollPosition=window.scrollY;

    setTranslate(0,yScrollPosition*0.02 ,backAcc01)
    setTranslate(0,yScrollPosition*-0.06 ,backAcc02)
    setTranslate(0,yScrollPosition*0.06 ,backAcc03)
    setTranslate(0,yScrollPosition*-0.02 ,backAcc04)
    requestAnimationFrame(scrollLoop)
}