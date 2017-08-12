$(document).ready(function() {
  $('button').on('click', function() {
    $.ajax({
      url: '/favorite/1',
      type: 'get',
      success: function(result) {
        var favorite = $('.favorite');
        favorite.find('p').html(result.name);
        favorite.find('img')
                .attr('src', result.image);
      }
    });
  });
});