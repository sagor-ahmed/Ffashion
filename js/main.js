





(function ($) {

"use strict";



$(".menu-trigger").on("click", function(){

$(".off-canvas-menu , .off-canvas-overlay").addClass("active");

});


$(".menu-close,.off-canvas-overlay,.off-canvas-menu ").on("click", function(){
    $(".off-canvas-menu , .off-canvas-overlay").removeClass("active");
});


$(".off-canvas-menu ul li a").on("click", function(){
    $(".off-canvas-menu , .off-canvas-overlay").removeClass("active");
});




  // 0. Testimonial Slider Js

  $('.homepage-slides').owlCarousel({

    loop: true,
    autoplay: false,
    items: 1,
   navText: ['<i class="fa fa-arrow-left"> </i>', '<i class="fa fa-arrow-right"> </i>',],
    nav: true,
    dots:false
})


 $(".product-list").masonry({
 
 });


$(".product-promotions").owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        navText: false,
        autoplay: false,
        items: 1,

});



$(".brand-carousel-active").owlCarousel({

    loop:true,

    margin: 100,

    autoplay:false,

    autoplayTimeout:3000,

    smartSpeed:500,

    items:4,

    nav:false,
    navText: false,

    dots:false,

    responsive:{

        0:{

            items:1

        },

        767:{

            items:2

        },

        992:{

            items:3

        },

        1200:{

            items:4

        },

        1600:{

            items:4

        }

    }


});







  
})(jQuery);











const searchBtn = document.querySelector(".search-btn");
const searchForm = document.querySelector(".search-form");
const removebtn = document.querySelector(".remove-btn");
searchBtn.addEventListener("click", function () {
    searchForm.classList.add("active");
});

removebtn.addEventListener("click", function () {

    searchForm.classList.remove("active");
});

























