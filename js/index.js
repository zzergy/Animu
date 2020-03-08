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
            mainContainerElement.style.paddingTop = navigationBar.offsetHeight + 'px';
            navigationBar.classList.add('sticky');
        } else {
            navigationBar.classList.remove('sticky');
            mainContainerElement.style.paddingTop = '0';
        }
    }

    //SPA Single page Layout
    const allNavigationBarButtons = document.querySelectorAll('#nav-bar > li > a');
    const contentContainerElement = document.getElementById('content-container');
    const requestUtil = new RequestUtil();

    function loadContentInContainer(pageName, requestUtil, contentContainerElement) {
        requestUtil.getHTML(pageName + ".html", function (receivedHTML) {
            contentContainerElement.innerHTML = receivedHTML;
        });
    }

    loadContentInContainer("anime-listing", requestUtil, contentContainerElement);

    for (let i = 0; i < allNavigationBarButtons.length; i++) {
        allNavigationBarButtons[i].addEventListener('click', function (event) {
            //Active button
            const previousActiveButton = document.querySelector('.nav-active');
            previousActiveButton.classList.remove('nav-active');
            this.classList.add('nav-active');


            //Disables "a" tag default click behaviour. It doesn't redirect.
            event.preventDefault();

            const url = this.href;
            requestUtil.getHTML(url, function (receivedHTML) {
                contentContainerElement.innerHTML = receivedHTML;
                window.scrollTo(0,501);
            });
        });
    }
};

