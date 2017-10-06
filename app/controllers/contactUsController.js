define([
    "app"
], function(
    app
) {
    return app.controller("contactUsController", ["$scope", function($scope){
        $scope.baseform = {
            firstName: "",
            lastName: "",
            email: "",
            msg: ""
        }
        $scope.form = $scope.baseForm;
        $scope.submit = function() {
            console.log($scope.form);
            $scope.form = $scope.baseForm;
        };
    }]);
});
