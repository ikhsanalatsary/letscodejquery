$(document).ready(function() {
  $('.update-flight-status').on("click", function() {
    $.getJSON('/status', function(result) {
      var cityElements = $.map(result, function(city, index) {
        var listItem = $('<li></li>');
        $("<h3>"+city.name+"</h3>").appendTo(listItem);
        $("<p>"+city.status+"</p>").appendTo(listItem);
        return listItem;
      });
      $('.status-list').detach()
                       .html(cityElements)
                       .appendTo('.status')
    });
  });
});