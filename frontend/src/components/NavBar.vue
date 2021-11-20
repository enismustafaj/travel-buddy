<template>
  <nav class="navbar navbar-expand-md navbar-light bg-secondary px-2">
    <router-link class="navbar-brand" to="/">
      <span class="font-weight-bold">TravelBuddy</span>
    </router-link>
    <ul class="navbar-nav ml-5">
      <li class="nav-item" v-if="!this.$auth.isAuthenticated">
        <span class="nav-link" @click="signin()">Sign In</span>
      </li>
      <li class="nav-item" v-if="this.$auth.isAuthenticated">
        <span class="nav-link" @click="goToProfile()">Profile</span>
      </li>

      <li class="nav-item" v-if="this.$auth.isAuthenticated">
        <span @click="addNewPost()" class="nav-link">New Post</span>
      </li>
      <li class="nav-item" v-if="this.$auth.isAuthenticated">
        <span @click="logout()" class="nav-link">Log Out</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    signin() {
      this.$auth.loginWithRedirect();
    },
    goToProfile() {
      this.$router.push("/profile");
    },
    addNewPost() {
      this.$router.push("/newpost");
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style></style>
