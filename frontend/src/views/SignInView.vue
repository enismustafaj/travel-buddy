<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6">
          <p>Logo</p>
        </div>
        <div class="col-md-4">
          <form>
            <div class="form-group">
              <label for="email">Email: </label>
              <input
                class="form-control"
                type="email"
                id="email"
                name="email"
                v-model="email"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Password: </label>
              <input
                class="form-control"
                type="password"
                id="password"
                name="password"
                v-model="password"
                required
              />
            </div>
            <div class="row justify-content-center">
              <button type="submit" class="btn btn-primary mt-2 w-25">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
