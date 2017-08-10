$(document).ready(function() {
  // listening event saat tekan tombol
  $('.booking').on('keyup', '.quantity', function() {
    // create dom node paragraph `<p>`
    var harga = +$(this).closest('.booking').data('price');
    
    var lamaMenginap = +$(this).val();
    
    var jumlah = lamaMenginap * harga;
    
    $('#jumlah').text(jumlah);

  });

});
