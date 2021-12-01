<template>
  <div id="regist" class="register">
    <!-- v-if="isloggedin" -->
    <div class="row">
      <div class="col-md-3 register-left">
        <div class="card-container">
          <div class="card m-3">
            <div class="front">
              <i class="fa fa-users icon"></i><br />
              <p class="fontsize"><b>Number of Students</b></p>
            </div>
            <div v-if="countinfo" class="back">
              {{ countinfo.studentcount }}
            </div>
          </div>
        </div>
        <br />
        <div class="card-container">
          <div class="card">
            <div class="front">
              <i class="fa fa-users icon"></i><br />
              <p class="fontsize"><b>Number of Teachers</b></p>
            </div>
            <div v-if="countinfo" class="back">
              {{ countinfo.teachercount }}
            </div>
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
                  <div id="profileupload" class="form-group">
                    <p class="profilep">Profile Picture</p>
                    <input type="file" @change="onFileChanged" />
                  </div>
                  <input
                    v-model="posts.s_name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': $v.posts.s_name.$error }"
                    placeholder="Full Name *"
                    required
                  />
                  <div
                    v-if="!$v.posts.s_name.required"
                    class="invalid-feedback"
                  >
                    Name is required
                  </div>
                  <div
                    v-if="!$v.posts.s_name.minLength"
                    class="invalid-feedback"
                  >
                    Name must be altleast 4 Characters
                  </div>
                </div>
                <div class="form-group">
                  <input
                    v-model="posts.s_fname"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': $v.posts.s_fname.$error }"
                    placeholder="Father's Name *"
                  />
                  <div
                    v-if="!$v.posts.s_fname.required"
                    class="invalid-feedback"
                  >
                    Father's Name is required
                  </div>
                  <div
                    v-if="!$v.posts.s_fname.minLength"
                    class="invalid-feedback"
                  >
                    Father's Name must be altleast 4 Characters
                  </div>
                </div>
                <div class="form-group">
                  <date-picker
                    placeholder="Date of Birth"
                    class="widthdp from-control"
                    :class="{ 'is-invalid': $v.posts.dob.$error }"
                    v-model="posts.dob"
                    valueType="MM/DD/YYYY"
                  ></date-picker>
                  <div v-if="!$v.posts.dob.required" class="invalid-feedback">
                    Date of Birth is required
                  </div>
                  <div v-if="check_dob(this.posts.dob)" class="invalid">
                    Invalid Date of Birth
                  </div>
                  <div
                    class="invalid"
                    v-if="date_diff_indays(this.posts.dob) < 1460"
                  >
                    Must be atleast four years old
                  </div>
                </div>

                <div class="form-group">
                  <date-picker
                    placeholder="Date of joining"
                    class="widthdp from-control"
                    :class="{ 'is-invalid': $v.posts.date_join.$error }"
                    v-model="posts.date_join"
                    valueType="MM/DD/YYYY"
                  ></date-picker>
                  <div
                    v-if="!$v.posts.date_join.required"
                    class="invalid-feedback"
                  >
                    Date of Joining is required
                  </div>
                  <div class="invalid" v-if="check_dob(this.posts.date_join)">
                    Select current or previous date
                  </div>
                </div>
                <div class="form-group">
                  <select
                    class="form-control"
                    id="standardselect"
                    v-model="posts.currentStandard"
                  >
                    <option selected disabled>Please select Standard</option>
                    <option
                      v-for="items in standards"
                      :key="items.classid"
                      :value="items.classid"
                    >
                      {{ items.standardname }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="posts.address"
                    :class="{ 'is-invalid': $v.posts.address.$error }"
                    class="form-control"
                    placeholder="Address *"
                  />
                  <div
                    v-if="!$v.posts.address.required"
                    class="invalid-feedback"
                  >
                    Address is required
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    v-model="posts.fm_number"
                    name="txtEmpPhone"
                    class="form-control"
                    :class="{ 'is-invalid': $v.posts.fm_number.$error }"
                    placeholder="Father's Phone *"
                  />
                  <div
                    v-if="!$v.posts.fm_number.required"
                    class="invalid-feedback"
                  >
                    Father's Mobile No. is required
                  </div>
                  <div
                    v-if="
                      !$v.posts.fm_number.minlength ||
                      !$v.posts.fm_number.maxLength
                    "
                    class="invalid-feedback"
                  >
                    Mobile No. must be between 11 to 15 numbers
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="posts.bloodgroup"
                    name="blood"
                    class="form-control"
                    placeholder="Blood Group *"
                    required
                  />
                </div>
                <div class="form-group">
                  <div class="form-check current">
                    <input
                      class="form-check-input"
                      :class="{ 'is-invalid': $v.posts.sex.$error }"
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
                      :class="{ 'is-invalid': $v.posts.sex.$error }"
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
                      required
                    />
                    <label class="form-check-label" for="exampleCheck1"
                      >Currently enrolled</label
                    >
                  </div>
                </div>
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
                    :class="{ 'is-invalid': $v.teacherposts.t_name.$error }"
                    placeholder="Full Name *"
                    required
                  />
                  <div
                    v-if="!$v.teacherposts.t_name.required"
                    class="invalid-feedback"
                  >
                    Name is required
                  </div>
                  <div
                    v-if="!$v.teacherposts.t_name.minLength"
                    class="invalid-feedback"
                  >
                    Name must be atleast 4 characters
                  </div>
                </div>
                <div class="form-group">
                  <input
                    v-model="teacherposts.t_fname"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': $v.teacherposts.t_fname.$error }"
                    placeholder="Father's Name *"
                  />
                  <div
                    v-if="!$v.teacherposts.t_fname.required"
                    class="invalid-feedback"
                  >
                    Father's Name is required
                  </div>
                  <div
                    v-if="!$v.teacherposts.t_fname.minLength"
                    class="invalid-feedback"
                  >
                    Father's Name must be atleast 4 characters
                  </div>
                </div>
                <div class="form-group">
                  <date-picker
                    placeholder="Date of Birth"
                    class="widthdp from-control"
                    :class="{ 'is-invalid': $v.teacherposts.dob.$error }"
                    v-model="teacherposts.dob"
                    valueType="format"
                  ></date-picker>
                  <div
                    v-if="!$v.teacherposts.dob.required"
                    class="invalid-feedback"
                  >
                    Date of Birth is required
                  </div>
                  <div
                    class="invalid"
                    v-if="date_diff_indays(this.teacherposts.dob) < 5840"
                  >
                    Must be atleast 16 years old
                  </div>
                  <div class="invalid" v-if="check_dob(this.teacherposts.dob)">
                    Select current or previous date
                  </div>
                </div>

                <div class="form-group">
                  <date-picker
                    placeholder="Date of Hiring"
                    class="widthdp from-control"
                    :class="{
                      'is-invalid': $v.teacherposts.date_hiring.$error,
                    }"
                    v-model="teacherposts.date_hiring"
                    valueType="format"
                  ></date-picker>
                  <div
                    v-if="!$v.teacherposts.date_hiring.required"
                    class="invalid-feedback"
                  >
                    Date of Hiring is required
                  </div>
                  <div
                    class="invalid"
                    v-if="check_dob(this.teacherposts.date_hiring)"
                  >
                    Select current or previous date
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.speciality"
                    class="form-control"
                    placeholder="Speciality *"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.bloodgroup"
                    class="form-control"
                    placeholder="Blood Group *"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.address"
                    :class="{ 'is-invalid': $v.teacherposts.address.$error }"
                    class="form-control"
                    placeholder="Address *"
                    required
                  />
                  <div
                    v-if="!$v.teacherposts.address.required"
                    class="invalid-feedback"
                  >
                    Address is required
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.m_number"
                    name="txtEmpPhone"
                    class="form-control"
                    :class="{ 'is-invalid': $v.teacherposts.m_number.$error }"
                    placeholder="Mobile *"
                  />
                  <div
                    v-if="!$v.teacherposts.m_number.required"
                    class="invalid-feedback"
                  >
                    Mobile Number is required
                  </div>
                  <div
                    v-if="
                      !$v.teacherposts.m_number.minlength ||
                      !$v.teacherposts.m_number.maxLength
                    "
                    class="invalid-feedback"
                  >
                    Mobile Number must be between 11 to 15 numbers
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.salary"
                    name="txtEmpPhone"
                    class="form-control"
                    placeholder="Salary *"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    v-model="teacherposts.t_email"
                    name="txtEmpPhone"
                    class="form-control"
                    :class="{ 'is-invalid': $v.teacherposts.t_email.$error }"
                    placeholder="Email *"
                  />
                  <div
                    v-if="!$v.teacherposts.t_email.required"
                    class="invalid-feedback"
                  >
                    Email is required
                  </div>
                  <div
                    v-if="!$v.teacherposts.t_email.email"
                    class="invalid-feedback"
                  >
                    Invalid Email address
                  </div>
                </div>
                <div class="form-group">
                  <input type="file" @change="onFileChanged" />
                </div>
                <div class="form-group">
                  <div class="form-check current">
                    <input
                      class="form-check-input"
                      :class="{ 'is-invalid': $v.teacherposts.sex.$error }"
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
                      :class="{ 'is-invalid': $v.teacherposts.sex.$error }"
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
    {{ posts.date_join }}
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
import VueMoment from "vue-moment";
import moment from "moment-timezone";

