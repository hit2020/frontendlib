<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">联系公司信息</h3>
		</div>
	<div class="box-body">
	   <table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">编号</th>
			  <th scope="col">名称</th>
			  <th scope="col">作用</th>
			  <th scope="col">电话</th>
			  <th scope="col">花费</th>
			  <th scope="col">联系人</th>
			  <th scope="col">操作</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="cm in compList" v-bind:key="cm.no">
			  <td>{{cm.no}}</td>
			  <td>{{cm.name}}</td>
			  <td>{{cm.able}}</td>
			  <td>{{cm.tel}}</td>
			  <td>{{cm.cost}}</td>
			  <td>{{cm.per}}</td>
			<td>
				<router-link v-bind:to="'/comp/modify/'+cm.no" class="btn btn-success">修改</router-link>
				<a href="#" v-on:click="deleteComp(cm.no)" class="btn btn-danger">删除 </a> 
				<router-link v-bind:to="{name:'compview',params:{no:cm.no}}" class="btn btn-default">查看</router-link> 
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
	<router-link to="/comp/add" class="btn btn-success">增加公司信息</router-link>
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"CompList",
		data(){
			return {
				compList:[],
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
				this.axiosJSON.get("/comp/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.compList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteComp(no){
				console.log(no);
				let checkresult=confirm("确认要删除此公司信息吗");
				if(checkresult){
					this.axiosJSON.post("/comp/delete",{no:no}).then(result=>{
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
