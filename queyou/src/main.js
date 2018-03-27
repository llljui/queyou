// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
/*这里是公共组件-------------*/
/*import './assets/ueditor/ueditor.config.js'
import './assets/ueditor/ueditor.all.min.js'
import './assets/ueditor/lang/zh-cn/zh-cn.js'
import './assets/ueditor/ueditor.parse.min.js' */
/*------------------------*/
import 'element-ui/lib/theme-default/index.css'
import './style.less'
Vue.config.productionTip = false //设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示
//Vue.use(VueQuillEditor)
Vue.use(ElementUI)
/*-----------------------*/
sessionStorage.weburl='http://monkey.queyoujia.com/';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  template: '<App/>',
  components: { App },
})
