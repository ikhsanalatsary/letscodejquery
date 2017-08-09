$(document).ready(function() {
  // find and add event click
  $('.room').on('click', '.expand', function(event) {
    event.preventDefault();
    var showMore = $(this).closest('.room').find('.show-more');
    
    showMore.fadeToggle();
//    return false;
  });
  
  // listening event saat klik
  $('.room').on('click', 'button', function() {
     // create dom node paragraph `<p>`
    var harga = $('<p>Mulai dari 500 ribu</p>');
    $(this).closest('.room').append(harga);

    $(this).remove();

  });
});