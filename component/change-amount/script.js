$('document').ready(()=>{
    var tempArr = $('.result-amount');
    $('.amount .incr').each((index, element)=>{

        $(element).click(()=>{
            console.log(index);
            temp = $(tempArr[index]).attr('val');
            temp++;
            $(tempArr[index]).attr('val',temp);
            $(tempArr[index]).text(temp);
        });
    });

    $('.amount .decr').each((index, element)=>{

        $(element).click(()=>{
            temp = $(tempArr[index]).attr('val');
            temp--;
            if(temp<=0)
                temp=0;
            console.log(temp);
            $(tempArr[index]).attr('val',temp);
            $(tempArr[index]).text(temp);
        });
    });
})