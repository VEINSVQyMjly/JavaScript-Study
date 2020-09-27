var a = 1;              
function test(a) {      //定义test函数并传递参数a
  if (a) {              //当在全局作用域内调用含有参数a的test函数时，传递到函数内部的参数为a=4,if语句成立
    var a = 2;          //声明提升，变量a重新赋值为2
    console.log(a);     //控制台输出2
  }
  a=3;                  //变量赋值为3
  console.log(a);       //控制台输出3
}
if (a) {                //在全局作用域内，变量a仍然为1，if语句判断为真，故执行
  console.log(a);       //控制台输出1
  var a = 4;            //声明提升，变量赋值
  test (a);             //调用test函数，且参数为a，此时a=4
}
