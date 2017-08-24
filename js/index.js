/**
 * Created by jian on 2017/7/28.
 */
/*
function animate(obj,target){
    clearInterval(obj.timer);  // 先清除定时器
    var speed = obj.offsetLeft < target ? 15 : -15;  // 用来判断 应该 +  还是 -
    obj.timer = setInterval(function() {
        var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
        obj.style.left = obj.offsetLeft + speed + "px";
        if(Math.abs(result)<=15)  // 如果差值不小于 5 说明到位置了
        {
            clearInterval(obj.timer);
            obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
        }
    },10)
}
window.onload = function(){
    var box = document.getElementById("box");
    var ul = document.getElementById("ul");
    var ullis = ul.children;
    ul.appendChild(ul.children[0].cloneNode(true));
    var ol = document.createElement("ol");
    box.appendChild(ol);
    for(var i = 0 ; i< ullis.length-1;i++){
        var li = document.createElement("li");
        li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    ol.children[0].className ="libg";
    var ollis = ol.children;
    for(var i = 0; i<ollis.length;i++){
        ollis.index = i;
        ollis[i].onmouseover = function(){
            for(var j = 0 ; j < ollis.length;j++){
                ollis[j].className = "";
            }
            this.className = "libg";
            animate(ul,-this.index*790)
            square = key = this.index;
        }
    }
    var timer = null;
    var key = 0;
    var square = 0;
    timer = setInterval(autoplay,1000);
    function autoplay(){
        key++;
        if(key > ullis.length-1){
            ul.style.left = 0;
            key = 1;
        }
        animate(ul,-key*790)
        square++;
        if(square > ollis.length - 1){
            aquare = 0;
        }
        for(var i = 0; i< ollis.length; i++){
            ollis[i].className = "";
        }
        ollis[square].className = "libg";
    }
    box.onmouseover = function(){
        clearInterval(timer);
    }
    box.onmouseout = function(){
        timer = setInterval(autoplay ,1000);
    }
}*/
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
        obj.onmouseover = function () {
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
    fn("2li01", "url(images/daojishi/yf-1.jpg)"); // 实参  调用函数
    fn("2li02", "url(images/daojishi/yf-2.jpg)");
    fn("2li03", "url(images/daojishi/yf-3.jpg)");
    fn("2li04", "url(images/daojishi/yf-4.jpg)");
    fn("2li05", "url(images/daojishi/yf-5.jpg)");
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



