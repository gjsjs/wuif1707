
var router=new VueRouter({
    // mode:'#',
    routes:[
        {path:'/',component:Main,children:[
            {path:'',components:{
                left:Left,
                right:Right
            }}
        ]},
        {path:'/quick',component:Quick}
    ]
})