$(document).ready(function(){
    let imgWidth = $('.showConPhoto div').width();
    $('.showConPhoto div').css({'height':imgWidth+'px','line-height':imgWidth+'px'});
    let attrWidth = $('.showAttrPhoto div').width();
    $('.showAttrPhoto div').css({'height':attrWidth+'px','line-height':attrWidth+'px'});
    let boxWidth = $('.boutiqueBox').width();
    $('.boutiqueBox').css('height',boxWidth/3 + 'px');
    let onlyWidth = $('.onlyBox').width();
    $('.onlyBox').css('height',onlyWidth/3 + 'px');
    let footMargin = $('.footer').width();
    $('.footer').css('margin-top',footMargin/5 + 'px');
    $(window).resize(function() {
        imgWidth = $('.showConPhoto div').width();
        attrWidth = $('.showAttrPhoto div').width();
        onlyWidth = $('.onlyBox').width();
        $('.onlyBox').css('height',onlyWidth/3 + 'px');
        boxWidth = $('.boutiqueBox').width();
        $('.boutiqueBox').css('height',boxWidth/3 + 'px');
        footMargin = $('.footer').width();
        $('.footer').css('margin-top',footMargin/5 + 'px');
        $('.showConPhoto div').css({'height':imgWidth+'px','line-height':imgWidth+'px'});
        $('.showAttrPhoto div').css({'height':attrWidth+'px','line-height':attrWidth+'px'});
    });
});