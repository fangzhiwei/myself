/**
 * Created by Administrator on 2016/10/24.
 */
$(function(){
    var page=1;
    $(document).swipeLeft(function(){
        if(page<5){
            $(".page"+page).addClass("hide");
            $(".page"+(page+1)).removeClass("hide ").addClass("pt-page-moveCircle");
            page++
        }
    }
    ).swipeRight(function(){
        if(page>1){
            $(".page"+page).addClass("hide");
            $(".page"+(page-1)).removeClass("hide ").addClass("pt-page-moveCircle");
            page--;
        }
    })
})
