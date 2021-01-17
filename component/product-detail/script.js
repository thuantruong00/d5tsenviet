$(document).ready(function(){

$('.element-load').click(function(){
    let link = $(this).find('img').attr('link');
    let state = $(this).attr('data');
    console.log(state);
    showContent(link,state);
});
function showContent(link,state){
    let str = '';
    if(state =='img'){
        str = '<img src="'+link+'" alt="" class="img-fluid">';
    }
    else{
        str = '<video width="100%" height="auto" controls>'+
    '<source src="'+link+'" type="video/mp4">'+
    '<source src="'+link+'" type="video/ogg">'+
  'Your browser does not support the video tag.'+
  '</video>';
    }
    
    $('.content-load #show-content').html(str);
}
// content-load
});