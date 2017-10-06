define([
    "app"
], function(
    app
) {
    return app.controller("myNotesController", ["$scope", "noteFactory", function($scope, noteFactory){
        $scope.title = 'My First Note';
        $scope.myNotes = [];
        noteFactory.getMyNotes().then(function(myNotes) {
            $scope.myNotes = myNotes;
        }, function() {
            console.log('Error getting my notes');
        });
    }]);
});