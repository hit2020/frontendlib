<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">修改物品</h3>
</div>
<div class="box-body">
  <form  method="post" v-on:submit.prevent="modify()">
	  <div class="form-group">
	  		<label for="exampleInputEmail1">物品编号</label>
	  		<input type="text" class="form-control" v-model="goods.no" readonly>
	  		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputEmail1">物品编码</label>
		<input type="text" class="form-control" v-model="goods.code">
		<small id="emailHelp" class="form-text text-muted"></small>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">物品类型</label>
		<input type="text" class="form-control" v-model="goods.name">
	  </div>
	  <div class="form-group">
	  		<label for="exampleInputPassword1">所属房间</label>
	  		<input type="text" class="form-control" v-model="goods.room.no">
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">物品价格</label>
		<input type="text" class="form-control" v-model="goods.price">
	  </div>
	  <button type="submit" class="btn btn-primary">提交</button>
	 <router-link to="/goods/list" class="btn btn-default">取消</router-link>
  </form>
</div>
<!-- /.box-body -->

</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"GoodsModify",
		data(){
				return {
					goods:{
						code:"",
						name:"",
						price:"",
						room:{
							no:1
						},
						no:0
					}
				};
			},
			created(){//组件的生命周期方法 组件创建以后
				let goodsNo=this.$route.params.no;
				this.getgoods(goodsNo);
				//this.getRoomLits();
			},
			methods:{
				getgoods(no){
					this.axiosJSON.get("/goods/get?no="+no).then(result=>{
						/* console.log(result); */
						this.goods=result.data.result;
					});
				},
				
				modify(){
					this.axiosJSON.post("/goods/modify",this.goods).then(result=>{
						/* console.log(result); */
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
