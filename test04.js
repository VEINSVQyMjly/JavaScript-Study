
var str = "abc123";
var num = parseInt(str);                //parseInt()函数，变量num的值为NaN

if (num == "NaN"){                     //NaN和任何内容都不相等，包括他本身
      alert ("NaN");
    }else if(num == "123"){
      alert("123");
    }else if(typeof num == "number"){
      alert("num");                    //NaN是number类型
    }else{
      alert("str");
    }
