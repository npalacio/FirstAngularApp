define([
    "app"
], function(
    app
) {
    return app.controller("homeController", ["$scope", "noteFactory", function($scope, noteFactory){
        $scope.name = 'First Note';
        $scope.notes = "";
        noteFactory.getAllNotes().then(function(notes) {
            $scope.notes = notes;
        }, function() {
            console.log('Error getting all notes');
        });
    }]);
});

