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

  $('#wrapper').on('click', '.room', function() {
    // $(this).css('background-color', '#252b30');
    // $(this).css('border-color', '1px solid #967');
    // $(this).css({'border-color': '1px solid #967', 'background-color': 'blue'});
    // $(this).addClass('highlighted');
    $(this).toggleClass('highlighted');
    // $(this).animate({'top': '-20px'});

    // if ($(this).hasClass('highlighted')) {
    //   $(this).animate({'top': '-20px'}, '400');
    // } else {
    //   $(this).animate({'top': '0px'});
    // }


    $(this).find('.show-more').show();
  });
});
