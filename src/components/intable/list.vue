<template>
	<!-- Default box -->
	<div class="box">
		<div class="box-header with-border">
		  <h3 class="box-title">入住单管理</h3>
		</div>

		<div class="row">
			<div clas="col-md-12">
				<form>
				  <div class="form-row">

				    <div class="form-group col-md-3">
				      <label for="inputEmail4">房间</label>
				      <select class="form-control" v-model="departmentNo" v-on:change="getListByCondition" >
						  <option value="0">所有房间</option>
						  <option v-for="dm in departmentList" v-bind:key="dm.no" v-bind:value="dm.no">{{dm.name}}</option>
					  </select>
				    </div>
				    <div class="form-group col-md-3">
				      <label for="inputPassword4">入住开始日期</label>
				      <input type="date" class="form-control" v-model="startDate" v-on:change="getListByCondition">
				    </div>
					<div class="form-group col-md-3">
					  <label for="inputPassword4">入住截止日期</label>
					  <input type="date" class="form-control" v-model="endDate" v-on:change="getListByCondition">
					</div>

					<div class="form-group col-md-3">
					  <label for="inputPassword4">姓名检索</label>
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
			  <th scope="col">编码</th>
			  <th scope="col">客户姓名</th>
			  <th scope="col">入住时间</th>
			  <th scope="col">离开时间</th>
			  <th scope="col">花费</th>
			  <th scope="col">房间号</th>
			  <th scope="col">操作</th>
			</tr>
		  </thead>
		  <tbody>
		  <tr v-for="im in intableList" v-bind:key="im.code">
			  <td>{{im.code}}</td>
			  <td>{{im.guest.name}}</td>
			  <td>{{im.begintime}}</td>
			  <td>{{im.endtime}}</td>
			  <td>{{im.cost}}</td>
			  <td>{{im.no}}</td>
			<td>
				<router-link v-bind:to="'/intable/modify/'+im.code" class="btn btn-success">修改</router-link>
				<a href="#" v-on:click="deleteIntable(im.code)" class="btn btn-danger">删除 </a> 
				<router-link v-bind:to="'/intable/view/' + im.code" class="btn btn-default">查看</router-link> 
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
	<router-link to="/intable/add" class="btn btn-success">增加新物品</router-link>
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"IntableList",
		data(){
			return {
				intableList:[],
				page:1,
				rows:5,
				count:0,
				pageCount:0,
				nameKey:"",
				lowAge:0,
				highAge:0,
				roomNo:0
			};
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getList();
		},
		methods:{
			getList(){
				this.axiosJSON.get("/intable/list/all/page",{
					params:{
						rows:this.rows,
						page:this.page
					}
				}).then(result=>{
					this.intableList=result.data.list;
					this.count=result.data.count;
					this.pageCount=result.data.pageCount;
				});
			},
			deleteIntable(code){
				console.log(code);
				let checkresult=confirm("确认要删除此入住单吗");
				if(checkresult){
					this.axiosJSON.post("/intable/delete",{code:code}).then(result=>{
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
			},
			getListByCondition(){
				this.axiosJSON.get("/intable/list/condition/page",{
					params:{
						rows:this.rows,
						page:this.page,
						lowAge:this.lowAge,
						nameKey:this.nameKey,
						highAge:this.highAge,
						roomNo:this.roomNo
					}					
				}).then(result=>{
					if(result.data.status=="OK"){
						this.employeeList=result.data.list;
						this.count=result.data.count;
						this.pageCount=result.data.pageCount;
					}
				});
			},
		}
	}
</script>

<style>
</style>
