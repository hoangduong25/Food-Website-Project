const menu = document.querySelector('#menu_bars');
const navbar = document.querySelector('.nav_bar');
const btns = navbar.querySelectorAll('.nav_btn ');

// Active tabs
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActiveClasses()
        btn.classList.add('active')
    })
})
function removeActiveClasses() {
    btns.forEach(btn => {
        btn.classList.remove('active');
    })
}

// Menu bars
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// search box
document.querySelector('#search_icon').onclick = () => {
    document.querySelector('#search_form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search_form').classList.remove('active');
}

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });