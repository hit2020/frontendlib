<template>
	<!-- Default box -->
	<div class="box">
	<div class="box-header with-border">
	  <h3 class="box-title">查看爱好</h3>
	</div>
	<div class="box-body">
	  <form>
		  <div class="form-group">
			<label for="exampleInputEmail1">编号</label>
			<span>  {{behave.no}}</span>
		  </div>
		  <div class="form-group">
			<label for="exampleInputPassword1">爱好</label>
			<span>  {{behave.name}}</span>
		  </div>
		  <router-link to="/behave/list" class="btn btn-danger">返回</router-link>
	   </form>
	</div>
	<!-- /.box-body -->
	
	</div>
	<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"BehaveView",
		data(){
			return {
				behave:{}
			};
		},
		props:{
			no:{required:true}
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getBehave();
		},
		methods:{
			getBehave(){
				this.axiosJSON.get("/behave/get",{
					params:{
						no:this.no
					}
				}).then(result=>{
					this.behave=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
