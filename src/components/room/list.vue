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
				<router-link to="/room/view" class="btn btn-default">查看</router-link> 
			</td>
			</tr>
		  </tbody>
		</table>
	</div>
	<!-- /.box-body -->
	<router-link to="/room/add" class="btn btn-success">增加新房间</router-link>
	</div>
	<!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default{
		name:"RoomList",
		data(){
			return {
				roomList:[],
				page:1,
				rows:10,
				count:0,
				pageCount:0
			};
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getList();
		},
		methods:{
			getList(){
				axios.get("http://localhost:8100/room/list/all/page",{
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
					axios.post("http://localhost:8100/room/delete",{no:no}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getList();
						}
					});
				}
			}
		}
	}
</script>

<style>
</style>
