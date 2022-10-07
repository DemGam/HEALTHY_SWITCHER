$(document).ready(function(){

// ===SLICK SLIDER===
  $('.slider').slick({
    slidesToShow: 2,
    responsive:[
      {
        breakpoint:768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint:576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000
        }
      }
    ]
  });

//===MENU BURGER===
  $('.header__burger').click(function(event) {
    $('.header__burger,.menu').toggleClass('_active');
    $('body').toggleClass('lock');
  });

  $('.menu__item').click(function(event) {
    if ($('.menu').hasClass('_active')) 
    {
      $('.header__burger,.menu').removeClass('_active');
      $('body').removeClass('lock');
    }
  });

//=====HEADER - HIDE as scroll
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {

//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "calc(-50px - (90 - 50) * ((100vw - 375px) / (1140 - 375)) - 2px)";
//   }
//   prevScrollpos = currentScrollPos;
// }


//=====HEADER - SHADE as scroll
  window.addEventListener("scroll", () => {
    let navbar = document.getElementById("navbar");
    if (window.innerWidth <= 576) {
      if (window.pageYOffset >= 60 && !navbar.classList.contains("_shaded")) {
        navbar.classList.add("_shaded");
      } 
      if (window.pageYOffset < 60 && navbar.classList.contains("_shaded")) {
        navbar.classList.remove("_shaded");
      }
    }
    if (window.innerWidth > 576 && navbar.classList.contains("_shaded")) {
      navbar.classList.remove("_shaded");
    }
  })

});