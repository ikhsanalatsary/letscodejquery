$('.confirmation').on('click', 'button', function() {
  $(this).closest('.confirmation').find('.detail').slideToggle();
});