Vue.use(VueMoment, {
  moment,
});
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
      momentFormat: {
        parse: (value) => {
          return value ? moment(value, "LL").toDate() : null;
        },
      },
      imagefile: null,
      studentshow: true,
      teachershow: false,
      standards: null,
      selectedstandard: null,
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
        currentStandard: null,
      },
      teacherposts: {
        t_name: null,
        t_fname: null,
        m_number: null,
        dob: null,
        date_hiring: null,
        bloodgroup: null,
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
  validations: {
    posts: {
      s_name: { required, minLength: minLength(4) },
      s_fname: { required, minLength: minLength(4) },
      dob: { required },
      date_join: { required },
      address: { required },
      fm_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(15),
      },
      sex: { required },
    },
    teacherposts: {
      t_name: { required, minLength: minLength(4) },
      t_fname: { required, minLength: minLength(4) },
      m_number: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(15),
      },
      dob: { required },
      date_hiring: { required },
      t_email: { required, email },
      address: { required },
      sex: { required },
    },
  },
  mounted() {
    Vue.axios.get("http://127.0.0.1:8000/count").then((resp) => {
      this.countinfo = resp.data;
    });
    Vue.axios.get("http://127.0.0.1:8000/standardlist").then((resp) => {
      this.standards = resp.data;
    });
  },

  methods: {
    onFileChanged(e) {
      this.imagefile = e.target.files[0];
    },
    submitData() {
      this.$v.posts.$touch();
      if (this.$v.posts.$error) {
        return false;
      }
      if (this.check_dob(this.posts.dob)) {
        return false;
      } else if (this.check_dob(this.posts.date_join)) {
        return false;
      } else if (this.date_diff_indays(this.posts.dob) < 1460) {
        return false;
      } else {
        var dt1 = new Date(this.posts.dob);
        var date_birth =
          dt1.getFullYear() + "-" + dt1.getMonth() + "-" + dt1.getDate();
        var dt2 = new Date(this.posts.date_join);
        var join_date =
          dt2.getFullYear() + "-" + dt2.getMonth() + "-" + dt2.getDate();
        let data = new FormData();
        data.append("s_name", this.posts.s_name);
        data.append("s_fname", this.posts.s_fname);
        data.append("dob", date_birth);
        data.append("date_join", join_date);
        data.append("sex", this.posts.sex);
        data.append("fm_number", this.posts.fm_number);
        data.append("c_position", this.posts.c_position);
        data.append("address", this.posts.address);
        data.append("student_pic", this.imagefile);
        data.append("bloodgroup", this.posts.bloodgroup);
        data.append("currentStandard", this.posts.currentStandard);
        axios
          .post("http://127.0.0.1:8000", data, this.token)
          .then(() => {
            this.$toaster.success("Successfully Added Student.");
          })
          .catch((error) =>
            console.log(
              error.response.request._response,
              this.$toaster.error("Invalid Inputs.")
            )
          );
      }
    },
    date_diff_indays(date1) {
      var dt1 = new Date(date1);
      var dt2 = new Date();
      return Math.floor(
        (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
          Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
          (1000 * 60 * 60 * 24)
      );
    },
    check_dob(date1) {
      var dt1 = new Date(date1);
      var dt2 = new Date();
      return Math.floor(
        Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) <
          Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())
      );
    },
    submitteacherData() {
      this.$v.teacherposts.$touch();
      if (this.$v.teacherposts.$error) {
        return false;
      } else if (this.check_dob(this.teacherposts.date_hiring)) {
        return false;
      } else if (this.date_diff_indays(this.teacherposts.dob) < 5840) {
        return false;
      } else {
        var dt1 = new Date(this.teacherposts.dob);
        var date_birth =
          dt1.getFullYear() + "-" + dt1.getMonth() + "-" + dt1.getDate();
        var dt2 = new Date(this.teacherposts.date_hiring);
        var hiring_date =
          dt2.getFullYear() + "-" + dt2.getMonth() + "-" + dt2.getDate();
        this.teacherposts.dob = date_birth;
        this.teacherposts.date_hiring = hiring_date;
        console.log(date_birth);
        let data = new FormData();
        data.append("t_name", this.teacherposts.t_name);
        data.append("t_fname", this.teacherposts.t_fname);
        data.append("dob", date_birth);
        data.append("date_hiring", hiring_date);
        data.append("sex", this.teacherposts.sex);
        data.append("m_number", this.teacherposts.m_number);
        data.append("c_position", this.teacherposts.c_position);
        data.append("address", this.teacherposts.address);
        data.append("teacher_pic", this.imagefile);
        data.append("bloodgroup", this.teacherposts.bloodgroup);
        data.append("t_email", this.teacherposts.t_email);
        data.append("speciality", this.teacherposts.speciality);
        data.append("salary", this.teacherposts.salary);
        axios
          .post("http://127.0.0.1:8000/allteachers", data, this.token)
          .then(() => {
            this.$toaster.success("Successfully Added Teacher.");
          })
          .catch((error) =>
            console.log(
              error.response.request._response,
              this.$toaster.error("Invalid Inputs.")
            )
          );
      }
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
.nl {
  width: 100px;
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
  padding: 1%;
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
  width: 355px;
}
@media screen and (max-width: 450px) {
  .widthdp {
    width: 230px;
  }
  .form-group {
    width: 230px;
  }
  .register .nav-tabs {
    width: 35%;
  }
  .btnRegister {
    padding: 6%;
    width: 110px;
  }
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
  background: #59a1ff;
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
.invalid {
  color: #dc3545;
  font-size: 14px;
}
#profileupload {
  display: flex;
  align-items: center;
}
.profilep {
  width: 166px;
  margin-bottom: 0px !important;
}
</style>
