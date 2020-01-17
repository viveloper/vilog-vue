<template>
  <div>    
    <h2>Section Page</h2>
    <h3>{{$route.params.section}}</h3>
    <router-link to="">Write</router-link>
    <div>
      <table>
        <tr>
          <th>No.</th>
          <th>title</th>
          <th>author</th>
          <th>createdAt</th>
        </tr>
        <tr v-for="(post, index) in posts" v-bind:key="post.postId">
          <td>{{index}}</td>
          <td><router-link v-bind:to="`/sections/${post.section}/posts/${post.postId}`">{{post.title}}</router-link></td>
          <td>{{post.author}}</td>
          <td>{{post.createdAt}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {SERVER_API_URL} from '../constants'  

  export default {
    name: 'Section',
    components: {
      
    },
    created() {
      console.log('Section created');      
      axios.get(`${SERVER_API_URL}/${this.$route.params.section}/posts`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => {        
        this.posts = res.data.posts;
      }).catch(err => {
        console.log(err);
      })
    },
    watch: {
      '$route' () {
        axios.get(`${SERVER_API_URL}/${this.$route.params.section}/posts`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }).then(res => {        
          this.posts = res.data.posts;
        }).catch(err => {
          console.log(err);
        })
      }
    },
    data() {
      return {
        posts: []
      }
    }
  }
</script>

<style>

</style>