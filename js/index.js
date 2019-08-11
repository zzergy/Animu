import {RequestUtil} from "./requestUtil.js";

window.onload = function () {
//Sticky navigation bar functionality.
    window.onscroll = function () {
        stickyNav()
    };
    const navigationBar = document.getElementById('nav-bar');
    let sticky = navigationBar.offsetTop;
    const mainContainerElement = document.getElementById('main-container');

    function stickyNav() {
        if (window.pageYOffset >= sticky) {
            mainContainerElement.style.paddingTop = '48px';
            navigationBar.classList.add('sticky');
        } else {
            navigationBar.classList.remove('sticky');
            mainContainerElement.style.paddingTop = '0';
        }
    }

    const allNavigationBarButtons = document.querySelectorAll('#nav-bar > li > a');
    const contentContainerElement = document.getElementById('content-container');
    const requestUtil = new RequestUtil();

    for (let i = 0; i < allNavigationBarButtons.length; i++) {
        allNavigationBarButtons[i].addEventListener('click', function (event) {
            //TODO Make it so that when a link is active the color of the button in the nav bar is changed.

            //Disables "a" tag default click behaviour. It doesn't redirect.
            event.preventDefault();

            const url = this.href;
            requestUtil.getHTML(url, function (receivedHTML) {
                contentContainerElement.innerHTML = receivedHTML;
            });
        });
    }
};

