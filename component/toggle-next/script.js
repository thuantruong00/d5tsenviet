$(document).ready(function(){
    $('.btn-tg').click(function(event){
        animate = $(this).find('i');
        // svg = $(this).find('svg');
        $(animate).toggleClass('rotate');
        // $(svg).toggleClass('d-none');
        temp = $(this).next();
        $(temp).toggleClass('d-none');
    });
    toggleKey();
    function toggleKey(){
        $('.toggle-button').click(function(){
            temp = $(this).attr('value');
            $(temp).toggleClass('d-none');
        });
    }
    $('.toggle-user-menu').click(function(){
        $('.user-menu').toggleClass('hide-mb');
    });
})