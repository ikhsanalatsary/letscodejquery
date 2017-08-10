// always use document ready function
$(document).ready(function() {

  $('.confirmation').on('click', 'button', showDetail);

  $('.confirmation').on('mouseenter', 'h3', showDetail);
});


function showDetail() {
  $(this).closest('.confirmation').find('.detail').slideToggle();
}
