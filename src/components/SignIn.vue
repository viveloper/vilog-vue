<template>
  <div>
    <h2>SignIn Page</h2>
    <form v-on:submit.prevent="handleSubmit">
      <div>
        <input type="text" name="email" placeholder="Enter email" v-model="email">
      </div>
      <div>
        <input type="password" name="password" placeholder="Enter password" v-model="password">
      </div>
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  import {SERVER_API_URL} from '../constants'

  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      handleSubmit() {
        this.signin()
      },
      signin() {
        const signinData = {
          email: this.email,
          password: this.password
        }
        axios.post(`${SERVER_API_URL}/login`, signinData).then(res => {
          this.$emit('signinSucess', res.data.token);
        }).catch(err => {
          console.log(err.response.data)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>