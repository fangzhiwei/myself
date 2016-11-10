// JavaScript Document

//---------楼层指示小模块
documentReady(function(){
	var LocationFloorList=getByClass(document,'LocationFloorList')[0];
	var aLi=LocationFloorList.getElementsByTagName('li');
	var aFloor=getByClass(document,'floor');
	
	var arr=[];
	//-------------------------------------------------
	for(var i=0; i<aFloor.length; i++){
		var json={};
		json.name='f'+i;
		json.offsetTop=aFloor[i].offsetTop;
		arr.push(json);
	};
	
	window.onscroll=function(){
		//显示楼层编号-------------------------------------------------
		var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
		
		if(scrolltop>750){
			LocationFloorList.style.display='block';
		}else{
			LocationFloorList.style.display='none';
		};
		
		// 根据楼层滚动位置，定位编号------------------------------------------------
		var screenHeight=document.documentElement.offsetHeight || document.body.Height;
		var last_arr=[];
		var li_index=0;
		for(var j=0; j<arr.length; j++){
			if(arr[j].offsetTop<scrolltop+400){
				last_arr.push(arr[j].name);
			}
		};
		if(last_arr.length>=10){
			li_index=last_arr[last_arr.length-1].substr(1,2);
		}else{
		 	li_index=last_arr[last_arr.length-1].substr(1,1);
		}
		for(var l=0; l<aFloor.length; l++){
			aLi[l].className='';
		};
		aLi[li_index].className='ac';
	};
	//点击编号，跳转到相对楼层-----------------------------------------------
	for(var i=0; i<aFloor.length; i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			var start=document.documentElement.scrollTop || document.body.scrollTop;
			var end=arr[this.index].offsetTop;
			move(start,end)
		}
	};
	//move-------------------------------------------------------
	var timer;
	function move(start,end){
		var dis=end-start;
		var count=parseInt(1500/30);
		var n=0;
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			var a=1-n/count;
			var step_dis=start+dis*(1-a*a*a*a);
			window.scrollTo(0,step_dis);
			if(n==count){
				clearInterval(timer);
			};
		},30)
	};
	
	function getByClass(oParent,cls){
		var arr=[]; //容器
		if(document.getElementsByClassName) return oParent.getElementsByClassName(cls);
		else{
			var aEl=oParent.getElementsByTagName('*');//所有标签
			for(var i=0;i<aEl.length;i++){
				if(aEl[i].className.indexOf(cls)!=-1) arr.push(aEl[i]);//向数组中添加
			}
		return arr;
		}
	};

})



    //----------------商品分类详单

documentReady(function(){
	var oDiV=hxsd_tools.getByClass(document,'popup')[0];
	var section=oDiV.children;
	//alert(section.length)
	var nav_list=hxsd_tools.getByClass(document,'nav_list')[0];
	var nav_li=nav_list.getElementsByTagName('li');
	
	for(var i=0;i<nav_li.length;i++){
		nav_li[i].index=i;
		nav_li[i].onmouseover=function(){
			for(var i=0;i<nav_li.length;i++){
				section[i].style.display='none';
			};
			section[this.index].style.display='block';
			oDiV.style.display='block';
		};
		nav_li[i].onmouseout=function(){
			oDiV.style.display='none';
		};
	}
});


//----------轮播图部分

documentReady(function(){
	
	function slider(obj){
		var Ol=obj.getElementsByTagName('ol')[0];
		var oUl=obj.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		var n=0;
		var timer=null;
		var li_w=hxsd_tools.getStyle(aLi[0],'width');
		oUl.style.width=li_w*aLi.length+'px';
		
		//插入按钮的li，以图片的张数为基准
		for(var i=0;i<aLi.length;i++){
			var li=document.createElement('li');
			li.innerHTML=i+1;
			Ol.appendChild(li);
		}
		//找到插入的li
		var aBtn=Ol.getElementsByTagName('li');
		aBtn[0].className='ac';
		
		for(var i=0;i<aLi.length;i++){
			aBtn[i].index=i;
			aBtn[i].onmouseover=function(){
				n=this.index;
				change(n);
				//改变uL的left值达到切换图片的目的
				hxsd_tools.animate(oUl,{'left':-this.index*li_w})
			};
		};
		
		var prevBtn=document.getElementById('prevBtn');
		var nextBtn=document.getElementById('nextBtn');
		
		//把按钮变色封装
		function change(n){
			for(var j=0;j<aBtn.length;j++){
				aBtn[j].className='';
			}
			aBtn[n].className='ac';
		}
		//左右按钮事件
		prevBtn.onclick=function(){
			n--;
			if(n<0)n=0;
			hxsd_tools.animate(oUl,{'left':-n*li_w});
			change(n);
		};
		nextBtn.onclick=function(){
			n++;
			if(n>aLi.length-1)n=aLi.length-1;
			hxsd_tools.animate(oUl,{'left':-n*li_w});
			change(n);
		};
		function run(){
			timer=setInterval(function(){
				n++;
				if(n>aLi.length-1)n=0;
				if(n<0)n=aLi.length-1;
				hxsd_tools.animate(oUl,{'left':-n*li_w});
				change(n);
			},2000);
		};
		run();
		
		obj.onmouseover=function(){
			clearInterval(timer);
		}
		obj.onmouseout=function(){
			run();
		}
	};
	
	var page1=hxsd_tools.getByClass(document,'page1')[0];
	var oDiv=hxsd_tools.getByClass(page1,'banner')[0];
	slider(oDiv)
	
})



//------------------楼层选项卡

documentReady(function(){
	var floor_num=hxsd_tools.getByClass(document,'page6')[0];
	var title=hxsd_tools.getByClass(floor_num,'title')[0];
	var nav=hxsd_tools.getByClass(title,'nav')[0];
	var navLi=nav.getElementsByTagName('li');
	//alert(navLi.length)
	var con=hxsd_tools.getByClass(floor_num,'con')[0];
	var content=hxsd_tools.getByClass(con,'content');
	
	
	for(var i=0;i<navLi.length;i++){
		navLi[i].index=i;
		navLi[i].onmouseover=function(){
			for(var i=0;i<navLi.length;i++){
				content[i].style.display='none';
			};
			content[this.index].style.display='block';
		
		};
		
	}

})



//-----------楼层中小动图   1楼
documentReady(function(){
	var floor_num=hxsd_tools.getByClass(document,'page6')[0];
	var con=hxsd_tools.getByClass(floor_num,'con')[0];
	var content=hxsd_tools.getByClass(con,'content1')[0];
	var arr1 = new Array(); 
	var arr1=["images/57a2.jpg","images/57c6ee68N18aa2378.jpg","images/57c6ee7dNd984deda.jpg","images/57c6ee8fNc23fbeb9.jpg",]
	var n=0;
   setInterval(changeImg,1500); 
   function changeImg() { 
	var obj=document.getElementById('hahha');
   if (n == arr1.length-1) { 
    n = 0; 
   } else { 
    n += 1; 
     } 
   obj.src = arr1[n]; 
  } 

	
})	
	
	
	
/*	for(var i=0;i<navLi.length;i++){
		navLi[i].index=i;
		navLi[i].onmouseover=function(){
			for(var i=0;i<navLi.length;i++){
				content[i].style.display='none';
			};
			content[this.index].style.display='block';
		
		};
		
	}
*/























