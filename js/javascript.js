function calcularCostoEnvio() {
  let distanciaEnKm = prompt('Ingrese la distancia');
  const distanciaLimite = 40; 

  if (distanciaEnKm <= distanciaLimite) {
    return alert("El envío es gratis.");
  } else {
    const costoPorKm = 10;
    const costoEnvio = (distanciaEnKm - distanciaLimite) * costoPorKm;
    return alert(`El costo de envío es $${costoEnvio.toFixed(2)}.`);
  }
}

// Carrusel

(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();












  
  
  
  
  
  
  







