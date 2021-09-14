<template>
  <div class="row pt-5 justify-content-center">
    <div class="col-md-8 spl_teams">
        <ul class="spl_team_list">
          <li v-for="team in teams" :key="team.key">
              <router-link  :to="{ name: 'teamScores', params: { id: team.key } }" class="btn btn-primary spl_btn">
                {{ team.memberOne }} &#38; {{ team.memberTwo }}
              </router-link>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      teams: [],
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  created() {
    db.collection("teams").onSnapshot((snapshotChange) => {
      this.teams = [];
      snapshotChange.forEach((doc) => {
        this.teams.push({
          key: doc.id,
          name: doc.data().teamName,
          memberOne: doc.data().memberOne,
          memberTwo: doc.data().memberTwo,
          week1: doc.data().week1,
          week2: doc.data().week2,
          week3: doc.data().week3,
          week4: doc.data().week4,
        });
      });
    });
  },
};
</script>

<style>
.spl_teams{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.spl_team_list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.spl_btn{
  display: flex;
  justify-content: center;
  padding: 15px 30px;
  margin: 10px;

}
</style>
