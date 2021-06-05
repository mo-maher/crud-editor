$(function(){
    $("h1,h2,h3,li,p").attr("contenteditable", "true");


    $(".add-btn").on('click',function(){
        $(this).parent().append("<h1></h1>");
      }); 



        $("section").append("<section></section>");
        $("p").append("<p></p>");
        $("li").append("<li></li>");
        $("h2").append("<h2></h2>");
        $("h3").append("<h></h>");


  });