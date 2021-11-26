<template>
  <div id="resultlist">
    <div class="student-profile py-4 mx-5">
      <div v-if="list">
        <div class="row">
          <div class="col-lg-4">
            <div class="card shadow-sm">
              <div class="card-header bg-transparent text-center">
                <img
                  class="profile_img"
                  :src="
                    'http://127.0.0.1:8000' +
                    list.enrollstudent.student.student_pic
                  "
                  alt="student dp"
                />
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
                  <tr
                    v-for="item in resultlist"
                    :key="item.subjectname.subjectname"
                  >
                    <th width="30%">{{ item.subjectname.subjectname }}</th>
                    <td width="2%">:</td>
                    <td>{{ item.subjectmarks }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="!fstandard">
        <h1>Please Select standard</h1>
        <img class="elseimg" src="../assets/select.png" alt="Select standard" />
      </div>
      <div v-else>
        <h1>No result found</h1>
        <img class="elseimg" src="../assets/nodata.webp" alt="404" />
      </div>
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
          this.resultlist = resp.data;
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
.elseimg {
  width: 35%;
  height: 35%;
}
</style>
