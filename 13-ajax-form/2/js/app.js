$(function() {
  $('form').on('submit', function(e) {
    var form = $(this);

    $.ajax('book.html', {
      //type: 'POST',
      type: 'GET',
      complete: function() {
        $('#vacation').removeClass('is-loading');
      },
      success: function(result) {
        form.remove();
        $('#vacation').hide().html(result).fadeIn();
      },
      error: function() {
        alert('An error occurred fetching the latest photos. Please try again.');
      },
      beforeSend: function() {
        $('#vacation').addClass('is-loading');
      }
    });
  });
});