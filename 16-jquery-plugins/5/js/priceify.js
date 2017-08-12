$.fn.priceify = function(options) {
  this.each(function() {
    var show = function() {
      var details = $('<p>Book '+ settings.days +' days for $'+(settings.days * settings.price)+'</p>');
      settings.vacation.addClass('is-showing-price').append(details);
    };
    var remove = function() {
      settings.vacation.fadeOut().off('.priceify'); 
    };

    var defaults = {
      days: 7,
      vacation: $(this),
      price: $(this).data('price')
    }
    var settings = $.extend({}, defaults, options);
    settings.vacation.on('click.show.priceify', 'button', show);
    settings.vacation.on('show.priceify', show);
    settings.vacation.on('click.remove.priceify', '.remove-vacation', remove);
  });
};