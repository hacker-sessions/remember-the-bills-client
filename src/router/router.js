import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Reminders from '@/views/Reminders.vue'
import ReminderForm from '@/components/reminders/ReminderForm.vue'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: AuthGuard,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/reminders',
      name: 'reminders',
      component: Reminders,
      beforeEnter: AuthGuard,
    },
    {
      path: '/reminders/new',
      name: 'newreminder',
      component: ReminderForm,
      beforeEnter: AuthGuard,
    },
  ],
  mode: 'history'
})
