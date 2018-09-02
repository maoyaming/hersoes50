//  程序入口

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
// 导入全局样式
// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';


// 导入路由组件
import HeroList from './views/heroes/List.vue';
import WeqList from './views/weqpons/List.vue';
import EqList from './views/equips/List.vue';


// Vue.use()注册VueRouter插件
Vue.use(VueRouter);
const router = new VueRouter({
    // 设置精确的激活类样式
    linkExactActiveClass: 'active',
    //routes 路由规则  --->配置路由规则要有组件
    routes: [{
        path: '/heroes',
        component: HeroList
    }, {
        path: '/weapons',
        component: WeqList
    }, {
        path: '/equips',
        component: EqList
    }]
})
new Vue({
    el: '#app',
    render: h => h(App),
    router
})