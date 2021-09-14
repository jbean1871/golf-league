<template>
  <div>
    <nav
      class="navbar navbar-dark justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <router-link id="spl_logo" to="/" class="navbar-brand float-left">
          <img src="https://firebasestorage.googleapis.com/v0/b/golf-f56a7.appspot.com/o/spl_2021.png?alt=media&token=6d878ce5-69a0-421e-a5f7-aefabeba6bd6" alt="Seacoast Premiere League 2021">
        </router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3 spl-link" to="/teams">Teams</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3 spl-link"  to="/scoreboard">Leaderboard</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "login"
          });
        });
    }
  }
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#spl_logo img{
  max-width: 100px;
}
.navbar{
  background: #00284b;
}
.navbar-dark .navbar-nav .nav-link.spl-link{
  color: #ffffff;
  }
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #101010;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
