$(document).ready(function(){
    let imgWidth = $('.showConPhoto div').width();
    $('.showConPhoto div').css({'height':imgWidth+'px','line-height':imgWidth+'px'});
    let attrWidth = $('.showAttrPhoto div').width();
    $('.showAttrPhoto div').css({'height':attrWidth+'px','line-height':attrWidth+'px'});
    let boxWidth = $('.boutiqueBox').width();
    $('.boutiqueBox').css('height',boxWidth/3 + 'px');
    let onlyBoxWidth = $('.onlyBox').width();
    $('.onlyBox').css('height',onlyBoxWidth/3 + 'px');
    let footMargin = $('.footer').width();
    $('.footer').css('margin-top',footMargin/4 + 'px');
    let onlyWidth = $('.only').width();
    $('.only').css('margin-top',onlyWidth/4 + 'px');
    setTimeout(function(){
        let boxHeight = $('.boutiqueBox').height();
        let imgHeight = $('.right').height();
        $('.forever').css('line-height',(boxHeight - imgHeight) + 'px');
    },100);
    $(window).resize(function() {
        setTimeout(function(){
            boxHeight = $('.boutiqueBox').height();
            imgHeight = $('.right').height();
            $('.forever').css('line-height',(boxHeight - imgHeight) + 'px');
        },100);
        boxWidth = $('.boutiqueBox').width();
        footMargin = $('.footer').width();
        imgWidth = $('.showConPhoto div').width();
        attrWidth = $('.showAttrPhoto div').width();
        onlyBoxWidth = $('.onlyBox').width();
        $('.onlyBox').css('height',onlyBoxWidth/3 + 'px');
        $('.boutiqueBox').css('height',boxWidth/3 + 'px');
        $('.footer').css('margin-top',footMargin/4 + 'px');
        $('.showConPhoto div').css({'height':imgWidth+'px','line-height':imgWidth+'px'});
        $('.showAttrPhoto div').css({'height':attrWidth+'px','line-height':attrWidth+'px'});
        onlyWidth = $('.only').width();
        $('.only').css('margin-top',onlyWidth/4 + 'px');
    });
});