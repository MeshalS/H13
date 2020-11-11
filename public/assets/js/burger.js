// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    const id = $(this).data("id");
    const newdevour = 1

    const newbruger = {
      // creating the smae name in the controller 
      devoured: newdevour
    };

    // Send the PUT request.
    $.ajax("/api/BURGERS/" + id, {
      type: "PUT",
      data: newbruger
    }).then(
      function() {
        console.log("changed  to", newdevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
// creating object ---- انشاء اوبكجت للبرغر
    const burger1 = {
      burger_name: $("#ca").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/BURGERS", {
      type: "POST",
      data: burger1
    }).then(
      function() {
        console.log("created new bruger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/BURGERS/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted brruger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
