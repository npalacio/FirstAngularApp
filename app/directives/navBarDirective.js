define([
    "app",
    "text!templates/navBarTemplate.html"
], function(
    app,
    navBarTemplate
) {
    return app.directive("navBar", function() {
        return {
            template: navBarTemplate,
            restrict: 'E'
        };
    });
    
});