
$(document).ready(function() {

  var images = ["Carousel1.png", "Carousel2.png", "Carousel3.png"];
  var leftArrow = $('.left-a');
  var rightArrow = $('.right-a');
  var counter = 0;  
  var currentImage = 0; 
  
  function replaceImageLeft() {
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length-1;
    }
    $('#search').fadeTo('slow', 0.3, function() {
      $(this).css("background-image", 'url(images/' + images[currentImage] + ')');
    }).fadeTo('slow', 1);
  }
  
  function replaceImageRight() {
    currentImage++;
    if (currentImage > images.length-1) {
      currentImage = 0;
    }
    $('#search').fadeTo('slow', 0.3, function() {
      $(this).css("background-image", 'url(images/' + images[currentImage] + ')');
    }).fadeTo('slow', 1);
  };
  
  setInterval (function() {
    replaceImageRight();
  }, 5000);
  
  $('body').on("click", '.left-a', replaceImageLeft);
  $('body').on("click", '.right-a', replaceImageRight);
  
});

