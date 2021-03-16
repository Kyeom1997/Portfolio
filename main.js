'use strict';

// Make Navbar transaparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
const target = event.target;
const link = target.dataset.link;
if (link == null) {
    return;
}
navbarMenu.classList.remove("open");
scrollIntoView(link);
});

function scrollIntoView(e) {
const scrollTo = document.querySelector(e);
scrollTo.scrollIntoView({ behavior: "smooth" });

};

const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", () => {
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView({ behavior: "smooth" });
if(link == null) {
    return;
}
contactMe.classList.remove("open");
scrollIntoView(link);
});


// Make home slowly foad to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});










function scrollIntoView(e) {
const scrollTo = document.querySelector(e);
scrollTo.scrollIntoView({ behavior: "smooth" });
}  

