
window.onload = function(){
	document.onmousemove = function(ev){
		var oEvent = ev||event;
		var oDiv = document.getElementById('div1');
		var aImg = oDiv.getElementsByTagName('img');
		var aTxt = document.getElementsByTagName('input');
			
		
		for(var i  = 0;i<aImg.length;i++){
			var a = aImg[i].offsetLeft + oDiv.offsetLeft + aImg[i].offsetWidth/2 - oEvent.clientX;
			var b = aImg[i].offsetTop + oDiv.offsetTop + aImg[i].offsetHeight/2 - oEvent.clientY;
			//var c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
			var c = Math.sqrt(a*a+b*b);
			var scale =1 - c/500;
			aTxt[i].value =scale;
			
			(scale<0.5)&&(scale = 0.5);
			aImg[i].style.width = scale*128+'px';
		}
		
	};	
};
