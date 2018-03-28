
    var obj = document.getElementById("box");
    obj.style.width = "200px";
    obj.style.height = "200px";
    obj.style.backgroundColor = "blue";
    obj.style.position="absolute";//定位


    obj.onclick=move_left;
     function move_left(){
        console.log(obj.style.left) ;
        obj.style.left=parseFloat(obj.style.left) - 10+"px";

    };
    var timer = setInterval(function(){
        move_left();
        if(obj,style.left<=0){
            clearInterval(timer);
        }
    },1000);
    
    var btnW =document.getElementById("btn")
    
    /*var time=60;
    var t=setInterval(function(){
        // console.log("倒计时"+i);

        btnW.innerText=time+"s倒计时";

        time--;

        if(time === 0){
            clearInterval(t);
            btnW.innerText = "重新发送一只猫";
        }
         
    },1000);//setinterbar每一秒执行一次
    */



    var time = 60;
    function haveTime(){
        if (time === 0) {
        //clearTimeout(ti);
        btnW.innerText = "重新发送一只猫";
    }else{
    setTimeout(function(){

        time--;
    btnW.innerText = time + "s倒计时";
   haveTime();

},1000);
 }
}
haveTime();

//递归

function con(n){
    if(n==0){
     return 1;       
    } 
    return n*con(n-1);
}
 con(5);


//1

     var oBtn = document.getElementById('cart');
     oBtn.onclick = function () {
     alert(12344);
      };


    // oBtn.click(); //模拟点击事件，页面刷新，出发点击事件


    //2

    var bt = document.getElementById('cart');
    bt.onclick=function(){
        btn1.style.display="block";
    };

    bt.onmouseout=function(){
        btn1.style.display="none";
    };
    bt.onmouseover=function(){
        btn1.style.display="block";
    };




//3
var test = document.querySelector("#test");

     //鼠标经过的时候div编程了黄色

    test.onmouseover = function () {
        test.style.background = "yellow";

    }

    //鼠标离开的时候div恢复了以前的颜色
    test.onmouseleave = function () {
        test.style.background = "";

    }

//4

    function display() {
    document.getElementById("box2").style.display = "block";
     }
   function  disappear() {
    document.getElementById("box2").style.display = "none";
    }




    //6


var body = document.querySelector("body");
var btn=document.getElementById("#skin")

btn .onclick=function(){
    if (body.flag===""){
        body.flag="have";
        body.style.backgroundColor="red";

    }else{
        body.style.backgroundColor = "red";
        body.flag = "";

    }

    /*var arr = ["red", "yellow", "pink", "bule", "green"];
    var index = Math.floor(Math.random() * 5);
    body.style.backgroundColor = arr[index];*/
}


     var http = "http://adcx?id=it&key=value&age=23"
     
     var obj={
         "id":"it",
         "key":"value",
         "age":20
     }

    var http = "http://adcx?id=it&key=value&age=23"
    console.log(http.split("?")[1]);
    var http=http.split("?")[1];
    http = http.split("&");
    console.log(http);
    
    var httpObj={};
    for (var i;i<http.length;i++){
        var index=http[i].split("=");
        httpObj[index[0]] = [index[1]];

    }


    //大写，小写
    var sss="LiShaSha";
    var up=sss.toUpperCase();
    var lo=sss.toLowerCase();

    var str ="sdhjeghdg";
    str= str.substring(0,1).toLocaleUpperCase()+str.substring(1);
//substring 字符串截取，包括0不包括1   大写    从一开始截取 首字母为大写后面为小写


    var  str="ssdwfsd";
    var indexS=str.indexOf("f");
    var lastStr=str.substring(indexS);//不可以取负数     str.slice()有负数可以倒着取
    var lastStr=str.substring(0,indexS);

    var str="233456789";
    str.slice(-4);
    str.substring(str.length-4);




    //页面跳转
    var href= location.href;
    if(href.indexOf("baidu")>=o){
        location.href="https://baidu.com/";

    }else{

        location.href = "https://woaielf.github.io/";
    }


//js获取各种屏幕
Javascript:

        //网页可见区域宽： document.body.clientWidth
        //网页可见区域高： document.body.clientHeight
        //网页可见区域宽： document.body.offsetWidth(包括边线的宽)
        //网页可见区域高： document.body.offsetHeight(包括边线的高)
        //网页正文全文宽： document.body.scrollWidth
        //网页正文全文高： document.body.scrollHeight
        //网页被卷去的高： document.body.scrollTop
        //网页被卷去的左： document.body.scrollLeft
        //网页正文部分上： window.screenTop
        //网页正文部分左： window.screenLeft
        //屏幕分辨率的高： window.screen.height
        //屏幕分辨率的宽： window.screen.width
        //屏幕可用工作区高度： window.screen.availHeight
        //屏幕可用工作区宽度： window.screen.availWidth



JQuery:

            $(document).ready(function () {
                alert($(window).height()); //浏览器当前窗口可视区域高度
                alert($(document).height()); //浏览器当前窗口文档的高度
                alert($(document.body).height());//浏览器当前窗口文档body的高度
                alert($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin

                alert($(window).width()); //浏览器当前窗口可视区域宽度
                alert($(document).width());//浏览器当前窗口文档对象宽度
                alert($(document.body).width());//浏览器当前窗口文档body的宽度
                alert($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin

            })





            
document.querySelectorAll('.c-green')[1].getElementsByTagName('p')[1]
document.querySelectorAll('.c-green')[1].lastElementChild;




document.querySelector('.c-green').children;
document.querySelector('.c-green').getElementsByTagName('p');
document.querySelectorAll('div')[1].getElementsByTagName('p');
document.getElementsByTagName('div')[1].getElementsByTagName('p');
document.getElementsByClassName('.c-green')[0].getElementsByTagName('p');
document.getElementsByClassName('.c-red')[1].getElementsByTagName('p');

        
       

        var js = document.getElementById("js");

           list = document.getElementById("list");

           list.appendChild(js);

           

        var  list = document.getElementById("list");

           go =document.createElement("p");
           go.id="go";
           go.className="golong";
           go.style.color="#eee";
           go.innerText="go";
           go.innerHTML="<h3>go</h3>";

           list.appendChild(go);




           var ul=document.getElementById("test-list");
           var len =ul.children.length;
           for(var i =0; i<len;i++){
           ul.removeChild(li.children[0]);
           }


// document.onkeydown = function (event) {
//     var e = event || window.event || arguments.callee.caller.arguments[0];
//     if (e && e.keyCode == 37 || e.keyCode == 65) { // 按 left 
//         move_left() //要做的事情
//     }
//     if (e && e.keyCode == 39 || e.keyCode == 68) { // 按 right 
//         move_right() //要做的事情
//     }
//     if (e && e.keyCode == 38 || e.keyCode == 87) { // 按 left 
//         move_up() //要做的事情
//     }
//     if (e && e.keyCode == 40 || e.keyCode == 83) { // 按 right 
//         move_down() //要做的事情
//     }
// }