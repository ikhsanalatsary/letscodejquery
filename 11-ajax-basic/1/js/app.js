$(function() {
  $('.confirmation').on('click', 'button', function() {
    $(this).closest('.confirmation').find('.ticket').slideDown();
  });
  $('.view-boarding-pass').on('click', function(e) {
    e.preventDefault();
    $('.view-boarding-pass').hide();
    $('.boarding-pass').show();
  })
});
