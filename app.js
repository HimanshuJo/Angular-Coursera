(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        $scope.items="";
        $scope.message="";
        $scope.checkItems=function(){
            const tochk=$scope.items.split(',');
            if(tochk.length==1&&tochk[0]===""){
                $scope.message="Please enter data first";
            } else if(tochk.length<=3){
                $scope.message="Enjoy!";
            } else{
                $scope.message="Too much!";
            }
        }
    }
})();