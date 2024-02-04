<template>
  <header>
    <nav>
      <div class="nav-logo">Your App Name</div>
      <div class="nav-links">
        <template v-if="!isAuthenticated">
          <button @click="login">Log In</button>
        </template>
        <template v-else>
          <button @click="logout">Log Out</button>
        </template>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$auth0.isAuthenticated;
    },
  },
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    },
    logout() {
      this.$auth0.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style scoped>
/* Your header styling here */
</style>
