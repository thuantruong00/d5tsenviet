    $('#banner-1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        smartSpeed:500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('#service-02').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });
    $('#product-detail').owlCarousel({
        loop:true,
        margin:10,
        dots:false,
        responsive:{
            0:{
                items:3.5
            },
            600:{
                items:3.5
            },
            1000:{
                items:4.5
            }
        }
    });
    tempItemX = 1;
    $('#slider-count-0').owlCarousel({
        loop:false,
        margin:10,
        dots:false,
        dotsEach:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        onDragged:function funcIndex(event){
            var itemx = event.item.index;
            tempItemX = itemx+1;
            var countx = event.item.count;
            // array start = 0 /=> itemx++ = index
            resultPos('#slider-count-0',tempItemX);
        },
    });
    
    resultPos('#slider-count-0');
    function buttonPrev(keyid){
        let btnPrev = $(keyid).find('button.owl-prev');
        $(btnPrev).click(function(event){
            tempItemX-=1;
            // tempItemX is value of index
            if(tempItemX<=1){
                tempItemX = 1;
            }
            resultPos(keyid,tempItemX);
            
        });
    }
    function buttonNext(keyid){
        let value = $(keyid).find('.item').length;
        // let valueClone = $(keyid).find('.cloned').length;
        // value -= valueClone;
        let btnNext = $(keyid).find('button.owl-next');
        $(btnNext).click(function(event){
            
            tempItemX+=1;
            // tempItemX is value of index
            if(tempItemX>=value){
                tempItemX = value;
            }
            console.log(tempItemX);
            resultPos(keyid,tempItemX);
            
        });
    }
    
    function resultPos(keyid, keyindex = 1){
        let temp0 = $(keyid).attr('key');
        let value = $(keyid).find('.item').length;
        // let valueClone = $(keyid).find('.cloned').length;
        // value -= valueClone;
        str = '<strong>'+keyindex+'</strong>'+'<span class="c-light-text"> / '+value+'</span>';
        $(temp0).html(str);
    }
    $('.wrap-btn-owl-0 .owl-next').click(function(e){
        let value = $('#slider-count-0').find('.item').length;
        tempItemX+=1;
        // tempItemX is value of index
        if(tempItemX>=value){
            tempItemX = value;
        }
        console.log(tempItemX);
        resultPos('#slider-count-0',tempItemX);
        $('#slider-count-0').trigger('next.owl.carousel', [300]);
    });
    $('.wrap-btn-owl-0 .owl-prev').click(function(e){
        tempItemX-=1;
        // tempItemX is value of index
        if(tempItemX<=1){
            tempItemX = 1;
        }
        resultPos('#slider-count-0',tempItemX);
        $('#slider-count-0').trigger('prev.owl.carousel', [300]);
    });