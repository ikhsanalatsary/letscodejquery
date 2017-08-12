$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    var form = $(this),
        vacation = $('#vacation');

    $.ajax('/book', {
      type: 'POST',
      data: form.serialize(),
      contentType: "application/json",
      dataType: 'json', 
      complete: function() {
        vacation.removeClass('is-loading');
      },
      success: function(result) {
        var msg = $("<p></p>");
        form.remove();
        msg.append("Destination: " + result.location + ". ");
        msg.append("Price: " + result.totalPrice + ". ");
        msg.append("Nights: " + result.nights + ". ");
        msg.append("Confirmation: " + result.confirmation+ ".");
        console.log(result)
        vacation.hide().html(msg).fadeIn();
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