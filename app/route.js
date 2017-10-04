define([
    "app",
    "text!templates/homeTemplate.html"
], function(
    app,
    homeTemplate
) {
    app.config(function($routeProvider){
        $routeProvider.when("/", {
            template: homeTemplate
        });
    });
});

