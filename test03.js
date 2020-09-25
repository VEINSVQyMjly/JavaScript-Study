//简单收银系统


var price = prompt("请输入商品价格");
var num = prompt("请输入商品数量");

//总价高于1000元时打八折，否则不打折
if （price*num>=1000）{
      alert("请支付"+(price*num*0.8)+"元");
  }else{
      alert("请支付"+(price*num)+"元");
