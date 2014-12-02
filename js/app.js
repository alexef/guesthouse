require('js/jquery-2.1.1.min');
require('js/slideshow');
require('js/handlebars.runtime-v1.3.0');
require('js/director.min');
require('build/templates');

$(function () {
    function homeRoute() {
        var homeHTML = Templates["templates/home.hbs"]();
        $("#outlet").html(homeHTML);

        var images = ["Carousel1.png", "Carousel2.png", "Carousel3.png"];
        var slideshow = new Slideshow('#search', images);
        $('body').on("click", '.left-a', function () {
            slideshow.replaceLeft()
        });
        $('body').on("click", '.right-a', function () {
            slideshow.replaceRight()
        });
        slideshow.start();
    }

    var routes = {
        '/': homeRoute
        // TODO: add routes for login and register
    };

    var router = new Router(routes).configure({html5history: true});

    $(window).on("popstate", function (e) {
        if (e.originalEvent.state !== null) {
            router.setRoute(location.href);
        }
    });

    $(document).on("click", "a, area", function () {
        var href = $(this).attr("href");

        if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
            history.pushState({}, '', href);
            router.setRoute(href);
            return false;
        }
    });

    router.init();
});
