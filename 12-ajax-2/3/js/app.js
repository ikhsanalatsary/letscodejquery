function Confirmation(el) {
  var confirmation = this;

  this.loadConfirmation = function() {
    $.ajax('confirmation.html', {
      timeout: 3000,
      success: function(response) {
        this.ticket.html(response).slideDown();
      },
      error: function(request, errorType, errorMessage) {
        alert('Error: ' + errorType + ' with message: ' + errorMessage);
      },
      beforeSend: function() {
        this.el.addClass('is-loading');
      },
      complete: function() {
        this.el.removeClass('is-loading');
      }
    });
  }

  this.showBoardingPass = function(event) {
    event.preventDefault();
    confirmation.el.find('.view-boarding-pass').hide();
    confirmation.el.find('.boarding-pass').show();
  }

  this.el = el;
  this.ticket = this.el.find('.ticket');

  this.el.on('click', 'button', this.loadConfirmation);
  this.ticket.on('click', '.view-boarding-pass', this.showBoardingPass);
};

$(function() {
  new Confirmation($('#bali'));
  new Confirmation($('#lombok'));
});
