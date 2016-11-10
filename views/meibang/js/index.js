/**
 * Created by hxsd on 2016/10/9.
 */
;$(function() {

    //首页下的连播图
    ( function(){
        var product = [
            {"imgsrc":"images/wu01.jpg","title":"休闲"},
            {"imgsrc":"images/wu02.jpg","title":"潮流"},
            {"imgsrc":"images/wu03.jpg","title":"都市"},
            {"imgsrc":"images/wu04.jpg","title":"MTEE"},
            {"imgsrc":"images/wu05.jpg","title":"经典学院"},
            {"imgsrc":"images/wu06.jpg","title":"室外时光"},
            {"imgsrc":"images/wu07.jpg","title":"黑与白"},
            {"imgsrc":"images/wu08.jpg","title":"就这么裤"}
        ];

        var content = "";
        var index = 0;
        for(var i=0;i<product.length;i++){
            index ++;
            content ="<li class='li1'>"+
                "<img src='"+product[i].imgsrc+"'>"+
                "<p>"+product[i].title+"</p>"+
                "</li>";
            $(".content ul").append(content);
        }
        var li_outerwidth= $(".content ul li").outerWidth() ; //确定每一个li的外尺寸；
        $(".content ul").css("width",product.length*li_outerwidth) ;  //给定ul的宽度；没有宽度的话是默认父级宽度

        // pre事件
        $(".pre").on("click",function(){
            var dis= parseInt($(".content ul").css("marginLeft"))-li_outerwidth*4; //先移动ul
            $(".content ul").animate({marginLeft: dis+"px"},2000,next);
            function next(){
                $(".content ul li").each(function(index){
                    if(index<4){
                        $(this).remove();
                        $(".content ul").append($(this));
                    }
                });
                $(".content ul").css("marginLeft",0)
            }
        });
        // next事件
        $(".next").on("click",function(){
            $(".content ul").css("marginLeft",-li_outerwidth*4);  // 先移动ul并同时将末尾的五个元素删除添加到最前面
            var $first_li=$(".content ul li:first-child");
            $(".content ul li").each(function(index){
                if(index>=product.length-4){
                    $(this).remove();
                    $first_li.before($(this))
                }
            })
            var dis= parseInt($(".content ul").css("marginLeft"))+li_outerwidth*4;   //正常滚动ul就可以了
            $(".content ul").animate({marginLeft:dis+"px"},2000 )
        })

    })();


});