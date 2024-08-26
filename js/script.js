let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

 menu.onclick = () =>{
    menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
};

var swiper = new Swiper(".home-slider", {
    effect: 'fade',
    autoplay: {
      delay: 2000,
    },
});

var swiper = new Swiper(".about-slider", {
  effect: 'fade',
  autoplay: {
    delay: 2000,
  },
});