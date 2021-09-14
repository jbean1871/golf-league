<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="teamName" class="col-md-4 col-form-label text-md-right">Team Name</label>
                <div class="col-md-6">
                  <input
                    id="teamName"
                    type="text"
                    class="form-control"
                    name="teamName"
                    value
                    required
                    autofocus
                    v-model="form.teamName"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="memberOne" class="col-md-4 col-form-label text-md-right">Team Member Name</label>
                <div class="col-md-6">
                  <input
                    id="memberOne"
                    type="memberOne"
                    class="form-control"
                    name="memberOne"
                    value
                    required
                    autofocus
                    v-model="form.memberOne"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="memberTwo" class="col-md-4 col-form-label text-md-right">Team Member Name</label>
                <div class="col-md-6">
                  <input
                    id="memberTwo"
                    type="memberTwo"
                    class="form-control"
                    name="memberTwo"
                    value
                    required
                    autofocus
                    v-model="form.memberTwo"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    value="9"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";

export default {
  data() {
    return {
      form: {
        name: "",
        memberOne: "",
        memberTwo: "",
        email: "",
        password: "",
        week1: 0,
        week2: 0,
        week3: 0,
        week4: 0,
        week5: 0,
        week6: 0,
        week7: 0,
        week8: 0,
        week9: 0,
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.form.teamName,
            })
            this.$router.replace({ name: "scoreboard" });
        })
        .catch((err) => {
          this.error = err.message;
        });
        db.collection("teams")
          .add(this.form)
          .then(() => {
            alert("team successfully created!");
              this.form.teamName = "";
              this.form.memberOne = "";
              this.form.memberTwo = "";
              this.form.email = "";
              this.form.password = "";
              this.week = "";
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>
