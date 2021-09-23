const menu_btn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menu_btn.onclick = () => {
    menu_btn.classList.toggle('fa-times');
    navbar.classList.toggle('fa-active');
}

window.onscroll =() => {
    menu_btn.classList.remove('fa-times');
    navbar.classList.remove('fa-active');
}

let imgToggle = document.querySelectorAll('.img-toggle img');
imgToggle.forEach(image => {
    image.onclick = () => {
            let src = image.getAttribute('src');
            document.querySelector('.main-home-image').src = src;
         }
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 0,
        },
        768: {
          slidesPerView: 2,
        },
    },
    loop: true,
    grabCursor: true,
   
});

