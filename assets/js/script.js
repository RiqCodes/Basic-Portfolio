$(document).ready(function (){
  
    $(".start_btn").click(function (){
      $('html, body').animate({
        scrollTop: $(".start").offset().top
      }, 1500);
    });
    
    $(".middle_btn").click(function (){
      $('html, body').animate({
        scrollTop: $(".middle").offset().top
      }, 2000);
    });
    
    $(".end_btn").click(function (){
      $('html, body').animate({
        scrollTop: $(".end").offset().top
      }, 2000);
    });
  });
  