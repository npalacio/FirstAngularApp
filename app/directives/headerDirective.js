define([
    "app",
    "text!templates/headerTemplate.html"
], function(
    app,
    headerTemplate
) {
    return app.directive("header", function() {
        return {
            template: headerTemplate,
            restrict: 'E'
        };
    });
    
});
