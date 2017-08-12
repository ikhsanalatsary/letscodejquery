$(document).ready(function() {
  $('button').on('click', function() {
    $.ajax({
      url: '/favorites',
      type: 'get',
      success: function(result) {
        $.each(result, function(index, favorite) {
          var el = $('.favorite-' + index);
          el.find('p').html(favorite.name);
          el.find('img')
            .attr('src', favorite.image);
        });
      }
    });
  });
});