$(document).ready(function() {
  // listening event saat klik
  $('.room').on('click', 'button', function() {
     // create dom node paragraph `<p>`
    var harga = $('<p>Mulai dari 500 ribu</p>');
    $(this).closest('.room').append(harga);

    $(this).remove();

  });

  $('#wrapper').on('click', '.room', function() {
    // $(this).css('background-color', '#252b30');
    // $(this).css('border-color', '1px solid #967');
    // $(this).css({'border-color': '1px solid #967', 'background-color': 'blue'});
    // $(this).addClass('highlighted');
    $(this).toggleClass('highlighted');

    $(this).find('.show-more').show();
  });
});
