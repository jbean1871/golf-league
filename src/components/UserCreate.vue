<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Add team</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Member 1</label>
          <input
            type="text"
            class="form-control"
            v-model="team.memberOne"
            required
          />
        </div>

        <div class="form-group">
          <label>Member 2</label>
          <input
            type="text"
            class="form-control"
            v-model="team.memberTwo"
            required
          />
        </div>
        <div class="form-group">
          <label>Team Name</label>
          <input
            type="text"
            class="form-control"
            v-model="team.teamName"
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Add team</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../main";

export default {
  data() {
    return {
      team: {},
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("teams")
        .add(this.team)
        .then(() => {
          alert("team successfully created!");
          this.team.memberOne = "";
          this.team.memberTeo = "";
          this.team.teamName = "";
          this.team.week1 = 0;
          this.team.week2 = 0;
          this.team.week3 = 0;
          this.team.week4 = 0;
          this.team.week5 = 0;
          this.team.week6 = 0;
          this.team.week7 = 0;
          this.team.week8 = 0;
          this.team.week9 = 0
          this.team.week10 = 0;
          this.team.week11 = 0;
          this.team.week12 = 0;
          this.team.week13 = 0;
          this.team.week14 = 0;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
