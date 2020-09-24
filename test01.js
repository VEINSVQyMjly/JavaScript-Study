var a = 0;
a += 3;
//a=3

var bool = false;
var b = 0;
if (bool) {
   b += 3;
   }else{
   b += 5;
   }
var c = b;
//c=5

var obj = {
    a: 'test1',
    b: 'test2'
    }
obj.a = 'test11';
obj['c'] = 'test3';
//obj={'test11','test2','test3'}

var arr = [a, b, c];
//arr=[3, 3, 5]
