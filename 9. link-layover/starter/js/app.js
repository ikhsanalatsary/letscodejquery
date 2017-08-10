$(document).ready(function() {
  // listening event saat klik
  $('.room').on('click', 'button', function() {
     // create dom node paragraph `<p>`
    var harga = $('<p>Mulai dari 500 ribu</p>');
    $(this).closest('.room').append(harga);

    $(this).remove();

  });

});