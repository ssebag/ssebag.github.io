var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
});
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