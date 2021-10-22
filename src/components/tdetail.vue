<template>
  <div id="tdetail">
    <div class="student-profile py-4">
      <div v-if="list" class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent text-center">
                <img class="profile_img" :src="photo" alt="student dp" />
                <h3>{{ list.t_name }}</h3>
                S/O
                <h3>{{ list.t_fname }}</h3>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  <strong class="pr-1">Teacher ID:</strong>{{ list.id }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h3 class="mb-0">
                  <font-awesome-icon
                    :icon="['fas', 'info-circle']"
                    id="basic-addon1"
                  />General Information
                </h3>
              </div>
              <div class="card-body pt-0">
                <table class="table table-bordered">
                  <tr>
                    <th width="30%">Roll</th>
                    <td width="2%">:</td>
                    <td>{{ list.id }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Address</th>
                    <td width="2%">:</td>
                    <td>{{ list.address }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Blood Group</th>
                    <td width="2%">:</td>
                    <td>{{ list.bloodgroup }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Gender</th>
                    <td width="2%">:</td>
                    <td>{{ list.sex }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Mobile</th>
                    <td width="2%">:</td>
                    <td>{{ list.m_number }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Email address</th>
                    <td width="2%">:</td>
                    <td>{{ list.t_email }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Date of Birth</th>
                    <td width="2%">:</td>
                    <td>{{ list.dob }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Date of Hiring</th>
                    <td width="2%">:</td>
                    <td>{{ list.date_hiring }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Salary</th>
                    <td width="2%">:</td>
                    <td>{{ list.salary }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Speciality</th>
                    <td width="2%">:</td>
                    <td>{{ list.speciality }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Currently enrolled</th>
                    <td width="2%">:</td>
                    <td>{{ list.c_position }}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div style="height: 26px"></div>
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

Vue.use(VueAxios, axios);
export default {
  name: "ttable",
  data() {
    return {
      list: undefined,
      hrefpayment: "/#/payments/",
      tsearchitem: null,
      photo: null,
    };
  },
  props: {
    roll: {
      type: String,
      default: NaN,
    },
  },
  methods: {},
  mounted() {
    Vue.axios
      .get("http://127.0.0.1:8000/teacherbyroll/" + this.roll)
      .then((resp) => {
        this.list = resp.data;
        this.photo = "http://127.0.0.1:8000" + resp.data.teacher_pic;
      });
  },
};
</script>
<style lang="scss">
#tdetail {
  // background: #67B26F;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #4ca2cd, #67B26F);  /* Chrome 10-25, Safari 5.1-6 */
  background-image: linear-gradient(
    to right,
    #3931af,
    #00c6ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 0;
  margin: 0;
  font-family: "Lato", sans-serif;
  color: #000;
  height: 84vh;
}
</style>
