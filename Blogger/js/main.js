$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse= $('.nav-bar');

    // click event on menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
})

// owl-carousel for blog
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
});

// click to scroll top
$('.move-up span').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
})

// AOS initial
AOS.init();