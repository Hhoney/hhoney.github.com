function getStyle(obj,name){
	return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
}

function move(obj,json,options){
	var start={};
	var dis={};
	options=options||{};
	options.time=options.time||700;
	options.type=options.type||'ease-out';
	
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	var count=Math.round(options.time/30);
	var n=0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++
		for(var name in json){
			switch(options.type){
				case 'linnear':
					var cur=start[name]+dis[name]*n/count;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-Math.pow(a,3));
					break;
			}
			
			if(name=='opacity'){
				obj.style[name]=cur;
				obj.style[name]='alpha(opacity:'+cur*100+')'
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(n==count){
			clearInterval(obj.timer);
			options.end&&options.end();
		}
	},30);
}
function addMouseEvent(obj,fn){
	function fnWheel(ev){
		var oEvent=ev||event;
		var down=true;
		if(oEvent.wheelDelta){
			if(oEvent.wheelDelta<0){
				down=true;
			}else{
				down=false;
			}
		}else{
			if(oEvent.detail>0){
				down=true;
			}else{
				down=false;
			}
		}
		fn(down);
		
		oEvent.preventDefault&&oEvent.preventDefault();
		return false;
	}
	obj.onmousewheel=fnWheel;
	obj.addEventListener&&obj.addEventListener('DOMMouseScroll',fnWheel,false);
}
var iSpeed = 0;
var timer = null;
function move2(obj,iTarget){
	var top = obj.offsetTop;
	clearInterval(timer);
	timer = setInterval(function(){
		iSpeed+= (iTarget-top)/10;
		iSpeed*= 0.70;
		top+=iSpeed;
		obj.style.top = top+'px';
		if(Math.round(iSpeed)==0&&Math.round(top)==iTarget){
			clearInterval(timer);
		}
	},30);
}













