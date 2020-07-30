<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改客户</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
	  		<label for="exampleInputPassword1">客户编号</label>
	  		<input type="text" class="form-control" v-model="guest.no" readonly>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">客户姓名</label>
		<input type="text" class="form-control" v-model="guest.name">
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">客户年龄</label>
		<input type="text" class="form-control" v-model="guest.age">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">客户性别</label>
	  		<input type="text" class="form-control" v-model="guest.sex">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">客户账户</label>
	  		<input type="text" class="form-control" v-model="guest.account">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">客户住址</label>
	  		<input type="text" class="form-control" v-model="guest.local">
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/guest/list" class="btn btn-default">取消</router-link>
  </form>
</div>
<!-- /.box-body -->

</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"GuestModify",
		data(){
				return {
					guest:{
						no:0,
						name:"",
						age:"",
						sex:"",
						account:"",
						local:""
					}
				};
			},
			created(){//组件的生命周期方法 组件创建以后
				let guestNo=this.$route.params.no;
				this.getGuest(guestNo);
			},
			methods:{
				getGuest(no){
					this.axiosJSON.get("/guest/get?no="+no).then(result=>{
						this.guest=result.data.result;
					});
				},
				
				modify(){
					this.axiosJSON.post("/guest/modify",this.guest).then(result=>{
						/* console.log(result); */
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
