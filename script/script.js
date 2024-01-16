let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    debugger;
    menu.classList.toggle('br-x');
    navbar.classList.toggle('open');
}