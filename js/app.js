require('js/jquery-2.1.1.min');
require('js/slideshow');
require('js/handlebars.runtime-v1.3.0');
require('js/director.min');
require('build/templates');

$(function() {
        alert('here');

        function home() {
            alert('home');
        }

        var routes = {
            '/home': home
        };

        var router = new Router(routes);
        router.init();
});
