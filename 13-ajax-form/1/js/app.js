$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    $('#vacation').hide().html("<p style='width:425px;'>Your vacation to Paris, France has been booked for $1196.00 for 4 nights. Confirmation #345feab.</p>").fadeIn();
  });
});
