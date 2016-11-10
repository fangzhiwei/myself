/**
 * Created by fzw on 2016/10/1.
 */
angular.module("myapp")
    .controller("firstCtrl",function($scope,$ionicSlideBoxDelegate){
        $scope.config = {enter:false};  //控制“进入按钮是否出现”

        $scope.onSlideChanged = function(){
            if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount()-1  ){
                $scope.config.enter=true;
            }else{
                $scope.config.enter=false;
            }
        }

    });
