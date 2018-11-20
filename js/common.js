jQuery(function ($) {
    //    menu event start
    var $headerDownWrap = $('._header_down_wrap');
    var $gnb = $('#_gnb');
    var $menuMainLst = $gnb.find('._lst');
    var $subMenu = $menuMainLst.find('._sub_lst');
    $gnb.hover(
        function(){
            $subMenu.stop().slideDown();
            $headerDownWrap.addClass('_on');
        }, function(){
            $subMenu.stop().slideUp();
            $headerDownWrap.removeClass('_on');
        }
    );
    //    menu event end
    //    slide event start
    var $sliderWrap = $('._slider_wrap');
    var $slider = $('._slider');
    var $sliderImg = $slider.find('li');
    var sliderImgW = $sliderImg.outerWidth();
    var sliderWrapML = ($sliderWrap.outerWidth(true)-sliderImgW)/2
    var $cotrolWrap = $('._btn_wrap')
    var $controlBtn = $cotrolWrap.find('._btn');
    var $pagerWrap = $('._pager_wrap');
    var $pagerBtn = $pagerWrap.find('._pager_btn');
    var $startStopWrap = $('._play_stop_wrap');
    var $startStopBtn = $startStopWrap.find('._btn');    
    $slider.css('left',-(sliderImgW-sliderWrapML))
    $controlBtn.on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('_next_btn')) {
            return nextAni();
        } else if ($(this).hasClass('_prev_btn')) {
            return prevAni();
        }
    });
    $pagerBtn.on('click', function () {
        var pagerIndex = $(this).index();
        $(this).addClass('_on').siblings().removeClass('_on');
        $slider.animate({
            left: -(sliderImgW-sliderWrapML) + (-sliderImgW * pagerIndex)
        });
        index = pagerIndex
    })
    function prevAni() {
        var index = $('._pager_btn._on').index();
        $slider.animate({
            left: -(sliderImgW-sliderWrapML) + (-sliderImgW*(index-1))
        },function(){
            if(index==0){
                $slider.css('left',-(sliderImgW-sliderWrapML) + (-sliderImgW * 5));
                $pagerBtn.eq(5).addClass('_on').siblings().removeClass('_on');
            }
        });
        $pagerBtn.eq(index-1).addClass('_on').siblings().removeClass('_on');
    }
    function nextAni() {
        var index = $('._pager_btn._on').index();
        $slider.animate({
            left: -(sliderImgW-sliderWrapML) + (-sliderImgW*(index+1))
        }, function () {
            if (index == 5) {
                $slider.css('left', -(sliderImgW-sliderWrapML));
                $pagerBtn.eq(0).addClass('_on').siblings().removeClass('_on');
            }
            $pagerBtn.eq(index + 1).addClass('_on').siblings().removeClass('_on');
        });
    }
    var sliderAuto = setInterval(nextAni,5000);
    $startStopBtn.on('click',function(e){
        e.preventDefault();
        if($(this).hasClass('_start')){
            sliderAuto = setInterval(nextAni,5000);
            $(this).removeClass('_on').siblings().addClass('_on');
        } else if($(this).hasClass('_stop')) {
            clearInterval(sliderAuto);
            $(this).removeClass('_on').siblings().addClass('_on');
        }
    })
    //    slide event end
    // best keyword event start
    var $moreBtn = $('._more_btn');
    var $keyWordLstsWrap = $('._keyword_lsts_wrap');
//    var $keyWordLsts = $('._keyword_lsts');
//    var $keyWordLst = $keyWordLsts.find('li');
    $moreBtn.on('click',function(){
        $keyWordLstsWrap.toggleClass('_on');
    })
})