window.onload=function(){
	let banner2=document.getElementsByClassName('banner2')[0]
	let lis=banner2.getElementsByTagName('li')
	let ss=document.getElementsByClassName('ss')
	for (let i = 0; i < lis.length; i++) {
	   lis[i].onmouseover=function(){
	   	ss[i].style.display='block'
	   }
	   lis[i].onmouseout=function(){
	   	ss[i].style.display='none'
	   }
	}
// 点
	// let quan=document.getElementsByClassName('quan')[0]
	// let litt=quan.getElementsByTagName('li')
	
	// for (let i = 0; i < litt.length; i++) {
	// 	litt[i].onclick=function(){
	//      litt[i].style.background='#fff'
	//    }
	//   litt[i].onmouseout=function(){
	//    	litt[i].style.background='#ccc'
	//    }
	// }
//轮播图
// let banner1=document.getElementsByClassName('banner1')[0]
// let lit=banner1.getElementsByTagName('li')
// let quan=document.getElementsByClassName('quan') [0]
// let litt=quan.getElementsByTagName('li')
// //移入移出
//  for (let i = 0; i <litt.length; i++) {
//     litt[i].onmousemove=function(){
//     lit[i].style.zIndex=10;
//     litt[i].style.background='#fff'
//     }
//     litt[i].onmouseout=function(){
//    lit[i].style.zIndex=0;
//    litt[i].style.background='#ccc'
//   }  
// }


//点击
// let now=0;
// for (let i = 0; i < litt.length; i++) {
// 	litt[i].onclick=function(){
// 		lit[now].style.zIndex=0
// 		lit[i].style.zIndex=10
// 		now=i
// 	}
// }


//var用var实现轮播
//let now=0;
// for (var i = 0; i < litt.length; i++) {
//      litt[i].index=i
//      litt[i].onclick=function(){
//      	lit[now].style.zIndex=0;
//         lit[this.index].style.zIndex=10;
//         now=this.index;
//      }
// }

//闭包
// let now=0;
// for (var i = 0; i < litt.length; i++) {
//      litt[i].index=i
//      litt[i].onclick=(function(i){
//      	return function(){
//         lit[now].style.zIndex=0;
//         lit[i].style.zIndex=10;
//         now=i
//      	}
//      })(i)
// }



 //自动轮播
 let section=document.getElementsByTagName('section')[0]
let banner1=document.getElementsByClassName('banner1')[0];
let lit=banner1.getElementsByTagName('li');
let quan=document.getElementsByClassName('quan') [0];
let litt=quan.getElementsByTagName('li');
let left=document.getElementsByClassName('left') [0];
let right=document.getElementsByClassName('right') [0];
let num=0;
///////////////////////////////
let t=setInterval(fn,1000);
////////////////////////////////////
for (let i = 0; i < lit.length; i++) {
		litt[i].onclick=function(){
			for (let j = 0; j < litt.length; j++){
				lit[j].style.zIndex=0;
				 litt[i].style.background='#fff';
			}
			lit[i].style.zIndex=10;
			 litt[num].style.background='#ccc';
			num=i
		}
	}
////////////////////////////////////
right.onclick=function(){
	fn()
}
///////////////////////////////
function fn1(){
	num--;
	if(num<0){
		num=lit.length-1
	}
	for (let i = 0; i < lit.length; i++) {
    lit[i].style.zIndex=0;  
    litt[i].style.background='#ccc';
    }
     lit[num].style.zIndex=10;
     litt[num].style.background='#fff';
}
left.onclick=function(){
	fn1()
}
//////////////////////////////////////
function fn(){
	num++;
	if(num==lit.length){
		num=0
	}
	for (let i = 0; i < lit.length; i++) {
    lit[i].style.zIndex=0;  
    litt[i].style.background='#ccc';
    }
     lit[num].style.zIndex=10;
     litt[num].style.background='#fff';
}
///////////////////////////////////////
    section.onmouseover=function(){
    	clearInterval(t)
    }
    
     section.onmouseout=function(){
      t=setInterval(fn,1000);
   } 
}

