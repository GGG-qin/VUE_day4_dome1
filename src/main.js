import Vue from 'vue'
import App from './App.vue'
//导入需要注册的全局组件
import Count from '@/components/Count.vue'
//参数1：字符串格式，表示组件的“注册名字”
//参数2：需要被注册的那个组件
Vue.component('MyCount',Count)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

