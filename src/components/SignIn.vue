<template>
  <div class="signin">
    <div class="form-body text-center">
      <form class="form-signin" v-on:submit.prevent="handleSubmit">
        <img
          class="mb-4"
          src="/docs/4.4/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          v-model="email"
          required
          autofocus
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          v-model="password"
          required
        />
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { SERVER_API_URL } from '../constants';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      this.signin();
    },
    signin() {
      const signinData = {
        email: this.email,
        password: this.password
      };
      axios
        .post(`${SERVER_API_URL}/login`, signinData)
        .then(res => {
          const token = res.data.token;
          const rPath = this.$route.query.rPath;
          this.$emit('loginSuccess', { token, rPath });
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  }
};
</script>

<style>
.signin .form-body {
  height: 100vh;
}

.signin .form-body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.signin .form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.signin .form-signin .checkbox {
  font-weight: 400;
}
.signin .form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.signin .form-signin .form-control:focus {
  z-index: 2;
}
.signin .form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.signin .form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
