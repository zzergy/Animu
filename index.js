//Sticky navigation bar functionality.
window.onscroll = function () {stickyNav()};
const navigationBar = document.getElementById('nav-bar');
let sticky = navigationBar.offsetTop;
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navigationBar.classList.add('sticky');
    } else {
        navigationBar.classList.remove('sticky');
    }
}


//TODO Make it so that when a page is clicked the name of the page on the nav bar is purple.
/*
const homeButtonElement = document.getElementById('home-button');
const animeWikiButtonElement = document.getElementById('anime-wiki-button');
const wallpapersButtonElement = document.getElementById('wallpapers-button');
const siteInfoButtonElement = document.getElementById('site-info-button');

navigationBar.addEventListener('click', function () {
    if (homeButtonElement.style.color === '#8f86f3'){

    }
});

 */
