<template>
  <div id="homepage">
    <div>
      <div>
        <div class="row">
          <div class="col-md-4 margin">
            <div class="login">
              <h3 class="text-center">Login</h3>
              <form @submit.prevent="loginn">
                <div class="input-group">
                  <span class="input-group-addon"
                    ><font-awesome-icon
                      :icon="['fas', 'user']"
                      id="basic-addon1"
                  /></span>
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    v-model="logindata.username"
                    placeholder="Username"
                  />
                </div>
                <div class="input-group margin">
                  <span class="input-group-addon"
                    ><font-awesome-icon
                      :icon="['fas', 'lock']"
                      id="basic-addon1"
                  /></span>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    v-model="logindata.password"
                    placeholder="Password"
                  />
                </div>
                <button class="btn btn-primary" type="submit">Login</button>
              </form>
            </div>
          </div>
          <div class="col-md-8">
            <img
              src="../assets/students.png"
              class="homeimage"
              alt="landing image"
            />
          </div>
        </div>
      </div>

      <img src="../assets/wave1.png" alt="wave" class="bottom-image" />
    </div>
  </div>
  <!-- <font-awesome-icon  :icon="['fas', 'user']" id="basic-addon1" /> -->
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
export default {
  components: {},
  data() {
    return {
      isloggedin: false,
      logindata: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    loginn() {
      axios
        .post("http://127.0.0.1:8000/login", this.logindata)
        .then((response) => {
          console.log(response.data.token);
          this.token = response.data.token;
          var token = {
            headers: {
              Authorization: "Token " + response.data.token,
            },
          };
          this.isloggedin = true;
          this.$store.dispatch("token", token);
          this.$store.dispatch("isloggedin", true);
          this.$router.push("/sform");
        })
        .catch(
          () => this.$store.dispatch("token", NaN),
          (this.isloggedin = false),
          this.$store.dispatch("isloggedin", this.isloggedin)
        );
    },
  },
};
</script>

<style>
#homepage {
  /* background-color: #4e71ee;
  background-color: rgb(83, 83, 158); */
  background-image: linear-gradient(to right, #3931af, #00c6ff);
  margin: 0px;
}
.homeimage {
  height: 320px;
  margin-top: 20px;
}
.login {
  height: auto;
  width: 400px;
  padding: 60px;
  margin: auto;
  margin-left: 90px;
  background-image: url("../assets/loginback.png");
  border-radius: 10px;
}
.input-group-addon {
  background-color: white;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
}
input:active,
input:hover,
input:focus {
  outline: none !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}
.margin {
  margin: 30px 0px;
}
.form {
  z-index: 2;
}
.bottom-image {
  width: 100%;
  margin-top: 28px;
}
.text-center {
  margin-bottom: 20px;
}
/* *{
  border: 1px solid;
} */
</style>
