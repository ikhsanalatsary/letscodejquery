$(function() {
  $('.vacation').priceify();
});

$.fn.priceify = function() {
  this.each(function() {
    var vacation = $(this);
    vacation.on('click.priceify', 'button', function() {
      var price = vacation.data('price'),
          details = $('<p>Book 3 days for $'+(3 * price)+'</p>');
      vacation.addClass('is-showing-price').append(details);
    });
  });
};