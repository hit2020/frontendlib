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
						<label for="inputPassword4">房间号</label>
						<input type="text" class="form-control" v-model="roomNo" v-on:change="getListByCondition">
					</div>
				    
				    <div class="form-group col-md-3">
				      <label for="inputPassword4">最低花费</label>
				      <input type="text" class="form-control" v-model="lowPrice" v-on:change="getListByCondition">
				    </div>
					<div class="form-group col-md-3">
					  <label for="inputPassword4">最高花费</label>
					  <input type="text" class="form-control" v-model="highPrice" v-on:change="getListByCondition">
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
				lowPrice:0,
				highPrice:0,
				roomNo:0
			};
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getListByCondition();
		},
		methods:{
			getListByCondition(){
				this.axiosJSON.get("/intable/list/condition/page",{
					params:{
						rows:this.rows,
						page:this.page,
						lowPrice:this.lowPrice,
						highPrice:this.highPrice,
						roomNo:this.roomNo,
						nameKey:this.nameKey
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
