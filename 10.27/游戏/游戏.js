/*
属性
那些字母，个数，速度，位置，生命，分数
方法
产生字符，下落，消除，重新开始，下一关,重叠，重叠
*/
function game(){
	
	    this.charArr=[
	                  ['Q',],
	                  ['W',],
	                  ['E',],
	                  ['R',],
	                  ['T',],
	                  ['Y',],
	                  ['U',],
	                  ['I',],
	                  ['O',],
	                  ['P',],
	                  ['A',],
	                  ['S',],
	                  ['D',],
	                  ['F',],
	                  ['G',],
	                  ['H',],
	                  ['J',],
	                  ['K',],
	                  ['L',],
	                  ['Z',],
	                  ['X',],
	                  ['C',],
	                  ['V',],
	                  ['B',],
	                  ['N',],
	                  ['M',],
	                  ]
	//页面元素
	 this.current=[]
	 this.position=[];
	//个数
	this.number=5;
	this.speed=5;  //速度
	this.gk=10;
	this.score=0;
	this.life=10;  
	this.lifeobj=document.querySelector('.top>.life>span');
	this.scoreobj=document.querySelector('.top>.score>span')
	this.gkobj=document.querySelector('.top>.gk>span')
    

}
   game.prototype={
    start:function(){
      this.getChars()
      this.drop();
	  this.key();
     
   },
	getChars:function(){
		for(let i=0;i<this.number;i++){
			this.getChar();
		}
	},
//产生
   getChar:function(){
	let num=Math.floor(Math.random()*this.charArr.length)
	//this.chatArr[num] tis.current[i]
         while(this.checkchar(this.charArr[num])){
	         num=Math.floor(Math.random()*this.charArr.length)
	}

	let divs=document.createElement('div');
	divs.innerText=this.charArr[num];
	divs.classList.add('char');
	let tops=Math.random()*100;
	let lefts=Math.random()*(innerWidth-400)+200;

	while(this.checkpostion(lefts)){
	  lefts=Math.random()*(innerWidth-400)+200;      
	}

   let bgColor=this.color()
	 divs.style.cssText=`top:${tops}px;left:${lefts}px;background:${bgColor};
       backgroung-image:$()
	 `;
	document.body.appendChild(divs);
	 this.current.push(divs);
	 this.position.push(lefts);
},
color:function (){
	    let str='rgb('
         for (let j = 0; j < 3; j++) {
   		    let rgb=Math.round(Math.random()*255)
   		    str+=rgb+','
   		 }
   		 str=str.slice(0,-1)
          str+=')'
         return str
       },
  //去重复
checkchar:function(char){
	return this.current.some(element=>{
		return element.innerText==char
	})
},
checkpostion:function(lefts){
	let flag=this.position.some(function(value){
		return Math.abs(value-lefts)<80;
	})
	return flag;
},

//下落
  drop:function(){
  	let that=this
	this.t=setInterval(function(){
		for(let i=0;i<that.current.length;i++){
			let tops=that.current[i].offsetTop+that.speed;
			that.current[i].style.top=`${tops}px`
			if (tops>=500) {
				document.body.removeChild(that.current[i]);
			that.current.splice(i,1);
			that.position.splice(i,1);
			 that.life--;
			that.lifeobj.innerText=that.life;
			
			if(that.life==0){
				let falg=confirm('游戏结束')
			   if(falg){
			   	 that.restart();
			   }else{
			   	close();
			   }
			} 
			that.getChar()
		 }

		}
	},100)
     
  },

//消除
  key:function(){
  	let that=this;
  	document.onkeydown=function(e){
  		//e.key e.keyCold    divs.innerText
  		for(let i=0;i<that.current.length;i++){
  		if(that.current[i].innerText==String.fromCharCode(e.keyCode)){
  			that.score+2;
		   document.body.removeChild(that.current[i]);
			that.current.splice(i,1);
			that.position.splice(i,1);
		    that.getChar()
			that.score++;
			that.scoreobj.innerText=that.score;
	        if(that.score==that.gk){
	   	    that.next();
	   	
	   }
  		}
  	}
  }
},


//下一关
 next:function(){
 	clearInterval(this.t);
 	for(let i=0;i<this.current.length;i++){
 		document.body.removeChild(this.current[i]);
 	}
 	this.current.length=0;
 	this.position.length=0;
 	this.number++;
 	this.gk+=10;//this.score=0
 	this.start();
 },
//去重叠
restart:function(){
	clearInterval(this.t);
 	for(let i=0;i<this.current.length;i++){
 		document.body.removeChild(this.current[i]);

 	}
 	this.current.length=0;
 	this.position.length=0;
 	this.number=5;
 	this.gk=10;
 	this.life=10;
 	this.score=0;
  	this.lifeobj.innerText=this.life;
 	this.scoreobj.innerText=this.score;
 	this.start();
}










}