<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">房间管理</h3>
		</div>
	<div class="box-body">
	   <table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">编号</th>
			  <th scope="col">编码</th>
			  <th scope="col">类型</th>
			  <th scope="col">价格</th>
			  <th scope="col">操作</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="rm in roomList" v-bind:key="rm.no">
			  <td>{{rm.no}}</td>
			  <td>{{rm.code}}</td>
			  <td>{{rm.type}}</td>
			  <td>{{rm.price}}</td>
			<td>
				<router-link v-bind:to="'/room/modify/'+rm.no" class="btn btn-success">修改</router-link>
				<a href="#" v-on:click="deleteRoom(rm.no)" class="btn btn-danger">删除 </a> 
				<router-link v-bind:to="{name:'roomview',params:{no:rm.no}}" class="btn btn-default">查看</router-link> 
			</td>
			</tr>
		  </tbody>
		</table>
	</div>
	<div class="row">
		<div class="col-md-6">
		个数:<span>{{count}}</span>	页数:<span>{{page}}</span>/<span>{{pageCount}}</span>
		</div>
		<div class="col-md-6 text-right">
			<nav>
			  <ul class="pagination justify-content-end">
				<li class="page-item"><a class="page-link" href="#" v-on:click="toFirstPage()">首页</a></li>
				<li class="page-item"><a class="page-link" href="#" v-on:click="toPreviousPage()">上页</a></li>
				<li class="page-item"><a class="page-link" href="#" v-on:click="toNextPage()">下页</a></li>
				<li class="page-item"><a class="page-link" href="#" v-on:click="toLastPage()">末页</a></li>
			  </ul>
			</nav>
		</div>
	</div> 
	<!-- /.box-body -->
	<router-link to="/room/add" class="btn btn-success">增加新房间</router-link>
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"RoomList",
		data(){
			return {
				roomList:[],
				page:1,
				rows:5,
				count:0,
				pageCount:0
			};
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJSON.get("/room/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.roomList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteRoom(no){
				console.log(no);
				let checkresult=confirm("确认要删除此部门吗");
				if(checkresult){
					this.axiosJSON.post("/room/delete",{no:no}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
						}
					});
				}
			},
			toFirstPage(){
				this.page=1;
				this.getList();
			},
			toPreviousPage(){
				if(this.page>1){
					this.page--;
					this.getList();
				}
			},
			toNextPage(){
				if(this.page<this.pageCount){
					this.page++;
					this.getList();
				}
			},
			toLastPage(){
				this.page=this.pageCount;
				this.getList();
			}
		}
	}
</script>

<style>
</style>
