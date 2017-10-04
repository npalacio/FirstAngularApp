define([
    "app",
    "text!templates/homeTemplate.html",
    "text!templates/myNotesTemplate.html"
], function(
    app,
    homeTemplate,
    myNotesTemplate
) {
    app.config(function($routeProvider){
        $routeProvider
        .when("/", {
            template: homeTemplate,
            controller: 'homeController'
        })
        .when("/myNotes", {
            template: myNotesTemplate,
            controller: 'myNotesController'
        })
        .otherwise("/", {
            template: homeTemplate,
            controller: 'homeController'
        });
    });
});

