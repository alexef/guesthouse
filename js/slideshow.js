function Slideshow(selector, images) {
  this.images = images;
  this.counter = 0;
  this.currentImage = 0;
  this.replaceDiv = selector;
  this.replaceLeft = function () {
    var parent = this;
    parent.currentImage--;
    if (parent.currentImage < 0) { parent.currentImage = parent.images.length-1; }
    $(parent.replaceDiv).fadeTo('slow', 0.3, function() {
      $(parent).css("background-image", 'url(images/' + parent.images[parent.currentImage] + ')');
    }).fadeTo('slow', 1);
  };
  this.replaceRight = function () {
    var parent = this;
    parent.currentImage++;
    if (parent.currentImage > parent.images.length-1) { parent.currentImage = 0; }
    $(parent.replaceDiv).fadeTo('slow', 0.3, function() {
      $(parent).css("background-image", 'url(images/' + parent.images[parent.currentImage] + ')');
    }).fadeTo('slow', 1);
  };
  this.start = function () {
    var parent = this;
    setInterval(function () {parent.replaceRight();}, 5000)
  };
}

$(document).ready( function () {
  
  var images = ["Carousel1.png", "Carousel2.png", "Carousel3.png"];

  var slideshow = new Slideshow('#search', images);

  $('body').on("click", '.left-a', function () {slideshow.replaceLeft()});
  $('body').on("click", '.right-a', function () {slideshow.replaceRight()});

  slideshow.start();
});