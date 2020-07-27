$(document).ready(function () {
    var letters = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"
    ];

    for (var i = 0; i < letters.length; i++) {

        var letterBtn = $("<div>");

        letterBtn.addClass("letter-button letter letter-button-color");

        letterBtn.attr("data-letter", letters[i]);

        letterBtn.text(letters[i]);

        $("#buttons").append(letterBtn);
    }

    $(".letter-button").on("click", function () {
        var fridgemagnet = $("<div");

        fridgemagnet.addClass("letter fridge-color");

        fridgemagnet.text($(this).attr("data-letter"));

        $("#display").append(fridgemagnet);
    });

    $("#clear").on("click", function () {
        $("#display").empty();
    });

});