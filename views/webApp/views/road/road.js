/**
 * Created by hxsd on 2016/9/29.
 */


angular.module("myapp").controller("roadCtrl",function($scope,$state,$ionicViewSwitcher,dataFactory,$timeout){
    // 查询出来要显示在view中的商品数据
    $scope.data = dataFactory.query();

    // 跳转
    $scope.toDetail = function(road){
        $state.go("tabs.detail",{id:"1001",title:road.title});

        // 将go有动画效果
        $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
    };


    $scope.chuang = function () {
        $scope.visible = !$scope.visible;
        $timeout(function(){
            $scope.visible = false;
        },3000)
    }


});