var confirmation = {
  init: function() {
    $('.confirmation').on('click', 'button', this.loadConfirmation);
    $('.ticket').on('click', '.view-boarding-pass', this.showBoardingPass);
  },

  loadConfirmation: function() {
    $.ajax('confirmation.html', {
      timeout: 3000,
      success: function(response) {
        $('.ticket').html(response).slideDown();
      },
      error: function(request, errorType, errorMessage) {
        alert('Error: ' + errorType + ' with message: ' + errorMessage);
      },
      beforeSend: function() {
        $('.confirmation').addClass('is-loading');
      },
      complete: function() {
        $('.confirmation').removeClass('is-loading');
      }
    });
  },

  showBoardingPass: function(event) {
    event.preventDefault();
    $('.view-boarding-pass').hide();
    $('.boarding-pass').show();
  }
};

$(function() {
  confirmation.init();
});
