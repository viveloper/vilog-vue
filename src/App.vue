<template>
  <div id="app">
    <Layout v-if="withLayout" v-on:logout="onLogout" />
    <router-view v-on:loginSuccess="onLogin"></router-view>
  </div>
</template>

<script>
import Layout from './components/Layout.vue';

export default {
  name: 'app',
  components: {
    Layout
  },
  data() {
    return {
      
    }
  },
  computed: {
    withLayout() {
      return this.$route.path !== '/signin' && this.$route.path !== '/signup';
    }
  },
  methods: {
    onLogin(token) {
      localStorage.setItem('token', token);
      console.log('login success!');
      this.$router.push('/');
    },    
    onLogout() {
      localStorage.removeItem('token');
      this.$router.push('/signin');
      console.log('logout');
    }
  }
}
</script>

<style>

</style>
