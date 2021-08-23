<template>
  <div id="sdetail">
    <div class="student-profile py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent text-center">
                <img
                  class="profile_img"
                  :src="photo"
                  alt="student dp"
                />
                <h3>{{ list.s_name }}</h3>
                S/O
                <h3>{{ list.s_fname }}</h3>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  <strong class="pr-1">Student Roll No:</strong
                  >{{ list.rollnbr }}
                </p>
                <p class="mb-0"><strong class="pr-1">Class:</strong>4</p>
                <p class="mb-0"><strong class="pr-1">Section:</strong>A</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h3 class="mb-0">
                  <i class="far fa-clone pr-1"></i>General Information
                </h3>
              </div>
              <div class="card-body pt-0">
                <table class="table table-bordered">
                  <tr>
                    <th width="30%">Roll</th>
                    <td width="2%">:</td>
                    <td>{{ list.rollnbr }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Address</th>
                    <td width="2%">:</td>
                    <td>{{ list.address }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Gender</th>
                    <td width="2%">:</td>
                    <td>{{ list.sex }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Father's Mobile</th>
                    <td width="2%">:</td>
                    <td>{{ list.fm_number }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Date of Birth</th>
                    <td width="2%">:</td>
                    <td>{{ list.dob }}</td>
                  </tr>
                  <tr>
                    <th width="30%">Date of Joining</th>
                    <td width="2%">:</td>
                    <td>{{ list.date_join }}</td>
                  </tr>
                  <tr>
                    <th width="30%">blood</th>
                    <td width="2%">:</td>
                    <td>B+</td>
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
            <div class="card shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h3 class="mb-0">
                  <i class="far fa-clone pr-1"></i>Other Information
                </h3>
              </div>
              <div class="card-body pt-0">
                <p>
                 sfsdfsd
                </p>
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

Vue.use(VueAxios, axios);
export default {
  name: "sdtailtable",
  data() {
    return {
      list: null,
      hreffee: "/#/fees/",
      hrefresult: "/#/result/",
      hrefdetail: "/#/sdetail/",
      searchitem: null,
      photo:null,
    };
  },
  props: {
    roll: {
      type: String,
      default: NaN,
    },
  },
  methods: {
    searchstudent() {
      Vue.axios
        .get("http://127.0.0.1:8000/studentsearch/?search=" + this.searchitem)
        .then((resp) => {
          this.list = resp.data;

          console.log(resp.data);
        });
    },
  },
  mounted() {
    Vue.axios.get("http://127.0.0.1:8000/student/" + this.roll).then((resp) => {
      this.list = resp.data;

      this.photo = resp.data.student_pic;

      console.log(resp.data);
    });
  },
};
</script>

<style lang="scss">
#sdetail {
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

.student-profile .card {
  border-radius: 10px;
}

.student-profile .card .card-header .profile_img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 10px auto;
  border: 10px solid #ccc;
  border-radius: 50%;
}

.student-profile .card h3 {
  font-size: 20px;
  font-weight: 700;
}

.student-profile .card p {
  font-size: 16px;
  color: #000;
}

.student-profile .table th,
.student-profile .table td {
  font-size: 14px;
  padding: 5px 10px;
  color: #000;
}
</style>
