/**
 * Created by hxsd on 2016/9/30.
 */

angular.module("myapp")
    .controller("detailCtrl", function ($scope, $stateParams, dataFactory) {
        // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
        var title = $stateParams.title;

        // 查询出来要显示在view中的商品数据
        var data = dataFactory.query();
        angular.forEach(data.productList, function (item) {
            if (item.title == title) {
                $scope.road = item;
                //$scope.product.imgsrc = $scope.product.imgsrc.replace("50x50", "400x400");
                return false;   // 中断forEach循环 <=> break
            }
        });
    });
