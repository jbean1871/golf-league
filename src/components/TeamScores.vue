<template>
<div class="container pt-5">
  <div class="row">
    <div class="col-md-12">
      <div class="spl_scores_header">
      <h2>{{ user.memberOne + " & " + user.memberTwo }}</h2>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Round</th>
            <th>Points</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="num in 14" :key="num.key">
            <td>{{num}}</td>
            <td>{{ week(num) }}</td>
            <td>
              <router-link  :to="{ name: 'updateRound', params: { id: $route.params.id, round: num } }" class="btn btn-primary" :class="disabled( num )">
                <font-awesome-icon :icon="['fa', 'edit']" />
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import { db } from "../main";

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    week: function (num) {
      let score = "week" + num;
      let weekScore = this.user[score];
      return weekScore;
    },
    disabled: function (num) {
      if (num < 4){
        return "disabled";
      }
        return "active";
    }
  },
  created() {
    let dbRef = db.collection("teams").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.user = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });

  }
};
</script>
<style scoped>

.spl_scores_header {
  display: flex;
  justify-content:space-between;
}
</style>