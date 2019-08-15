import Vue from 'vue'
import VueRouter from 'vue-router'
import Customers from '../components/Customers'
const About = () =>import('../components/About')
const Add = () =>import('../components/Add')
import CustomerDetails from '../components/CustomerDetails'
import Edit from '../components/Edit'
Vue.use(VueRouter)

//设置路由
const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
	    {
			path:"",
			redirect:'/zhuye',
			meta:{title:"主页"}

	    },
		{
			path:"/zhuye",
			component:Customers,
			meta:{title:"主页"}

	    },
		{
			path:"/about",
			component:About,
			meta:{
				title:"关于我们"
			}
	    },
		{path:"/add",component:Add,
			meta:{title:"添加信息"}
		  },
		{
			path:"/customer/:id",
		    component:CustomerDetails,
			meta:{title:"客户详情"}
		},
		{
			path:"/edit/:id",
			component:Edit,
			meta:{title:"编辑信息"}
		},
	]
})
router.beforeEach(function(to,from,next){
	document.title=to.matched[0].meta.title;
	next();
	//console.log(to);
});
export default router
























