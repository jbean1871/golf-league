<template>
<div class="container pt-5">
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Round {{this.$route.params.round}} Points</h3>
      <form @submit.prevent="onUpdateForm">
        <div class="form-group">
          <input
            type="number"
            class="form-control"
            max="18"
            min="0"
            ref="points"
            pattern="[0-9]*"
            v-model="team[round]"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { db } from "../main";

export default {
  data() {
    return {
      team: {},
      round: "",
      points: ""
    };
  },
  created() {
    let dbRef = db.collection("teams").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.team = doc.data();
        this.round = "week" + this.$route.params.round;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();

      db.collection("teams")
        .doc(this.$route.params.id)
        .update(this.team)
        .then(() => {
          console.log("Updates");
          this.$router.go(-1);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    currentScore(r) {
      return r;
    }
  },
};
</script>
