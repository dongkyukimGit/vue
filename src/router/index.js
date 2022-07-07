import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import Breakpoint from '@/views/Breakpoint'
import defaultlayout from '@/layouts/default/index'
import pagelayout from '@/layouts/page/index'
Vue.use(VueRouter)
const routes=[
  {
    path:"/",
    component:defaultlayout,
    children:[
      { path:'/',
        name:'Dashboard',
        component:Dashboard
      },{
        path:'/grid-system',
        name:'GridSystem',
        component:GridSystem
      }
    ]
  },{
    path:"/",
    component:pagelayout,
    children:[
     {
        path:'/Breakpoint',
        name:'Breakpoint',
        component:Breakpoint
      }
    ]
  },
  ]
const router=new VueRouter({
    mode:'history'
    ,routes
})
export default router

