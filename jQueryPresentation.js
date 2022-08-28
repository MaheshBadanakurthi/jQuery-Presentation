$(document).ready(function(){
    $("am").click(function(){
      $("b").after(" <b>Appended text</b>.");
      //$('b').remove(); // After the click b tag will remove.
    });
});
document.getElementById('change').innerHTML="Ex";