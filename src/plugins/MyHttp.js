/// 封装独立的插件


import Axios from "axios";

const MyHttp = {

};

// 设置基地址
// 给vue的原型添加axios成员
MyHttp.install = function(Vue) {
    Axios.defaults.baseURL = 'http://localhost:3000/';
    Vue.prototype.$http = Axios;
};

// 导出插件对象
export default MyHttp;