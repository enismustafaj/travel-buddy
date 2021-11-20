<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-12 w-50">
          <div class="card">
            <div class="card-body">
              <form action="">
                <div class="form-group">
                  <label for="body">Date: </label>
                  <input
                    type="datetime-local"
                    ref="time"
                    id="time"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="body">Place: </label>
                  <input type="text" ref="place" id="place" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="body">Number of people: </label>
                  <input
                    type="number"
                    ref="maxlimit"
                    id="maxlimit"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea
                    name="description"
                    ref="description"
                    id="description"
                    cols="30"
                    rows="10"
                    class="form-control"
                  ></textarea>
                </div>
                <div class="form-group"></div>
                <button type="button" @click="createPost()" class="btn btn-primary mt-4">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    createPost() {
      const post = {
        username: this.$auth.user.nickname,
        place: this.$refs.place.value,
        time: this.$refs.time.value,
        maxlimit: this.$refs.maxlimit.value,
        description: this.$refs.description.value,
      };
      // console.log(post);
      axios
        .post("http://localhost:4000/trips", post)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
