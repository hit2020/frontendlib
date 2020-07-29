import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

const axiosJSON=axios.create({
  baseURL: 'http://localhost:8100/',
  timeout: 2000,
});
const axiosUpload=axios.create({
  baseURL: 'http://localhost:8100/',
  timeout: 3000,
  headers: {"Content-Type":"multipart/form-data"}
});

//把axios对象注册到vue对象上,挂载到vue原型上
Vue.prototype.axiosJSON=axiosJSON;
Vue.prototype.axiosUpload=axiosUpload;

Vue.config.productionTip = false

new Vue({
  router:router,
  store:store,
  render: h => h(App)
}).$mount('#app')
