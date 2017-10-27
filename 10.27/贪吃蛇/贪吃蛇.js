/*
属性
长度 速度 方向 边界 
 蛇   arr
方法
 */
function Snake(){
    this.scence=document.querySelector('div.scence');
	this.snake=['1_0','2_0','3_0'];
	 //this.direction=39;
    this.direction=40;
	this.flag={'1_0':true,'2_0':true,'3_0':true};
	this.food='';
	
}
Snake.prototype={
	start:function(){
     this.dranLine();
     this.drawSnake();
     this.move();
     this.key();
     this.drop();
     // this.stop();
	},
	//划线
	dranLine:function(){
       for(let i=0;i<20;i++){
       	for(let j=0;j<20;j++){
       		this.scence.innerHTML+=`<div class="block" id="${i}_${j}"></div>`
       	}
       }
	},
	drawSnake:function(){
		this.snake.forEach(element=>{
			document.getElementById(element).classList.add("hot");
		})
	},


move:function(){
/*加头 去尾*/
/*新头（x+1,y）*/
let that=this;
this.t=setInterval(function(){
   let oldt=that.snake[that.snake.length-1];
   let arr=oldt.split('_');//字符串转数组 
   let newt=''
   if (that.direction==37) {
   	newt=`${arr[0]*1}_${arr[1]*1-1}`;
     
   }else if(that.direction==38){
   	newt=`${arr[0]*1-1}_${arr[1]*1}`;
       
   }else if(that.direction==39){
   	newt=`${arr[0]*1}_${arr[1]*1+1}`;
    
   }else if(that.direction==40){
   	newt=`${arr[0]*1+1}_${arr[1]*1}`;
   }
    let arr1=newt.split('_')
   if(arr1[0]<0||arr1[0]>19||arr1[1]<0||arr1[1]>19||that.flag[newt]){
   	clearInterval(that.t);
   	alert('game over')
    return;
   }
   if(newt==that.food){
        that.snake.push(newt)
        that.flag[newt]=true;
        document.getElementById(that.food).style.background='#01aa34';
        that.drop()
   }else{
   that.snake.push(newt);
   that.flag[newt]=true;
   let weiba=that.snake.shift();//删除数组第一个内元素
   delete that.flag[weiba];
   document.getElementById(weiba).classList.remove('hot')} 
   that.drawSnake();
},300)
},
 stop:function(){
    	clearInterval(this.t)
 },

key:function(){
	document.onkeydown=function(e){
		let keyCode=e.keyCode;
		if(Math.abs(keyCode-this.direction)==2){
			return;
		}
		this.direction=keyCode;
	}.bind(this)
},
// 投食物

drop:function(){
	let x=Math.floor(Math.random()*20);
	let y=Math.floor(Math.random()*20);
	do{
      let x=Math.floor(Math.random()*20);
	  let y=Math.floor(Math.random()*20);
	}while(this.flag[`${x}_${y}`])
	
    this.food=`${x}_${y}`;
    document.getElementById(this.food).style.background='red';
},
 


















}