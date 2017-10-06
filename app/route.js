define([
    "app",
    "text!templates/homeTemplate.html",
    "text!templates/myNotesTemplate.html",
    "text!templates/contactUsTemplate.html"
], function(
    app,
    homeTemplate,
    myNotesTemplate,
    contactUsTemplate
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
        .when("/contactUs", {
            template: contactUsTemplate,
            controller: 'contactUsController'
        })
        .otherwise("/", {
            template: homeTemplate,
            controller: 'homeController'
        });
    });
});

