window.onload = function () {
//Sticky navigation bar functionality.
    window.onscroll = function () {
        stickyNav()
    };
    const navigationBar = document.getElementById('nav-bar');
    let sticky = navigationBar.offsetTop;
    const contentContainerElement = document.getElementById('main-container');

    function stickyNav() {
        if (window.pageYOffset >= sticky) {
            contentContainerElement.style.paddingTop = '48px';
            navigationBar.classList.add('sticky');
        } else {
            navigationBar.classList.remove('sticky');
            contentContainerElement.style.paddingTop = '0';
        }
    }
};


//TODO Make it so that when a link is active the color of the button in the nav bar is changed.
/*
const homeButtonElement = document.getElementById('home-button');
const animeWikiButtonElement = document.getElementById('anime-wiki-button');
const wallpapersButtonElement = document.getElementById('wallpapers-button');
const siteInfoButtonElement = document.getElementById('site-info-button');

let allButtons = document.querySelectorAll('nav-bar');

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function () {
    });
}

 */