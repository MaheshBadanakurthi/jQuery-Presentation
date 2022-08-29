// we can use 2 classes or 1 id and classes
$(document).ready(function(){
    $(".para01,#para02").css("color","red");
});
//$("p").hide()/show() we can hide and show events
 

$(document).ready(function(){
    $("div:even").css("color","green") // we can use b/div:even/first here
});