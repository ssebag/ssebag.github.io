/* var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
}); */
/* function for move start div */
function f(){
  var hi=document.getElementById("hi");
  var des=document.getElementById("des");
  var myCV=document.getElementById("buttonCv");
  hi.style.visibility="visible";
  des.style.visibility="visible";
  var animation=hi.animate([
    {left:"-150px"},{left:"30px",offset:0.5},{left:"30px",offset:0.5}],{duration:2000,easing:"ease-in"});
    var animation=des.animate([
      {left:"400px"},{left:"30px",offset:0.5},{left:"30px",offset:0.5}],{duration:4000,easing:"ease-out"});
      var animation=myCV.animate([
      {top:"-1000px"},{top:"10px",offset:0.5},{top:"10px",offset:1}],{duration:5000,easing:"ease-out"});
      }
window.addEventListener('DOMContentLoaded',f);
/* setInterval(f,7000); */
window.addEventListener('scroll',
function(){
  var element=document.getElementById('hi');
  if(document.body.scrollTop >0 || document.documentElement.scrollTop >0)
  {
  }
  else{
    f();
  }
  });
/* end function for move start div */

/* function for move work div */
 function work_div1(){
  var div1=document.getElementById("work-div1");
  var animation=div1.animate([
    {left:"-1200px"},{left:"5px",offset:0.5},{left:"5px",offset:0.5}],{duration:2000,easing:"ease-in"});
}
function work_div2(){
  var div2=document.getElementById("work-div2");
  var animation=div2.animate([
      {left:"1200px"},{left:"5px",offset:0.5},{left:"5px",offset:0.5}],{duration:2000,easing:"ease-in"});
}
function work_div3(){
  var div3=document.getElementById("work-div3");
  var animation=div3.animate([
      {left:"-1200px"},{left:"5px",offset:0.5},{left:"5px",offset:0.5}],{duration:2000,easing:"ease-in"});
} 
function work_div4(){
  var div4=document.getElementById("work-div4");
  var animation=div4.animate([
      {left:"1200px"},{left:"5px",offset:0.5},{left:"5px",offset:0.5}],{duration:2000,easing:"ease-in"});
} 

  window.addEventListener('scroll',
function(){
 var element=document.getElementById("work-div1");
  var position=element.getBoundingClientRect();
  if(position.top <= window.innerHeight && position.bottom >=0){
    work_div1();
    window.removeEventListener('scroll',arguments.callee);
  }});  
  window.addEventListener('scroll',
function(){
 var element=document.getElementById("work-div2");
  var position=element.getBoundingClientRect();
  if(position.top <= window.innerHeight && position.bottom >=0){
    work_div2();
    window.removeEventListener('scroll',arguments.callee);
  }});
  window.addEventListener('scroll',
  function(){
   var element=document.getElementById("work-div3");
    var position=element.getBoundingClientRect();
    if(position.top <= window.innerHeight && position.bottom >=0){
      work_div3();
      window.removeEventListener('scroll',arguments.callee);
    }});  
    window.addEventListener('scroll',
  function(){
   var element=document.getElementById("work-div4");
    var position=element.getBoundingClientRect();
    if(position.top <= window.innerHeight && position.bottom >=0){
      work_div4();
      window.removeEventListener('scroll',arguments.callee);
    }});
/* end function for move work div */

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
/* for knowledge alert */

 var alert=document.getElementById('alert');
 function toHover(elem){
  rect=document.getElementById(elem).getBoundingClientRect();
  x=rect.x - 20;
  y=rect.y-320;
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
 /** end knowledge alert */