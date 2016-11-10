/**
 * Created by hxsd on 2016/9/29.
 */


var fzw = angular.module("myapp",["ionic"]);

//fzw.controller();


fzw.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');
    $stateProvider.state("first",{
        url:"/first",
        templateUrl:"views/first/first.html",
        controller:"firstCtrl"
    }).state("tabs",{
        url:"/tabs",
        abstract:true,    //抽象的，意思是不具体化，不真的显示它
        templateUrl:"views/tabs/tabs.html"
    }).state("tabs.road",{
        url:"/road",
        views:{"tab-road":{
            templateUrl:"views/road/road.html",
            controller:"roadCtrl"
        }}
    }).state("tabs.detail", {
        url: "/detail?:id:title", // 路由传参
        views: {
            "tab-road":{
                templateUrl: "views/detail/detail.html",
                controller: "detailCtrl"
            }
        }
    }).state("tabs.tourist",{
        url:"/tourist",
        views:{"tab-tourist":{
            templateUrl:"views/tourist/tourist.html"
        }}
    }).state("tabs.introduce",{
        url:"/introduce",
        views:{"tab-introduce":{
            templateUrl:"views/introduce/introduce.html",
            controller:"introduceCtrl"
        }}
    }).state("tabs.find",{
        url:"/find",
        views:{"tab-find":{
            templateUrl:"views/find/find.html"
        }}
    }).state("tabs.weather",{
        url:"/find",
        views:{"tab-find":{
            templateUrl:"views/weather/weather.html",
            controller:"weatherCtrl"
        }}
    }).state("tabs.restaurants",{
        url:"/find",
        views:{"tab-find":{
            templateUrl:"views/restaurants/restaurants.html",
            controller:"restaurantsCtrl"
        }}
    }).state("tabs.myself",{
        url:"/myself",
        views:{"tab-myself":{
            templateUrl:"views/myself/myself.html",
            controller:"myselfCtrl"
        }}
    });

    //配置默认路由
    $urlRouterProvider.otherwise("/first")

});



fzw.controller("myCtrl",function($scope){
/*
     $scope.roadlist = [
         {"imgsrc":"images/01.jpg","title":"加州旅馆0","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/02.jpg","title":"加州旅馆1","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/03.jpg","title":"加州旅馆2","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/04.jpg","title":"加州旅馆3","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/05.jpg","title":"加州旅馆4","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/01.jpg","title":"加州旅馆5","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/02.jpg","title":"加州旅馆6","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/03.jpg","title":"加州旅馆7","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/04.jpg","title":"加州旅馆8","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/05.jpg","title":"加州旅馆9","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/01.jpg","title":"加州旅馆10","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/02.jpg","title":"加州旅馆11","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/03.jpg","title":"加州旅馆12","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/04.jpg","title":"加州旅馆13","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"},
         {"imgsrc":"images/05.jpg","title":"加州旅馆14","detail":"这个地方很漂亮哦噢噢噢噢噢噢噢噢哦哦哦哦哦哦"}

     ]

*/


 });


// $q 是内置服务，所以可以直接使用
// 创建一个Service，它负责从服务器请求商品数据，并全局共享
fzw.factory("productFactory", function ($http, $q) {
    return {
        query: function () {
            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
            $http.get("data/data.json")
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);   // 声明执行失败，即服务器返回错误
                });
            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
        } // end query
    };
});

// 使用工厂方法，创建的一个单例对象
// 这个单例对象会被缓存
fzw.factory("dataFactory", function ($http) {
    var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("data/data.json").success(function (_data, status, headers, config) {
        data.productList = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});













