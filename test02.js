var a = 1;      //定义全局变量a并初始化为1
function test{
  if (a) {
    var a = 2;            //声明提升
    console.log(a);
    }
    a=3;                    //函数作用域内搜索到变量a=3，不再去访问全局变量
    console.log(a);
 }
 test()
 //输出结果为3
 
 
 
