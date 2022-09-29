let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('#navbar')

menu.onclick = () =>{
    menu.classList.toggle('b-x');
    navbar.classList.toggle('b-x');
}