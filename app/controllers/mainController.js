define([
    "app"
], function(
    app
) {
    return app.controller("mainController", ["$scope", "$location", function($scope, $location){
        $scope.navigate = function(path) {
            $location.path(path);
        };
    }]);
});