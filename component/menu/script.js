$('.nav-bars').click(function(){
    $('.dark-layer-0').toggleClass('show');
    $('.menu-mobile').toggleClass('show');
    $('body').toggleClass('hidden');
});
$('.dark-layer-0').click(function(){
    $('.dark-layer-0').removeClass('show');
    $('.menu-mobile').removeClass('show');
    $('body').removeClass('hidden');
});
$(document).ready(function(){
    $('.menu-mobile').addClass('animate');
})