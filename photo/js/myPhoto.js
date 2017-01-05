$(document).ready(function(){
    let imgWidth = $('.showConPhoto div').width();
    $('.showConPhoto div').css({'height':imgWidth+'px','line-height':imgWidth+'px'});
    let attrWidth = $('.showAttrPhoto div').width();
    $('.showAttrPhoto div').css({'height':attrWidth+'px','line-height':attrWidth+'px'});
    $(window).resize(function() {
        let imgWidth = $('.showConPhoto div').width();
        let attrWidth = $('.showAttrPhoto div').width();
        $('.showConPhoto div').css({'height':imgWidth+'px','line-height':imgWidth+'px'});
        $('.showAttrPhoto div').css({'height':attrWidth+'px','line-height':attrWidth+'px'});

    });
});