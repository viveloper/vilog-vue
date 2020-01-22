import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import SignIn from '../components/SignIn.vue';
import Section from '../components/Section.vue';
import NotFound from '../components/NotFound.vue';
import Post from '../components/Post.vue';
import MarkdownEditor from '../components/MarkdownEditor.vue';

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  const isAuth = !!localStorage.getItem('token');
  const loginPath = `/signin?rPath=${encodeURIComponent(to.path)}`;
  isAuth ? next() : next(loginPath);
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home, beforeEnter: requireAuth },
    { path: '/section/:section', component: Section, beforeEnter: requireAuth },
    {
      path: '/section/:section/post/:id',
      component: Post,
      beforeEnter: requireAuth
    },
    { path: '/section/:section/write', component: MarkdownEditor },
    { path: '/signin', component: SignIn },
    { path: '*', component: NotFound }
  ]
});

export default router;
