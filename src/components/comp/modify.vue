<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改公司</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputEmail1">公司名称</label>
		<input type="text" class="form-control" v-model="comp.name">
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">公司作用</label>
		<input type="text" class="form-control" v-model="comp.able">
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">公司电话</label>
		<input type="text" class="form-control" v-model="comp.tel">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">花费</label>
	  		<input type="text" class="form-control" v-model="comp.cost">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">联系人</label>
	  		<input type="text" class="form-control" v-model="comp.per">
	  </div>
	  
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/comp/list" class="btn btn-default">取消</router-link>
  </form>
</div>
<!-- /.box-body -->

</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"CompModify",
		data(){
				return {
					comp:{
						no:0,
						name:"",
						able:"",
						tel:"",
						cost:"",
						per:""
					}
				};
			},
			created(){//组件的生命周期方法 组件创建以后
				let compNo=this.$route.params.no;
				this.getcomp(compNo);
			},
			methods:{
				getcomp(no){
					this.axiosJSON.get("/comp/get?no="+no).then(result=>{
						this.comp=result.data.result;
					});
				},
				
				modify(){
					this.axiosJSON.post("/comp/modify",this.comp).then(result=>{
						/* console.log(result); */
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
