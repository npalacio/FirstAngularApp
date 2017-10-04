define([
    "app"
], function(
    app
) {
    return app.controller("myNotesController", ["$scope", function($scope){
        $scope.title = 'My First Note';
    }]);
});