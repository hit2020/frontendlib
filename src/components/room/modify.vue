<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改房间</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
		<label for="exampleInputEmail1">房间编码</label>
		<input type="text" class="form-control" v-model="room.code">
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">房间类型</label>
		<input type="text" class="form-control" v-model="room.type">
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">房间价格</label>
		<input type="text" class="form-control" v-model="room.price">
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/room/list" class="btn btn-default">取消</router-link>
  </form>
</div>
<!-- /.box-body -->

</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"RoomModify",
		data(){
				return {
					room:{
						code:"",
						type:"",
						price:"",
						no:0
					}
				};
			},
			created(){//组件的生命周期方法 组件创建以后
				let roomNo=this.$route.params.no;
				this.getRoom(roomNo);
			},
			methods:{
				getRoom(no){
					this.axiosJSON.get("/room/get?no="+no).then(result=>{
						this.room=result.data.result;
					});
				},
				
				modify(){
					this.axiosJSON.post("/room/modify",this.room).then(result=>{
						/* console.log(result); */
						if(result.data.status=="OK"){
							alert(result.data.message);
							this.$router.push("/room/list");//编程方式跳转到列表组件
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
