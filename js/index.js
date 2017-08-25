/**
 * Created by jian on 2017/7/28.
 */
/*顶部小火箭*/

$(function() {

    var goTop = $("gotop");
    window.onscroll = function() {
        scroll().top > 0 ? show(goTop) : hide(goTop);  // 如果大于0 就显示 否则隐藏
        leader = scroll().top;  // 把 卷去的头部 给  起始位置
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
    /*搜索栏点击 字体消失*/
    var txt = document.getElementById("txt");
    txt.onfocus = function(){ //得到焦点
        //alert("得到了焦点");
        //什么时候该清空呢
        //用户没有输入的时候，用户第一次使用的时候
        // 如果 这里input 里面的文字 是 请输入...  说明用户没有用过，就应该清空
        if(txt.value == "数码相机"  )
        {
            txt.value = "";
            txt.style.color = "#333";
        }
    }
    txt.onblur = function(){ //失去焦点
        //alert("失去了焦点");
        //什么时候再还原呢？
        //input的值是 空的时候，我们再复原
        if(txt.value == "")
        {
            txt.value = "数码相机";
            txt.style.color = "#ccc";
        }
    }
    /*轮播图*/
    // 根据ol下li的索引号，匹配ul下相对应li的索引号
    $(".lun-center ol li").mouseenter(function () {
        $(this).addClass("libg").siblings().removeClass("libg");
        $(".lun-center ul li").eq($(this).index()).fadeIn("fast").siblings().fadeOut();
    });
    var timer=null; //定时器返回值，主要用于关闭定时器
    var iNow=0; //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
    timer=setInterval(function(){ //打开定时器
        iNow++;    //让图片的索引值次序加1，这样就可以实现顺序轮播图片
        if(iNow> 8){ //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
            iNow=0;
        }
        $(".lun-center ol li").eq(iNow).trigger("mouseenter"); //模拟触发数字按钮的click
    },2000); //
    /*tab栏切换*/

    $(".tab li").mouseenter(function(){
        var $this = $(this),
            index = $this.index();
        $this.addClass("active").siblings("li").removeClass("active");

        $(".products div").eq(index).addClass("selected").siblings("div").removeClass("selected");
    });
    /*商品栏鼠标移动背景图片切换*/
    var bigtu = document.getElementById("bigtu");
    var bigtu2 = document.getElementById("bigtu2");
    var bigtu3 = document.getElementById("bigtu3");
    var bigtu4 = document.getElementById("bigtu4");
    var bigtu5 = document.getElementById("bigtu5");

    function fn(id,i, bg) {  // 封装函数  参数的传递
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
        fn("li0" + j,1 , "url(images/daojishi/yf-"+j+".jpg)"); // 实参  调用函数
        fn("2li0" + j,2 , "url(images/daojishi/yf-"+j+".jpg)");
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
        var s = parseInt(second-h*60*60-d*24*60*60-m*60); // 当前的秒
        d<10 ? d="0"+d : d;
        h<10 ? h="0"+h : h;
        m<10 ? m="0"+m : m;
        s<10 ? s="0"+s : s;
        demo.innerHTML = "距离双十一购物节抢购时间还剩: "+d+"天 "+h+"小时 "+m+"分钟 "+s+"秒";
    }


})





