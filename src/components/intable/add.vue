<template>
	<!-- Default box -->
	      <div class="box">
	        <div class="box-header with-border">
	          <h3 class="box-title">增加入住单</h3>
	
	        </div>
	        <div class="box-body">
	          <form method="post" v-on:submit.prevent="add()">
				  <div class="form-group">
				    <label for="exampleInputEmail1">入住单编码</label>
				    <input type="text" class="form-control" v-model="intable.code" required>
				  </div>
				  <div class="form-group">
				     <label for="inputPassword4">客户姓名</label>
				  	 <select v-model="intable.guest.no" class="form-control">
				  		 <option v-for="gm in guestList" v-bind:value="gm.no" v-bind:key="gm.no">{{gm.name}}</option>
				  	 </select>
				  </div> 
				  
				  
				  <div class="form-group">
				    <label for="exampleInputPassword1">入住时间</label>
				    <input type="text" class="form-control" v-model="intable.begintime" required>
				  </div>
	
				  <div class="form-group">
				    <label for="exampleInputPassword1">离开时间</label>
				    <input type="text" class="form-control" v-model="intable.endtime" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">花费</label>
				    <input type="text" class="form-control" v-model="intable.cost" required>
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">房间号</label>
				    <input type="text" class="form-control" v-model="intable.no" required>
				  </div>
				  <button type="submit" class="btn btn-primary">提交</button>
				  <router-link to="/intable/list" class="btn btn-danger">取消</router-link>
			  </form>
	        </div>
	        <!-- /.box-body -->
	        
	      </div>
	      <!-- /.box -->
</template>

<script>
	//import axios from "axios";
	export default{
		name:"IntableAdd",
		data(){
				return {
					guestList:[],
					intable:{
						code:"D09",
						guest:{
							no:1
						},
						begintime:"2020-01-01",
						endtime:"2020-01-01",
						cost:100,
						no:"5063"
					}
				};
		},
		created() {
			this.getGuestLits();
		},
		methods:{
			getGuestLits(){ //取得所有部门列表
				this.axiosJSON.get("/guest/list/all/page").then(result=>{
					if(result.data.status=="OK"){
						console.log(result);
						this.guestList=result.data.list;
					}
					else{
						alert(result.data.message);
					}
					
				});
			},
			add(){
				this.axiosJSON.post("/intable/add",this.intable).then(result=>{
					if(result.data.status=="OK"){
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
