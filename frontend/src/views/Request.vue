<template>
  <div>
    <button type="button" class="btn btn-primary" id="btn">DONE</button>
    <div class="event">
      <div class="row">
        <div class="col-6">Description</div>
        <div class="col-6">Family holiday!</div>
      </div>
      <div class="row">
        <div class="col-6">Number of people</div>
        <div class="col-6">13</div>
      </div>
      <div class="row">
        <div class="col-6">DATE</div>
        <div class="col-6">27.08.2021</div>
      </div>
    </div>
    <div v-if="isAuthor">
      <div class="attend">
        <h1>People attending</h1>
      </div>
      <div class="table container">
        <table class="table table-striped" id="td">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Bio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>I love sushi</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Jahnvi kappor is good</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>I like to sleep</td>
            </tr>
            {{}}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      isAuthor: false,
    };
  },

  mounted() {
    axios
      .get("http://localhost:4000/activity", {
        params: {
          activityId: this.$auth.user,
          type: "create",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.length > 0) {
          this.isAuthor = true;
        } else {
          this.isAuthor = false;
        }
      });
  },
};
</script>
<style scoped>
#btn {
  margin-left: 1000px;
  margin-top: 20px;
}
.row {
  margin-right: 200px;
}
.event {
  margin-top: 80px;
  background-color: #dfe6f2;
  margin-right: 100px;
  margin-left: 90px;
  padding: 25px;
}
.h1 {
  font-family: "Lobster", cursive;
}
.attend {
  margin-top: 40px;
}
#td {
  margin-left: auto !important;
  margin-right: auto !important;
}
.event:hover {
  background-color: #d0d9d9;
}
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script&family=Lobster&family=Yanone+Kaffeesatz:wght@200&display=swap");
</style>
