function Slideshow(selector, images) {
    this.images = images;
    this.currentImage = 0;
    this.replaceDiv = selector;
    this.replaceLeft = function () {
        var parent = this;
        parent.currentImage--;
        if (parent.currentImage < 0) {
            parent.currentImage = parent.images.length - 1;
        }
        $(parent.replaceDiv).fadeTo('slow', 0.3,function () {
            $(parent.replaceDiv).css("background-image", 'url(images/' + parent.images[parent.currentImage] + ')');
        }).fadeTo('slow', 1);
    };
    this.replaceRight = function () {
        var parent = this;
        parent.currentImage++;
        if (parent.currentImage > parent.images.length - 1) {
            parent.currentImage = 0;
        }
        $(parent.replaceDiv).fadeTo('slow', 0.3,function () {
            $(parent.replaceDiv).css("background-image",
                'url(images/' + parent.images[parent.currentImage] + ')');
        }).fadeTo('slow', 1);
    };
    this.start = function () {
        var parent = this;
        setInterval(function () {
            parent.replaceRight();
        }, 5000)
    };
}

// Make Slideshow available to all javascript code
window.Slideshow = Slideshow;
