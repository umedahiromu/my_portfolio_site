$(".navbar-brand").click(function(){
  $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
})

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position},speed);
    return false;
  });
});

$("#first_picture").click(function(){
  if($("#first_detail").css("display") == "none"){
    $(".detail_content").css("display","none");
    $("#first_detail").toggle();
  } else {
    $("#first_detail").css("display","none");
  }
});

$("#second_picture").click(function(){
  if($("#second_detail").css("display") == "none"){
     $(".detail_content").css("display","none");
  $("#second_detail").toggle();
  } else {
    $("#second_detail").css("display","none");
  }
});

$("#third_picture").click(function(){
  if($("#third_detail").css("display") == "none"){
    $(".detail_content").css("display","none");
    $("#third_detail").toggle();
  } else {
    $("#third_detail").css("display","none");
  }
});

$("#pc_picture").click(function(){
  if($(".isara_sample_picture1").css("display") == "none"){
    $(".isara_sample_picture2").css("display","none");
    $(".isara_sample_picture1").toggle();
  } else {
    $(".isara_sample_picture1").css("display","none");
  }
  return false;
});

$("#mobile_picture").click(function(){
  if($(".isara_sample_picture2").css("display") == "none"){
    $(".isara_sample_picture1").css("display","none");
    $(".isara_sample_picture2").toggle();
  } else {
    $(".isara_sample_picture2").css("display","none");
  }
  return false;
})