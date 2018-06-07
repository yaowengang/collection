import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const login = r => require.ensure([], () => r(require('@/components/login/login.vue')), 'group-login')
const useragreement = r => require.ensure([], () => r(require('@/components/login/useragreement.vue')), 'group-login')
const index = r => require.ensure([], () => r(require('@/components/Index.vue')), 'group-index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/useragreement',
      name:"useragreement",
      component:useragreement
    },
    {
      path:'/',
      name:'index',
      component:index
    }
]
})
