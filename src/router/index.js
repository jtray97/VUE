import Vue from 'vue'
import Router from 'vue-router'
import bot from '@/components/bot'
import App from '../../src/App'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: App
    }
  ]
})
