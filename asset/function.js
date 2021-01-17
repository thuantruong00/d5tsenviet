$('.navBranch').click(function(){
    $('.dark-layer').toggleClass('show');
    $('.menu-mobile').toggleClass('show');
    $('body').toggleClass('hidden');
});
$('.dark-layer-branch').click(function(){
    $('.dark-layer').removeClass('show');
    $('.menu-mobile').removeClass('show');
    $('body').removeClass('hidden');
});

$('.showPass').click(function(){
    let temp = $(this).next();
    $(temp).attr('type','text');
    setTimeout(function(){
        $(temp).attr('type','password');
    }, 1500);
});
$(document).ready(function(){

    $('#check-addr-form').click(function(){
        ret = $(this).prop('checked');
        next = $('#check-addr-form').next();
        if(ret){
            $(next).find('.icon-check').removeClass('d-none');
            //console.log(v);
        }
        else{
            $(next).find('.icon-check').addClass('d-none');
        }
    });



    $('.main-content').scroll(function(){
        $('.shadow-top').css('opacity',1);
        $('.shadow-bot').css('opacity',1);
        setTimeout(function(){ 
            $('.shadow-top').css('opacity',0);
            $('.shadow-bot').css('opacity',0);    
         }, 1000);
    })


    $('.menu-mobile').addClass('animate');




})