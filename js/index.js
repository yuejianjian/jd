
/*顶部小火箭 原生js写法*/
/*window.onload = function(){
    function $(id) {return document.getElementById(id);}
    function show(obj) { obj.style.display = "block";}
    function hide(obj) { obj.style.display = "none";}
    function scroll() {
        if(window.pageYOffset != null)
        {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        else if(document.compatMode == "CSS1Compat")
        {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
    var goTop = $("gotop");
    window.onscroll = function() {
        scroll().top > 0 ? show(goTop) : hide(goTop);
        leader = scroll().top;
    }
    var leader = 0,target = 0,timer = null;
    goTop.onclick = function() {
        target = 0;
        timer = setInterval(function() {
            leader = leader + (target - leader ) / 10;
            window.scrollTo(0,leader);
            if(leader == target)
            {
                clearInterval(timer);
            }
        },20);
    }
}*/
$(function() {
    /*顶部小火箭 jQuery写法*/
    $(window).scroll(function() {
        if($(window).scrollTop() > 100) {
            $("#gotop").fadeIn(100);
        } else {
            $("#gotop").fadeOut(100);
        }
    });
});
/* 给图片元素绑定 回到顶部的事件 */
$(function() {
    $("#gotop").on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    /*搜索框js效果*/
   /* var txt = document.getElementById("txt");
    txt.onfocus = function(){ //得到焦点
        if(txt.value == "数码相机"  )
        {
            txt.value = "";
            txt.style.color = "#333";
        }
    }
    txt.onblur = function(){ //失去焦点
        if(txt.value == "")
        {
            txt.value = "数码相机";
            txt.style.color = "#ccc";
        }
    }*/
    /*搜索框jQuery效果*/
    $("#txt").click(function(){
        if($(this).val() == "数码相机"){
            $(this).val("");
        }
    })
    $("#txt").blur(function(){
        if($(this).val("")){
            $(this).val("数码相机");
        }
    })
    /*大轮播图*/
    $(".lun-center ol li").mouseenter(function () {
        $(this).addClass("libg").siblings().removeClass("libg");
        $(".lun-center ul li").eq($(this).index()).fadeIn("fast").siblings().fadeOut();
    });
    var timer=null;
    var iNow=0;
    timer=setInterval(function(){
        iNow++;
        if(iNow> 8){
            iNow=0;
        }
        $(".lun-center ol li").eq(iNow).trigger("mouseenter");
    },2000);
    /*tab栏切换*/
    $(".tab li").mouseenter(function(){
        var $this = $(this),
            index = $this.index();
        $this.addClass("active").siblings("li").removeClass("active");

        $(".products div").eq(index).addClass("selected").siblings("div").removeClass("selected");
    });
    /*商品鼠标移动背景图切换*/
    var bigtu = document.getElementById("bigtu");
    var bigtu2 = document.getElementById("bigtu2");
    var bigtu3 = document.getElementById("bigtu3");
    var bigtu4 = document.getElementById("bigtu4");
    var bigtu5 = document.getElementById("bigtu5");

    function fn(id,i, bg) {
        var obj = document.getElementById(id);
        obj.onmouseover = function() {
            if(i == 1) {
                bigtu.style.backgroundImage = bg;
            }else if(i ==2){
                bigtu2.style.backgroundImage = bg;
            }else if(i ==3){
                bigtu3.style.backgroundImage = bg;
            }else if(i ==4){
                bigtu4.style.backgroundImage = bg;
            }else if(i ==5){
                bigtu5.style.backgroundImage = bg;
            }
        }
    }
    for(var j = 1 ; j < 6 ; j++){
        fn("li0" + j,1 , "url(images/daojishi/yf-"+j+".jpg)");
        fn("2li0" + j,2 , "url(images/daojishi/xz-"+j+".jpg)");
        fn("3li0" + j,3 , "url(images/daojishi/yf-"+j+".jpg)");
        fn("4li0" + j,4 , "url(images/daojishi/yf-"+j+".jpg)");
        fn("5li0" + j,5 , "url(images/daojishi/yf-"+j+".jpg)");
    }
    /*倒计时*/
    var demo = document.getElementById("demo");
    var endtime = new Date("2017/11/11 00:00:00");
    setInterval(clock ,1000)
    function clock(){
        var nowtime = new Date();
        var second =parseInt((endtime.getTime() - nowtime.getTime())/1000);
        var d = parseInt(second/3600/24);
        var h =parseInt(second/3600%24);
        var m =parseInt((second-h*60*60-d*24*60*60)/60);
        var s = parseInt(second-h*60*60-d*24*60*60-m*60);
        d<10 ? d="0"+d : d;
        h<10 ? h="0"+h : h;
        m<10 ? m="0"+m : m;
        s<10 ? s="0"+s : s;
        demo.innerHTML = "距离双十一购物节抢购时间还剩: "+d+"天 "+h+"小时 "+m+"分钟 "+s+"秒";
    }

})





