<template>
  <div class="container">
    <div>
      <h1>{{ post.title }}</h1>
      <h4>
        {{
          `${new Date(post.createdAt).getUTCFullYear()}/${new Date(
            post.createdAt
          ).getUTCMonth() + 1}/${new Date(post.createdAt).getUTCDate()} by ${
            post.author
          }`
        }}
      </h4>
      <div>
        <MarkdownViewer v-bind:input="post.content" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { SERVER_API_URL } from '../constants';
import MarkdownViewer from './MarkdownViewer.vue';

export default {
  name: 'Post',
  components: {
    MarkdownViewer
  },
  data() {
    return {
      post: {}
    };
  },
  created() {
    axios
      .get(`${SERVER_API_URL}/posts/${this.$route.params.id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res => {
        this.post = res.data.post;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style></style>
