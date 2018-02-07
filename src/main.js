//阻塞
/*var fs = require("fs");
var data = fs.readFileSync("input.txt");
console.log(data.toString());
console.log("程序执行结束！")*/
//非阻塞
/*var fs = require("fs");
fs.readFile("input.txt",function(err,data){
	if(err){
		return console.log(err);
	}
	console.log(data.toString());
})
console.log("程序执行结束");*/

//事件驱动（）观察者模式
/*var events = require("events");
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected(){
	console.log("连接成功");
	eventEmitter.emit("data_received");
}
eventEmitter.on("connection",connectHandler);

eventEmitter.on("data_received",function(){
	console.log("数据接收成功")
})

eventEmitter.emit("connection");
console.log("程序执行完毕");*/

/*var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("some_event",function(){
	console.log("some_event 事件触发");
});
setTimeout(function(){
	event.emit("some_event");
},1000)*/

/*var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("someEvent",function(arg1,arg2){
	console.log('listener1',arg1,arg2);
});
emitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg1,arg2);
});
emitter.emit("someEvent","arg1参数","arg2参数");*/

/*var events = require("events");
var emitter = new events.EventEmitter();
emitter.emit("");*/
/*
var buffer1 = Buffer.from("ABC");
var buffer2 = Buffer.from("ABCD");
var result = buffer1.compare(buffer2);

if(result < 0){
	console.log(buffer1+"在"+buffer2+"之前");
}else if(result == 0){
	console.log(buffer1+"与"+buffer2+"相同");
}else{
	console.log(buffer1+"在"+buffer2+"之后");
}*/













