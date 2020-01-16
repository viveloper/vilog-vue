<template>
  <div>
    <header>
      <span>MY BLOG</span>
      <span><button v-on:click="logout">Logout</button></span>
    </header>
    <nav>
      <ul>
        <li v-for="section in sections" v-bind:key="section.index">
          <router-link v-bind:to="`/sections/${section.name}`">{{section.name}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import axios from 'axios';
  import {SERVER_API_URL} from '../constants'

  export default {
    created() {
      axios.get(`${SERVER_API_URL}/sections`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => {
        this.sections = res.data.sections;
      }).catch(err => {
        console.log(err);
      })
    },
    data() {
      return {
        sections: []
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('token');
        this.$router.push('/signin');
        console.log('logout');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>