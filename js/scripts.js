var shooping_list = [];
var index = 0;

$(document).ready(function () {
  $("#formList").submit(function(event) {
    event.preventDefault();
    shooping_list = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val()];

    $("#questions").fadeOut(function () {
        shooping_list.sort();
        shooping_list.forEach(function(shooping_item) {

          if (shooping_item !== "") {
            shooping_item = shooping_item.toUpperCase();
            $("#shopping-display-list").append("<li>" + shooping_item + "</li>");
            console.log(shooping_item);
          }
        });
        $("#answers").fadeIn();
    });
  });
});
