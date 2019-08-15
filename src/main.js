import Vue from 'vue'
import App from './App'
//import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// 每次添加一个新文件都要 import 并配置路由 即routes

Vue.config.productionTip = false
import router from './router/index.js'
//Vue.use(VueRouter)
Vue.use(VueResource)

//设置路由
/*const router = new VueRouter({
	mode:"history",
	base:__dirname,
	routes:[
		{
			path:"/",
			component:Customers,
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
})*/
/* eslint-disable no-new */
new Vue({
	el:"#app",
    router,
    render: h => h(App)
})



