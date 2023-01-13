const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
	nav.classList.toggle('slide');
});
const processing = document.querySelector(".processing-bar");
setTimeout(() => {
	processing.style.opacity = 1;
	processing.style.width = processing. 
	getAttribute("data-bar") + '%';
}, 500);

const processing1 = document.querySelector(".processing-bar2");
setTimeout(() => {
	processing1.style.opacity = 1;
	processing1.style.width = processing1. 
	getAttribute("data-bar") + '%';
}, 500);

const processing2 = document.querySelector(".processing-bar3");
setTimeout(() => {
	processing2.style.opacity = 1;
	processing2.style.width = processing2. 
	getAttribute("data-bar") + '%';
}, 500);