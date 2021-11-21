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
            <div class="row">
              <div class="column-md-6">
                <span @click="join(post._id)" class="btn">Join</span>
              </div>
              <div class="column-md-6">
                <span class="btn" @click="readMore(post._id)">Read More</span>
              </div>
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
    readMore(id) {
      this.$router.push(`/trip/${id}`);
    },
    join(id) {
      if (!this.$auth.isAuthenticated) {
        this.$router.push("/profile");
      } else {
        axios
          .get("http://localhost:4000/activity", {
            params: {
              userId: this.$auth.user.sub.split("|")[1],
              type: "join",
            },
          })
          .then((res) => {
            if (res.data.length == 0) {
              axios
                .post("http://localhost:4000/activity", {
                  userId: this.$auth.user.sub.split("|")[1],
                  activityId: id,
                  type: "join",
                })
                .then((response) => {
                  alert("Successfuly joined");
                  console.log(response);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          });
      }
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
