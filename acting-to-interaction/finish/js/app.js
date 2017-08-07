$(document).ready(function() {
  // create dom node paragraph `<p>`
  var harga = $('<p>Mulai dari 500 ribu</p>');
  // listening event saat klik
  $('button').on('click', function() {

    $('.room').append(harga);

    $('button').remove();

  });

});
