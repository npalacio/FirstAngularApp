require({
    paths: {
        // This is the text plugin that is loaded when you prefix a dependency with 'text!'
        text: "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
        app: "app/app",
        route: "app/route",
        controllers: "app/controllers",
        directives: "app/directives",
        templates: "app/templates"
    }
});

require([
    "app"
], function(
    app
) {
    require([
        "route",
        "controllers/controller",
        "directives/navBarDirective",
        "directives/headerDirective"
    ], function(
        route,
        controller,
        navBarDirective,
        headerDirective
    ) {
        // Once we have our module fully loaded and have added our 
        // other parts to it we bootstrap it to our document
        angular.bootstrap(document,["app"]);
    });
});