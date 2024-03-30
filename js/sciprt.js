//Menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

//----------------------------------------------------------------

//Modal skills
const modal = document.getElementById("myModal");
const info__btn = document.querySelectorAll("#btn__modal");
const close = document.querySelector(".close");

//open btn
info__btn.forEach((item) => {
    item.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

//close btn
close.addEventListener('click', () => {
    modal.style.display = "none";
});

//close window
window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = "none";
    }
});