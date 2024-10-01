const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

function toggleMenu() {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
}

menu.onclick = () => toggleMenu();

menu.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        toggleMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navmenu.classList.contains('open')) {
        toggleMenu();
    }
});
