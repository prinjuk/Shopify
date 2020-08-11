

//sliderMain
$('#promoSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<ion-icon name='arrow-back-outline'></ion-icon>","<ion-icon name='arrow-forward-outline'></ion-icon>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
//sliderAds4piece
$('#customTabSlider_1,#customTabOffer').owlCarousel({
    loop:true,
    margin:50,
   
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots:false,
    nav: true,
    navText: ["<ion-icon name='arrow-back-outline'></ion-icon>","<ion-icon name='arrow-forward-outline'></ion-icon>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
//sliderclientsection
$('#clientSlider').owlCarousel({
    loop:true,
    margin:50,
   
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots:false,
  
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
    }
});
//slidercollectionsection
$('.customTabSlider_2').owlCarousel({
    loop:true,
    margin:30,
   
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots:false,
    nav: true,
    navText: ["<ion-icon name='arrow-back-outline' class='nav left'></ion-icon>","<ion-icon name='arrow-forward-outline' class='nav right'></ion-icon>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
//slidercollectionsection
$('#customTabSlider_3').owlCarousel({
    loop:true,
    margin:50,
   
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots:false,
    nav: true,
    navText: ["<ion-icon name='arrow-back-outline'></ion-icon>","<ion-icon name='arrow-forward-outline'></ion-icon>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});
//slidertestimonialsection
$('.customTestimonial').owlCarousel({
    loop:true,
    margin:50,
   
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
//sliderinstagramsection
$('.customfullslider').owlCarousel({
    loop:true,
    margin:0,
   
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});