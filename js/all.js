window.onload=function(){
	var oBox=document.getElementById('box');
	var aPage=oBox.children;
	var oHome=document.getElementById('home');
	var aBox=oBox.getElementsByTagName('div');
	var oPage1=document.getElementById('page1');
	var oPage1_box=document.getElementById('page1_box');
	var aPage1_box=oPage1_box.children;
	var oPage2=document.getElementById('page2');
	var oPage3=document.getElementById('page3');
	
	
	
	
	var oTop=document.getElementById('top');
	var iNow=0;
/*	document.oncontextmenu=function(){
		return false;	
	};
*/	
	//翻页
	var cH=document.documentElement.clientHeight;
	for(var i=0;i<aPage.length;i++){
		addMouseEvent(document,function(down){
			var t=oBox.offsetTop;
				if(down){
					t=(Math.round(t/cH)-1)*cH;
				}else{
					t=(Math.round(t/cH)+1)*cH;
				}
				if(t>0){
					t=0;
				}else if(t<-cH*6){
					t=-cH*6;
				}
			move2(oBox,t);
			if(t<=-500){
				oTop.style.display='block'; 
			}else if(t>-500){
				oTop.style.display='none';
			}
		});
	}
	
	//首页
	for(var i=0;i<aPage1_box.length;i++){
		aPage1_box[i].style.WebkitTransition='1s all ease '+(aPage1_box.length-1)*300+'ms';
		aPage1_box[i].style.MozTransition='1s all ease '+(aPage1_box.length-1)*300+'ms';
		aPage1_box[i].style.msTransition='1s all ease '+(aPage1_box.length-1)*300+'ms';
		aPage1_box[i].style.Transition='1s all ease '+(aPage1_box.length-1)*300+'ms';
		(function(index){
			setTimeout(function(){
				aPage1_box[index].style.WebkitTransform='rotateY('+360/aPage1_box.length*index+'deg) translateZ(450px)';
				aPage1_box[index].style.MozTransform='rotateY('+360/aPage1_box.length*index+'deg) translateZ(450px)';
				aPage1_box[index].style.msTransform='rotateY('+360/aPage1_box.length*index+'deg) translateZ(450px)';
				aPage1_box[index].style.Transform='rotateY('+360/aPage1_box.length*index+'deg) translateZ(450px)';
			},0);
		})(i);
	}
	var iSpeedX=0;
	var iSpeedY=0;
	var lastX=0;
	var lastY=0;
	var x=0;
	var y=0; 
	var timer=null;
	oPage1_box.onmousedown=function(ev){
		clearInterval(timer);
		var disX=ev.pageX-y;
		var disY=ev.pageY-x;
		document.onmousemove=function(ev){
			x=ev.pageY-disY;
			y=ev.pageX-disX
			oPage1_box.style.WebkitTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
			oPage1_box.style.MozTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
			oPage1_box.style.msTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
			oPage1_box.style.Transform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
			iSpeedX=ev.pageX-lastX;
			iSpeedY=ev.pageY-lastY;
			lastX=ev.pageX;
			lastY=ev.pageY;
		};
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			timer=setInterval(function(){
				iSpeedX*=0.95;
				iSpeedY*=0.95;
				y+=iSpeedX;
				x+=iSpeedY;
				oPage1_box.style.WebkitTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
				oPage1_box.style.MozTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
				oPage1_box.style.msTransform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
				oPage1_box.style.Transform='perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
				if(Math.abs(iSpeedX)<1)iSpeedX=0;
				if(Math.abs(iSpeedY)<1)iSpeedY=0;
				if(iSpeedX==0&&iSpeedY==0){
					clearInterval(timer);
				}
			},30);
		};
		return false;
	};
	
	//首页菜单点击
	oHome.onclick=function(){
		window.location.reload();
	};
	
	for(var i=1;i<aPage1_box.length;i++){
		(function(index){
			aPage1_box[index].onclick=function(){
				move2(oBox,-index*cH);
			};
		})(i);
	}
	
	//关于我的
	oPage2
	
	//效果展示
	
	//page4
		/*function hoverDir(obj,ev){
			var x=obj.offsetLeft+obj.offsetWidth/2-ev.clientX;
			var y=obj.offsetTop+obj.offsetHeight/2-ev.clientY;
			return (Math.round((a2d(Math.atan2(y,x))+180)/90))%4;
		}
		function a2d(n){
			return n*180/Math.PI;
		}
		function coll(obj){
			var oS=obj.children[1];
			obj.onmouseover=function(ev){
				var oEvent=ev||event;
				var oFrom=oEvent.fromElement||oEvent.relatedTarget;
				if(obj.contains(oFrom)){
					return;
				}
				var dir=hoverDir(obj,oEvent);
				
				//t:3; r:0; b:1; l:2;
				switch(dir){
					case 0:
						oS.style.left='200px';
						oS.style.top='0';
					break;
					case 1:
						oS.style.left='0';
						oS.style.top='600px';
					break;
					case 2:
						oS.style.left='-200px';
						oS.style.top='0';
					break;
					case 3:
						oS.style.left='0';
						oS.style.top='-600px';
					break;
				}; 
				move(oS,{left:0,top:0});
			};
			
			obj.onmouseout=function(ev){
				var oEvent=ev||event;
				var oTo=oEvent.toElement||oEvent.relatedTarget;
				if(obj.contains(oTo)){
					return;
				}
				var dir=hoverDir(obj,oEvent);
				//this.innerHTML=dir;
				//t:3; r:0; b:1; l:2;
				switch(dir){
					case 0:
						move(oS,{left:'200',top:'0'});
					break;
					case 1:
						move(oS,{left:'0',top:'600'});
					break;
					case 2:
						move(oS,{left:'-200',top:'0'});
					break;
					case 3:
						move(oS,{left:'0',top:'-600'});
					break;
				}; 
			};
		}*/
		
	
	
	
	
	
	//回到首页
	oTop.onclick=function(){
		move2(oBox,0);
		oTop.style.display='none';
	};
	function next(){
		move(oTop,{bottom:30},{end:function(){
			move(oTop,{bottom:0},{end:function(){
				next();
			}})
		}});
	}
	next();
	
	
	//表
	function setStyle3(obj, name, value){
		var bigName=name.charAt(0).toUpperCase()+name.substring(1);
		
		obj.style['Webkit'+bigName]=value;
		obj.style['Moz'+bigName]=value;
		obj.style['ms'+bigName]=value;
		obj.style['O'+bigName]=value; 
		obj.style[name]=value;
	}
	var oDiv=document.getElementById('div1');
	var oHour=document.querySelector('#div1 .hour');
	var oMin=document.querySelector('#div1 .min');
	var oSec=document.querySelector('#div1 .sec');
	
	function tick(){
		var oDate=new Date();
		setStyle3(oHour, 'transform', 'rotate('+30*(oDate.getHours()+oDate.getMinutes()/60)+'deg)');
		setStyle3(oMin, 'transform', 'rotate('+6*(oDate.getMinutes()+oDate.getSeconds()/60)+'deg)');
		setStyle3(oSec, 'transform', 'rotate('+6*(oDate.getSeconds()+oDate.getMilliseconds()/1000)+'deg)');
	}
	setInterval(tick,30);
	tick();
	for(var i=0;i<60;i++){
		var oSpan=document.createElement('span');
		
		if(i%5){
			oSpan.className='scaler';
		}
		else{
			oSpan.className='big_scaler';
			if(i==0){
				oSpan.innerHTML='<em>12<\/em>';
			}
			else{
				oSpan.innerHTML='<em>'+i/5+'<\/em>';
				setStyle3(oSpan.children[0], 'transform', 'rotate('+-6*i+'deg)');
			}
		}
		setStyle3(oSpan, 'transform', 'rotate('+6*i+'deg)');
		oDiv.appendChild(oSpan);
	};	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
};















































