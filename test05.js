//输出1-100的每个数字

for(var i=1;i<=100;i++){
        document.write(i+'<br/>');
}

//输出100以内的所有奇数

for(var j=1;j<=100;j+=2){
        document.write(j+'<br/>');
}

//输出100以内的所有素数（方法一）
		document.write(2+" ");
		document.write(3+" ");
		document.write(5+" ");
		document.write(7+" ");
		for(var m=10;m<=100;m++){
			if(m%2!=0 && m%3!=0 && m%5!=0 && m%7!=0){
				document.write(m+" ");
			}
		}

//输出100以内所有素数（方法二）
		var a,b;
		for(a=2;a<=100;a++){
			for(b=2;b<a;b++){
				if(a%b==0){
						break;
					}
				}
		if(b>=a){
			document.write(a+" ");
		    }
		}
