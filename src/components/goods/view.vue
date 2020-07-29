<template>
<!-- Default box -->
<div class="box">
<div class="box-header with-border">
  <h3 class="box-title">查看物品</h3>
</div>
<div class="box-body">
  <form>
	  <div class="form-group">
		<label for="exampleInputEmail1">物品编码</label>
		<span>  {{goods.code}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">物品类型</label>
		<span>  {{goods.name}}</span>
	  </div>
	  <div class="form-group">
		<label for="exampleInputPassword1">物品价格</label>
		<span>  {{goods.price}}</span>
	  </div>
	  <router-link to="/goods/list" class="btn btn-danger">返回</router-link>
   </form>
</div>
<!-- /.box-body -->

</div>
<!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"GoodsView",
		data(){
			return {
				goods:{}
			};
		},
		props:{
			no:{required:true}
		},
		created(){//组件的生命周期方法 组件创建以后
			this.getGoods();
		},
		methods:{
			getGoods(){
				this.axiosJSON.get("/goods/get",{
					params:{
						no:this.no
					}
				}).then(result=>{
					this.goods=result.data.result;
				});
			}
		}
	}
</script>

<style>
</style>
