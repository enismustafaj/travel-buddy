<template>
  <div>
    <div class="d-flex align-items-center flex-column mt-5">
      <input
        type="text"
        v-model="query"
        ref="val"
        class="form-control w-50"
        placeholder="Search by place"
      />
      <div v-for="(post, index) in posts" :key="index" class="w-50 mt-4">
        <div class="card mb-3 rounded shadow-sm">
          <div class="card-header">
            <p class="card-text">{{ post.userID }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <strong>Date: </strong>{{ new Date(post.time).toLocaleDateString() }}
            </li>
            <li class="list-group-item"><strong>Place: </strong>{{ post.place }}</li>
            <li class="list-group-item">
              <strong>Max. People: </strong>{{ post.maxlimit }}
            </li>
          </ul>
          <div class="card-body">
            <p class="card-text">{{ post.description }}</p>
            <hr />
            <a href="#" class="btn">Join</a>
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
      posts: [],
      query: "",
    };
  },
  created() {
    axios.get("http://localhost:4000").then((response) => {
      this.posts = response.data;
    });
  },

  methods: {
    search() {
      console.log(this.$refs.val.value);
      axios
        .get(`http://localhost:4000/trips/${this.$refs.val.value}`)
        .then((response) => {
          this.posts = response.data;
        });
    },
  },
  watch: {
    query() {
      if (this.query != "") {
        this.search();
      }
    },
  },
};
</script>
<style scoped></style>
