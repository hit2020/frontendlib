import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	loginuser:null,
	visitCount:0
  },
  
  getters:{
	loginuser(state){//取得store中数据的get方法，名称是固定的
		return state.loginuser;
	},
	visitcount(state){
		return state.visitCount;
	}
  },
  mutations: {
	setLoginUser(state,user){
		state.loginuser=user;
	},
	logoutUser(state){
		state.loginuser=null;
	}
  },
  actions: {
	loginUser(state,user){
		state.commit("setLoginUser",user);
	},
	logout(state){
		state.commit("logoutUser");
	}
  },
  modules: {
  }
})
