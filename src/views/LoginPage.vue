<template>
    <div class="register">
      <div class="register_content">
        <div class="register_form">
          <div class="register_text">
            <h2 class="register_welcome">Welcome!</h2>
            <ol>
              <li>Email: admin@west.com</li>
              <li>Password: 123456</li>
            </ol>
            <h1 class="register_signin">Sign in to app</h1>
            <p class="register_get-info">Lorem Ipsum is simply</p>
          </div>
          <form class="register_input">
            <label for="email">Email</label>
            <input id="email" class="email" type="text" placeholder="Email" v-model="email">
            <label for="password">Password</label>
            <input id="password" class="password" type="password" placeholder="Password" v-model="password">
          </form>
          <div v-if="errMessage">{{ errMessage }}</div>
          <div class="register_button">
            <button class="button" @click="signIn">Login</button>
          </div>
        </div>
        <img class="image" src="@/assets/background.svg" alt="" />
      </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: '',
      password: '',
      errMessage: '',
    }
  }, 
  methods: {
    signIn() {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
            console.log("Successfully")
            this.$router.push('/profile')
        })
        .catch((err) => {
            console.log(err.code)
            switch(err.code) {
              case "auth/invalid-email":
                this.errMessage = "The username or password you entered is incorrect"
                break;

              case "auth/wrong-password":
                break;
                default:
                this.errMessage = "The username or password you entered is incorrect"
            }
        })
}
  }
}

</script>

<style lang="scss" scoped>
h1, h2, p {
  margin: 0;
}
.image {
  object-fit: cover;
}
.register {
  font-family: 'Poppins', sans-serif;
  .register_content {
    display: flex;
    justify-content: space-around;
    margin-top: 100px;
    .register_form {
      max-width: 425px;
      border: 0.6px #282828 solid;
      border-radius: 6px;
      padding: 36px 47px 40px 35px;
      .register_button {
        margin: 0 auto;
        .button {
          margin-top: 38px;
          padding: 17px 190px;
          font-size: 16px;
          color: #fff;
          background-color: #000;
          border-radius: 6px;
          cursor: pointer;
        }
      }
      .register_input {
        max-width: 423px;
        display: flex;
        flex-direction: column;
        .email {
          margin-bottom: 38px;
        }
        input {
          border: 0.6px #282828 solid;
          border-radius: 6px;
          padding: 19px 27px;
        }
        label {
          text-align: left;
          margin-bottom: 9px;
        }
      } 
      .register_text {
        text-align: left;
        .register_welcome {
          font-weight: 300;
          font-size: 25px;
          line-height: 37,5px;
          margin-bottom: 33px;
        }
        .register_signin {
          font-weight: 500;
          font-size: 31px;
          line-height: 46px;
          margin-bottom: 5px;
        }
        .register_get-info {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 48px;
        }
      }
    }
  }
}
</style>