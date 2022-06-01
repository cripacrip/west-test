<template>
  <div class="main">
    <div class="main_nav">
      <nav>
        <router-link to="/">Home</router-link> |
        <!-- <router-link to="/login">Login</router-link> | -->
        <router-link to="/profile">Profile</router-link> |
        <router-link to="/news">News</router-link> |
        <!-- <router-link to="/register">Register</router-link> | -->
      </nav>
      <div class="main_button">
        <button class="main_logout" @click="logOut" v-if="isLogin">Log Out</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export default {
  name: 'HomePage',
  data() {
    return {
      isLogin: false,
      auth: '',
    }
  },
    mounted() {
      this.auth = getAuth()
      onAuthStateChanged(this.auth, (user) => {
        if(user) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      })
    },
    methods: {
      logOut() {
        signOut(this.auth).then(() => {
        this.$router.push('/')
      })
    }
    },
  }
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.main_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  .main_button {
    margin-right: 30px;
    .main_logout {
      border: 1px solid #000;
      border-radius: 6px;
      padding: 8px;
      cursor: pointer;
      &:hover {
        border: 2px solid #fff;
        transition: 0.1s;
      }
    }
  }
}

nav {
  padding: 30px;
  text-align: left;

  a {
    font-weight: bold;
    color: #c3c3c3;

    &.router-link-exact-active {
      color: #fff;
    }
  }
}
</style>
