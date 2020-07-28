import Vue from 'vue'
import VueRouter from 'vue-router'

//引入路由管理的组件
//首页区组件
import HomeMain from "./../components/home/main.vue"
import RoomMain from "./../components/room/main.vue"
import GoodsMain from "./../components/goods/main.vue"

Vue.use(VueRouter)

const routes = [
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/room",name:"roommain",component:RoomMain},
	{path:"/goods",name:"gooodsmain",component:GoodsMain}
	
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

export default router
