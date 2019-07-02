import Vue from 'vue'
import Router from 'vue-router'
import AddProject from '@/components/AddProject.vue'
import AddTime from '@/components/AddTime.vue'
import TimeReport from '@/components/TimeReport.vue'

Vue.use(Router)

let router = new Router({
  routes: [{
    path: '/AddProject',
    name: 'AddProject',
    component: AddProject
  },
  {
    path: '/AddTime',
    name: 'AddTime',
    component: AddTime
  },
  {
    path: '/TimeReport',
    name: 'TimeReport',
    component: TimeReport
  }
  ]
})

export default router
