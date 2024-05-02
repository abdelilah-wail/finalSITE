const addEventOnElement=function(elements,eventType,callBack){
    for(let i=0,len=elements.length;i<len;i++){
        elements[i].addEventListener(eventType,callBack);
    }
}

const navbar=document.querySelector("[data-navbar]");
const navbarToggler=document.querySelector("[data-nav-toggler]");
const navLinks=document.querySelectorAll("[data-nav-link");

const toggleNav=function(){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}

navbarToggler.addEventListener("click",toggleNav);

const navClose =() =>{
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
}

addEventOnElement(navLinks,"click",navClose);

const header=document.querySelector("[data-header]");

const activeEL =function(){
    if(window.scrollY>100){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
}

window.addEventListener("scroll",activeEL);


function modifyDiv() {
    var screenWidth = window.innerWidth;
    var headDiv = document.querySelector("[data-button]");
    var navbars = document.querySelectorAll("[data-navbarr]");
    var navmain = document.getElementById("M");
  
    if (screenWidth > 700) {
        headDiv.classList.add('hidden');
        navmain.classList.add('mainnnn');
        for (var i = 0; i < navbars.length; i++) {
            navbars[i].classList.remove('hidden');
        }
    } else {
        headDiv.classList.remove('hidden');
        navmain.classList.remove('mainnnn');
        for (var i = 0; i < navbars.length; i++) {
            navbars[i].classList.add('hidden');
        }
    }
}

modifyDiv();

window.addEventListener('resize', modifyDiv);
