<template>
  <div>
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4 text-capitalize">{{ $route.params.section }}</h1>
        <p class="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, dicta
          aut. Sit aliquid tenetur id vero neque at, similique nesciunt
          voluptatem voluptates architecto temporibus cum. Laborum laudantium et
          incidunt id.
        </p>
        <button
          type="button"
          class="btn btn-primary btn-lg btn-block"
          v-on:click="moveToWrite"
        >
          Write
        </button>
      </div>
    </div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">author</th>
            <th scope="col">createdAt</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" v-bind:key="post.postId">
            <th scope="row">{{ index }}</th>
            <td>
              <router-link
                v-bind:to="`/sections/${post.section}/posts/${post.postId}`"
                >{{ post.title }}</router-link
              >
            </td>
            <td>{{ post.author }}</td>
            <td>{{ post.createdAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { SERVER_API_URL } from '../constants';

export default {
  name: 'Section',
  components: {},
  created() {
    console.log('Section created');
    axios
      .get(`${SERVER_API_URL}/${this.$route.params.section}/posts`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res => {
        this.posts = res.data.posts;
      })
      .catch(err => {
        console.log(err);
      });
  },
  watch: {
    $route() {
      axios
        .get(`${SERVER_API_URL}/${this.$route.params.section}/posts`, {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        })
        .then(res => {
          this.posts = res.data.posts;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    moveToWrite() {
      this.$router.push('');
    }
  }
};
</script>

<style></style>
