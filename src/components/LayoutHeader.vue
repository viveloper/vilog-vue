<template>
  <div class="container">
    <header class="blog-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <router-link class="text-muted" to="/">LOGO</router-link>
        </div>
        <div class="col-4 text-center">
          <router-link class="blog-header-logo text-dark" to="/"
            >MY BLOG</router-link
          >
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <router-link class="text-muted" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mx-3"
            >
              <circle cx="10.5" cy="10.5" r="7.5"></circle>
              <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
            </svg>
          </router-link>
          <button class="btn btn-sm btn-outline-secondary" v-on:click="logout">
            Logout
          </button>
        </div>
      </div>
    </header>

    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <router-link
          class="p-2 text-muted text-capitalize"
          v-for="section in sections"
          v-bind:key="section.index"
          v-bind:to="`/section/${section.name}`"
          >{{ section.name }}</router-link
        >
      </nav>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { SERVER_API_URL } from '../constants';

export default {
  name: 'Layout',
  created() {
    axios
      .get(`${SERVER_API_URL}/sections`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(res => {
        this.sections = res.data.sections;
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    return {
      sections: []
    };
  },
  methods: {
    logout() {
      this.$emit('logout');
    }
  }
};
</script>

<style>
.blog-header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
}

.blog-header-logo {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-size: 2.25rem;
}

.blog-header-logo:hover {
  text-decoration: none;
}
</style>
