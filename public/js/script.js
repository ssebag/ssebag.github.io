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
      {left:"100px"},{left:"30px",offset:0.5},{left:"30px",offset:0.5}],{duration:4000,easing:"ease-out"});
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
    {left:"-20px"},{left:"5px",offset:0.5},{left:"5px",offset:0.5}],{duration:2000,easing:"ease-in"});
}
function work_div2(){
  var div2=document.getElementById("work-div2");
  var animation=div2.animate([
      {left:"20px"},{left:"5px",offset:0.5},{left:"5px",offset:0.5}],{duration:2000,easing:"ease-in"});
}
function work_div3(){
  var div3=document.getElementById("work-div3");
  var animation=div3.animate([
      {left:"-20px"},{left:"5px",offset:0.5},{left:"5px",offset:0.5}],{duration:2000,easing:"ease-in"});
} 
function work_div4(){
  var div4=document.getElementById("work-div4");
  var animation=div4.animate([
      {left:"20px"},{left:"5px",offset:0.5},{left:"5px",offset:0.5}],{duration:2000,easing:"ease-in"});
} 
function work_div5(){
  var div5=document.getElementById("work-div5");
  var animation=div5.animate([
      {left:"20px"},{left:"5px",offset:0.5},{left:"5px",offset:0.5}],{duration:2000,easing:"ease-in"});
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
    window.addEventListener('scroll',
    function(){
     var element=document.getElementById("work-div5");
      var position=element.getBoundingClientRect();
      if(position.top <= window.innerHeight && position.bottom >=0){
        work_div5();
        window.removeEventListener('scroll',arguments.callee);
      }});
  
/* end function for move work div */
var alertGit=document.getElementById('alertGit');
var alertKnowledge=document.getElementById('alertKnowledge'); 
var alertWeb=document.getElementById('alertWeb');
function m(event){
  var xx=event.getBoundingClientRect().x;
  var yy=event.getBoundingClientRect().y;
  if(event.id == "linkGit"){
  alertGit.style.left=window.pageXOffset + xx+'px';
  alertGit.style.top=window.pageYOffset+yy+'px';
  alertGit.style.display="block";
  }
  else if(event.id == "linkWeb"){
    alertWeb.style.left=window.pageXOffset + xx+'px';
    alertWeb.style.top=window.pageYOffset+yy+'px';
    alertWeb.style.display="block";
    }
    else  if(event.id == "c & c++" || event.id == "Html" || event.id == "Css" || event.id == "Java" || event.id == "Dart" ||event.id == "Php" || event.id == "Js" || event.id == "Bootstrap" ||event.id == "Laravel" ||event.id == "Sql" ||event.id == "Mysql"){
      alertKnowledge.innerHTML = event.id;
      alertKnowledge.style.left=window.pageXOffset + xx+'px';
      alertKnowledge.style.top=window.pageYOffset+yy+'px';
      alertKnowledge.style.display="block";
      }
}
function leave(event){
  alertGit.style.display="none";
  alertWeb.style.display="none";
  alertKnowledge.style.display="none";

}