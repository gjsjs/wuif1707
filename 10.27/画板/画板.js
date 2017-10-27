/*属性
    线宽、线段点样式、填充、描边、样式、边数
  方法
    画线、虚线、矩形、多边形、多角形、圆、
    撤销
    裁切

*/
class palette{
	constructor(canvas,ctx,opacity,eraser){
     /*样式*/
     // this.value=value;
     this.opacity=opacity;
     this.eraser=eraser;
      this.canvas=canvas;
      this.ctx=ctx;
      this.cw=canvas.width;
      this.ch=canvas.height;
      this.arr=[];

     /*描边 填充*/
      this.style='stroke';
     /*颜色*/
     this.ctx.strokeStyle='#000';
     this.ctx.fillStyle='#000'
    
     this.temp=null;
     
	}
  line(){
       this.opacity.onmousedown=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.opacity.onmousemove=function(e){
                   let ox=e.offsetX,oy=e.offsetY;
                   this.ctx.clearRect(0,0,this.cw,this.ch);
                   if(this.arr.length){
                   this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                   }
                   
                   this.ctx.beginPath();
                   this.ctx.moveTo(cx,cy);
                   this.ctx.lineTo(ox,oy);
                   this.ctx.lineWidth=1;
                   this.ctx.setLineDash([0,0]);
                   // this.style=this.ctx.stroke();
                  this.ctx[this.style]();
                  this.color();
				}.bind(this);
			}.bind(this);
            this.opacity.onmouseup=function(){
            	this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch))
            	this.opacity.onmousemove=null;
            }.bind(this);
	}
  line1(){
       this.opacity.onmousedown=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.opacity.onmousemove=function(e){
                   let ox=e.offsetX,oy=e.offsetY;
                   this.ctx.clearRect(0,0,this.cw,this.ch);
                   if(this.arr.length){
                   this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                   }
                   
                   this.ctx.beginPath();
                   this.ctx.moveTo(cx,cy);
                   this.ctx.lineTo(ox,oy);
                    this.ctx.setLineDash([3,0]);
                   this.ctx.lineWidth=5;
                   // this.style=this.ctx.stroke();
                   this.ctx[this.style]();
                   this.color();
				}.bind(this);
			}.bind(this);
            this.opacity.onmouseup=function(){
            	this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch))
            	this.opacity.onmousemove=null;
            }.bind(this);
	}
  line2(){
       this.opacity.onmousedown=function(e){
				let cx=e.offsetX,cy=e.offsetY;
				this.opacity.onmousemove=function(e){
                   let ox=e.offsetX,oy=e.offsetY;
                   this.ctx.clearRect(0,0,this.cw,this.ch);
                   if(this.arr.length){
                   this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                   }              
                   this.ctx.beginPath();
                   this.ctx.moveTo(cx,cy);
                   this.ctx.lineTo(ox,oy);
                   this.ctx.setLineDash([3,10]);
                   //this.style=this.ctx.stroke();
                   this.ctx[this.style]();
                   this.color();
				}.bind(this);
			}.bind(this);
            this.opacity.onmouseup=function(){
            	this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch))
            	this.opacity.onmousemove=null;
            }.bind(this);
	}
  line3(){
  	this.opacity.onmousedown=function(e){
             let cx=e.offsetX,cy=e.offsetY;
              if(this.arr.length){
                   this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                   }      
             this.ctx.beginPath();
             this.ctx.moveTo(cx,cy);
             this.opacity.onmousemove=function(e){
             	let ox=e.offsetX,oy=e.offsetY;
             	 this.ctx.setLineDash([3,0]);      
                this.ctx.lineTo(ox,oy);
               //this.ctx.stroke(); 
                this.ctx[this.style]();
               this.color();
             }.bind(this)
      }.bind(this)
     this.opacity.onmouseup=function(){
       this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
       this.opacity.onmousemove=null;
      }.bind(this)
  }

  poly(n){
  	this.opacity.onmousedown=function(e){
             let cx=e.offsetX,cy=e.offsetY;
        this.opacity.onmousemove=function(e){
             	   let ox=e.offsetX,oy=e.offsetY;
             	   this.ctx.clearRect(0,0,this.cw,this.ch);
             	   let rad=Math.PI*2/n;
                   let r=Math.abs(ox-cx)+Math.abs(oy-cy);
                   if(this.arr.length){
                   this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                   } 
                   this.ctx.beginPath(); 
                   this.ctx.moveTo(cx+r,cy);
                  for(let i=0;i<n;i++){
					let x=cx+r*Math.cos(rad*i);
					let y=cy+r*Math.sin(rad*i);
					this.ctx.lineTo(x,y);
				}
				   this.ctx.closePath();
                   // this.style=this.ctx.stroke();
                     this.ctx[this.style]();
                     this.color();
				}.bind(this);
			}.bind(this);
	this.opacity.onmouseup=function(){
       this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
       this.opacity.onmousemove=null;
      }.bind(this) 
  }
 
 circle(){
 	 this.opacity.onmousedown=function(e){
		let cx=e.offsetX,cy=e.offsetY;
	  this.opacity.onmousemove=function(e){
         let ox=e.offsetX,oy=e.offsetY;
          this.ctx.clearRect(0,0,this.cw,this.ch);
          if(this.arr.length){
                   this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                   } 
          this.ctx.beginPath();
          let r=Math.abs(ox-cx)+Math.abs(oy-cy);
          this.ctx.arc(cx,cy,r,0,Math.PI*2);
          this.ctx.closePath();
          // this.ctx.stroke();
          this.ctx[this.style]();
          this.color();
		}.bind(this) 
	}.bind(this) 
       this.opacity.onmouseup=function(){
       this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));    	
       this.opacity.onmousemove=null;
       }.bind(this) 
          
 }


 poly1(n){
 	this.opacity.onmousedown=function(e){
            let cx=e.offsetX,cy=e.offsetY;
        this.opacity.onmousemove=function(e){
             	   let ox=e.offsetX,oy=e.offsetY;
             	   this.ctx.clearRect(0,0,this.cw,this.ch);
             	   let rad=Math.PI/n;
                   let r=Math.abs(ox-cx)+Math.abs(oy-cy);
                   if(this.arr.length){
                   this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                   } 
                   this.ctx.beginPath(); 
                   this.ctx.moveTo(cx+r,cy);
                  for(let i=0;i<2*n;i++){
                  	let r1;
				    r1=i%2==0 ? r:r/3;
					let x=cx+r1*Math.cos(rad*i);
					let y=cy+r1*Math.sin(rad*i);
					this.ctx.lineTo(x,y);
				}
				   this.ctx.closePath();
                   // this.style=this.ctx.stroke();
                    this.ctx[this.style]();
                    this.color();
				}.bind(this);
			}.bind(this);
	this.opacity.onmouseup=function(){
       this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
       this.opacity.onmousemove=null;
      }.bind(this) 
 }

