/**
 * Created by hxsd on 2016/10/17.
 */
/*
$(function(){
    $(".items .item").each(function(){
        console.log($(this).find("h2").text());
        $(this).find("ul").find("li").each(function(){
            console.log($(this).find("a").text());
            console.log($(this).find("a").attr("title"))+console.log($(this).find("a").attr("href"));

        })
    })
});*/


$(function(){
    var categories = $(".items .item");
    var data = [];
    categories.each(function(){
        var item = $(this);
        var categroyItem = {};
        categroyItem.category=item.find("h2").text();
        categroyItem.items = [];
        data.push(categroyItem);
        console.log(categroyItem.category)
        //item.find("ul li").each(function(){
        //    var a = $(this).find("a");
        //    var navItem = {};
        //    navItem.name = a.text();
        //    navItem.title = a.attr("title");
        //    navItem.url = a.attr("href");
        //
        //    categroyItem.items.push(navItem);
        //})
    });

    //console.log(JSON.stringify(data));

});