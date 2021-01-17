var x = document.getElementById("videoV");
$('#clickToPlay').click(function(){
    x.controls = true;
    x.play();
    $(this).addClass('d-none');
    console.log(x.paused);
});
$('#videoV').hover(function(){
    state = x.paused;
    if(state){
        $('#clickToPlay').removeClass('d-none');
        x.controls = false;
    }
    else{
        $('#clickToPlay').addClass('d-none');
        x.controls = true;
    }
});