function thatWasEasy() {
alert("That was easy!");
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeyPress);

function delegateKeypress(event) {
if (event.keyCode == 32) {
$("#easy").trigger("click");
}
}
