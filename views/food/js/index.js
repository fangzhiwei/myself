/**
 * Created by Administrator on 2016/10/16.
 */
$(function(){

    //nav
    $(".nav li").mouseover(function(){
        $(this).addClass("nav_a").siblings().removeClass("nav_a");
    });
    $(".nav li").mouseout(function(){
        $(".nav li").eq(0).addClass("nav_a").siblings().removeClass("nav_a");
    });


    //nav2
    $(".submenu li").mouseover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".submenu li").mouseout(function(){
        $(".submenu li").eq(0).addClass("active").siblings().removeClass("active");
    });

    //main1
    $(".main1 .cont").eq(0).show();
    $(".main1 li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".main1 .cont").eq($(this).index()).show().siblings().hide();
    });

    //main2
    $(".main2 li").mouseover(function(){
        $(this).find("img").stop();
        $(this).find("h1").stop();
        $(this).find("img").show("fast");
        $(this).find("h1").hide();
    }).mouseout(function(){
        $(this).find("img").stop();
        $(this).find("h1").stop();
        $(this).find("img").hide("slow");
        $(this).find("h1").show();
    });
    $(".main2 .angle-right").click(function(){
        $(".main2 li").eq(0).hide("fast");
        $(".main2 li").eq(3).show("fast");
        $(".main2 li").eq(2).addClass("active");
        $(".main2 li").eq(1).removeClass("active");
    });
    $(".main2 .angle-left").click(function(){
        $(".main2 li").eq(3).hide("fast");
        $(".main2 li").eq(0).show("fast");
        $(".main2 li").eq(1).addClass("active");
        $(".main2 li").eq(2).removeClass("active");
    });


    //main3
    var bannerImg=1;
    $(".main3 .angle-right").click(function(){
        if(bannerImg==3)bannerImg=0;
        bannerImg++;
        $(".main3 img").attr("src","images/banner_"+bannerImg+".jpg");
    });
    $(".main3 .angle-left").click(function(){
        bannerImg--;
        if(bannerImg==0)bannerImg=3;
        $(".main3 img").attr("src","images/banner_"+bannerImg+".jpg");
    });



    //main4
    $(".main4 .col-md-4").eq(2).hide();
    $(".main4 .angle-right").click(function(){
        $(".main4 .col-md-4").eq(0).hide();
        $(".main4 .col-md-4").eq(2).show();
    });
    $(".main4 .angle-left").click(function(){
        $(".main4 .col-md-4").eq(0).show();
        $(".main4 .col-md-4").eq(2).hide();
    })



});