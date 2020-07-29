<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看公司</h3>
</div>
<div class="box-body">
  <form>
	  <div class="form-group">
		<label for="exampleInputEmail1">公司编号</label>
		<span>  {{comp.no}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">公司名称</label>
		<span>  {{comp.name}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">公司作用</label>
		<span>  {{comp.able}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">公司电话</label>
	  		<span>  {{comp.tel}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">花费</label>
	  		<span>  {{comp.cost}}</span>
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">联系人</label>
	  		<span>  {{comp.per}}</span>
	  </div>
	  <router-link to="/comp/list" class="btn btn-danger">返回</router-link>
   </form>
</div>
<!-- /.box-body -->

</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"CompView",
		data(){
			return {
				comp:{}
			};
		},
		props:{
			no:{required:true}
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getcomp();
		},
		methods:{
			getcomp(){
				this.axiosJSON.get("/comp/get",{
					params:{
						no:this.no
					}
				}).then(result=>{
					this.comp=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
