$(function(){
    $('.header__slider').slick({
        arrows: false,
        dots: true
    });

    $('.video__inner').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true
    });
});