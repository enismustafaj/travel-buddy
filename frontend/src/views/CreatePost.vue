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
                <button
                  type="button"
                  @click="createPost()"
                  class="btn btn-primary mt-4"
                  style="background-color: #f46b45; border: none"
                >
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
      console.log(post);
      axios
        .post("http://travelbuddiess.herokuapp.com/trips", post)
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

<style scoped>
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
  animation: animateBubble 25s linear infinite, sideWays 2s ease-in-out infinite alternate;

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
  animation: animateBubble 20s linear infinite, sideWays 4s ease-in-out infinite alternate;

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
  animation: animateBubble 28s linear infinite, sideWays 2s ease-in-out infinite alternate;

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
  animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;

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
  animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;

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
  animation: animateBubble 21s linear infinite, sideWays 2s ease-in-out infinite alternate;

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
  animation: animateBubble 20s linear infinite, sideWays 2s ease-in-out infinite alternate;

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
  animation: animateBubble 22s linear infinite, sideWays 3s ease-in-out infinite alternate;

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
  animation: animateBubble 29s linear infinite, sideWays 4s ease-in-out infinite alternate;

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
  animation: animateBubble 26s linear infinite, sideWays 2s ease-in-out infinite alternate;

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
