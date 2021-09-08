<template>
  <div id="resultlist">
    <div class="student-profile py-4 mx-5">
      <div v-if="fstandard">
        <div class="row">
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent text-center">
                <img class="profile_img" :src="photo" alt="student dp" />
                <h3>{{ list.enrollstudent.student.s_name }}</h3>
                S/O
                <h3>{{ list.enrollstudent.student.s_fname }}</h3>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  <strong class="pr-1">Student Roll No:</strong
                  >{{ list.enrollstudent.student.rollnbr }}
                </p>
                <p class="mb-0">
                  <strong class="pr-1">Class:</strong>{{ fstandard }}
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
                  />Result of Class {{ fstandard }}
                </h3>
              </div>
              <div class="card-body pt-0">
                <table class="table table-bordered">
                  <tr v-for="item in resultlist" :key="item">
                    <th width="30%">{{ item.subjectname.subjectname }}</th>
                    <td width="2%">:</td>
                    <td>{{ item.subjectmarks }}</td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- <div class="card shadow-sm">
              <div class="card-header bg-transparent border-0">
                <h3 class="mb-0">
                  <i class="far fa-clone pr-1"></i>Other Information
                </h3>
              </div>
              <div class="card-body pt-0">
                <p>sfsdfsd</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
      <h1 v-else>Please Select standard</h1>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      list: null,
      photo: null,
      resultlist: null,
      fstandard: null,
    };
  },
  methods: {
    getresults(event) {
      this.fstandard = event;
      Vue.axios
        .get("http://127.0.0.1:8000/result/" + this.rollnbr + "/" + event)
        .then((resp) => {
          this.list = resp.data[0];
          console.log(this.list);
          this.resultlist = resp.data;
          this.photo =
            "http://127.0.0.1:8000" +
            resp.data[0].enrollstudent.student.student_pic;
        });
    },
  },
  props: {
    rollnbr: String,
  },
};
</script>

<style lang="scss">
#resultlist {
  // background: #67B26F;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #4ca2cd, #67B26F);  /* Chrome 10-25, Safari 5.1-6 */
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 0px;
  margin: 0;
  font-family: "Lato", sans-serif;
  color: #000;
  height: 74vh;
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
