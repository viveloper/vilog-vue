import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import SignIn from "../components/SignIn.vue"
import Section from '../components/Section.vue'
import NotFound from '../components/NotFound.vue'
import Post from '../components/Post.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn },    
    { path: '/sections/:section', component: Section },
    { path: '/sections/:section/posts/:id', component: Post },
    { path: '*', component: NotFound }
  ]
})

export default router