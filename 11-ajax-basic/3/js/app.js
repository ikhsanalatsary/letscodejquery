$(function() {
  $('.confirmation').on('click', 'button', function() {
    $.ajax('confirmation.html', {
      timeout: 3000,
      success: function(response) {
        setTimeout(function() {
          $('.ticket').html(response).slideDown();
        }, 2000);
      },
      error: function(request, errorType, errorMessage) {
        alert('Error: ' + errorType + ' with message: ' + errorMessage);
      },
      beforeSend: function() {
        $('.confirmation').addClass('is-loading');
      },
      complete: function() {
        setTimeout(function() {
          $('.confirmation').removeClass('is-loading');
        }, 2000);
      }
    });
  });
  $('.view-boarding-pass').on('click', function(e) {
    e.preventDefault();
    $('.view-boarding-pass').hide();
    $('.boarding-pass').show();
  })
});
