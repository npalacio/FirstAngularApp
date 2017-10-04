define([
    "app",
    "factories/noteFactory"
], function(
    app,
    noteFactory
) {
    return app.controller("homeController", ["$scope", function($scope){
        $scope.name = 'First Note';
        $scope.note = noteFactory.getAllNotes();
    }]);
});

