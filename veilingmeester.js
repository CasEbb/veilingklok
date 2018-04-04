var klok;

$(function() {
    $('#open').click(function() {
        klok = window.open('klok.html', 'klok');
    });

    $('#reset').submit(function() {
        var name = $('#name').val();
        var price = $('#price').val();
        klok.reset(name, price);
        $('#name').val('');
        $('#price').val('');
        return false;
    });

    $('#start').click(function() {
        klok.start();
    });

    $('#stop').click(function() {
        klok.stop();
    });
});