/**
 * Created by Administrator on 2017/3/6.
 */

//header显示更多
(function () {
    var $more = $('#header .more');
    $more.click(function () {
        $(this).find('.more-hide').toggle();
    });
})();

//banner轮播
(function () {
    var $tab = $("#banner .b-tab ul li"),
        $part = $("#banner .b-part .part"),
        $banner = $("#banner"),
        length = $tab.length,
        index = 0,
        timer = null;

    $tab.eq(0).addClass('on');
    $part.eq(0).show();

    $tab.click(function () {
        var i = $(this).index();
        if ( i !== index){
            change(function () {
                index = i;
            });
        }
    });

    auto();
    $banner.hover(function () {
        clearInterval(timer);
    },auto);
    function auto() {
        timer = setInterval(function () {
            change(function () {
                index ++;
                index %= length;
            });
        },3000)
    }
    function change(fn) {
        $part.eq(index).fadeOut(500);
        $tab.eq(index).removeClass('on');
        fn && fn();
        $part.eq(index).fadeIn(500);
        $tab.eq(index).addClass('on');
    }
})();

//classic切换
(function () {
    var $ul = $('#classic .c-main ul'),
        $li = $ul.children(),
        $btn = $('#classic .btn div'),
        width = $ul.children().eq(0).width(),
        length = $li.length,
        midIndex = Math.floor(length/2),
        clickTime = 0,
        sumWidth = 0,
        timer;
    changeClassName();
    setTimeout(function () {
        sumWidth = 0;
        $li.each(function () {
            sumWidth += $(this).width();
        });
        $ul.css('marginLeft' , -sumWidth/2+'px').css('opacity' , 1);
    },300);
    $(window).resize(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            width = $ul.children().eq(0).width();
            sumWidth = 0;
            $li.each(function () {
                sumWidth += $(this).width();
            });
            $ul.animate({'marginLeft' : -sumWidth/2+'px'},300);
        },300);
    });
    $btn.click(function () {
        if (new Date() - clickTime > 350){
            if ($(this).index()){
                midIndex ++;
                midIndex %= length;
                $ul.stop().animate({
                    'marginLeft' : -sumWidth/2 - width + 'px'
                },300,function () {
                    $(this).css('marginLeft' , -sumWidth/2+'px').append($(this).children().first());
                });
            }else{
                midIndex --;
                if(midIndex<0)midIndex=length-1;
                $ul.stop().animate({
                    'marginLeft' : -sumWidth/2 + width + 'px'
                },300,function () {
                    $(this).css('marginLeft' , -sumWidth/2+'px').prepend($(this).children().last());
                });
            }
            changeClassName();
            clickTime = new Date();
        }
    });
    function changeClassName() {
        var a = midIndex,
            b = midIndex + 1,
            c = midIndex - 1;
        if(b>=length)b=0;
        if(c<0)c=length-1;
        $li.removeClass('mid slide');
        $li.eq(a).addClass('mid');
        $li.eq(b).addClass('slide');
        $li.eq(c).addClass('slide');
    }



    // var $li = $("#classic .c-main ul li"),
    //     $ul = $("#classic .c-main ul"),
    //     $btn = $("#classic .btn div"),
    //     width = $li.width(),
    //     length = $li.length,
    //     midIndex = Math.floor(length / 2),
    //     winWidth = $(window).width(),
    //     midWidth,midLeft,nowLeft,ulMarginLeft,
    //     clickTime = 0,timer;
    // changeClassName();
    // setTimeout(function () {
    //     midWidth = $li.eq(midIndex).width();
    //     midLeft = winWidth/2 - midWidth/2;
    //     nowLeft = $li.eq(midIndex).offset().left;
    //     ulMarginLeft = midLeft-nowLeft;
    //     $ul.css('marginLeft' , ulMarginLeft + 'px').css('opacity' , 1);
    // },300);
    //
    // $(window).resize(function () {
    //     clearTimeout(timer);
    //     timer = setTimeout(function () {
    //         width = $li.width();
    //         midWidth = $li.eq(midIndex).width();
    //         winWidth = $(window).width();
    //         midLeft = winWidth/2 - midWidth/2;
    //         nowLeft = $li.eq(midIndex).offset().left;
    //         ulMarginLeft = midLeft-nowLeft;
    //         $ul.stop().animate({'marginLeft' : ulMarginLeft + 'px'},300);
    //     });
    // });
    //
    //
    // $btn.click(function () {
    //     if (new Date() - clickTime > 350){
    //         var left;
    //         if ($(this).index()){
    //             midIndex ++;
    //             midIndex %= length;
    //             left = ulMarginLeft - width;
    //             changeClassName();
    //             $ul.stop().animate({
    //                 marginLeft : left + 'px'
    //             },300,function () {
    //                 $(this).append($(this).children().eq(0));
    //                 $(this).css('marginLeft' , ulMarginLeft+'px')
    //             });
    //         }else{
    //             midIndex --;
    //             if (midIndex<0)midIndex = length-1;
    //             left = ulMarginLeft + width;
    //             changeClassName();
    //             $ul.stop().animate({
    //                 marginLeft : left + 'px'
    //             },300,function () {
    //                 $(this).prepend($(this).children().last());
    //                 $(this).css('marginLeft' , ulMarginLeft+'px')
    //             });
    //         }
    //         clickTime = new Date();
    //     }
    // });
    //
    // function changeClassName() {
    //     $li.removeClass('mid slide');
    //     var a = midIndex ,
    //         b = midIndex + 1,
    //         c = midIndex - 1;
    //     if (b>=length)b=0;
    //     if (c<0)c=length-1;
    //     $li.eq(a).addClass('mid');
    //     $li.eq(b).addClass('slide');
    //     $li.eq(c).addClass('slide');
    // }
})();



















