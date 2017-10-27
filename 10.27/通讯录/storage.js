class storage{
	constructor(){
		// this.date=[{name:'张1',age:'19',address:'山西',class:'1708',sex:'男'},
  //                  {name:'张2',age:'19',address:'山西',class:'1708',sex:'男'},
  //                  {name:'张3',age:'19',address:'山西',class:'1708',sex:'男'},
  //                  {name:'张4',age:'19',address:'山西',class:'1708',sex:'男'},
  //                  {name:'张5',age:'19',address:'山西',class:'1708',sex:'男'},
  //                  {name:'张6',age:'19',address:'山西',class:'1708',sex:'男'}];
   
   this.date=[]
	}
	//初始
	_init(){
          let student=[{name:'张1',age:'19',address:'山西',class:'1708',sex:'男'},
                   {name:'张2',age:'19',address:'山西',class:'1708',sex:'男'},
                   {name:'张3',age:'19',address:'山西',class:'1708',sex:'男'},
                   {name:'张4',age:'19',address:'山西',class:'1708',sex:'男'},
                   {name:'张5',age:'19',address:'山西',class:'1708',sex:'男'},
                   {name:'张6',age:'19',address:'山西',class:'1708',sex:'男'}
                  ]
             localStorage.setItem("student",JSON.stringify(student))

             // localStorage.setItem("student",JSON.stringify(this.date))
	}
	//获取
	getDate(){
		let date=localStorage.getItem('student')
         if (!date) {
         	this._init()
         }
       return this.date=JSON.parse(localStorage.getItem('student'))
	}
	add(obj){
		this.date.push(obj);
	    this.save();}
	del(row){
		this.date.splice(row,1);
		this.save();
	}
	//更新
	update(row,key,value){
		// row key value
		//let date=this.getDate()	
        this.date[row][key] = value;
        this.save();
	}
	//保存数据
	save(){
         // localStorage.student=JSON.stringify(date)
          localStorage.setItem('student',JSON.stringify(this.date))
	}

}