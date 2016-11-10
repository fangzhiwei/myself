/**
 * Created by hxsd on 2016/10/4.
 */

angular.module("myapp").controller("weatherCtrl",function($scope,$http,$ionicLoading){
    var url = "http://wthrcdn.etouch.cn/weather_mini?city=武汉" ;

    $ionicLoading.show();  //显示加载指示器

    $http.get(url).success(function (data) {
        $scope.weather=data;  //保存请求回来的天气数据
        $ionicLoading.hide ();    //隐藏加载指示器
    }).error(function(){
        //当AJAX请求失败时，出现一个提示信息
        $ionicLoading.show({
            template:"暂时无法联网获得天气数据或者国外服务器无法获取国内天气API",
            duration:3000
        });
    })

});