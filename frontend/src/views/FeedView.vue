<template>
  <div>
    <div id="background-wrap">
      <div class="bubble x1"></div>
      <div class="bubble x2"></div>
      <div class="bubble x3"></div>
      <div class="bubble x4"></div>
      <div class="bubble x5"></div>
      <div class="bubble x6"></div>
      <div class="bubble x7"></div>
      <div class="bubble x8"></div>
      <div class="bubble x9"></div>
      <div class="bubble x10"></div>
    </div>

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
            <div
              class="card-header"
              style="background-color: #f46b45; color: white"
            >
              <p class="card-text">{{ post.userID }}</p>
            </div>
            <div class="wrapper">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <strong>Date: </strong
                  >{{ new Date(post.time).toLocaleDateString() }}
                </li>
                <li class="list-group-item">
                  <strong>Place: </strong>{{ post.place }}
                </li>
                <li class="list-group-item">
                  <strong>Max. People: </strong>{{ post.maxlimit }}
                </li>
              </ul>
              <div class="card-body">
                <p class="card-text">{{ post.description }}</p>
                <hr />
                <a
                  href="#"
                  id="button"
                  class="btn btn-primary mt-4"
                  style="
                    background-color: #50afdc;
                    border: none;
                    margin-right: 2rem;
                  "
                  >Join</a
                >
                <a
                  href="#"
                  id="button"
                  class="btn btn-primary mt-4"
                  style="background-color: #50afdc; border: none"
                  >Read More</a
                >
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
<style scoped>
#button:hover {
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);
}

body {
  /* 	background: #00b4ff; */
  color: #333;
  font: 100% Lato, Arial, Sans Serif;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#background-wrap {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
}

/* KEYFRAMES */

@-webkit-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@-moz-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@-webkit-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@-moz-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

/* ANIMATIONS */

.x1 {
  -webkit-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: -5%;
  top: 5%;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
}

.x2 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 5%;
  top: 80%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x3 {
  -webkit-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 10%;
  top: 40%;

  -webkit-transform: scale(0.7);
  -moz-transform: scale(0.7);
  transform: scale(0.7);
}

.x4 {
  -webkit-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 20%;
  top: 0;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x5 {
  -webkit-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 30%;
  top: 50%;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
}

.x6 {
  -webkit-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 50%;
  top: 0;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
}

.x7 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 65%;
  top: 70%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x8 {
  -webkit-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 80%;
  top: 10%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x9 {
  -webkit-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 90%;
  top: 50%;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
}

.x10 {
  -webkit-animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 80%;
  top: 80%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

/* OBJECTS */

.bubble {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;

  -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(80, 175, 220, 1);
  -moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(80, 175, 220, 1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(80, 175, 220, 1);

  height: 200px;
  position: absolute;
  width: 200px;
}

.bubble:after {
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(255, 255, 255, 0.5)),
    color-stop(70%, rgba(255, 255, 255, 0))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;

  -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
  -moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);

  content: "";
  height: 180px;
  left: 10px;
  position: absolute;
  width: 180px;
}
</style>
