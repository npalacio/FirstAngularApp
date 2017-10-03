define([
    "app",
    "text!templates/navBarTemplate.html"
], function(
    app,
    navBarTemplate
) {
    app.directive("navBar", function() {
        return {
            template: navBarTemplate,
            // template: "test template",
            restrict: 'E'
        };
    });
    
});