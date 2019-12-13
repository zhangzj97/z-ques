import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Q from '@/pages/q'
import T from '@/pages/t'
import D from '@/pages/demo'
import LayoutDemo from '@/pages/demo/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/q',
      name: 'Q',
      component: Q
    }, {
      path: '/t',
      name: 'T',
      component: T
    }, {
      path: '/d',
      name: 'demo',
      component: D,
      children: [
        {
          path: 'layout',
          name: 'layout',
          component: LayoutDemo
        }
      ]
    }
  ]
})
