<template>
  <div id="homepage">
    <div>
      <div>
        <div class="row">
          <div class="col-md-5 d-flex align-items-center flex-column">
            <div class="logindiv">
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
          </div>
          <div class="col-md-7">
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
          this.$toaster.success("You logged in successfully.");
          this.token = response.data.token;
          var token = {
            headers: {
              Authorization: "Token " + response.data.token,
            },
          };
          this.isloggedin = true;
          this.$store.dispatch("token", token);
          this.$store.dispatch("isloggedin", true);
          this.$router.push("/main");
        })
        .catch(
          () => this.$toaster.error("Invalid UserName or Password."),
          this.$store.dispatch("token", NaN),
          // this.isloggedin = false,
          this.$store.dispatch("isloggedin", false)
        );
    },
  },
};
</script>

<style>
#homepage {
  background-image: linear-gradient(to right, #3931af, #00c6ff);
  margin: 0px;
  padding-top: 40px;
}
.homeimage {
  height: 90%;
  margin-top: 20px;
  width: 100%;
}
#homepage .row {
  margin-right: 0px;
  margin-bottom: 30px;
}
.login {
  height: auto;
  width: 89%;
  padding: 60px;
  margin-right: auto;
  margin-left: auto;
  background-color: #82b1ff;
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
/* .marginn{
margin-top: 0%;
margin-left: 2px;
} */
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
.logindiv {
  width: 90%;
}
.row .align-items-end {
  padding: 0px;
}
@media screen and (max-width: 450px) {
  .login{
    padding: 60px 24px;
  }
  .logindiv{
    width: 366px;
  }
  .align-items-center{
    padding: 0px;
  }
  #homepage .row {
  margin: 0px;
  margin-bottom: 30px;
}
.login .form-control{
  width: 300px;
}
}
/* *{
  border: 1px solid;
} */
</style>
