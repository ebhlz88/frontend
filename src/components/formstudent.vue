<template>
  <div id="regist" class="register" v-if="isloggedin">
    <div class="row">
      <div class="col-md-3 register-left">
        <div class="card-container">
          <div class="card m-3">
            <div class="front">
              <i class="fa fa-users icon"></i><br />
              <p class="fontsize">Number of Students</p>
            </div>
            <div class="back">{{ countinfo.studentcount }}</div>
          </div>
        </div>
        <br />
        <div class="card-container">
          <div class="card">
            <div class="front">
              <i class="fa fa-users icon"></i><br />
              <p class="fontsize">Number of Teachers</p>
            </div>
            <div class="back">{{ countinfo.teachercount }}</div>
          </div>
        </div>
        <br />
      </div>
      <div class="col-md-9 register-right">
        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <li class="nav-item">
            <button
              class="nav-link"
              :class="{ active: studentshow }"
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
              :class="{ active: teachershow }"
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
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="posts.s_fname"
                    type="text"
                    class="form-control"
                    placeholder="Father's Name *"
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
                    placeholder="Date of joining"
                    class="widthdp from-control"
                    v-model="posts.date_join"
                    valueType="format"
                  ></date-picker>
                </div>
                <div class="form-group">
                  <input type="file" @change="onFileChanged" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="posts.address"
                    class="form-control"
                    placeholder="Address *"
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
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="posts.bloodgroup"
                    minlength="10"
                    maxlength="10"
                    name="blood"
                    class="form-control"
                    placeholder="Blood Group *"
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
            <h3 class="register-heading">Add Teacher</h3>
            <div class="row register-form">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    v-model="teacherposts.t_name"
                    type="text"
                    class="form-control"
                    placeholder="Full Name *"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="teacherposts.t_fname"
                    type="text"
                    class="form-control"
                    placeholder="Father's Name *"
                  />
                </div>
                <div class="form-group">
                  <date-picker
                    placeholder="Date of Birth"
                    class="widthdp from-control"
                    v-model="teacherposts.dob"
                    valueType="format"
                  ></date-picker>
                </div>

                <div class="form-group">
                  <date-picker
                    placeholder="Date of Hiring"
                    class="widthdp from-control"
                    v-model="teacherposts.date_hiring"
                    valueType="format"
                  ></date-picker>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.speciality"
                    class="form-control"
                    placeholder="Speciality *"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.address"
                    class="form-control"
                    placeholder="Address *"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.m_number"
                    minlength="10"
                    maxlength="10"
                    name="txtEmpPhone"
                    class="form-control"
                    placeholder="Mobile *"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.salary"
                    minlength="10"
                    maxlength="10"
                    name="txtEmpPhone"
                    class="form-control"
                    placeholder="Salary *"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.t_email"
                    minlength="10"
                    maxlength="10"
                    name="txtEmpPhone"
                    class="form-control"
                    placeholder="Email *"
                  />
                </div>
                <div class="form-group">
                  <div class="form-check current">
                    <input
                      class="form-check-input"
                      v-model="teacherposts.sex"
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
                      v-model="teacherposts.sex"
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
                      v-model="teacherposts.c_position"
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
                  v-on:click="submitteacherData"
                  class="btnRegister"
                  value="Register"
                />
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

import { mapGetters } from "vuex";

Vue.use(VueAxios, axios);
export default {
  name: "formstudent",
  components: {
    DatePicker,
  },
  computed: {
    ...mapGetters(["token"]),
    ...mapGetters(["isloggedin"]),
  },
  data() {
    return {
      imagefile: null,
      studentshow: true,
      teachershow: false,
      cposition: null,
      countinfo: null,
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
        bloodgroup: null,
      },
      teacherposts: {
        t_name: null,
        t_fname: null,
        m_number: null,
        dob: null,
        date_hiring: null,
        t_email: null,
        address: null,
        salary: null,
        sex: null,
        speciality: null,
        c_position: true,
      },
      date: {
        value: new Date(),
        formattedValue: "",
      },
    };
  },
  mounted() {
    Vue.axios.get("http://127.0.0.1:8000/count").then((resp) => {
      this.countinfo = resp.data;

      console.log(resp.data);
    });
  },

  methods: {
    onFileChanged(e) {
      let image = e.target.files[0];
      this.imagefile = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.posts.student_pic = e.target.result;
        console.log(e);
      };
    },
    submitData() {
      let data = new FormData();
      data.append("s_name", this.posts.s_name);
      data.append("s_fname", this.posts.s_fname);
      data.append("dob", this.posts.dob);
      data.append("date_join", this.posts.date_join);
      data.append("sex", this.posts.sex);
      data.append("fm_number", this.posts.fm_number);
      data.append("c_position", this.posts.c_position);
      data.append("address", this.posts.address);
      data.append("student_pic", this.imagefile);
      data.append("bloodgroup", this.posts.bloodgroup);
      axios
        .post("http://127.0.0.1:8000", data, this.token)
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
    submitteacherData() {
      axios
        .post(
          "http://127.0.0.1:8000/allteachers",
          this.teacherposts,
          this.token
        )
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
.fontsize {
  font-size: 50%;
}
.icon {
  padding-top: 40px;
}
.register {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  padding: 3%;
}
.register-left {
  text-align: center;
  color: #fff;
  margin-top: 4%;
}
.register-left .routerlink {
  border: none;
  border-radius: 1.5rem;
  padding: 4% 8%;
  width: auto;
  background: #f8f9fa;
  text-decoration: none;
  font-weight: bold;
  color: #383d41;
  margin-top: 0%;
  margin-bottom: 15%;
  cursor: pointer;
}
.register-right {
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
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
.card-container {
  display: inline-block;
  margin: 0 auto;
  padding: 0 12px;
  perspective: 900px;
  text-align: center;
}
#regist .card {
  position: relative;
  width: 197px;
  height: 150px;
  background: #0c54b3;
  transition: all 0.6s ease;
  transform-style: preserve-3d;
}

.front,
.back {
  position: absolute;
  background: #0c54b3;
  top: 0;
  left: 0;
  width: 200px;
  height: 150px;
  border-radius: 5px;
  color: rgb(255, 255, 255);
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3),
    0 17px 17px 0 rgba(0, 0, 0, 0.15);
  backface-visibility: hidden;
}

.front {
  display: table-column-group;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.card-container:hover .card {
  transform: rotateY(180deg);
}

.back {
  transform: rotateY(180deg);
}
</style>
