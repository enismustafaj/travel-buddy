<template>
  <div>
    <div class="d-flex justify-content-center align-items-center flex-column mt-5">
      <div v-for="(post, index) in posts" :key="index" class="w-25">
        <div class="card mb-3 rounded shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ post.user }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    </div>
    <FloatingButton />
  </div>
</template>

<script>
import axios from "axios";
import FloatingButton from "../components/FloatingButton.vue";

export default {
  components: {
    FloatingButton,
  },
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
    axios.get("/api/posts").then((response) => {
      this.posts = response.data;
    });
  },
};
</script>
<style scoped></style>
