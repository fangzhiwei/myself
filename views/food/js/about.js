/**
 * Created by Administrator on 2016/10/16.
 */
$(function(){
    //nav
    $(".nav li").mouseover(function(){
        $(this).addClass("nav_a").siblings().removeClass("nav_a");
    });
    $(".nav li").mouseout(function(){
        $(".nav li").eq(3).addClass("nav_a").siblings().removeClass("nav_a");
    });


    //nav2
    $(".submenu li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".submenu li").mouseout(function(){
        $(".submenu li").eq(3).addClass("active").siblings().removeClass("active");
    });


});