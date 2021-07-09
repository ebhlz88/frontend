<template>
  <div class="register">
    <div class="row">
      <div class="col-md-3 register-left">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
        <h3>Welcome</h3>
        <p>You are 30 seconds away from earning your own money!</p>
        <input type="submit" name="" value="Login" /><br />
      </div>
      <div class="col-md-9 register-right">
        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{active : studentshow}"
              id="home-tab"
              data-toggle="tab"
              v-on:click="
                teachershow = false;
                studentshow = true;
              "
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Add Student
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
            
              v-on:click="
                studentshow = false;
                teachershow = true;
              "
              :class="{active : teachershow}"
              id="profile-tab"
              data-toggle="tab"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Add Teacher
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            v-if="studentshow"
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <h3 class="register-heading">Add Student</h3>
            <div class="row register-form">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="posts.s_name"
                    type="text"
                    class="form-control"
                    placeholder="Full Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="posts.s_fname"
                    type="text"
                    class="form-control"
                    placeholder="Father's Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <date-picker
                    placeholder="Date of Birth"
                    class="widthdp from-control"
                    v-model="posts.dob"
                    valueType="format"
                  ></date-picker>
                </div>

                <div class="form-group">
                  <date-picker
                    placeholder="Date of Birth"
                    class="widthdp from-control"
                    v-model="posts.date_join"
                    valueType="format"
                  ></date-picker>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="posts.address"
                    class="form-control"
                    placeholder="Address *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="posts.fm_number"
                    minlength="10"
                    maxlength="10"
                    name="txtEmpPhone"
                    class="form-control"
                    placeholder="Father's Phone *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <div class="form-check current">
                    <input
                      class="form-check-input"
                      v-model="posts.sex"
                      value="male"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Male
                    </label>
                  </div>
                  <div class="form-check current">
                    <input
                      class="form-check-input"
                      v-model="posts.sex"
                      value="female"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>
                <div class="form-group form-check">
                  <div class="current">
                    <input
                      type="checkbox"
                      v-model="posts.c_position"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >Currently enrolled</label
                    >
                  </div>
                </div>
                <!-- <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Your Answer *"
                    value=""
                  /> -->

                <input
                  type="submit"
                  v-on:click="submitData"
                  class="btnRegister"
                  value="Register"
                />
              </div>
            </div>
          </div>
          <div
            v-if="teachershow"
            class="tab-pane fade show active"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <h3 class="register-heading">Apply as a Hirer</h3>
            <div class="row register-form">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    maxlength="10"
                    minlength="10"
                    class="form-control"
                    placeholder="Phone *"
                    value=""
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password *"
                    value=""
                  />
                </div>
                <div class="form-group">
                  <select class="form-control">
                    <option class="hidden" selected disabled>
                      Please select your Sequrity Question
                    </option>
                    <option>What is your Birthdate?</option>
                    <option>What is Your old Phone Number</option>
                    <option>What is your Pet Name?</option>
                  </select>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="`Answer *"
                    value=""
                  />
                </div>
                <input type="submit" class="btnRegister" value="Register" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

Vue.use(VueAxios, axios);
export default {
  name: "formstudent",
  components: {
    DatePicker,
  },
  data() {
    return {
      studentshow: true,
      teachershow: false,
      cposition: null,
      sexoptions: [
        { text: "Male", value: "True" },
        { text: "Female", value: "False" },
      ],
      posts: {
        s_name: null,
        s_fname: null,
        dob: null,
        date_join: null,
        c_position: true,
        address: null,
        fm_number: null,
        sex: null,
      },
      date: {
        value: new Date(),
        formattedValue: "",
      },
    };
  },
  methods: {
    submitData() {
      axios
        .post("http://127.0.0.1:8000", this.posts)
        .then((response) => {
          console.log(response);

          // this.smessage="Succesfully added"
          this.$bvToast.toast("Succesfully added", {
            title: "Succesful",
            variant: "success",
            solid: true,
            toaster: "b-toaster-top-center",
          });
        })
        .catch((error) =>
          console.log(
            error.response.request._response,
            this.$bvToast.toast(
              "Make sure all fields are filled or pass Null value",
              {
                title: " Failed to Add",
                variant: "danger",
                solid: true,
                toaster: "b-toaster-top-center",
              }
            )
          )
        );
    },
  },
};
</script>

<style lang="scss">
.register {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  padding: 3%;
}
.register-left {
  text-align: center;
  color: #fff;
  margin-top: 4%;
}
.register-left input {
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  width: 60%;
  background: #f8f9fa;
  font-weight: bold;
  color: #383d41;
  margin-top: 30%;
  margin-bottom: 3%;
  cursor: pointer;
}
.register-right {
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
}
.register-left img {
  margin-top: 15%;
  margin-bottom: 5%;
  width: 25%;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.register-left p {
  font-weight: lighter;
  padding: 12%;
  margin-top: -9%;
}
.register .register-form {
  padding: 10%;
  margin-top: 10%;
}
.btnRegister {
  float: right;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #0062cc;
  color: #fff;
  font-weight: 600;
  width: 50%;
  cursor: pointer;
}
.register .nav-tabs {
  margin-top: 3%;
  border: none;
  background: #0062cc;
  border-radius: 1.5rem;
  width: 28%;
  float: right;
}
.register .nav-tabs .nav-link {
  padding: 2%;
  height: 34px;
  font-weight: 600;
  color: #fff;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover {
  border: none;
}
.register .nav-tabs .nav-link.active {
  width: 120px;
  color: #0062cc;
  border: 2px solid #0062cc;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.register-heading {
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #495057;
}
#myTabContent #home {
  background-color: transparent;
}
.form-group {
  margin: 6px;
}
.widthdp {
  width: 355px !important;
}
.current {
  padding-right: 200px;
}

//*{border: 1px solid;}
</style>
