<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加物品</h3>
	
	        </div>
	        <div class="box-body">
	          <form method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">物品编码</label>
				    <input type="text" class="form-control" v-model="goods.code" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">物品类型</label>
				    <input type="text" class="form-control" v-model="goods.name" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">物品价格</label>
				    <input type="text" class="form-control" v-model="goods.price" required>
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/goods/list" class="btn btn-danger">取消</router-link>
			  </form>
	        </div>
	        <!-- /.box-body -->
	        
	      </div>
	      <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"goodsAdd",
		data(){
				return {
					goods:{
						code:"",
						name:"",
						price:""
					}
				};
		},
		methods:{
			add(){
				this.axiosJSON.post("/goods/add",this.goods).then(result=>{
					if(result.data.status=="OK"){
						alert(result.data.message);
						this.$router.push("/goods/list");//编程方式跳转到列表组件
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
