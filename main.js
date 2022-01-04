console.clear();
//Listener events to hide/show nevigation
const burger= document.querySelector('.burger');
const nav= document.querySelector('.nav-links');
const navLinks= document.querySelectorAll('.nav-links li');

const navSlide= () => {
    burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  });
  navLinks.forEach((link,index) => {
    link.style.animation='navLinkFade 0.5s ease forwards ${index / 7}s';
    console.log(index / 5 + 0.2);
  });
}
navSlide();

// display field data
var demofield = document.querySelector("#submit");
demofield.addEventListener("click", function(event){
  if(document.querySelector('form').checkValidity()){
   event.preventDefault();
   console.log("Prevent default submission");
   alert(demofield.value);
  }
});