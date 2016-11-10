/**
 * Created by Administrator on 2016/10/16.
 */


$(function(){


    //nav
    $(".nav li").mouseover(function(){
        $(this).addClass("nav_a").siblings().removeClass("nav_a");
    });
    $(".nav li").mouseout(function(){
        $(".nav li").eq(1).addClass("nav_a").siblings().removeClass("nav_a");
    });


    //nav2
    $(".submenu li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".submenu li").mouseout(function(){
        $(".submenu li").eq(1).addClass("active").siblings().removeClass("active");
    });


    $(".main li").eq(0).click(function(){
        $(".main li").eq(0).addClass("active").siblings().removeClass("active");
        $(".content li").show();
    });

    $(".main li").eq(1).click(function(){
        $(".main li").eq(1).addClass("active").siblings().removeClass("active");
        $(".content li").hide();
        $(".content li[class$='cont1']").show();
    });

    $(".main li").eq(2).click(function(){
        $(".main li").eq(2).addClass("active").siblings().removeClass("active");
        $(".content li").hide();
        $(".content li[class$='cont2']").show();
    });

    $(".main li").eq(3).click(function(){
        $(".main li").eq(3).addClass("active").siblings().removeClass("active");
        $(".content li").hide();
        $(".content li[class$='cont3']").show();
    });

    $(".main li").eq(4).click(function(){
        $(".main li").eq(4).addClass("active").siblings().removeClass("active");
        $(".content li").hide();
        $(".content li[class$='cont4']").show();
    });

});



