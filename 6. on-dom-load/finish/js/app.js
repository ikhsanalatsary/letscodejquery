// always use document ready function 
$(document).ready(function() {
  $('.confirmation').on('click', 'button', function() {
    $(this).closest('.confirmation').find('.detail').slideToggle();
  });
});
