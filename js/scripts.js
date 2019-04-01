var listindex = 0;
$(document).ready(function () {
  addListItem();
  $("#questions").submit(function (event) {
    event.preventDefault();

    for (i = listindex; i > 0; --i) {
      $("#finalList").prepend(
        "<li>" +
        $("#inputGroup" + i + " input").val() +
        "</li>"
      );
    };

    $("#finalList").fadeIn();
  });

  $("#addItem").click(function (event) {
    addListItem();
  });
});


function addListItem () {
  $("#form-list").prepend(
  '<div id="inputGroup' + listindex++ + '" class="form-group">' +
  $("#form-list #inputGroup").html() + '</div>');
  console.log(
  '<div id="inputGroup' + listindex + '" class="form-group">' +
  $("#form-list #inputGroup").html() + '</div>');

}
