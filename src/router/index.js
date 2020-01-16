import VueRouter from 'vue-router';
import Home from '../components/Home.vue'
import SignIn from "../components/SignIn.vue"
import NotFound from '../components/NotFound.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn },
    { path: '*', component: NotFound }
  ]
})

export default router