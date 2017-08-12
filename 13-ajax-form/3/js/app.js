$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var form = $(this),
        vacation = $('#vacation');

    $.ajax('book.html', {
      type: 'GET',
      data: form.serialize(),
      complete: function() {
        vacation.removeClass('is-loading');
      },
      success: function(result) {
        console.log(result)
        form.remove();
        vacation.hide().html(result).fadeIn();
      },
      error: function() {
        alert('An error occurred fetching the latest photos. Please try again.');
      },
      beforeSend: function() {
        vacation.addClass('is-loading');
      }
    });
  });
});