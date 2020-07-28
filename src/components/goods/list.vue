<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">物品管理</h3>
		</div>
	<div class="box-body">
	   <table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">编号</th>
			  <th scope="col">编码</th>
			  <th scope="col">名称</th>
			  <th scope="col">价格</th>
			  <th scope="col">操作</th>
			</tr>
		  </thead>
		  <tbody>
		  <tr v-for="gm in goodsList" v-bind:key="gm.no">
			  <td>{{gm.no}}</td>
			  <td>{{gm.code}}</td>
			  <td>{{gm.name}}</td>
			  <td>{{gm.price}}</td>
			<td>
				<router-link v-bind:to="'/goods/modify/'+gm.no" class="btn btn-success">修改</router-link>
				<a href="#" v-on:click="deleteGoods(gm.no)" class="btn btn-danger">删除 </a> 
				<router-link v-bind:to="'/goods/view/' + gm.no" class="btn btn-default">查看</router-link> 
			</td>
			</tr>
		  </tbody>
		</table>
	</div>
	<!-- /.box-body -->
	<router-link to="/goods/add" class="btn btn-success">增加新物品</router-link>
	</div>
	<!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default{
		name:"GoodsList",
		data(){
			return {
				goodsList:[],
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
				axios.get("http://localhost:8100/goods/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.goodsList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteGoods(no){
				console.log(no);
				let checkresult=confirm("确认要删除此物品吗");
				if(checkresult){
					axios.post("http://localhost:8100/goods/delete",{no:no}).then(result=>{
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
