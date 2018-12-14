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
    $(window).on('resize load', function () {
        //    web reponsive moblie menu
        $moblieMenuWrap = $('#_moblie_menu_wrap');
        moblieMenuW = $moblieMenuWrap.outerWidth();
        $moblieMenuWrap.css('right', -(moblieMenuW));
    })
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
})
