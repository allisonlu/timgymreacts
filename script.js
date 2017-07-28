$(document).ready(function() {
  // loadImages();

  // Math.floor(Math.random()*10);

  $('.image-button').click(function() {
    $(this).after("hi").css("background", "red");
  });

});

// function loadImages() {
//   var images = new Array();
//
//   for (var i=0; i<50; i++) {
//     images.push("img/dog0"+(i+2)+".jpg");
//   }
// }
