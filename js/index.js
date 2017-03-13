$(document).ready(function(){
  $("body").show(500);
    $('.sub').slideUp();
  $(".list").hover(function(){
    $(".sub").slideToggle();
        
});
    $(window).scroll(function() {
    if ($(this).scrollTop() > $("#main").height()) {
        $(".nav").slideDown(300);
      
    }
    else{$(".nav").slideUp(300);}
      
      
      
  })
if($(window).height()>400& $(".main").css("height")<$(window).height()){
   $(".main").css("height", $(window).height());
}
 function simpleScrollTo(element, speed) {
    $('html:not(:animated), body:not(:animated)').animate({scrollTop: $(element).offset().top}, speed, function() {
        document.location.hash = $(element).attr('id');
    });
}
  
$(function() {
    $('.nav a,#menu a,h2 a').click(function (e) {
        e.preventDefault();
        
        simpleScrollTo($(this).attr('href'), 700);
    });
}); 
$("#adres").hide();
  $(".mail").hover(function(){
      $("#adres").slideDown(500);
      setTimeout(function(){
    $("#adres").slideUp(500);
}, 7000);
  });
  
  
})