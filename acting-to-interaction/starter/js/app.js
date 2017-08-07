$(document).ready(function() {
  // create dom node paragraph `<p>`
  var harga = $('<p>Mulai dari 500 ribu</p>');

  // delay execution dalam 3 detik
  setTimeout(function() {
    // Tambahkan  element paragraph harga
    $('.detail').append(harga);

    // kemudian remove button nya
    $('button').remove();

  }, 3000);

});
