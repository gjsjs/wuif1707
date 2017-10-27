$(function(){
	let hei = {};
	let bai = {};
	let kb ={};
	let isAi = true;	
	let lis = $('ul>li');
	let flag = true;

	for(let i=0;i<15;i++){
			$('<div>').addClass('hen').appendTo('.qipan');
			$('<span>').addClass('su').appendTo('.qipan');
		
			for(let j=0;j<15;j++){
				kb[i+'_'+j] = {x:i,y:j};
				$('<li>').addClass('qizi').attr('id',i+'_'+j).
				data('pos',{x:i,y:j}).appendTo('.qipan');
			}
		}
	
	$('.qipan .qizi').on('click',function(){
		if($(this).hasClass('hei') || $(this).hasClass('bai')){
			return;
		}
		let data = $(this).data('pos');
		if(flag){
			$(this).addClass('hei');
			hei[data.x+"_"+data.y] = true;
			delete kb[data.x+'_'+data.y]			
			if(panduan(data,hei)>=5){
				lis.off();
				alert('黑棋赢');
			}
			if(isAi){
				let pos=ai();
				$(`#${pos.x}_${pos.y}`).addClass('bai');
				bai[pos.x+'_'+pos.y]=true;
				delete kb[pos.x+'_'+pos.y]
				if(panduan(pos,bai)>=5){
					lis.off();
					alert('白棋赢')
				}
				return
			}
		}else{
			$(this).addClass('bai');
			bai[data.x+"_"+data.y] = true;
			delete kb[data.x+'_'+data.y]
			if(panduan(data,bai)>=5){
				lis.off();
			}
		}
		flag = !flag;
	})
	
	function panduan(pos,obj){
		let rows=1,cols=1,zx=1,yx=1;
		let i = pos.x,j = pos.y+1;
		while(obj[i+'_'+j]){
			rows++;
			j++
		}
		j = pos.y-1;
		while(obj[i+'_'+j]){
			rows++;
			j--;
		}

		i = pos.x+1,j = pos.y;
		while(obj[i+'_'+j]){
			cols++;
			i++
		}
		i = pos.x-1;
		while(obj[i+'_'+j]){
			cols++;
			i--;
		}

		i = pos.x+1,j = pos.y-1;
		while(obj[i+'_'+j]){
			zx++
			i++
			j--
		}
		i = pos.x-1,j = pos.y+1;
		while(obj[i+'_'+j]){
			zx++
			i--
			j++
		}

		i = pos.x-1,j = pos.y-1;
		while(obj[i+'_'+j]){
			yx++
			i--
			j--
		}
		i = pos.x+1,j = pos.y+1;
		while(obj[i+'_'+j]){
			yx++
			i++
			j++
		}
		
		return Math.max(rows,cols,zx,yx)
		
	}
	function ai(){
   	    let max=-Infinity;
   	    let max1=-Infinity;
   	    let zb=null;
   	    let zb1=null;
   	    for(let i in kb){
            if(panduan(kb[i],bai)>=max){
            	max=panduan(kb[i],bai);
            	zb=kb[i];
            };
   	    }
   	    for(let i in kb){
            if(panduan(kb[i],hei)>=max1){
            	max1=panduan(kb[i],hei);
            	zb1=kb[i];
            };
   	    }
   	    return (max>=max1) ? zb : zb1;
   }
 



})
