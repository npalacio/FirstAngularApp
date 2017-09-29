require({
    // async: true,
    paths: {
        app: "app/app",
        controllers: "app/controllers",
        directives: "app/directives"
    }
});

require([
    "app"
], function(
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