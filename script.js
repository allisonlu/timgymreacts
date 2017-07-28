/*
TODO:
 - random coordinates
 - random number generator
*/

$(document).ready(function() {
  loadImages();

  var img = document.createElement("img");
  img.setAttribute('src', "img/dog02.jpg");

  $('.image-button').click(function() {
    $(this).after("hi");
    $(this).after(img);
  });

});

function loadImages() {
  var images = new Array();

  for (var i=0; i<3; i++) {
    images.push("img/dog0"+(i+2)+".jpg");
  }

  console.log(images.length);
}

function randomImage(a) {
  var randomNum = Math.floor(Math.random()*(a.length));
  console.log(randomNum);
}
