<template>
  <div>
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email: </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password: </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="button" @click="signIn()" class="btn btn-primary mt-4">
            Submit
          </button>
          <p>{{ this.$auth.user }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    signIn() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>

<style></style>
