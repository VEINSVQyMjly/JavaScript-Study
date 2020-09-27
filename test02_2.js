var a = 1;              //定义全局变量
function test() {       
  if (a) {              //在函数作用域内，if语句不执行，因为a为undefined
     var a = 2;         //声明提升，变量初始化
     console.log(a);
  }
  a = 3;                //当调用test函数时，在函数作用域内搜索到变量a=3，不再访问全局变量
  console.log(a);       //控制台输出3
}
if (a) {                //此时在全局作用域内，由于全局变量为a=1,故if语句执行
   console.log(a);      //控制台输出1
   var a = 4;            //声明提升，变量初始化
   test ();             //if语句成立，调用test函数 
}
