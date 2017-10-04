define([
    "app",
    "text!templates/headerTemplate.html"
], function(
    app,
    headerTemplate
) {
    app.directive("header", function() {
        return {
            template: headerTemplate,
            restrict: 'E'
        };
    });
    
});
