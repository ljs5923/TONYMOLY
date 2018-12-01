jQuery(function ($) {
    //    menu event start
    var $headerDownWrap = $('._header_down_wrap');
    var $gnb = $('#_gnb');
    var $menuMainLst = $gnb.find('._lst');
    var $subMenu = $menuMainLst.find('._sub_lst');
    $gnb.hover(
        function () {
            $subMenu.stop().slideDown();
            $headerDownWrap.addClass('_on');
        },
        function () {
            $subMenu.stop().slideUp();
            $headerDownWrap.removeClass('_on');
        }
    );
    $menuMainLst.hover(
        function () {
            $(this).addClass('_on');
        },
        function () {
            $(this).removeClass('_on');
        }
    );
    //    menu event end
    //    moblie menu event start
    var $moblieMenuWrap = $('#_moblie_menu_wrap');
    var $moblieMenu = $moblieMenuWrap.find('._moblie_gnb');
    var moblieMenuW = $moblieMenuWrap.outerWidth();
    var $moblieMenuBtn = $('._m_btn');
    var $moblieMenuLsts = $('._moblie_menu_lsts');
    var $moblieMenuLst = $moblieMenuLsts.find('._lst');
    $moblieMenuWrap.css('right', -(moblieMenuW));
    $moblieMenuBtn.on('click', function () {
        $(this).toggleClass('_on');
        $moblieMenuWrap.stop().animate({
            right: -(moblieMenuW)
        });
        if ($(this).hasClass('_on')) {
            $moblieMenuWrap.stop().animate({
                right: 0
            });
        }
    });
    $moblieMenuLst.on('click', function () {
        $(this).find('._sub_lst').stop().slideDown();
        $(this).siblings().find('._sub_lst').stop().slideUp();
    })
    //    moblie menu event end
    //    slide event start
    var $sliderContainer = $('._slider_container');
    var $sliderWrap = $('._slider_wrap');
    var sliderWrapW = $sliderWrap.outerWidth(true)
    var $slider = $('._slider');
    var $sliderImg = $slider.find('li');
    var sliderImgW = $sliderImg.outerWidth();
    var sliderWrapML = (sliderWrapW - sliderImgW) / 2
    var $cotrolWrap = $('._btn_wrap')
    var $controlBtn = $cotrolWrap.find('._btn');
    var $pagerWrap = $('._pager_wrap');
    var $pagerBtn = $pagerWrap.find('._pager_btn');
    var $startStopWrap = $('._play_stop_wrap');
    var $startStopBtn = $startStopWrap.find('._btn');
    $slider.css('left', -(sliderImgW - sliderWrapML));
    $sliderWrap.css({
        width: $sliderImg.outerWidth(),
        height: $sliderImg.outerHeight()
    });
    $(window).on('resize load', function () {
        //    web responsive slider
        sliderWrapW = $sliderWrap.outerWidth(true)
        sliderImgW = $sliderImg.outerWidth();
        sliderWrapML = (sliderWrapW - sliderImgW) / 2
        $sliderWrap.css({
            width: $sliderImg.outerWidth(),
            height: $sliderImg.outerHeight()
        });
        console.log("sliderImgW : "+sliderImgW)
        console.log("sliderWrapW : "+sliderWrapW)
        console.log("sliderWrapML : "+sliderWrapML)
        $slider.css('left', -(sliderImgW - sliderWrapML));
        //    web reponsive moblie menu
        $moblieMenuWrap = $('#_moblie_menu_wrap');
        moblieMenuW = $moblieMenuWrap.outerWidth();
        $moblieMenuWrap.css('right', -(moblieMenuW));
    });
    $controlBtn.on('click', function (e) {
        var imgIndex = $('._pager_btn._on').index();
        e.preventDefault();
        if ($(this).hasClass('_next_btn')) {
            return nextAni(imgIndex);
        } else if ($(this).hasClass('_prev_btn')) {
            return prevAni(imgIndex);
        }
    });

    function prevAni(index) {
        index = $('._pager_btn._on').index();
        $slider.stop().animate({
            left: -(sliderImgW - sliderWrapML) + (-sliderImgW * (index - 1))
        }, function () {
            if (index == 0) {
                $slider.css('left', -(sliderImgW - sliderWrapML) + (-sliderImgW * 6));
                $pagerBtn.eq(6).addClass('_on').siblings().removeClass('_on');
            }
            $pagerBtn.eq(index - 1).addClass('_on').siblings().removeClass('_on');
        });
    }

    function nextAni(index) {
        index = $('._pager_btn._on').index();
        $slider.stop().animate({
            left: -(sliderImgW - sliderWrapML) + (-sliderImgW * (index + 1))
        }, function () {
            if (index == 6) {
                $slider.css('left', -(sliderImgW - sliderWrapML));
                $pagerBtn.eq(0).addClass('_on').siblings().removeClass('_on');
            }
            $pagerBtn.eq(index + 1).addClass('_on').siblings().removeClass('_on');
        });
    }
    $pagerBtn.on('click', function () {
        var pagerIndex = $(this).index();
        $slider.stop().animate({
            left: -(sliderImgW - sliderWrapML) + (-sliderImgW * pagerIndex)
        });
        $(this).addClass('_on').siblings().removeClass('_on');
    });
    var sliderAuto = setInterval(nextAni, 10000);
    $startStopBtn.on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('_start')) {
            sliderAuto = setInterval(nextAni, 10000);
            $(this).removeClass('_on').siblings().addClass('_on');
        } else if ($(this).hasClass('_stop')) {
            clearInterval(sliderAuto);
            $(this).removeClass('_on').siblings().addClass('_on');
        }
    });
    //    slide event end
    // best keyword event start
    var $moreBtn = $('._more_btn');
    var $keyWordLstsWrap = $('._keyword_lsts_wrap');
    $moreBtn.on('click', function () {
        $keyWordLstsWrap.toggleClass('_on');
    })
})
