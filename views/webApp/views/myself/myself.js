/**
 * Created by fzw on 2016/10/1.
 */

angular.module("myapp").controller("myselfCtrl",function($scope,$ionicPopup,$ionicModal){

    $scope.showAlert = function () {
        $ionicPopup.alert({
            title: '提示',
            template: '暂时无法取得数据!',
            buttons: [{text:"确定"}]
        }).then(function (res) {
            console.log('哈哈');
        });
    };
    //弹出版本号
    $scope.showVersion = function () {
        $ionicPopup.alert({
            title: '版本号',
            template: 'v3.7.3',
            buttons: [{text:"确定"}]
        }).then(function (res) {
            console.log('哈哈');
        });
    };
    //弹出注册信息
    $scope.zhuce = function () {
        $ionicPopup.alert({
            title: '提示',
            template: '无法连接网络',
            buttons: [{text:"确定"}]
        }).then(function (res) {
            console.log('哈哈');
        });
    };

    // 构造模式对话框
    $ionicModal.fromTemplateUrl('views/modal.html', {
        scope: $scope,       // 作用域使用父作用域
//                        animation: 'slide-in-up'
        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
//                        animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };

    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    // 离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    // 在隐藏modal时执行一些动作
    $scope.$on('modal.hidden', function() {
        // 在这里执行一些操作
    });

    // 在移除modal时执行一些动作
    $scope.$on('modal.removed', function() {
        // 在这里执行一些操作
    });


});