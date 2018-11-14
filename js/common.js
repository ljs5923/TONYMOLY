jQuery(function ($) {
    //    menu event start
    var $localMenu = $('._local_menu ._local_menu_lsts');
    var $localLst = $localMenu.find('._lst');
    var $subMenu = $('._sub_menu_wrap');
    $localLst.on('click', function (e) {
        var index = $(this).index();
        $(this).addClass('_active').siblings().removeClass('_active');
        $subMenu.eq(index).show().siblings().hide();
    })
    $subMenu.on('mouseleave',function(){
        $localLst.removeClass('_active');
        $subMenu.slideUp();
    })
    //    menu event end
    //    slide event start
    var $slider = $('._slider');
    var $sliderImg = $slider.find('li');
    var $cotrolWrap = $('._btn_wrap')
    var $controlBtn = $cotrolWrap.find('._btn');
    var $pagerWrap = $('._pager_wrap');
    var $pagerBtn = $pagerWrap.find('._pager_btn');
    var sliderLeft = $slider.position().left;
    $controlBtn.on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('_next_btn')) {
            nextAni();
        } else if ($(this).hasClass('_prev_btn')) {
            prevAni();
        }
    });
    $pagerBtn.on('click', function () {
        var pagerIndex = $(this).index();
        $(this).addClass('_on').siblings().removeClass('_on');
        $slider.animate({
            left: -513 + (-742 * pagerIndex)
        });
        index = pagerIndex
    })
    function prevAni() {
        var index = $('._pager_btn._on').index();
        $slider.animate({
            left: sliderLeft + (-742*(index-1))
        },function(){
            if(index==0){
                $slider.css('left',-4223);
                $pagerBtn.eq(5).addClass('_on').siblings().removeClass('_on');
            }
        });
        $pagerBtn.eq(index-1).addClass('_on').siblings().removeClass('_on');
    }
    function nextAni() {
        var index = $('._pager_btn._on').index();
        $slider.animate({
            left: sliderLeft + (-742*(index+1))
        }, function () {
            if (index == 5) {
                $slider.css('left', -513);
                $pagerBtn.eq(0).addClass('_on').siblings().removeClass('_on');
            }
            $pagerBtn.eq(index + 1).addClass('_on').siblings().removeClass('_on');
        });
    }
    var sliderAuto = setInterval(nextAni,5000);
})
