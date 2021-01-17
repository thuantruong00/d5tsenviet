widthx = 0;
$('.wrap-slider-tab .nav-item').each(function(index, element){
    widthx += $(element).width();
    console.log(widthx);
    widthx+=15;
    $('.wrap-slider-tab').css('width',widthx+'px');
});