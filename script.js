/*
TODO:
 - generate new image every time button is clicked
 - random coordinates
*/

$(document).ready(function() {

  var random_doge = randomImage(loadImages());
  console.log("random dog: " + random_doge);

  var img = document.createElement("img");
  img.setAttribute('src', random_doge);
  $(img).addClass("dog-image");

  $('.image-button').click(function() {
    $(this).append(img);
  });

});

/* loadImages() pushes images from img folder into an array
*/
function loadImages() {
  var images = new Array();

  for (var i=1; i<=4; i++) {
    images.push("img/dog0"+(i)+".jpg");
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
