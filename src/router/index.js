import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/views/layout/index'),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home/Home'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/detail/:id',
          name: 'Detail',
          component: () => import('@/views/detail/Detail')
        },
        {
          path: '/doctor',
          name: 'Doctor',
          component: () => import('@/views/doctor/Doctor'),
          meta: {
            title: '医生'
          }
        },
        {
          path: '/mine',
          name: 'Mine',
          component: () => import('@/views/mine/Mine'),
          meta: {
            title: '我的'
          }
        },
        {
          path: '/city',
          name: 'City',
          component: () => import('@/views/city/City')
        },
        {
          path: '/mine',
          name: 'Mine',
          component: () => import('@/views/mine/Mine')
        },
        {
          path: '/order',
          name: 'Order',
          component: () => import('@/views/order/Order')
        },
        {
          path: '/map',
          name: 'Map',
          component: () => import('@/views/components/Map')
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
