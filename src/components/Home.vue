<template>
  <div id="home">
    <div>
      <div class="row">
        <div class="col-md-6 margin">
          <div class="login">
            <h3 class="text-center">Login</h3>
            <form>
              <div class="input-group">
                <span class="input-group-addon"
                  ><font-awesome-icon :icon="['fas', 'user']" id="basic-addon1"
                /></span>
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  name="email"
                  placeholder="Username"
                />
              </div>
              <div class="input-group margin">
                <span class="input-group-addon"
                  ><font-awesome-icon :icon="['fas', 'lock']" id="basic-addon1"
                /></span>
                <input
                  id="email"
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <img
            src="../assets/homeimage.png"
            class="homeimage"
            alt="landing image"
          />
        </div>
      </div>
    </div>
    <img src="../assets/wave1.png" alt="wave" class="bottom-image" />
  </div>
  <!-- <font-awesome-icon  :icon="['fas', 'user']" id="basic-addon1" /> -->
</template>

<script>
export default {};
</script>

<style>
#home {
  background-color: #4e71ee;
  background-color: rgb(83, 83, 158);
}
.homeimage {
  height: 400px;
}
.login {
  height: auto;
  width: 400px;
  padding: 40px;
  background-image: url("../assets/loginback.png");
  border-radius: 10px;
  margin-left: 150px;
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
</style>
