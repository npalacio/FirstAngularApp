define([
    "app"
], function(
    app
) {
    return app.factory("noteFactory", ["$http", function($http){
        var noteFact = {};
        var url = 'https://baconipsum.com/api/';
        // noteFact.getAllNotes = function() {
        //     return [{id:1},{id:2}]
        // };
        noteFact.getAllNotes = function() {
            var parameters = {
                type: 'all-meat'
            }
            return $http({
                url: url,
                method: 'GET',
                params: parameters
            }).then(function(results) {
                return results.data;
            }, function(results) {
                console.log('Error retrieving notes');
            });
        };
        noteFact.getMyNotes = function() {
            var parameters = {
                type: 'meat-and-filler'
            }
            return $http({
                url: url,
                method: 'GET',
                params: parameters
            }).then(function(results) {
                return results.data;
            }, function(results) {
                console.log('Error retrieving notes');
            });
        };
        return noteFact;
    }]);
});

