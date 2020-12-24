
$(document).ready(function(){



 
    $('.rev_slider').slick({
 slidesToShow: 3,
      infinite: true,

  autoplay: true,
  autoplaySpeed: 2000,             

});
    $('.header__adaptiv').on('click',function(e){
        $('.menu__hidden-2').toggleClass('menu__visible')
         $('.header__logo').toggleClass('logofix')
         $('.header__inner').toggleClass('header__innerfix')
        $('.button-adaptive').toggleClass('animate')
    })


    });


