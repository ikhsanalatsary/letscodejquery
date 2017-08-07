$(document).ready(function() {
  // listening event saat klik
  $('.room').on('click', 'button', function() {
    var kamar = $(this).closest('.room');
    var jumlah = kamar.data('price');
    var harga = $('<p>Mulai dari ' + jumlah + ' ribu</p>');
    kamar.append(harga);

    $(this).remove();

  });

  $('#filter').on('click', '.promo-filter', function() {
    $('.highlighted').removeClass('highlighted');
    $('.wrapper').filter('.promo').addClass('highlighted');
  });

  $('#filter').on('click', '.end-promo-filter', function() {
    $('.highlighted').removeClass('highlighted');
    $('.wrapper').filter('.end-promo').addClass('highlighted');
  });

});
