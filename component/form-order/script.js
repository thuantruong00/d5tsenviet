$(".input-group-0").children("input, textarea").on("focusout", function(){
  if($(this).val() != "")
  {
      $(this).addClass("fill");
  }
  else{
      $(this).removeClass("fill");
  }
});
