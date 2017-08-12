$(function() {
  $('.vacation').priceify({ days: 5 });
});

$.fn.priceify = function(options) {
  this.each(function() {
    var settings = $.extend({
      days: 7,
      vacation: $(this),
      price: $(this).data('price')
    }, options);

    settings.vacation.on('click.priceify', 'button', function() {
      var details = $('<p>Book '+ settings.days +' days for $'+(settings.days * settings.price)+'</p>');
      settings.vacation.addClass('is-showing-price').append(details);
    });
  });
};