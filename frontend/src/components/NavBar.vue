<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <router-link class="navbar-brand" to="/"> TravelBuddy </router-link>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" v-if="!this.$auth.isAuthenticated">
        <span class="nav-link">Sign In</span>
      </li>
      <li class="nav-item" v-if="this.$auth.isAuthenticated">
        <span class="nav-link">Profile</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
