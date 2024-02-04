<!-- src/views/Login.vue -->

<template>
  <div>
    <h2>Login</h2>
    <button @click="login">Login with Auth0</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login() {
      this.$auth0.loginWithRedirect(); // Use $auth0 to access the auth0 instance
    },
  },
};
</script>
