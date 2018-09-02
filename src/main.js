//  程序入口

import Vue from 'vue';
import App from './App.vue';

//导入路由模块
import router from './routers';

// 导入全局样式
// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
// import Axios from 'axios';


// 设置基地址
// // 给vue的原型添加axios成员
// Axios.defaults.baseURL = 'http://localhost:3000/';
// Vue.prototype.$http = Axios


/// 导入插件
import MyHttp from './plugins/MyHttp';

// 注册插件
// 调用插件对象  MyHttp.install的方法
Vue.use(MyHttp)
new Vue({
    el: '#app',
    render: h => h(App),
    router
})