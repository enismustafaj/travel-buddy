<template>
  <div>
    <div class="d-flex align-items-center flex-column mt-5">
      <input type="text" class="form-control w-50" placeholder="Search by place" />
      <div v-for="(post, index) in posts" :key="index" class="w-50 mt-4">
        <div class="card mb-3 rounded shadow-sm">
          <div class="card-body">
            <p class="card-title">{{ post.username }}</p>
            <p class="card-text">{{ post.description }}</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      posts: [
        {
          user: "user",
          body: "body",
        },
        {
          user: "user",
          body: "body",
        },
        {
          user: "user",
          body: "body",
        },
        {
          user: "user",
          body: "body",
        },
      ],
    };
  },
  created() {
    axios.get("http://localhost:4000").then((response) => {
      console.log(response);
      this.posts = response.data;
    });
  },
};
</script>
<style scoped></style>
