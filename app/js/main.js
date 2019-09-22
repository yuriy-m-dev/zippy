$(function(){
    $('.header__slider').slick({
        arrows: false,
        variableWidth: true,
        dots: true
    });

    $('.video__inner').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        infinite: true,
        centerPadding: '50px'
    });

    $('.life__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        asNavFor: '.slider__nav'
      });
      $('.slider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.life__slider',
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        infinite: false
      });
});