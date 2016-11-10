/**
 * Created by Administrator on 2016/10/16.
 */
$(function(){
    //nav
    $(".nav li").mouseover(function(){
        $(this).addClass("nav_a").siblings().removeClass("nav_a");
    });
    $(".nav li").mouseout(function(){
        $(".nav li").eq(4).addClass("nav_a").siblings().removeClass("nav_a");
    });


    //nav2
    $(".submenu li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".submenu li").mouseout(function(){
        $(".submenu li").eq(4).addClass("active").siblings().removeClass("active");
    });

    //popup
    $(".main a").click(function(){
        $(".popup h4").html($(this).siblings("h4").html());
        $(".popup img").attr("src",$(this).parent().siblings("img").attr("src"));
        $(".popup").show();
    });

    $(".popup a").click(function(){
        $(".popup").hide();
    })
});