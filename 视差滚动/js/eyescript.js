var leftEye=document.querySelector('.eye-left .incurcle');
var rightEye=document.querySelector('.eye-right .incurcle');
var leftPupil=document.querySelector(".eye-left .main-out");
var rightPupil=document.querySelector(".eye-right .main-out");
var xy=$("xy");
document.documentElement.onmousemove=function(e){
 var e=window.event||e;
 var eX=e.clientX, eY=e.clientY;
 track(leftEye,leftPupil,eX,eY);
 track(rightEye,rightPupil,eX,eY);
}
function track(o,i,eX,eY){

var winX=$(window).width();
var winY=$(window).height();
var eyeX=o.clientWidth-i.clientWidth;
var eyeY=o.clientHeight-i.clientHeight;
var eyePosX=(eX*eyeX)/winX;
var eyePosY=(eY*eyeY)/winY;
i.style.left=eyePosX+"px";
i.style.top=eyePosY+"px";
}