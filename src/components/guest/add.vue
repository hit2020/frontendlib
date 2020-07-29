<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加客户</h3>
	
	        </div>
	        <div class="box-body">
	          <form method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">客户编号</label>
				    <input type="text" class="form-control" v-model="guest.no" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">客户姓名</label>
				    <input type="text" class="form-control" v-model="guest.name" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">客户年龄</label>
				    <input type="text" class="form-control" v-model="guest.age" required>
				  </div>
				  
				  <div class="form-group">
				     <label for="inputPassword4">客户性别</label>
				  	<select v-model="guest.sex" class="form-control">
				  			<option selected>男</option>
				  			<option>女</option>
				  	</select>
				  </div>

				  <div class="form-group">
				    <label for="exampleInputPassword1">客户账户</label>
				    <input type="text" class="form-control" v-model="guest.account" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">客户住址</label>
				    <input type="text" class="form-control" v-model="guest.local" required>
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/guest/list" class="btn btn-danger">取消</router-link>
			  </form>
	        </div>
	        <!-- /.box-body -->
	        
	      </div>
	      <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"GuestAdd",
		data(){
				return {
					guest:{
						no:"",
						name:"",
						age:"",
						sex:"",
						account:"",
						local:""
					}
				};
		},
		methods:{
			add(){
				this.axiosJSON.post("/guest/add",this.guest).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/guest/list");//编程方式跳转到列表组件
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
