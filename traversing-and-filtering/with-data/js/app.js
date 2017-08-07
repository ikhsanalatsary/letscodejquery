$(document).ready(function() {
  // listening event saat klik
  $('button').on('click', function() {
    var jumlah = $(this).closest('.room').data('price');
    var harga = $('<p>Mulai dari ' + jumlah + ' ribu</p>');
    $(this).closest('.room').append(harga);

    $(this).remove();

  });

});
