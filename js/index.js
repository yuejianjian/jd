/**
 * Created by jian on 2017/7/28.
 */
/*顶部小火箭*/

$(function() {
    function $(id) {return document.getElementById(id);}
    function show(obj) { obj.style.display = "block";}
    function hide(obj) { obj.style.display = "none";}
    function scroll() {
        if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
        {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
        // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
        {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return { //  剩下的肯定是怪异模式的
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
    //console.log(111);
    var goTop = $("gotop");
    window.onscroll = function() {
        scroll().top > 0 ? show(goTop) : hide(goTop);  // 如果大于0 就显示 否则隐藏
        leader = scroll().top;  // 把 卷去的头部 给  起始位置
        //console.log(scroll().top);

    }
    var leader = 0,target = 0,timer = null;
    // leader 起始位置  target  目标位置
    goTop.onclick = function() {
        target = 0;  //  点击完毕之后 奔向0 去的  不写也可以
        timer = setInterval(function() {
            leader = leader + (target - leader ) / 10;
            window.scrollTo(0,leader);  // 去往页面中的某个位置
            if(leader == target)
            {
                clearInterval(timer);
            }
        },20);
    }
})

/*轮播图*/
$(function () {
    // 根据ol下li的索引号，匹配ul下相对应li的索引号
    $(".lun-center ol li").mouseenter(function () {
        $(this).addClass("libg").siblings().removeClass("libg");
        $(".lun-center ul li").eq($(this).index()).fadeIn("fast").siblings().fadeOut();
    });
});
/*tab栏切换*/
$(function(){
    $(".tab li").mouseenter(function(){
        var $this = $(this),
            index = $this.index();
        $this.addClass("active").siblings("li").removeClass("active");

        $(".products div").eq(index).addClass("selected").siblings("div").removeClass("selected");
    });
});
/**/
window.onload = function() {
    /*  一共有五组   这些有哪些相同的部分：
     鼠标经过   背景更换图片    我们可以吧这两个放到一个函数里面 重复使用就可以*/
    //事件源    li   事件  鼠标经过   事件处理程序   box 更换背景
    /*  var li02 = document.getElementById("li02");
     var box = document.getElementById("box");
     li02.onmouseover = function(){
     box.style.backgroundImage = "url(images/02big.jpg)";
     }
     var li01 = document.getElementById("li01");
     var box = document.getElementById("box");
     li01.onmouseover = function(){
     box.style.backgroundImage = "url(images/01big.jpg)";
     }*/
    var bigtu = document.getElementById("bigtu");
    var bigtu2 = document.getElementById("bigtu2");
    var bigtu3 = document.getElementById("bigtu3");
    var bigtu4 = document.getElementById("bigtu4");
    var bigtu5 = document.getElementById("bigtu5");

    function fn(liid, bg) {  // 封装函数  参数的传递
        var obj = document.getElementById(liid);
        obj.onmouseover = function() {
           bigtu.style.backgroundImage = bg;
           bigtu2.style.backgroundImage = bg;
           bigtu3.style.backgroundImage = bg;
           bigtu4.style.backgroundImage = bg;
           bigtu5.style.backgroundImage = bg;

        }
    }

    fn("li01", "url(images/daojishi/yf-1.jpg)"); // 实参  调用函数
    fn("li02", "url(images/daojishi/yf-2.jpg)");
    fn("li03", "url(images/daojishi/yf-3.jpg)");
    fn("li04", "url(images/daojishi/yf-4.jpg)");
    fn("li05", "url(images/daojishi/yf-5.jpg)");
    /*2*/
    fn("2li01", "url(images/daojishi/xz-1.jpg)"); // 实参  调用函数
    fn("2li02", "url(images/daojishi/xz-2.jpg)");
    fn("2li03", "url(images/daojishi/xz-3.jpg)");
    fn("2li04", "url(images/daojishi/xz-4.jpg)");
    fn("2li05", "url(images/daojishi/xz-5.jpg)");

    /*3*/

    fn("3li01", "url(images/daojishi/yf-1.jpg)"); // 实参  调用函数
    fn("3li02", "url(images/daojishi/yf-2.jpg)");
    fn("3li03", "url(images/daojishi/yf-3.jpg)");
    fn("3li04", "url(images/daojishi/yf-4.jpg)");
    fn("3li05", "url(images/daojishi/yf-5.jpg)");
    /*4*/
    fn("4li01", "url(images/daojishi/yf-1.jpg)"); // 实参  调用函数
    fn("4li02", "url(images/daojishi/yf-2.jpg)");
    fn("4li03", "url(images/daojishi/yf-3.jpg)");
    fn("4li04", "url(images/daojishi/yf-4.jpg)");
    fn("4li05", "url(images/daojishi/yf-5.jpg)");
    /*5*/
    fn("5li01", "url(images/daojishi/yf-1.jpg)"); // 实参  调用函数
    fn("5li02", "url(images/daojishi/yf-2.jpg)");
    fn("5li03", "url(images/daojishi/yf-3.jpg)");
    fn("5li04", "url(images/daojishi/yf-4.jpg)");
    fn("5li05", "url(images/daojishi/yf-5.jpg)");
}



/*倒计时*/
$(function(){
    var demo = document.getElementById("demo");
    var endtime = new Date("2017/11/11 00:00:00");
    setInterval(clock ,1000)
    function clock(){
        var nowtime = new Date();
        //console.log(nowtime.getTime());
        var second =parseInt((endtime.getTime() - nowtime.getTime())/1000);
       // console.log(second);
        var d = parseInt(second/3600/24);
        //console.log(d);
        var h =parseInt(second/3600%24);
       // console.log(h);
        var m =parseInt((second-h*60*60-d*24*60*60)/60);
        console.log(m);
        var s = parseInt(second-h*60*60-d*24*60*60-m*60); // 当前的秒
        console.log(s);
        /* if(d<10)
         {
         d = "0" + d;
         }*/
        d<10 ? d="0"+d : d;
        h<10 ? h="0"+h : h;
        m<10 ? m="0"+m : m;
        s<10 ? s="0"+s : s;
        demo.innerHTML = "距离双十一购物节抢购时间还剩: "+d+"天 "+h+"小时 "+m+"分钟 "+s+"秒";
    }
})



