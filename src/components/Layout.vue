<template>
  <div class="container">
    <header class="blog-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-4 pt-1">
          <a class="text-muted" href="#">Subscribe</a>
        </div>
        <div class="col-4 text-center">
          <router-link
            class="blog-header-logo text-dark"
            to="/"
            v-on:click.native="activeSection(-1)"
            >MY BLOG</router-link
          >
        </div>
        <div class="col-4 d-flex justify-content-end align-items-center">
          <a class="text-muted" href="#">
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
          </a>
          <button class="btn btn-sm btn-outline-secondary" v-on:click="logout">
            Logout
          </button>
        </div>
      </div>
    </header>

    <div class="nav-scroller py-1 mb-2">
      <nav class="nav d-flex justify-content-between">
        <router-link
          class="p-2 text-muted"
          v-for="section in sections"
          v-bind:key="section.index"
          v-bind:to="`/sections/${section.name}`"
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

<style lang="scss" scoped></style>
