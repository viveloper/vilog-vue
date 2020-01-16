<template>
  <div id="app">
    <router-view v-on:signinSucess="onLogin"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  data() {
    return {
      
    }
  },
  methods: {
    onLogin(token) {
      localStorage.setItem('token', token);
      console.log('login success!');
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>
