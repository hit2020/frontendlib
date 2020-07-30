<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改入住单</h3>
</div>

<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputEmail1">入住单编码</label>
		<input type="text" class="form-control" v-model="intable.code" readonly>
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  
	  
	  <div class="form-group">
	  		<label for="exampleInputPassword1">入住时间</label>
	  		<input type="date" class="form-control" v-model="intable.begintime">
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">离开时间</label>
		<input type="date" class="form-control" v-model="intable.endtime">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">花费</label>
	  		<input type="text" class="form-control" v-model="intable.cost">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">入住房间</label>
	  		<input type="text" class="form-control" v-model="intable.no">
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/intable/list" class="btn btn-default">取消</router-link>
  </form>
</div>
<!-- /.box-body -->

</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"IntableModify",
		data(){
				return {
					intable:{
						code:"",
						guest:{
							no:1
						},
						begintime:"",
						endtime:"",
						cost:0,
						no:""
					}
				};
			},
			created(){//组件的生命周期方法 组件创建以后
				let intableCode=this.$route.params.code;
				this.getIntable(intableCode);
				//this.getRoomLits();
			},
			methods:{
				getIntable(code){
					this.axiosJSON.get("/intable/get?code="+code).then(result=>{
						console.log(result);
						this.intable=result.data.result;
					});
				},
				
				modify(){
					this.axiosJSON.post("/intable/modify",this.intable).then(result=>{
						/* console.log(result); */
						if(result.data.status=="OK"){
							console.log(result);
							alert(result.data.message);
							this.$router.push("/intable/list");//编程方式跳转到列表组件
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
