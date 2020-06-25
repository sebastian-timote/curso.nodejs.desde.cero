// 'use strict'
// $(() => {
//     let nombre = 'jonathan mircha';
//     //alert(`hola ${nombre}`);
// })
((d, w, $, WOW) => {
    'use strict';
    const wow = new WOW();
    $(d).ready(() => {
        $(".owl-carousel").owlCarousel({//codigo necesario para ejecutar carousel de imagenes
            items:3,
            loop:true,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
        });
        $('.nav').find('a').click(function (e) {//busca los enlaces de .nav
            let idEnlace = $(this).attr('href');

            $('html, body').animate({//anima el scroll del document
                scrollTop: $(idEnlace).offset().top
            },1000);
        });
    });
    wow.init();
})(document,window, jQuery, WOW);//funcion auto ejecutable