<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看客户</h3>
</div>
<div class="box-body">
  <form>
	  <div class="form-group">
		<label for="exampleInputEmail1">客户编号</label>
		<span>  {{guest.no}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">客户姓名</label>
		<span>  {{guest.name}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">客户年龄</label>
		<span>  {{guest.age}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputEmail1">客户性别</label>
	  		<span>  {{guest.sex}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputEmail1">客户账户</label>
	  		<span>  {{guest.account}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputEmail1">客户住址</label>
	  		<span>  {{guest.local}}</span>
	  </div>
	  <router-link to="/guest/list" class="btn btn-danger">返回</router-link>
   </form>
</div>
<!-- /.box-body -->

</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"GuestView",
		data(){
			return {
				guest:{}
			};
		},
		props:{
			no:{required:true}
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getGuest();
		},
		methods:{
			getGuest(){
				this.axiosJSON.get("/guest/get",{
					params:{
						no:this.no
					}
				}).then(result=>{
					this.guest=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
