<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">查看房间</h3>
	
	          <div class="box-tools pull-right">
	            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
	                    title="Collapse">
	              <i class="fa fa-minus"></i></button>
	            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
	              <i class="fa fa-times"></i></button>
	          </div>
	        </div>
	        <div class="box-body">
	          <form>
				  <div class="form-group">
				    <label for="exampleInputEmail1">房间编码</label>
				    <span></span>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房间类型</label>
				    <span></span>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房间价格</label>
				    <span></span>
				  </div>
				  <a href="tolist.mvc" class="btn btn-danger">返回</a>
			   </form>
	        </div>
	        <!-- /.box-body -->
	        
	      </div>
	      <!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default{
		name:"RoomView",
		data(){
				return {
					roomList:[],
					page:1,
					rows:10,
					count:0,
					pageCount:0
				};
			},
			created(){//组件的生命周期方法 组件创建以后
				this.getList();
			},
			methods:{
				getList(){
					
					axios.get("http://localhost:8100/room/list/all/page",{
						params:{
							rows:this.rows,
							page:this.page
						}
					}).then(result=>{
						this.roomList=result.data.list;
						this.count=result.data.count;
						this.pageCount=result.data.pageCount;
					});
				}
			}
		}
</script>

<style>
</style>
