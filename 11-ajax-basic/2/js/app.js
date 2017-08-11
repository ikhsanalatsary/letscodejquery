$(function() {
  $('.confirmation').on('click', 'button', function() {
    $.ajax('confirmation.html', {
      success: function(response) {
        $('.ticket').html(response).slideDown();
      }
    });

    // Shown, not demod
    // $.get('confirmation.html', function(response) {
    //  $('.ticket').html(response).slideDown();
    // });
  });
  $('.view-boarding-pass').on('click', function(e) {
    e.preventDefault();
    $('.view-boarding-pass').hide();
    $('.boarding-pass').show();
  })
});
