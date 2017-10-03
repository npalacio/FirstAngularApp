require({
    // async: true,
    paths: {
        text: "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min",
        app: "app/app",
        controllers: "app/controllers",
        directives: "app/directives",
        templates: "app/templates"
    }
});

require([
    // "text",
    "app"
], function(
    // requireText,
    app
) {
    require([
        "controllers/controller",
        "directives/navBarDirective"
    ], function(
        controller,
        navBarDirective
    ) {
        // Once we have our module fully loaded and have added our 
        // other parts to it we bootstrap it to our document
        angular.bootstrap(document,["app"]);
    });
});