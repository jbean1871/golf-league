<template>
<div class="container pt-5">
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Team Members</th>
            <th class="spl-center">Week</th>
            <th @click="sortBy('total')" class="spl-center">Total Points</th>
            <!-- <th>Edit</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in sortedItems" :key="team.key">
            <td>
                {{ team.memberOne }} &#38; {{ team.memberTwo }}
            </td>
            <td class="spl-center">
              {{ week(team) }}
            </td>
            <td class="spl-center">{{ team.total }}</td>
            <!-- <td>
              <router-link  :to="{ name: 'editTeam', params: { id: team.key } }" class="btn btn-secondary spl_btn">Edit Team Info</router-link>
              <router-link  :to="{ name: 'teamScores', params: { id: team.key } }" class="btn btn-primary spl_btn">
                <font-awesome-icon :icon="['fa', 'edit']" />
              </router-link>
            </td> -->
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
      sort: {
        key: 'total',
        isAsc: false
      },
      teams: [],
    };
  },
  computed: {
    sortedItems () {
      const list = this.teams.slice();
        list.sort((a, b) => {
          a = a[this.sort.key]
          b = b[this.sort.key]

          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1)
        });

      return list;
    }
  },
  methods: {
    sortBy (key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
    week: function (team){
      if(parseInt(team.week1) === 0){
        return "0"
      }
      if(parseInt(team.week2) === 0){
        return "1"
      }
      if(parseInt(team.week3) === 0){
        return "2"
      }
      if(parseInt(team.week4) === 0){
        return "3"
      }
      if(parseInt(team.week5) === 0){
        return "4"
      }
      if(parseInt(team.week6) === 0){
        return "5"
      }
      if(parseInt(team.week7) === 0){
        return "6"
      }
      if(parseInt(team.week8) === 0){
        return "7"
      }
      if(parseInt(team.week9) === 0){
        return "8"
      }
      if(parseInt(team.week10) === 0){
        return "9"
      }
      if(parseInt(team.week11) === 0){
        return "10"
      }
      if(parseInt(team.week12) === 0){
        return "11"
      }
      if(parseInt(team.week13) === 0){
        return "12"
      }
      if(parseInt(team.week14) === 0){
        return "13"
      }
    }
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
          week5: doc.data().week5,
          week6: doc.data().week6,
          week7: doc.data().week7,
          week8: doc.data().week8,
          week9: doc.data().week9,
          week10: doc.data().week10,
          week11: doc.data().week11,
          week12: doc.data().week12,
          week13: doc.data().week13,
          week14: doc.data().week14,
          total: parseInt(doc.data().week1) + parseInt(doc.data().week2) + parseInt(doc.data().week3) + parseInt(doc.data().week4) + parseInt(doc.data().week5)  + parseInt(doc.data().week6)  + parseInt(doc.data().week7)  + parseInt(doc.data().week8) + parseInt(doc.data().week9) + parseInt(doc.data().week10) + parseInt(doc.data().week11) + parseInt(doc.data().week12) + parseInt(doc.data().week13) + parseInt(doc.data().week14)
        });
      });
    });
  },
};
</script>

<style>
.spl-center{
  text-align: center;
}
.btn-primary {
  margin-right: 12px;
}
.spl_btn{
  margin-left: 10px;
  margin-right: 10px;
}
</style>
