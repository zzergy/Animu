window.onscroll = function () {stickyNav()};
let navigationBar = document.getElementById('nav-bar');
let sticky = navigationBar.offsetTop;
function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navigationBar.classList.add('sticky');
    } else {
        navigationBar.classList.remove('sticky');
    }
}