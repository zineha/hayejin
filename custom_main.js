// navigation slideUp+slideDown
$('.main_menu>li, .sub_back').mouseenter(function(){
    $('.sub_menu, .sub_back').stop().slideDown()
})
$('.main_menu>li, .sub_back').mouseleave(function(){
    $('.sub_menu, .sub_back').stop().slideUp()
})

// slide




$(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                autoplay: false,
                }
        }
    ]
});