poly2(n){
 	this.opacity.onmousedown=function(e){
            let cx=e.offsetX,cy=e.offsetY;
        this.opacity.onmousemove=function(e){
             	   let ox=e.offsetX,oy=e.offsetY;
             	   this.ctx.clearRect(0,0,this.cw,this.ch);
             	   let rad=Math.PI/n;
                   let r=Math.abs(ox-cx)+Math.abs(oy-cy);
                   if(this.arr.length){
                   this.ctx.putImageData(this.arr[this.arr.length-1],0,0)
                   } 
                   this.ctx.beginPath(); 
                   this.ctx.moveTo(cx+r,cy);
                  for(let i=0;i<2*n;i++){
                  	let r1;
				    r1=i%2==0 ? r:r/3;
					let x=cx+r1*Math.cos(rad*i);
					let y=cy+r1*Math.sin(rad*i);
					this.ctx.lineTo(x,y);
				}
				   this.ctx.closePath();
                   this.ctx.fill();
				}.bind(this);
			}.bind(this);
	this.opacity.onmouseup=function(){
       this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
       this.opacity.onmousemove=null;
      }.bind(this) 
 }

ca(earser,w,h){
	this.opacity.onmousedown=function(e){
		this.eraser.style.display='block';
	    this.eraser.style.left=`${e.offsetX-w/2}px`;
        this.eraser.style.top=`${e.offsetY-h/2}px`;
		this.opacity.onmousemove=function(e){
        let cx=e.offsetX-w/2,cy=e.offsetY-h/2;
        this.eraser.style.left=`${cx}px`;
        this.eraser.style.top=`${cy}px`;
        this.ctx.clearRect(cx,cy,w,h);
        }.bind(this);
	}.bind(this);
     this.opacity.onmouseup=function(){
     this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));
     this.eraser.style.display='none';
     this.opacity.onmousemove=null;
    }.bind(this);
}

//撤销
chexiao(){
         if (!this.arr.length) {return}
         this.arr.pop();
         this.ctx.clearRect(0, 0,this.cw, this.ch);
         this.ctx.putImageData(this.arr[this.arr.length-1],0,0);
}


