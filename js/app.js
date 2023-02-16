'use strict';

//모바일 메뉴
$('.open_menu a').on('click focusin', function(){
    $('.menu_wrap').toggleClass('on')
});
$('.menu_close').on('click focusin', function(){
    $('.menu_wrap').removeClass('on')
});

// gnb
$('.main_menu > li').on('mouseover focusin', function(){
    $('.sub_menu').removeClass('on');
    $(this).children('ul').addClass('on');
});
$('.main_menu > li').on('mouseout', function(){
    $(this).children('ul').removeClass('on');
});
$('.main_menu > li li:last-child a').on('focusout', function(){
    $(this).parents('ul').removeClass('on');
});

// util
$('.lang_default').on('click focusin', function () {
    $(this).parent().toggleClass('active');
});
$('.lang_dropdown > li:last-child a').on('focusout', function () {
    $(this).parent().parent().parent().removeClass('active');
});

// familysite
$('.family_txt').on('click focusin', function () {
    $(this).parent().toggleClass('active');
});

//맨 위로 이동
$('.goto_top').click(function () {
    $('html').animate({
        scrollTop: 0
    });
});

$(window).on('scroll', function(){
    
    const headerHeight = $('header').outerHeight();
    const scrollTop = $(window).scrollTop();
    const elTop = $('.main_visual').offset().top;

    if(scrollTop > headerHeight){
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }

    if(scrollTop >= elTop){
        $('.btn_top').show(); 
    } else {
        $('.btn_top').hide(); 
    }
});