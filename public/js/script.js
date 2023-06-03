/* var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
}); */
window.onload=function(){
  var hi=document.getElementById("hi");
  var des=document.getElementById("des");
  var myCV=document.getElementById("buttonCv");
  var animation=hi.animate([
    {left:"-150px"},{left:"30px",offset:0.5},{left:"30px",offset:0.5}],{duration:2000,easing:"ease-in"});
    var animation=des.animate([
      {left:"1300px"},{left:"30px",offset:0.5},{left:"30px",offset:0.5}],{duration:10000,easing:"ease-out"});
      var animation=myCV.animate([
      {top:"-1000px"},{top:"10px",offset:0.5},{top:"10px",offset:1}],{duration:10000,easing:"ease-out"});
  
}
let y=  document.getElementById('alertForRes');
let x=  document.getElementById('linkForRes');
/** */
let w=  document.getElementById('alertForClGit');
let z=  document.getElementById('linkForClGit');
/** */
let w1=  document.getElementById('alertForClWeb');
let z1=  document.getElementById('linkForClWeb');
/** */
let kk=  document.getElementById('alertForDDWeb');
let ww=  document.getElementById('linkForDDWeb');
/** */
let kk2=  document.getElementById('alertForDDGit');
let ww2=  document.getElementById('linkForDDGit');

function mouseForWDD(ww){
  kk.style.display="block";
}
function leaveForWDD(ww){
  kk.style.display="none";
}

function mouseForDD(ww2){
  kk2.style.display="block";
}
function leaveForDD(ww2){
  kk2.style.display="none";
}


function mouseForRes(x){
  document.getElementById('alertForRes').style.display="block";
}
function leaveForRes(x){
  document.getElementById('alertForRes').style.display="none";
}

function f1(z){
    w.style.display="block";
 }
 function f3(z){
   w.style.display="none";
 }
 function f11(z1){
    w1.style.display="block";
 }
 function f33(z1){
   w1.style.display="none";
 }

 var alert=document.getElementById('alert');
 function toHover(elem){
  rect=document.getElementById(elem).getBoundingClientRect();
  x=rect.x - 20;
  y=rect.y-240;
  console.log(x);
  alert.innerHTML = "<div>"+elem+"</div>"
  alert.style.position='absolute';
  alert.style.left=x+'px';
  alert.style.top=y+'px';
  alert.style.display="block";
 }
 function toDisVisible(){
  alert.style.display='none';
 }