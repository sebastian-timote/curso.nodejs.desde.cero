"use strict";

// 'use strict'
// $(() => {
//     let nombre = 'jonathan mircha';
//     //alert(`hola ${nombre}`);
// })
(function (d, w, $, WOW) {
  'use strict';

  var wow = new WOW();
  $(d).ready(function () {
    $(".owl-carousel").owlCarousel({
      //codigo necesario para ejecutar carousel de imagenes
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true
    });
    $('.nav').find('a').click(function (e) {
      //busca los enlaces de .nav
      var idEnlace = $(this).attr('href');
      $('html, body').animate({
        //anima el scroll del document
        scrollTop: $(idEnlace).offset().top
      }, 1000);
    });
  });
  wow.init();
})(document, window, jQuery, WOW); //funcion auto ejecutable