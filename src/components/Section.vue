<template>
  <main class="section" role="main">
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="text-capitalize">{{ $route.params.section }}</h1>
        <p class="lead text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          minima maxime laboriosam deserunt doloribus consequatur, tempore
          magnam hic accusantium molestiae praesentium laborum illum quidem
          consequuntur accusamus explicabo exercitationem, enim corporis?
        </p>
        <p>
          <!-- <a href="#" class="btn btn-primary my-2">Main call to action</a>
          <a href="#" class="btn btn-secondary my-2">Secondary action</a> -->
          <router-link
            class="write-btn btn btn-primary my-2 btn-lg"
            v-bind:to="`${this.$route.path}/write`"
          >
            Write
          </router-link>
        </p>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="post in posts" v-bind:key="post.postId">
            <div class="card mb-4 shadow-sm">
              <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                <image
                  v-bind:xlink:href="post.image"
                  x="0"
                  y="0"
                  height="100%"
                  width="100%"
                />
              </svg>
              <div class="card-body">
                <p class="card-text">
                  {{ post.title }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <router-link
                      class="btn btn-sm btn-outline-secondary"
                      v-bind:to="`/section/${post.section}/post/${post.postId}`"
                    >
                      View
                    </router-link>
                    <router-link class="btn btn-sm btn-outline-secondary" to="">
                      Edit
                    </router-link>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
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
  methods: {}
};
</script>

<style>
.section .jumbotron {
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 0;
  background-color: #fff;
}

.section .album .bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.section .jumbotron p:last-child {
  margin-bottom: 0;
}

.section .jumbotron h1 {
  font-weight: 300;
}

.section .jumbotron .container {
  max-width: 40rem;
}

.section .write-btn {
  width: 45%;
}
</style>
