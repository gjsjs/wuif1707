// $(function(){ 
	// let num=0
	// $("header .dian li").click(function(){
	// 	num=$(this).index();
	// 	$("header .banner li img").css({"opacity":1})
 //        $("header .dian li").css({background:"red"})
	// })
//    $(".left").click(function(){
//    	num=$(this).index();
//    	$(".banner>li>img").css({"opacity":1})
//     $(".dian>li").css({background:"red"})
//    })

// })

// $(function(){
// 	let li1=$('header>.banner>li');
// 	let li2=$('header>.dian>li');
// 	let left=$('header>.left');
// 	let right=$('header>.right');
// 	let num=0;
// 	 let t= setInterval(move,1000);
// 	 function move(){
// 				 num++;
// 	 	 if(num==li1.length){
// 	 	 	num=0
// 	 	 }
// 	 	 for(let i=0;i<li1.length;i++){
// 	 	 	li1[i].css('opacity',0)
// 	 	 	li2[i].css('background','#fff')
// 	 	 }
// 	 	   li1[num].css('opacity',1)
// 	 	 	li2[num].css('background','red')
// 	 }
	 	 
//    // left.on('click',function(){
//    // 	   move()
//    // })
			
// })

window.onload=function(){
     let header=document.getElementsByTagName('header')[0]
     let banner=document.getElementsByClassName('banner')[0]
     let li1=banner.getElementsByTagName('li')
     let dian=document.getElementsByClassName('dian')[0]
     let li2=dian.getElementsByTagName('li')
     let left=document.getElementsByClassName('left')[0]
	 let right=document.getElementsByClassName('right')[0]
	 let num=0
    console.log(li1)
    console.log(li2)
   
    
	 for (let i = 0; i < li1.length; i++) {
	  li2[i].onclick=function(){
	  	for(let j=0;j<li1.length;j++){
	  	li1[i].style.opacity=0;
	  	li2[i].style.background='red'
	  }
	  	li1[num].style.opacity=1;
	  	li2[num].style.background='#fff'
	  	 num=i
	 }
	}
       let t= setInterval(move,1000)
	 function move(){
	 	 num++;
	 	 if(num==li1.length){
	 	 	num=0
	 	 }
	 	 for(let i=0;i<li1.length;i++){
	 	 	li1[i].style.opacity=0
	 	 	li2[i].style.background='#fff'
	 	 }
	 	    li1[num].style.opacity=1
	 	 	li2[num].style.background='red'
	 }
	header.onmouseover=function(){
	 	clearInterval(t)
	 }
	 header.onmouseout=function(){
	 	t=setInterval(move,1000)
	 }
	 
	  function move1(){
	 	 num--;
	 	 if(num<0){
	 	 	num=li1.length-1
	 	 }
	 	 for(let i=0;i<li1.length;i++){
	 	 	li1[i].style.opacity=0
	 	 	li2[i].style.background='#fff'
	 	 }
	 	    li1[num].style.opacity=1
	 	 	li2[num].style.background='red'
	 }
	 
	 left.onclick=function(){
	 	move1()
	 }
	 right.onclick=function(){
	 	move()
	 } 
  }     
  


  