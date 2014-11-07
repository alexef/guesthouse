$( document ).ready(function() {

  
  var images = ["Carousel1.png", "Carousel2.png", "Carousel3.png"];
  var leftArrow = $('.left-a');
  var rightArrow = $('.right-a');
  var counter = 0;
  console.log(counter);
  
  rightArrow.click(function () {
    counter++;
    if (counter > images.length -1) {
      counter = 0;
    }
    console.log(counter);
    $('#search').css('background', 'url(images/' + images[counter] + ')');

  });
  
  leftArrow.click(function () {
    if (counter < 1) {
      counter = images.length;
    }
    counter--;
    console.log(counter);
    $('#search').css('background', 'url(images/' + images[counter] + ')');
  });


});
