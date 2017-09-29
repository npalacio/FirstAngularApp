var app = angular.module("app",[]);
app.controller('nCtrl', function($scope){
$scope.name = 'nick';
$scope.newName = 'Shannon';
$scope.changeVar = function() {
    $scope.name = 'Joe';
};
});
