let str = "#";
while (str.length<=7){
	console.log(str + "\n");
	str+="#";
}

 for (let i =0; i < 100;i++){
     if ( i % 3 === 0 && i % 5 === 0){
         console.log('FizzBuzz')
     }else if ( i % 3 === 0){
         console.log("buzz")
     }else if( i % 5 === 0){
         console.log("fizz")
     }else {
         console.log(i)
     }
 }