/**
 * Created by Administrator on 2017/3/11.
 */

//part1
(function () {
    var $content = $('#content');
    var $part1 = $('#part1');
    $(window).resize(part1H);
    part1H();
    function part1H(){
        var winH = $(window).height();
        $part1.height(winH - parseFloat($content.css('margin')));
    }
})();

//part3
(function () {
    var $thirdLi = $('#part3 .p3-wrap .third ul li'),
        $secondLi = $('#part3 .p3-wrap .second ul li'),
        index = 0,
        length = $thirdLi.length,
        timer = null;
    $thirdLi.click(function () {
        clearInterval(timer);
        index = $(this).index();
        $(this).addClass('active').siblings().removeClass("active");
        $secondLi.eq(index).show().siblings().hide();
        auto();
    });
    auto();
    function auto() {
        timer = setInterval(function () {
            index ++;
            index %= length;
            $thirdLi.eq(index).addClass('active').siblings().removeClass("active");
            $secondLi.eq(index).show().siblings().hide();
        },3000);
    }
})();

//part按钮点击事件
(function () {
    var $part = $("#content .part");
    $part.find(".btn").click(function () {
        var index = $(this).parents('.part').index('.part');
        var scrollTop = $part.eq(index+1).offset().top - ($(window).height()-$part.eq(index+1).height()+71)/2;
        $("body,html").animate({
            scrollTop : scrollTop
        },800);
    });
})();
