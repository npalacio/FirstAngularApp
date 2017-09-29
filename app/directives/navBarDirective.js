define([
    "app"
], function(
    app
) {
    app.directive("navBar", function() {
        return {
            // templateUrl: "./app/templates/navBarTemplate.html",
            template: "test template",
            restrict: 'E'
        };
    });
    
});