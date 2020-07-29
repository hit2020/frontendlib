<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加公司</h3>
	
	        </div>
	        <div class="box-body">
	          <form method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">公司编号</label>
				    <input type="text" class="form-control" v-model="comp.no" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">公司名称</label>
				    <input type="text" class="form-control" v-model="comp.name" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">公司作用</label>
				    <input type="text" class="form-control" v-model="comp.able" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">公司电话</label>
				    <input type="text" class="form-control" v-model="comp.tel" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">花费</label>
				    <input type="text" class="form-control" v-model="comp.cost" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">联系人</label>
				    <input type="text" class="form-control" v-model="comp.per" required>
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/comp/list" class="btn btn-danger">取消</router-link>
			  </form>
	        </div>
	        <!-- /.box-body -->
	        
	      </div>
	      <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"CompAdd",
		data(){
				return {
					comp:{
						no:"",
						name:"",
						able:"",
						tel:"",
						cost:"",
						per:""
					}
				};
		},
		methods:{
			add(){
				this.axiosJSON.post("/comp/add",this.comp).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/comp/list");//编程方式跳转到列表组件
					}
					else{
						alert(result.data.message);
					}
				});
			}
		}
	}
</script>

<style>
</style>
