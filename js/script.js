$(document).ready(function(){
  $('.slider').slick({
    // centerMode: true,
    // centerPadding: '100px',
    // mobileFirst: true,
    slidesToShow: 2,
    responsive:[
      {
        breakpoint:1000,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint:640,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
});