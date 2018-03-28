//变量
var myname = "lishasha";

//语句
var number = 4;

if (number == 4) {
    console.log("number is 4");

}
//
if (number == 5) {
    console.log("number is 5");
} else {
    console.log("number is not 5");
}
//
if (number > 5) {
    console.log("number is > 5");
} else if (number > 4) {
    console.log("number is > 4");

} else {
    console.log("number is > =4");
}

//

var 年龄 = 14;

if (年龄 < 3) {
    console.log("不可以上小学");
} else if (年龄 < 7) {
    console.log("可以上小学");
} else if (年龄 < 12) {
    console.log("可以上初中");
} else if (年龄 < 15) {
    console.log("可以上高中");
} else {
    console.log("不可以上高中");
}


//条件分支

var age = 14;
switch (age) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("不可以上小中");
        break;
    case 6:
        console.log("可以上小中");
        break;
    case 7:
        console.log("不可以上初中");
    default:
        console.log("可以上初中");

}
//
var ever;
var n=5;
if(n%2===0){
    ever =true;
}
   ever = false;


//
var i;
for( i=0 ;i<10; i++){
    console.log(i);
}

//
var m=10;
while(m>0){
    console.log(m);
    m--;
}
//m-- m=m-1

//
var n=0;
while(n<10){
    console.log(n);
    n++;
}
//
var a=10;
while(a<=100){
    console.log(a);
    a=a+2;
}

//

var b;
for(b=10;b<=100;b=b+2){
    console.log(b);
}

var h, k;
for(h=1;h<9; h++){
    for (k = h; k < 9; k++){
        console.log();
    }
}
// 第一个字符，可以是任意Unicode字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线（_）。
// 第二个字符及后面的字符，除了Unicode字母、美元符号和下划线，还可以用数字0 - 9。


//加引号的都是字符串；
//字符串 string
// 数字类型  number
var bol = true || false;
//或者
var  bol =ture;
var bol =false;     
//boolean 布尔值 正假

var block =null;
//null 值为空；

var asd;//声明   but没有赋值
// undefinded   值为空   未定义的值，为空；
//五种值  字符串  数字  null 布尔值  未定义的值
///两种引入类型
Object --> object 

//旬压利命名法
var smyname_s = "123";
var nnum_n = 123;
var bbl_b = true;

var site_title = "title";
var siteTitle = "header";


// css  site - title
// js   siteTitleBackgroundColor


// 且与&&    或||    非!

!ture-->flase 
!flase-->ture
//非
!(3>2)-->flase 


//或   
//有一个真的就是真的
//短路判断
4<5 || flase --> ture   //首真及真
4>5 || (4<3) --> true  // 首假 返回后面代码  flase-->(4<3)


//和
//一假就假
4<3 && 5-->flase

//负数是真指
//flase  "" null 0 


//等于 ==

//123=="123"  ture


//全等 ===  类型与数值

//123==="123"  flase


//数组
var arr=[1,2,3,4,567];     //array
var array=arr;
console.log(array);//1,2,3,4,567
arr=[10,20];
console.log(arr);//10,20
console.log(array);//1,2,3,4,567


//对象 
var obj={

    //"key":"value"
    "name":"hello","age":14

};


//加   add
var arr = [1, 2, 3, 4, 5];
    arr[7] = 123;
    //0 1 2 3 4 5 []  123
//减 delet

delete arr[2];


//change 改

arr[3]=5;

//查
console.log(arr[1]);

arr.length
arr[arr.length-1]


//对象
var obj = {

    //"key":"value"
    "name": "hello", "age": 14

};
    obj.sex="nv" 
   

   var obj={
       1:"m",
       2:"a"


    }
  for (var i =0 ;i <4 ;i++){
      console.log(obj[i])
  }


// indexof LastIndexof

var myname= "hello";
console.log(myname.indexof("0"));
//have  index 索引 0----height-1
//no have    -1


var info = "清华大学" + name + "2018" + subject + "的分数是" + score;

var subject = "cs";
var names = ["martin", "amy", "mike", "chenji", "john"];
var score = [100, 100, 150, 150, 150];

