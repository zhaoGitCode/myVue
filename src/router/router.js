import Vue from 'vue'
import VueRouter from 'vue-router'


import Customers from '../components/Customers'
/*import About from './components/About'
import Add from './components/Add'*/
/******路由懒加载*******/
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
			path:"/",
			redirect:Customers,
			meta:{title:"主页"}

	    },
		{
			path:"/about",
			component:About,
			meta:{
				title:"关于"
			}
	    },
		{path:"/add",component:Add,
			meta:{title:"添加"}
		  },
		{
			path:"/customer/:id",
		    component:CustomerDetails,
			meta:{title:"客户"}
		},
		{
			path:"/edit/:id",
			component:Edit,
			meta:{title:"编辑"}
		},
	]
})

export default router
























