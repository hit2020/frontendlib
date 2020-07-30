<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">客户管理</h3>
		</div>
		<div class="row">
			<div clas="col-md-12">
				<form>
				  <div class="form-row">
				    
					<div class="form-group col-md-3">
					   <label for="inputPassword4">性别</label>
						<select class="form-control" v-model="sex" v-on:change="getListByCondition">
								<option selected value="">无</option>
								<option>男</option>
								<option>女</option>
						</select>
					</div>
				    <div class="form-group col-md-3">
				      <label for="inputPassword4">最低年龄</label>
				      <input type="text" class="form-control" v-model="lowAge" v-on:change="getListByCondition">
				    </div>
					<div class="form-group col-md-3">
					  <label for="inputPassword4">最高年龄</label>
					  <input type="text" class="form-control" v-model="highAge" v-on:change="getListByCondition">
					</div>
					<div class="form-group col-md-3">
					  <label for="inputPassword4">姓名</label>
					  <input type="text" class="form-control" v-model="nameKey" v-on:change="getListByCondition">
					</div>
				  </div>
				</form>
			</div>
		</div>
	<div class="box-body">
	   <table class="table table-bordered">
		  <thead>
			<tr>
			  <th scope="col">编号</th>
			  <th scope="col">姓名</th>
			  <th scope="col">年龄</th>
			  <th scope="col">性别</th>
			  <th scope="col">账户</th>
			  <th scope="col">住址</th>
			  <th scope="col">操作</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="gm in guestList" v-bind:key="gm.no">
			  <td>{{gm.no}}</td>
			  <td>{{gm.name}}</td>
			  <td>{{gm.age}}</td>
			  <td>{{gm.sex}}</td>
			  <td>{{gm.account}}</td>
			  <td>{{gm.local}}</td>
			<td>
				<router-link v-bind:to="'/guest/modify/'+gm.no" class="btn btn-success">修改</router-link>
				<a href="#" v-on:click="deleteGuest(gm.no)" class="btn btn-danger">删除 </a> 
				<router-link v-bind:to="{name:'guestview',params:{no:gm.no}}" class="btn btn-default">查看</router-link> 
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
	<router-link to="/guest/add" class="btn btn-success">增加新客户</router-link>
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"GuestList",
		data(){
			return {
				geList:[],
				guestList:[],
				page:1,
				rows:5,
				count:0,
				pageCount:0,
				sex:"",
				lowAge:0,
				highAge:0,
				nameKey:""
			};
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getListByCondition();
		},
		methods:{
			getListByCondition(){
				this.axiosJSON.get("/guest/list/condition/page",{
					params:{
						rows:this.rows,
						page:this.page,
						lowAge:this.lowAge,
						highAge:this.highAge,
						sex:this.sex,
						nameKey:this.nameKey
					}
				}).then(result=>{
					this.guestList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteGuest(no){
				console.log(no);
				let checkresult=confirm("确认要删除此客户吗");
				if(checkresult){
					this.axiosJSON.post("/guest/delete",{no:no}).then(result=>{
						alert(result.data.message);
						if(result.data.status=="OK"){
							this.getListByCondition();
						}
					});
				}
			},
			toFirstPage(){
				this.page=1;
				this.getListByCondition();
			},
			toPreviousPage(){
				if(this.page>1){
					this.page--;
					this.getListByCondition();
				}
			},
			toNextPage(){
				if(this.page<this.pageCount){
					this.page++;
					this.getListByCondition();
				}
			},
			toLastPage(){
				this.page=this.pageCount;
				this.getListByCondition();
			}
		}
	}
</script>

<style>
</style>
