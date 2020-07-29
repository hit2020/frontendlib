<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看房间</h3>
</div>
<div class="box-body">
  <form>
	  <div class="form-group">
		<label for="exampleInputEmail1">房间编码</label>
		<span>  {{room.code}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">房间类型</label>
		<span>  {{room.type}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">房间价格</label>
		<span>  {{room.price}}</span>
	  </div>
	  <router-link to="/room/list" class="btn btn-danger">返回</router-link>
   </form>
</div>
<!-- /.box-body -->

</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"RoomView",
		data(){
			return {
				room:{}
			};
		},
		props:{
			no:{required:true}
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getRoom();
		},
		methods:{
			getRoom(){
				this.axiosJSON.get("/room/get",{
					params:{
						no:this.no
					}
				}).then(result=>{
					this.room=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
