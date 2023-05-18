// * To Do #1 * Number of ghosts caught

var caught = 0;
var missed = 0;

// * To Do #1 * Number of ghosts missed

function spawnGhost() {
  var newGhost = $("<img>"); // * To Do #2 * Create the img element
  newGhost.attr(
    "src",
    "https://github.com/first-code-academy/jQueryImages/blob/master/ghost.png?raw=true"
  );
  //* To Do #3 * Add a new class "ghost"
  newGhost.addClass("ghost");
  newGhost.css("left", Math.random() * 100 + "%");
  //* To Do #3 * Randomize the ghost's x position
  //*To do #4 * Append the ghosts to the body of the webpage
  newGhost.appendTo("body");

  $(newGhost).animate({ top: "0%" }, 5000, function () {
    //Complete function - only called when the animate function is complete. That is, when the ghost reaches the top.

    // *To do #5 * If the ghost reaches the top, it means the ghost is missed
    missed++;
    $("#missed").text("Missed: " + missed);
    $(this).fadeOut(500);
  });

  $(newGhost).on("click", function () {
    // *To do #6 * When the ghost is clicked, it is caught.
    caught++;
    $("#caught").text("Caught: " + caught);
    // * To do #7 *When the ghost is caught, stop the animate function immediately.
    $(this).stop();
    $(this).fadeOut(500);
  });
}

// * To do #8 * fade out the prompt text in the beginning
$("warn").fadeOut(2000);
// * To do #9 * Repeatedly call the "spawnGhost" function by the interval of 1000ms.
setInterval(spawnGhost, 1000);
