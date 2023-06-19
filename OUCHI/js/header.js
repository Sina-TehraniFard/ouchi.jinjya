$(window).scroll(function () {
    //スクロール値を定義
    var scroll = $(window).scrollTop();

    //header-imgの背景
    $('#header-img').css({

        //スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
        transform: 'scale(' + (100 + scroll / 10) / 100 + ')',

        //スクロール値を代入してtopの位置をマイナスにずらす
        top: -(scroll / 50) + "%",
    });
});