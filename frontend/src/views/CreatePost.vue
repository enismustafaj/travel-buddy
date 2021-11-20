<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-12 w-50">
          <div class="card">
            <div class="card-body">
              <form action="">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="Title"
                  />
                </div>
                <div class="form-group">
                  <label for="body">Date: </label>
                  <input type="date" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="body">Place: </label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="body">Number of people: </label>
                  <input type="number" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea
                    name="description"
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
export default {
  methodsds: {
    createPost() {
      const post = {
        title: this.$refs.title.value,
        place: this.$refs.place.value,
        date: this.$refs.date.value,
        numPeople: this.$refs.numPeople.value,
        description: this.$refs.description.value,
      };
      this.$http.post("/api/posts", post).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
