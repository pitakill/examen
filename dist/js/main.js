(function (){
  'use strict';

  function timeOut() {
    window.setTimeout(animate, 5000);
  };

  function animate() {
    $('#fadeOut').addClass('animated fadeOutUp');
  };

timeOut();

})()