//文本
text(){
	let that=this;
	let lefts,tops;
	this.opacity.onmousedown=function(e){
		  that.opacity.onmousedown=null;
		  let cx=e.offsetX,cy=e.offsetY;
	   let divs=document.createElement('div');
	   divs.contentEditable=true;
	   divs.style.cssText=`
         width:200px;height:50px;border:1px dashed #ccc;
         position:absolute;left:${cx}px;top:${cy}px;
         cursor:pointer;
	   `
	   this.appendChild(divs);
	   divs.onmousedown=function(e){
	   	let cx=e.clientX,cy=e.clientY;
	   	let left=divs.offsetLeft,top=divs.offsetTop;
	   	that.opacity.onmousemove=function(e){
	   		let ox=e.clientX,oy=e.clientY;
	   		 lefts=left+ox-cx;
	   		 tops=top+oy-cy;
	   		 // if(lefts<=0){
	   		 // 	lefts=0
	   		 // }
	   		 // if(lefts>that.cw-200){

	   		 // }
	   		divs.style.left=`${lefts}px`;
	   		divs.style.top=`${tops}px`

	   	}
	   }
	   divs.onmouseup=function(){
	   	that.arr.push(that.ctx.getImageData(0,0,that.cw,that.ch));
	   	 that.opacity.onmousemove=null;
	   }

	   divs.onblur=function(){
	    that.arr.push(that.ctx.getImageData(0,0,that.cw,that.ch));
	   	let value=this.innerText;
	   	that.opacity.removeChild(divs);
	   	that.ctx.font='bold 20px sans-serif';
	   	that.ctx.textAlign='center';
	   	that.ctx.textBaseLine='middle'
	   	that.ctx.fillText(value,lefts,tops)
	   }
}
}

//清空
  clean(){
    
         this.ctx.clearRect(0, 0,this.cw, this.ch);
	    this.arr.push(this.ctx.getImageData(0,0,this.cw,this.ch));

  }

//裁切
 caiqie(obj){
 	let that=this;
 	let minx,miny,w,h;
	this.opacity.onmousedown=function(e){
     let cx=e.offsetX,cy=e.offsetY;
     obj.style.display='block';
     obj.style.width=0;
     obj.style.height=0;
     that.opacity.onmousemove=function(e){
     let ox=e.offsetX,oy=e.offsetY;
      w=Math.abs(cx-ox);h=Math.abs(cy-oy);
     minx=ox>=cx ? cx : ox;
     miny=oy>=cy ? cy : oy;
     obj.style.left=`${minx}px`;
     obj.style.top=`${miny}px`
     obj.style.width=`${w}px`;
     obj.style.height=`${h}px`;
     }
     that.opacity.onmouseup=function(){
     	that.temp=that.ctx.getImageData(minx,miny,w,h);
     	that.ctx.clearRect(minx,miny,w,h);
     	that.arr.push(that.ctx.getImageData(0,0,that.cw,that.ch));
     	that.ctx.putImageData(that.temp,minx,miny);
     	that.opacity.onmousemove=null;
     	that.opacity.onmouseup=null;
     	that.drag(minx,miny,obj);
     }
	}
 }
drag(x,y,obj){
	let that=this;
    this.opacity.onmousedown=function(e){
     let cx=e.offsetX,cy=e.offsetY;
     that.opacity.onmousemove=function(e){
     let ox=e.offsetX,oy=e.offsetY;
     let lefts=x+ox-cx,tops=y+oy-cy;
     obj.style.left=`${lefts}px`;
     obj.style.top=`${tops}px`;
   that.ctx.clearRect(0, 0,that.cw,that.ch);
   if(that.arr.length){
     that.ctx.putImageData(that.arr[that.arr.length-1],0,0);
   }
     that.ctx.putImageData(that.temp,lefts,tops);
     }
      that.opacity.onmouseup=function(){
     	that.arr.push(that.ctx.getImageData(0,0,that.cw,that.ch));
     	obj.style.display='none';
        that.temp=null;
      	that.opacity.onmousemove=null;
     	that.opacity.onmouseup=null;
     	that.opacity.onmousedown=null;
      }
    }
}

color(){
	this.ctx.strokeStyle=this.strokeStyle;
	this.ctx.fillStyle=this.fillStyle;
}


reverser(){
	let imagedata=this.ctx.getImageData(0,0,this.cw,this.ch);
	for(let i=0;i<imagedata.data.length;i+=4){
		imagedata.data[i]=255-imagedata.data[i]
		imagedata.data[i+1]=255-imagedata.data[i+1];
		imagedata.data[i+2]=255-imagedata.data[i+2];		
	}
	this.ctx.putImageData(imagedata,0,0)

}
























}
