/* ===========================
   Birchwood Farm
   JavaScript
=========================== */

// --------------------------
// Loading Screen
// --------------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    },600);

});

// --------------------------
// Hero Slideshow
// --------------------------

const hero = document.querySelector(".hero");

const heroImages = [

"images/hero1.jpg",
"images/hero2.jpg",
"images/hero3.jpg"

];

let heroIndex = 0;

setInterval(()=>{

heroIndex++;

if(heroIndex >= heroImages.length){

heroIndex = 0;

}

hero.style.backgroundImage =
`url('${heroImages[heroIndex]}')`;

},5000);

// --------------------------
// Mobile Navigation
// --------------------------

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});

// --------------------------
// FAQ Accordion
// --------------------------

document.querySelectorAll(".faq-question").forEach(question=>{

question.addEventListener("click",()=>{

const answer = question.nextElementSibling;

if(answer.style.maxHeight){

answer.style.maxHeight = null;

}else{

document.querySelectorAll(".faq-answer").forEach(item=>{

item.style.maxHeight = null;

});

answer.style.maxHeight =
answer.scrollHeight + "px";

}

});

});

// --------------------------
// Review Slider
// --------------------------

const reviews =
document.querySelectorAll(".review");

let reviewIndex = 0;

function showReview(index){

reviews.forEach(review=>{

review.classList.remove("active");

});

reviews[index].classList.add("active");

}

setInterval(()=>{

reviewIndex++;

if(reviewIndex>=reviews.length){

reviewIndex=0;

}

showReview(reviewIndex);

},5000);

// --------------------------
// Gallery Lightbox
// --------------------------

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-image");

const closeLightbox =
document.getElementById("close-lightbox");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImage.src=image.src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

// --------------------------
// Back To Top
// --------------------------

const backButton =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backButton.style.display="block";

}else{

backButton.style.display="none";

}

});

backButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// --------------------------
// Scroll Reveal
// --------------------------

const reveals =
document.querySelectorAll("section");

function revealSections(){

const trigger =
window.innerHeight*0.85;

reveals.forEach(section=>{

const top =
section.getBoundingClientRect().top;

if(top<trigger){

section.classList.add("show");

section.classList.add("reveal");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();

// --------------------------
// Active Navigation
// --------------------------

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop =
section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// --------------------------
// Contact Form
// --------------------------

const form =
document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thanks for your message! This form is currently a placeholder."
);

form.reset();

});

}