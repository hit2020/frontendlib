import Vue from 'vue'
import VueRouter from 'vue-router'
//引入store 的vue
import store from './../store/index'

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
//引入物品的组件
import GoodsMain from "./../components/goods/main.vue"
import GoodsList from "./../components/goods/list.vue"
import GoodsAdd from "./../components/goods/add.vue"
import GoodsModify from "./../components/goods/modify.vue"
import GoodsView from "./../components/goods/view.vue"
//引入公司的组件
import CompMain from "./../components/comp/main.vue"
import CompList from "./../components/comp/list.vue"
import CompAdd from "./../components/comp/add.vue"
import CompModify from "./../components/comp/modify.vue"
import CompView from "./../components/comp/view.vue"



//引入部门的组件
import DepartmetnMain  from "./../components/department/main.vue";
import DepartmetnList  from "./../components/department/list.vue";
import DepartmetnAdd  from "./../components/department/add.vue";
import DepartmetnModify  from "./../components/department/modify.vue";
import DepartmetnView  from "./../components/department/view.vue";

//引入爱好的组件
import BehaveMain  from "./../components/behave/main.vue";
import BehaveList  from "./../components/behave/list.vue";
import BehaveAdd  from "./../components/behave/add.vue";
import BehaveModify  from "./../components/behave/modify.vue";
import BehaveView  from "./../components/behave/view.vue";
//引入员工组件 
import EmployeeMain  from "./../components/employee/main.vue";
import EmployeeList  from "./../components/employee/list.vue";
import EmployeeAdd  from "./../components/employee/add.vue";
import EmployeeModify  from "./../components/employee/modify.vue";
import EmployeeView  from "./../components/employee/view.vue";



//引入客户组件
import GuestMain from "./../components/guest/main.vue"
import GuestList from "./../components/guest/list.vue"
import GuestAdd from "./../components/guest/add.vue"
import GuestModify from "./../components/guest/modify.vue"
import GuestView from "./../components/guest/view.vue"
//引入入住单组件
import IntableMain from "./../components/intable/main.vue"
import IntableList from "./../components/intable/list.vue"
import IntableAdd from "./../components/intable/add.vue"
import IntableModify from "./../components/intable/modify.vue"
import IntableView from "./../components/intable/view.vue"



Vue.use(VueRouter)

const routes = [
	{path:"/",name:"homemain",component:HomeMain},
	{path:"/login",name:"login",component:AdminLogin},
	{path:"/room",name:"roommain",component:RoomMain,children:[
		{path:"list",name:"roomlist",component:RoomList},
		{path:"add",name:"roomadd",component:RoomAdd},
		{path:"modify/:no",name:"roommodify",component:RoomModify},
		{path:"view/:no",name:"roomview",component:RoomView,props:true},
		{path:"",redirect:"list"}
	]},
	{path:"/goods",name:"gooodsmain",component:GoodsMain,children:[
		{path:"list",name:"goodslist",component:GoodsList},
		{path:"add",name:"goodsadd",component:GoodsAdd},
		{path:"modify/:no",name:"goodsmodify",component:GoodsModify},
		{path:"view/:no",name:"goodsview",component:GoodsView,props:true},
		{path:"",redirect:"list"}
	]},
	{path:"/comp",name:"compmain",component:CompMain,children:[
		{path:"list",name:"complist",component:CompList},
		{path:"add",name:"compadd",component:CompAdd},
		{path:"modify/:no",name:"compmodify",component:CompModify},
		{path:"view/:no",name:"compview",component:CompView,props:true},
		{path:"",redirect:"list"}
	]},
	{path:"/department",name:"departmentmain", component:DepartmetnMain,children:[
		{path:"list",name:"departmentlist",component:DepartmetnList},
		{path:"add",name:"departmentadd",component:DepartmetnAdd},
		{path:"modify/:no",name:"departmentmodify",component:DepartmetnModify},
		{path:"view/:no",name:"departmentview",component:DepartmetnView,props:true},
		{path:"", redirect: "list" }
	]},
	{path:"/behave",name:"behavetmain", component:BehaveMain,children:[
		{path:"list",name:"behavelist",component:BehaveList},
		{path:"add",name:"behaveadd",component:BehaveAdd},
		{path:"modify/:no",name:"behavemodify",component:BehaveModify},
		{path:"view/:no",name:"behaveview",component:BehaveView,props:true},
		{path:"", redirect: "list" }
	]},
	{path:"/employee", name:"employeemain", component:EmployeeMain,children:[
		{path:"list",name:"employeelist",component:EmployeeList},
		{path:"add",name:"employeeadd",component:EmployeeAdd},
		{path:"modify/:id",name:"employeemodify",component:EmployeeModify},
		{path:"view/:id",name:"employeeview",component:EmployeeView,props:true},
		{path:"", redirect: "list" }
	]},
	{path:"/guest",name:"guestmain",component:GuestMain,children:[
		{path:"list",name:"guestlist",component:GuestList},
		{path:"add",name:"guestadd",component:GuestAdd},
		{path:"modify/:no",name:"guestmodify",component:GuestModify},
		{path:"view/:no",name:"guestview",component:GuestView,props:true},
		{path:"",redirect:"list"}
	]},
	{path:"/intable",name:"intablemain",component:IntableMain,children:[
		{path:"list",name:"intablelist",component:IntableList},
		{path:"add",name:"intableadd",component:IntableAdd},
		{path:"modify/:code",name:"intablemodify",component:IntableModify},
		{path:"view/:code",name:"intableview",component:IntableView,props:true},
		{path:"",redirect:"list"}
	]}
	
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes
})

//路由守护  登录拦截
router.beforeEach((to,from, next) => {
	if(to.path=="/login"){
		next();
	}
	else{
		 if(store.getters.loginuser!=null){
			 next();
		 }
		 else{
			 next("/login");
		 }
	}
})

export default router
