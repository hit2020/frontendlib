<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看入住单</h3>
</div>
<div class="box-body">
  <form>
	  <div class="form-group">
			<label for="exampleInputPassword1">入住单号</label>
			<span>  {{intable.code}}</span>
	  </div>
	  <div class="form-group">
			<label for="exampleInputPassword1">入住时间</label>
			<span>  {{intable.begintime}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">离开时间</label>
	  		<span>  {{intable.endtime}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">花费</label>
	  		<span>  {{intable.cost}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">入住房间</label>
	  		<span>  {{intable.no}}</span>
	  </div>
	  <router-link to="/intable/list" class="btn btn-danger">返回</router-link>
   </form>
</div>
<!-- /.box-body -->

</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"IntableView",
		data(){
			return {
				intable:{}
			};
		},
		props:{
			code:{required:true}
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getIntable();
		},
		methods:{
			getIntable(){
				this.axiosJSON.get("/intable/get",{
					params:{
						code:this.code
					}
				}).then(result=>{
					this.intable=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
