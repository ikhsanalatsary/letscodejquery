  $(function() {
      $('.vacation').priceify();
    });

    $.fn.priceify = function() {
      console.log('Pricify Called');
      console.log(this);
    };