//  将路由分离出来  




// 导入路由组件
import VueRouter from 'vue-router';
import Vue from 'vue';


import HeroList from '../views/heroes/List.vue';
import WeqList from '../views/weqpons/List.vue';
import EqList from '../views/equips/List.vue';
import HeroAdd from '../views/heroes/Add.vue';
import HeroEdit from '../views/heroes/Edit.vue';


// Vue.use()注册VueRouter插件
Vue.use(VueRouter);
const router = new VueRouter({
    // 设置精确的激活类样式
    // linkExactActiveClass: 'active',

    linkActiveClass: 'active',

    //routes 路由规则  --->配置路由规则要有组件
    routes: [{
        path: '/',
        redirect: '/heroes'
    }, {
        path: '/heroes',
        component: HeroList
    }, {
        path: '/weapons',
        component: WeqList
    }, {
        path: '/equips',
        component: EqList
    }, {
        path: '/heroes/add',
        component: HeroAdd
    }, {
        path: '/heroes/edit/:id',
        component: HeroEdit,
        props: true
    }]
});

//导出对象
export default router;