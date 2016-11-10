/**
 * Created by hxsd on 2016/10/10.
 */

$(function(){

    //点击导航平滑滚动到各个部分============================================================
    var $fzw =$("a[href*='#']:not([href='#'])");
    $fzw.on("click", function (ev) {
        ev.preventDefault();
        //因为header做了固定定位，不占位，所以要减去这个高度
        $("html,body").animate({
            "scrollTop":$(this.hash).offset().top - $(".header").height()
        },500)
    });


    //点击导航键，显示垂直导航。再次点击隐藏==================================================
    var btn = true;
    $("#btn").click(function(){
        if(btn==true){
            //$(".header>.nav").css("display","block");
            $(".header>.nav").slideDown(300);
            btn = false;
        }else {
            $(".header>.nav").slideUp(300);
            btn = true;
        }
    });
    //判断导航按钮出现没
    function nvabar(){
        var navb = $("#btn").css("display");
        //alert(navb)
        if(navb=="block"){
            $(".header>.nav").css("display","none");
        }else{
            $(".header>.nav").css("display","block");
        }
    }
    $(window).resize(function(){
        //console.log($(this).width());
        nvabar();
        $imgW = $(".slide").find("img").outerWidth();
    });

    //轮播图部分=============================================================================
    slide();
    function slide(){
        var timer=null;
        var imgCount= 0;
        var $img=$(".slide").find("img");
        $img.eq(0).show().siblings().hide();
        timer=setInterval(function(){
            $img.each(function(){
                //console.log(imgCount);
                $img.eq(imgCount).show().siblings().hide();
                if(imgCount==4){
                    imgCount=0;
                }
            });
            imgCount++;
        },3000);
        $(".next").click(function(){
            clearInterval(timer);
            imgCount++;
            $img.eq(imgCount).show().siblings().hide();
            if(imgCount==4){
                imgCount=0;
            }

            slide();
        });
        $(".pre").click(function(){
            clearInterval(timer);
            imgCount--;
            if(imgCount<0){
                imgCount=3;
            }
            $img.eq(imgCount).show().siblings().hide();
            slide();
        });

    }


    //setInterval(function(){
    //
    //$img.each(function(){
    //    //console.log(imgCount);
    //    $img.eq(imgCount).show().siblings().hide();
    //    if(imgCount==4){
    //        imgCount=0;
    //    }
    //    });
    //    imgCount++;
    //},2500);



    //setInterval(function(){
    //
    //    $img.each(function(){
    //        //console.log(imgCount);
    //        $img.eq(imgCount).animate({marginLeft:-$imgW},1000).removeClass("show");
    //        $img.eq(imgCount).attr({"marginLeft":"0"});
    //        if(imgCount>=3){
    //            imgCount=0;
    //        }
    //        $img.eq(imgCount+1).addClass("show").fadeIn();
    //    });
    //
    //    imgCount++;
    //},2500);




});
































