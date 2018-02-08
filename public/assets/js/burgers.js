// console.log("this is burgers.js, I am connected.");
$(function () {
    $("#devourMe").on("click", function (event) {
        var id = $(this).data("newdevour");
        var newDevourState = {
            devoured: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed burger to", newDevour);
                // Reloading the page to get the updated list
                location.reload();
            }
        );
    });

    //adding new burger
    $(".create-form").on("submit", function (event) {

        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerSubmitS").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("new burger for da belly");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});