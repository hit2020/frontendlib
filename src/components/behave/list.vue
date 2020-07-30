<template>
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">爱好管理</h3>
		</div>
		<div class="box-body">
			<table class="table table-bordered">
			  <thead>
				<tr>
					<th scope="col">编号</th>
					<th scope="col">名称</th>
					<th scope="col">操作</th>
				</tr>
			  </thead>
			  <tbody>
				<tr v-for="dm in behaveList" v-bind:key="dm.no">
				  <td>{{dm.no}}</td>
				  <td>{{dm.name}}</td>
					<td>
					  <router-link v-bind:to="'/behave/modify/'+dm.no" class="btn btn-success">修改</router-link>
					  <a href="#" v-on:click="deleteBehave(dm.no)"  class="btn btn-danger">删除</a>
					  <router-link v-bind:to="{name:'behaveview',params:{no:dm.no}}" class="btn btn-default">查看</router-link> 
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
		<router-link to="/behave/add" class="btn btn-default">增加爱好</router-link>
	</div>

</template>

<script>
	export default {
		name:"BehaveList",
		data(){
			return {
				behaveList:[],
				page:1,
				rows:5,
				count:0,
				pageCount:0
			};
		},
		created(){ //当前组件的生命周期方法，组件创建后
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJSON.get("/behave/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.behaveList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteBehave(no){
				let checkresult=confirm("您确认要删除此爱好么");
				if(checkresult){
					this.axiosJSON.post("/behave/delete",{no:no}).then(result=>{
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
