import Vue from 'vue'
import VueRouter from 'vue-router'


//引入路由管理的组件
//首页区组件
import AdminLogin from "./../components/admin/login.vue"
import HomeMain from "./../components/home/main.vue"
//引入房间的组件
import RoomMain from "./../components/room/main.vue"
import RoomList from "./../components/room/list.vue"
import RoomAdd from "./../components/room/add.vue"
import RoomModify from "./../components/room/modify.vue"
import RoomView from "./../components/room/view.vue"

import GoodsMain from "./../components/goods/main.vue"

Vue.use(VueRouter)

const routes = [
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/room",name:"roommain",component:RoomMain,children:[
		{path:"list",name:"roomlist",component:RoomList},
		{path:"add",name:"roomadd",component:RoomAdd},
		{path:"modify/:no",name:"roommodify",component:RoomModify},
		{path:"view/:no",name:"roomview",component:RoomView},
		{path:"",redirect:"list"}
	]},
	{path:"/goods",name:"gooodsmain",component:GoodsMain}
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default router
