//循环嵌套输出九九乘法表

var i,j;

for(i=1;i<10;i++){                   //外层循环控制行数和乘数
      for(j=1;j<=i;j++){             //内层循环控制被乘数
          document.write(j+"*"+i+"="+j*i+"&nbsp;");
      }
      document.write("<br/>");
}
