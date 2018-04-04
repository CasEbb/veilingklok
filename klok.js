var currentTick = 0;
var interval;
var currentPrice;

init = function() {
    for (var i = 0; i < 100; i++) {
        var tick = $('<div class="tick"></div>');
        tick.attr('id', 'tick' + i);
        tick.appendTo('.face');
        tick.css('transform', 'rotate(' + i * 3.6 + 'deg)');
    }
}

reset = function(name, price) {
    $('#tick' + currentTick).removeClass('active');
    currentTick = 100 - (price % 100);
    $('#tick' + currentTick).addClass('active');

    $('#name').text(name);

    currentPrice = price;
    updatePrice();
}

start = function() {
    interval = setInterval(step, 100);
}

step = function() {
    $('#tick' + currentTick).removeClass('active');
    currentTick++;
    if (currentTick >= 100) currentTick = 0;
    currentPrice--;
    if (currentPrice <= 0) stop();
    $('#tick' + currentTick).addClass('active');
    updatePrice();
}

stop = function() {
    clearInterval(interval);
}

updatePrice = function() {
    var rounded = Math.ceil(currentPrice / 10) * 10;
    $('#price').html('&euro; ' + (rounded / 100).toFixed(2));
}

$(function() {
    init();
});