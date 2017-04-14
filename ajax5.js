// JavaScript Document

//url, data, type, timeout, success, error
//ajax({url: xx, type: xxx})
function ajax(options)
{
	options=options||{};
	options.data=options.data||{};
	options.type=options.type||'get';
	options.timeout=options.timeout||0;
	
	//把数据拼起来
	var arr=[];
	for(var name in options.data)
	{
		arr.push(name+'='+encodeURIComponent(options.data[name]));
	}
	var sData=arr.join('&');
	
	
	if(window.XMLHttpRequest)
		var oAjax=new XMLHttpRequest();
	else
		var oAjax=new ActiveXObject('Microsoft.XMLHttp');
	
	if(options.type=='get')
	{
		//GET方式
		oAjax.open('GET', options.url+'?'+sData, true);
		oAjax.send();
	}
	else
	{
		//POST方式
		oAjax.open('POST', options.url, true);
		oAjax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
		oAjax.send(sData);
	}
	
	oAjax.onreadystatechange=function ()
	{
		if(oAjax.readyState==4)
		{
			if((oAjax.status>=200 && oAjax.status<300) || oAjax.status==304)
			{
				options.success && options.success(oAjax.responseText);
			}
			else
			{
				options.error && options.error();
			}
		}
	};
	
	var timer=null;
	//超时
	if(options.timeout)
	{
		clearTimeout(timer);
		timer=setTimeout(function (){
			oAjax.abort();
		}, options.timeout);
	}
}














