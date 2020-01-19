<template>
  <footer class="blog-footer">
    <p>
      Blog template built for
      <router-link to="https://getbootstrap.com/">Bootstrap</router-link> by
      <router-link to="https://twitter.com/mdo">@mdo</router-link>.
    </p>
    <p>
      <router-link to="#">Back to top</router-link>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'LayoutFooter'
};
</script>

<style>
.blog-footer {
  padding: 2.5rem 0;
  color: #999;
  text-align: center;
  background-color: #f9f9f9;
  border-top: 0.05rem solid #e5e5e5;
}
.blog-footer p:last-child {
  margin-bottom: 0;
}
</style>
