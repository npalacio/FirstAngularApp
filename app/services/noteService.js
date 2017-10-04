define([
    "app"
], function(
    app
) {
    return app.service("noteService", ["$scope", "$http", function($scope, $http){
        $scope.getAllNotes = function() {
            return $http({
                method: "GET",
                url: "https://baconipsum.com/api/?type=meat-and-filler"
            }).then(function success(results) {
                return results.data;
            }, function failure() {
                console.log('Error in getAllNotes method');
            });
        };
    }]);
});
