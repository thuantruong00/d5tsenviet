$('document').ready(()=>{
    anc = $('.anchor-header-scroll').offset().top;
    value0 = $('.anchor-off').offset().top;
    $(window).scroll((event)=>{
        scrolly= $(window).scrollTop();
        if(scrolly<anc || (scrolly>value0-200)){
            $('.onTopMenu').removeClass('headerScroll');
        }
        else{
            $('.onTopMenu').addClass('headerScroll');
        }
    });
    
})