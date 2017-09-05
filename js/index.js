$(document).ready(function(){
    // 翻页初始化
    $('.pushpin-demo-nav').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
            top: $target.offset().top,
            bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
    });
    // 菜单
    $('.outside div').each(function(index){
        $(this).css('transition','1s all ease '+($('.outside div').length-1)*300+'ms');
        $(this).css('transform','rotateY('+360/$('.outside div').length*index+'deg) rotateX(0deg) translateZ(350px)');
        /*if(index == 0){
            $(this).click(function(){
                window.location.reload();
            });
        }*/
        var speed=200;//滑动的速度
        $(this).click(function(){
            if(index == 0){
                window.location.reload();
            }else{
                $('body,html').animate({ scrollTop: $(window).height()*index }, speed);
                return false;
            }
        });
    });
    // 菜单点击跳转
    /*$('.outside div').click(function (index) {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: $(window).height()*index }, speed);
        return false;
    });*/
    // 倒影菜单
    $('.inside div').each(function(index){
        $(this).css('transition','1s all ease '+($('.inside div').length-1)*300+'ms');
        $(this).css('transform','rotateY('+360/$('.inside div').length*index+'deg) rotateX(90deg) translateY(250px) translateZ(-140px)');
    });
    var iSpeedX=0;
    var iSpeedY=0;
    var lastX=0;
    var lastY=0;
    var x=0;
    var y=0; 
    var timer=null;
    function isPC(){
        //检验是否是PC端
        var userAgentInfo = navigator.userAgent;  
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
        var flag = true;  
        for (var v = 0; v < Agents.length; v++) {  
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
        }  
        return flag; 
    }
    if (isPC()) {
        // 菜单拖拽效果
        $('.page1_box').mousedown(function(event){
            clearInterval(timer);
            var disX=event.pageX-y;
            var disY=event.pageY-x;
            $(document).mousemove(function(event) {
                x=event.pageY-disY;
                y=event.pageX-disX;
                $('.page1_box').css('transform','perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)');
                iSpeedX=event.pageX-lastX;
                iSpeedY=event.pageY-lastY;
                lastX=event.pageX;
                lastY=event.pageY;
            });
            $(document).mouseup(function(event) {
                $(document).unbind("mousemove");
                $(document).unbind("mouseup");
                timer=setInterval(function(){
                    iSpeedX*=0.95;
                    iSpeedY*=0.95;
                    y+=iSpeedX;
                    x+=iSpeedY;
                    $('.page1_box').css('transform','perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)');
                    if(Math.abs(iSpeedX)<1)iSpeedX=0;
                    if(Math.abs(iSpeedY)<1)iSpeedY=0;
                    if(iSpeedX==0&&iSpeedY==0){
                        clearInterval(timer);
                    }
                },30);
            });
            return false;
        });
    }
    
    // 百度地图api
    var map = new BMap.Map('map');   
    var point = new BMap.Point(116.404, 39.915);
    // 获取定位
    /*var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            alert('您的位置：'+r.point.lng+','+r.point.lat);
        }
        else {
            alert('failed'+this.getStatus());
        }        
    },{enableHighAccuracy: true})*/
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point);  // 创建标注
    map.addOverlay(marker);               // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    // 影集点击跳转
    $('#fifthPage .content').click(function(){
        window.location.href='main.html'; 
    })
});