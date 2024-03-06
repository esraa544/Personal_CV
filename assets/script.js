// 'use strict';
jQuery('.card-slider0').slick({
    slidesToShow:3,
    autoplay: true,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive:[
        {
        breakpoint: 805,
        settings: {
            slidesToShow: 2
        }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});