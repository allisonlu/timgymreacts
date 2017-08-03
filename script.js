/*
TODO:
 - generate new image every time button is clicked
 - random coordinates
 - getting random number twice
*/

$(document).ready(function() {

  $('.image-button').click(function() {
    getDog();
  });

});

/* loadImages() pushes images from img folder into an array
*/
function loadImages() {
  var images = new Array();

  // make upper bound dynamic
  for (var i=2; i<=10; i++) {
    images.push("img/dog-"+(i)+".jpg");
  }

  return images;
}

/* randomImage returns a random image (type string) from argument array
    @param a is an array
    @return random image (string) from array a
*/
function randomImage(a) {
  return a[Math.floor(Math.random()*(a.length))];
}

function getDog() {
    var random_doge = randomImage(loadImages());
    console.log("random dog: " + random_doge);
    $('.dog-image').html("<img src='" + random_doge + "'>");
}
