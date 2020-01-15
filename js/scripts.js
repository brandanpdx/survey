$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var DOB = $("#DOB").val();
    var color = $("#color").val();
    var animal = $("input:radio[name=animal]:checked").val();
    var eggs = $("#eggs").val();

    $(".name").text(name);
    $(".DOB").text(DOB);
    $(".color").text(color);
    $(".animal").text(animal);
    $(".eggs").text(eggs);

    $("#result").show();
  });
});