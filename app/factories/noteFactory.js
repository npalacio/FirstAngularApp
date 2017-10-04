define([
    "app",
    "services/noteService"
], function(
    app,
    noteService
) {
    return app.factory("noteFactory", ["$scope", "$http", function($scope, $http){
        var getAllNotes = noteService.getAllNotes();
        return {
            getAllNotes: getAllNotes
        };
    }]);
});

