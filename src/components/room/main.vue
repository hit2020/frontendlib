<template>
	<!-- Default box -->
      <div class="box">
        <div class="box-header with-border">
          <h3 class="box-title">物品管理</h3>

          <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                    title="Collapse">
              <i class="fa fa-minus"></i></button>
            <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
              <i class="fa fa-times"></i></button>
          </div>
        </div>
        <div class="box-body">
           <table class="table table-bordered">
			  <thead>
			    <tr>
			      <th scope="col">编号</th>
			      <th scope="col">编码</th>
			      <th scope="col">类型</th>
				  <th scope="col">价格</th>
			      <th scope="col">操作</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr v-for="rm in roomList" v-bind:key="rm.no">
			      <td>{{rm.no}}</td>
			      <td>{{rm.code}}</td>
			      <td>{{rm.type}}</td>
				  <td>{{rm.price}}</td>
			      <td>
					  <a href="tomodify.mvc" class="btn btn-success">修改</a> 
					  <a href="todelete.mvc" class="btn btn-danger">删除 </a> 
					  <a href="toview.mvc" class="btn btn-default">查看</a> 
				  </td>
			    </tr>
			  </tbody>
			</table>
        </div>
        <!-- /.box-body -->
        <a href="toadd.mvc" class="btn btn-success">增加新部门</a>
      </div>
      <!-- /.box -->
</template>

<script>
	import axios from "axios";
	export default{
		name:"RoomMain",
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
