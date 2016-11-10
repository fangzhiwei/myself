// JavaScript Document
 
 //详情页套餐搭配选项卡
documentReady(function(){
	var oUl=hxsd_tools.getByClass(document,'ul_top')[0];
	var oDiv=hxsd_tools.getByClass(document,'gengduo')[0];
	var oUl_huan=oDiv.getElementsByTagName('ul');
	var aBtn=oUl.getElementsByTagName('li');
	//alert(aBtn.length)
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';
				oUl_huan[i].style.display='none'
			}
			this.className='ac';
			oUl_huan[this.index].style.display='block'
		}
	}
	
})


//放大镜
documentReady(function(){
	var intro=hxsd_tools.getByClass(document,'intro')[0];
	var big_pic=hxsd_tools.getByClass(intro,'big_pic')[0];
	//var big_pic=document.getElementById('big_pig');
	var xiaotuUl=intro.getElementsByTagName('ul')[0];
	var xiaotuLi=xiaotuUl.children;
	//alert(xiaotuLi.length)
	var arr1=["<img id='big_pic' src='images/phone1.jpg'>","<img id='big_pic' src='images/phone2.jpg'>","<img id='big_pic' src='images/phone3.jpg'>","<img id='big_pic' src='images/phone4.jpg'>","<img id='big_pic' src='images/phone5.jpg'>","<img id='big_pic' src='images/phone6.jpg'>"]
	var arr2=["<img id='bigImg'  src='images/phone1da.jpg'>","<img id='bigImg' src='images/phone2da.jpg'>","<img id='bigImg' src='images/phone3da.jpg'>","<img id='bigImg' src='images/phone4da.jpg'>","<img id='bigImg' src='images/phone5da.jpg'>","<img id='bigImg' src='images/phone6da.jpg'>"]
	//换图片
	for(var i=0;i<xiaotuLi.length;i++){
		xiaotuLi[i].index=i;
		xiaotuLi[i].onclick=function(){
			for(var i=0;i<xiaotuLi.length;i++){
				xiaotuLi[i].className='';
			}
			big_pic.innerHTML='';
			oDiv2.innerHTML='';
			big_pic.innerHTML=arr1[this.index]+'<span></span>';
			oDiv2.innerHTML=arr2[this.index];
			this.className='ac';
		};
	};
	//---放大镜部分
	var oDiv1=document.getElementById('div1');
	var oDiv2=document.getElementById('div2');
	
	oDiv1.onmousemove=function(ev){
		var oSpan=oDiv1.getElementsByTagName('span')[0];
		var bigImg=document.getElementById('bigImg');
		oSpan.style.display=oDiv2.style.display='block';
		
		var oEv=ev||event;
		
		//获取滚动条  chrome不识别 documentElement.scrollTop
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		
		//鼠标在span的中心位置
		var l=oEv.clientX-oDiv1.offsetLeft-350-oSpan.offsetWidth/2; 
		var t=oEv.clientY+scrollTop-220-oDiv1.offsetTop-oSpan.offsetHeight/2;
		
		//限制范围 
		if(l<0)l=0;
		if(l>=oDiv1.offsetWidth-oSpan.offsetWidth){
			l=oDiv1.offsetWidth-oSpan.offsetWidth;
		}

		if(t<0)t=0;
		if(t>=oDiv1.offsetHeight-oSpan.offsetHeight){
			t=oDiv1.offsetHeight-oSpan.offsetHeight;
		}
		oSpan.style.left=l+'px';
		oSpan.style.top=t+'px';	
		
		
		var l_rate=l / (oDiv1.offsetWidth-oSpan.offsetWidth);
		var t_rate=t / (oDiv1.offsetHeight-oSpan.offsetHeight);
		
		
		bigImg.style.left= (oDiv2.offsetWidth-bigImg.offsetWidth)*l_rate +'px'; //外box 减 内部大图片，为负值
		bigImg.style.top= (oDiv2.offsetHeight-bigImg.offsetHeight)*t_rate +'px';
		
	};
	
	oDiv1.onmouseout=function(){
		var oSpan=oDiv1.getElementsByTagName('span')[0];
		oSpan.style.display=oDiv2.style.display='none';	
	};
	
});


 //选套餐加红色框
documentReady(function(){
	var right_detail=hxsd_tools.getByClass(document,'right_detail')[0];
	var color=hxsd_tools.getByClass(right_detail,'color')[0];
	var color_dd=color.getElementsByTagName('dd');
	var banben=hxsd_tools.getByClass(right_detail,'banben')[0];
	var banben_dd=banben.getElementsByTagName('dd');
	var fangshi1=hxsd_tools.getByClass(right_detail,'fangshi1')[0];
	var fangshi1_dd=fangshi1.getElementsByTagName('dd');
	var fangshi2=hxsd_tools.getByClass(right_detail,'fangshi2')[0];
	var fangshi2_dd=fangshi2.getElementsByTagName('dd');
	var fenqi=hxsd_tools.getByClass(right_detail,'fenqi')[0];
	var fenqi_dd=fenqi.getElementsByTagName('dd');
	
	function xuanze(obj){
		for(var i=0;i<obj.length;i++){
			obj[i].index=i;
			obj[i].onclick=function(){
				for(var i=0;i<obj.length;i++){
					obj[i].className='';
				}
				this.className='ac';
			};
		}
	}
	xuanze(color_dd);
	xuanze(banben_dd);
	xuanze(fangshi1_dd);
	xuanze(fangshi2_dd);
	xuanze(fenqi_dd);
});


//----------购物数量加件

documentReady(function(){
	var right_detail=hxsd_tools.getByClass(document,'right_detail')[0];
	var buy=hxsd_tools.getByClass(right_detail,'buy')[0];
	var result=buy.getElementsByTagName('p')[0];
	var plus=hxsd_tools.getByClass(buy,'plus')[0];	
	var reduction=hxsd_tools.getByClass(buy,'reduction')[0];	

	var n=0;
	
	plus.onclick=function(){
		n++;
		if(n>99){
			n=99;
			alert('该商品最大允许添加99件');
		}
		result.innerHTML=n;
		reduction.children[0].style.color='#000';
	};
	
	reduction.onclick=function(){
		n--;
		if(n<=0){
			n=0;
		   reduction.children[0].style.color='#ccc';
		}
		result.innerHTML=n;
		
	};



});




//----------配送地区的选项卡
documentReady(function(){
	var peisong=hxsd_tools.getByClass(document,'peisong')[0];
	var dd1=hxsd_tools.getByClass(peisong,'dd1')[0];
	var oP=dd1.getElementsByTagName('p')[0];
	//alert(oP.innerHTML)
	var diqu=hxsd_tools.getByClass(dd1,'diqu')[0];
	//alert(diqu.innerHTML)
	dd1.onmouseover=function(){
		oP.className='ac';
		diqu.style.display='block';
	
	};
	dd1.onmouseout=function(){
		oP.className='';
		diqu.style.display='none';
	
	}
	
	
	

});














