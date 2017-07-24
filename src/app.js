import angular from 'angular';
const app = angular.module('app', []);

app.controller('ctrl', function($scope){
    $scope.first = 1;
    $scope.second = 1;

    $scope.updateValue = () => {
        $scope.calculation = (+ $scope.first + + $scope.second);

    };

});

export{app};