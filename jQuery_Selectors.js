// mouse enter
$(document).ready(function(){
    $("h3").mouseenter(function(){
        $("h3").css({"border-bottom":"2px dashed green","width":"100px","background-color":"yellow","color":"red"})
    })
});


// mouse leave
$(document).ready(function(){
    $("sub").mouseleave(function(){
        $("sub").hide(); //we can give h3 next to sub it will work.
        $("h3").hide();
    });
});


// single click  and append
$(document).ready(function(){
    $(".button01").click(function(){
        alert("A text will add next to   paragraph")
        $("#para01").append("<u>  Mahesh Badanakurhti</u>")

    });

});



// double click prepend
$(document).ready(function(){
    $(".button02").dblclick(function(){
        alert("A text will add bigining  to   id name ")
        $("#para02").prepend(  "<u>   Mahesh Badanakurhti</u>")

    });

});

// mouse leave  before
$(document).ready(function(){
    $(".button03").mouseleave(function(){
        alert("A text will add bigining  to   class ")
        $("#para03").before("<u>  Mahesh Badanakurhti</u>")

    });

});


// mouse enter after
$(document).ready(function(){
    $(".button04").mouseenter(function(){
        alert("A text will add bigining  to   class ")
        $("#para04").after("<u>  Mahesh Badanakurhti</u>")

    });

});


// we are going to perform form events
$(document).ready(function(){
    $(".input01").focus(function(){
        $(this).css({"background-color":"yellow","color":"red"});

    });
        $(".input01").blur(function(){
            $(this).css({"background-color":"green","color":"white"});
        });
    });



















