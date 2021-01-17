$('document').ready(()=>{
    temp0 = $('.set-width');

    var dataArray = $('.mobile-slider').each((index,element)=>{
        var item = $(temp0[index]).attr('data-w-item');
        
        var r1 = $(element).attr('data-id')+' .site';
        var getlength = $(r1).length;
        var windowWidth = $(window).width();

        $(window).resize(()=>{
            windowWidth = $(window).width();  
            if(windowWidth<=992){
                item = Number(item);
                result = (item)*getlength+20;
                
                $(element).find('.site').css('width',item);
                $(temp0[index]).css('width',result);
            }
            else{
                $('.mobile-slider .site').css('width','100%');
                $(temp0[index]).css('width','');
            }
        });
        if(windowWidth<=992){
            item = Number(item);
            result = (item)*getlength+20;

            $(element).find('.site').css('width',item);
            $(temp0[index]).css('width',result);
        }
        else{
            $('.mobile-slider .site').css('width','100%');
            $(temp0[index]).css('width','');
        }

    });
});