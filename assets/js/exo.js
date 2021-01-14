$(function(){
   console.log ($("textarea"))
    $("textarea").css({"border" : "5px solid"});
    $("p").css({"border" : "10px solid red"});
    });



// $(function(){
//     $("#button1").click(function(){
//         $("textarea").css({"border" : "5px solid"});
//         $("p").css({"border" : "5px solid red"});
//     });
// });

$("p").last().addClass("w3r_font_color");
$('#button1').click(function () {
    $("textarea").add("p").css("border", "5px solid red");
});