for (var i = 0; i < 5; i++) {
    console.log( info[i]);
}


var score = [100, 100, 150, 150, 150];
var subject="sc";
var info = "清华大学" + name + "2018" + subject + "的分数是" + score;
var name=["mike","hello","xiaoming","marry","john"]
for(var i =0 ;i<5;i++){
    console.log("清华大学" + name[i] + "2018" + subject + "的分数是" + score[i]) ;
}

var youyue = {
   
    "head": "《男儿行》【全本精排】 作者：酒徒 epub",
    "category": {
        "tag1" : "历史架空·热血战争",
        "tag2" : "网络小说",
        "tag3": "1历史架空·热血战争",
        "tag4" :"网络小说",
        "tag5" : "2历史架空·热血战争",
        "tag6" : "网络小说"
    },
    "img": "http://mebook.cc/wp-content/uploads/2016/07/160440t10z4su2lup42h2k.jpg",
    "content": null,
    "tag": [
        "epub",
        "酒徒"
    ],
    "id": "744",
    "baiLink": "http://pan.baidu.com/s/1cKDLvg",
    "tianLink": null,
    "tianKey": "    ",
    "baiKey": "qmpz"
}
console.log(youyue.img);
console.log(youyue.tag[1]);



var i;
   for (i = 0; i < youyue.category.length;i++){
    console.log(youyue.category[i])
};
for (var i in youyue.category){
    console.log(i +" is " + youyue.category[i])
};
 

var arr=[1,2,3,4,5,6,,];
var i;
for(i=0;i<arr.length;i++)
{
    console.log(arr[i])

};
//加
    arr[3]=123;
//减
   delete arr[2];


//change 改

   arr[3] = 5;

//查
   console.log(arr[1]);


   
   //对象

var  obj={
     "name":"xiaoming",
     "age":20,
     "sex":"nv"
};
console.log(obj.age);

var k;
for(k in obj){
    console.log("obj 的"+k+"值 是"+obj)

};

 //加
     obj.score = "1234"   
//减
     delete obj.age;


//改
    obj.name="xiaohua";
//查
    console.log(obj.age);
  
    


    //push  arr数组的最后

    var arr=[1,2,3,4,5]

    arr .push(6);

    arr.unshift(0);

    //plus 

    arr.pop();//最后一项 删除的最后一个元素

    arr.shift();//最后一项  删除最前的一个元素

    //合并
     var arr = [1, 2, 3, 4, 5]

     var obs=["q","w","e"]

     arr.concat(obs)


     var arr=["a","is","cc"] 
     arr .join(" ");
     arr .join("|");
     arr .join();

     "a is cc".split("arr")


//1+2+...+10的结果
     var  result=0;
     var i=1;
     for(var k=0;k<11;k++){
         result=result+i;
         i++;
     }
     console.log(result);

//数组加起来的和

     var result = 0;
     var  arr=[1,2,3,4,5,6]
     for(var i=0;i<arr.length;i++){
          result = result+ i;
     }
     console.log(result);
    


     var result = 0;
     var arr = [10, 2, "w",3, 4, 5, 6,"q"]
     for (var i = 0; i < arr.length; i++) {

        if(val ==="" || val== null){
            return flase;

        }
        if(!isNaN(arr[i])){
            result = result + i;
        }
    }
     console.log(result);



     var arr=[3,4,5,6,7,8,9,0]
     arr.forEach(function(itme,index){
         console.log(itme);
         console.log(index);

     });

     

        var infos = [
            ['小A', '女', 21, '大一'],
            ['小B', '男', 23, '大三'],
            ['小C', '男', 24, '大四'],
            ['小D', '女', 21, '大一'],
            ['小E', '女', 22, '大四'],
            ['小F', '男', 21, '大一'],
            ['小G', '女', 22, '大二'],
            ['小H', '女', 20, '大三'],
            ['小I', '女', 20, '大一'],
            ['小J', '男', 20, '大三']
        ];
        for (var i=0;i<infos.length;i++){
            if(infos[i][3]==='大一' && infos[i][1]==='女'){
                console.log(infos[i]);

            }
        }
