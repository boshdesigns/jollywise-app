import Vue from 'vue'
import VueRouter from 'vue-router'
import Questions from '@/components/Questions.vue'
import Results from '@/components/Results.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    }
  ]
})
