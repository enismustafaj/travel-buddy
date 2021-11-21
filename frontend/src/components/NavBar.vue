<template>
  <nav
    class="navbar navbar-expand-md navbar-light"
    style="background-color: #50afdc"
  >
    <router-link class="navbar-brand" to="/">
      <span class="font-weight-bold" style="padding-left: 2rem"
        >TravelBuddy</span
      >
    </router-link>
    <ul class="navbar-nav ml-5">
      <li class="nav-item" v-if="!this.$auth.isAuthenticated">
        <span class="nav-link" @click="signin()" style="cursor: pointer"
          >Sign In</span
        >
      </li>
      <li class="nav-item" v-if="this.$auth.isAuthenticated">
        <span class="nav-link" @click="goToProfile()" style="cursor: pointer"
          >Profile</span
        >
      </li>

      <li class="nav-item" v-if="this.$auth.isAuthenticated">
        <span @click="addNewPost()" class="nav-link" style="cursor: pointer"
          >New Post</span
        >
      </li>
      <li class="nav-item" v-if="this.$auth.isAuthenticated">
        <span @click="logout()" class="nav-link" style="cursor: pointer"
          >Log Out</span
        >
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
