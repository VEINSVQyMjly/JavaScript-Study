/*
 水仙花是这样的一个数字，它的每个位数上的数字的3次幂之和等于它本身，例如（1*1*1+5*5*5+3*3*3）=153；
 输出1000以内的水仙花数
*/

var hundreds,tens,ones;
    for(var i=100;i<1000;i++){                   //for循环语句遍历100-1000内的数字
        hundreds=parseInt(i/100);                //求百分位
        tens=parseInt((i-(hundreds*100))/10);    //求十分位
        ones=i-(hundreds*100)-(tens*10);         //求个位
        if(hundreds*hundreds*hundreds+tens*tens*tens+ones*ones*ones==i){        // if语句判断是否满足水仙花数的条件
            document.write(i+" ");
        }
     }
