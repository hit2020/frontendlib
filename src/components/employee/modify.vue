<template>
<div class="box box-primary">
	<div class="box-body">
		<form method="post" v-on:submit.prevent="modify()">
		<div class="form-row">
			<div class="form-group col-md-6">
			  <label for="inputEmail4">账号</label>
			  <input type="text" class="form-control" v-model="employee.id" readonly>
			</div>
			<div class="form-group col-md-6">
			  <label for="inputPassword4">密码</label>
			  <input type="password" class="form-control" v-model="employee.password" required>
			</div>
		  </div>
			<div class="form-row">
			<div class="form-group col-md-6">
			   <label for="inputEmail4">姓名</label>
			   <input type="text" class="form-control" v-model="employee.name" required>
			</div>
			<div class="form-group col-md-6">
			   <label for="inputPassword4">性别</label>
				<select v-model="employee.sex" class="form-control">
						<option selected>男</option>
						<option>女</option>
				</select>
			</div>
			<div class="form-row">
			  <div class="form-group col-md-6">
				<label for="inputEmail4">年龄</label>
				<input type="text" class="form-control" v-model="employee.age">
			  </div>
			  <div class="form-group col-md-6">
				<label for="inputPassword4">工资</label>
				<input type="text" class="form-control" v-model="employee.salary">
			  </div>
			</div>
			
			<div class="form-row">
			  <div class="form-group col-md-6">
				<label for="inputEmail4">生日</label>
				<input type="date" class="form-control" v-model="employee.birthday">
			  </div>
			  <div class="form-group col-md-6">
				<label for="inputPassword4">入职日期</label>
				<input type="date" class="form-control" v-model="employee.joinDate">
			  </div>
			</div>
			
			<div class="form-row">
				 <div class="form-group col-md-6">
				   <label for="inputPassword4">部门</label>
					 <select v-model="employee.department.no" class="form-control">
						 <option v-for="dm in departmentList" v-bind:value="dm.no" v-bind:key="dm.no">{{dm.name}}</option>
					 </select>
				</div> 
				<div class="form-group col-md-6">
					<label for="inputAddress2">员工照片</label>
					<input type="file" class="form-control" name="employeePhoto" v-on:change="changePhoto($event)" >
				</div>
			</div>	
			 <div class="form-row">
					 <div class="form-group">
						<label for="inputAddress2">爱好</label>
						<span  v-for="bm in behaveList" v-bind:key="bm.no" >
							<input type="checkbox" v-model="selectbehaves" name="selectbehaves" v-bind:value="bm.no" />{{bm.name}}
						</span>
					 </div>
			</div>				
			<button type="submit" class="btn btn-primary">提交</button>
			<router-link to="/employee/list" class="btn btn-primary">取消</router-link>
		</div>
		</form>
	</div><!-- /.box-body -->	
</div>
		  
</template>

<script>
	import MainConfig from "./../../config"; //引入全局参数配置
	//员工增加组件
	export default {
		name:"EmployeeAdd",
		data(){
			return {
				departmentList:[],
				behaveList:[],
				employee:{
					id:"1004",
					password:"1004",
					name:"刘明星",
					sex:"男",
					age:30,
					salary:5000,
					joinDate:"2010-10-10",
					birthday:"1999-10-10",
					department:{
						no:1
					}					
				},
				employeePhoto:Object,
				selectbehaves:[]
			};
		},
		created(){
			let employeeId=this.$route.params.id;
			this.getemployee(employeeId);
			this.getDepartmentLits();
			this.getBehaveList();
		},
		methods:{
			getemployee(Id){
				this.axiosJSON.get("/employee/get/"+Id).then(result=>{
					if(result.data.status=="OK"){
						this.employee=result.data.result;
						//取得员工现有的爱好
						if(this.employee.behaves){
							this.employee.behaves.forEach((bm,index,arrt)=>{
								this.selectbehaves.push(bm.no); 
							});
						}						
						if(this.employee.photoFileName!=null){
							this.photoUrl=MainConfig.photoRootUrl+this.employee.photoFileName;
							this.restPhotoUrl=MainConfig.restRootUrl+"employee/photo?id="+this.id
						}
					}
					else{
						alert(result.data.message);
					}
				});
			},
			getDepartmentLits(){ //取得所有部门列表
				this.axiosJSON.get("/department/list/all").then(result=>{
					if(result.data.status=="OK"){
						this.departmentList=result.data.list;
					}
					else{
						alert(result.data.message);
					}
					
				});
			},
			getBehaveList(){ //取得所有爱好列表
				this.axiosJSON.get("/behave/list/all").then(result=>{
					if(result.data.status=="OK"){
						this.behaveList=result.data.list;
					}
					else{
						alert(result.data.message);
					}
					
				});
			},
			changePhoto(event){ //图片选择的处理
				this.employeePhoto=event.target.files[0];			
			},
			modify(){ //增加员工提交处理
				let formData = new FormData();
				formData.append("id",this.employee.id);
				formData.append("password",this.employee.password);
				formData.append("name",this.employee.name);
				formData.append("sex",this.employee.sex);
				formData.append("age",this.employee.age);
				formData.append("salary",this.employee.salary);
				formData.append("birthday",this.employee.birthday);
				formData.append("joinDate",this.employee.joinDate);
				formData.append("department.no",this.employee.department.no);
				
				formData.append("employeePhoto",this.employeePhoto);
				formData.append("selectbehaves",this.selectbehaves);
				
				this.axiosUpload.post("/employee/modify",formData).then(result=>{
					alert(result.data.message);
					if(result.data.status=="OK"){
						this.$router.push("/employee/list");
					}
				});
			}
		}
	}
</script>

<style>
</style>
