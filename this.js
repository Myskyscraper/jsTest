// this的原则就是this指的是，调用函数的那个对象。 


//情况一：纯粹的函数调用 
//这是函数的最通常用法，属于全局性调用，因此this就代表全局对象Global。

// function test1(){
// 	this.x =0;
// 	alert(this.x);
// }
// var x=1;
// test1();//值为0；


//情况二：作为对象方法的调用 
//函数还可以作为某个对象的方法调用，这时this就指这个上级对象

// 　function test2(){ 

// 　　　　alert(this.x); 

// 　　} 

// 　　var o = {}; 

// 　　o.x = 1; 

// 　　o.m = test2;

// 　　o.m(); // 1 




//情况三 作为构造函数调用 
//所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this就指这个新对象。
	var x = 2;
　　function test(){ 
　　　　this.x = 1; 
　　} 

　　var o = new test(); 
　　alert(o.x); // 


//情况四 apply调用 

//apply()是函数对象的一个方法，它的作用是改变函数的调用对象，
//它的第一个参数就表示改变后的调用这个函数的对象。因此，this指的就是这第一个参数。 

　　var x = 0; 

　　function test(){ 

　　　　alert(this.x); 

　　} 

　　var o={}; 

　　o.x = 1; 

　　o.m = test; 

　　o.m.apply(); //0 