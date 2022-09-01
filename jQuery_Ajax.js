
// here we are using a text file called ajax.txt. But it converted to html when we are link it.
$(document).ready(function(){
    $('b').mouseenter(function(){
        $("#forBold").load('ajax.txt '); // here node is class in ajax.txt
    });
});