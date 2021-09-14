<template>
<div class="container-fluid spl-homepage-bkg">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 spl_home">
        <router-link  to="/scoreboard" class="btn btn-primary spl_button">
          Leaderboard
        </router-link>
        <router-link  to="/teams" class="btn btn-primary spl_button">
          Upload Points
        </router-link>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>
<style>
.spl-homepage-bkg {
    background: url(https://firebasestorage.googleapis.com/v0/b/golf-f56a7.appspot.com/o/background.jpg?alt=media&token=6c40c5e5-098c-450a-8acc-57d61b4bc105);
    height: 520px;
    padding-top: 50px;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
}
.spl_home{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.spl_button{
  padding: 15px 30px;
  margin: 10px;
}
</style>