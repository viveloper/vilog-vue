<template>
  <div id="app">
    <LayoutHeader v-if="withLayout" v-on:logout="onLogout" />
    <router-view v-on:loginSuccess="onLogin"></router-view>
    <LayoutFooter v-if="withLayout" />
  </div>
</template>

<script>
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';

export default {
  name: 'app',
  components: {
    LayoutHeader,
    LayoutFooter
  },
  data() {
    return {};
  },
  computed: {
    withLayout() {
      return this.$route.path !== '/signin' && this.$route.path !== '/signup';
    }
  },
  methods: {
    onLogin({ token, rPath }) {
      localStorage.setItem('token', token);
      console.log('login success!');
      this.$router.push(rPath);
    },
    onLogout() {
      localStorage.removeItem('token');
      this.$router.push('/signin');
      console.log('logout');
    }
  }
};
</script>

<style></style>
