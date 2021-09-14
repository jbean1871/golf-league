<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Update User</h3>
      <form @submit.prevent="onUpdateForm">
        <div class="form-group">
          <label>Team Member</label>
          <input
            type="text"
            class="form-control"
            v-model="team.memberOne"
            required
          />
        </div>
        <div class="form-group">
          <label>Team Member</label>
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
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Add User</button>
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
  created() {
    let dbRef = db.collection("teams").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.team = doc.data();
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
          console.log("User successfully updated!");
          this.$router.push("/scoreboard");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
