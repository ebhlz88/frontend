<template>
  <div id="result">
    <div class="searchdiv m-4 row">
      <div class="input-group col-md-4">
        <input
          type="text"
          class="form-control"
          aria-describedby="start-date"
          placeholder="Search Here"
        />
        <span class="input-group-addon" id="start-date"
          ><img src="../assets/searchicon.png" alt="serar"
        /></span>
      </div>
      <div class="submitdiv col-md-8 row">
        <select class="form-control" v-model="updatestandard">
          <option class="hidden" selected disabled>
            Please select Standard
          </option>
          <option v-for="items in standards" :key="items.id">
            {{ items.standardname }}
          </option>
        </select>
        <select class="form-control" v-model="updatesubject">
          <option class="hidden" selected disabled>
            Please select subject
          </option>
          <option v-for="items in subjects" :key="items.id">
            {{ items.subjectname }}
          </option>
        </select>
        <input
          type="text"
          class="form-control"
          v-model="marks.subjectmarks"
          aria-describedby="start-date"
          placeholder="Subject Marks"
        />
        <input
          type="Submit"
          class="btn btn-primary"
          v-on:click="updateresult"
          aria-describedby="start-date"
          value="Submit Fees"
        />
      </div>
    </div>
    <div class="row">
      <div v-if="showtable">
        <div class="table">
          <div class="table-header">
            <div class="header__item">
              <p id="name" class="filter__link">Roll No.</p>
            </div>
            <div class="header__item">
              <p id="wins" class="filter__link filter__link--number">Name</p>
            </div>
            <div class="header__item">
              <p id="wins" class="filter__link filter__link--number">
                Standard
              </p>
            </div>
            <div class="header__item">
              <p id="wins" class="filter__link filter__link--number">Subject</p>
            </div>
            <div class="header__item">
              <p id="wins" class="filter__link filter__link--number">Subject</p>
            </div>
            <div class="header__item">
              <p id="wins" class="filter__link filter__link--number">Marks</p>
            </div>
          </div>
        </div>
        <div class="table-content">
          <div v-for="result in list" class="table-row" :key="result.id">
            <div class="table-data">
              {{ result.enrollstudent.student.rollnbr }}
            </div>
            <div class="table-data">
              {{ result.enrollstudent.student.s_name }}
            </div>
            <div class="table-data">
              {{ result.enrollstudent.standard.standardname }}
            </div>
            <div class="table-data">{{ result.subjectname.subjectname }}</div>
            <div class="table-data">{{ result.subjectmarks }}</div>
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
  name: "fees",
  data() {
    return {
      list: undefined,
      updatestandard: null,
      updatesubject: null,
      standards: null,
      subjects: null,
      showtable: true,
      marks: {
        subjectmarks: null,
      },
    };
  },
  props: {
    roll: {
      type: String,
      default: NaN,
    },
  },
  mounted() {
    this.getresults();
    Vue.axios.get("http://127.0.0.1:8000/standardlist").then((resp) => {
      this.standards = resp.data;

      console.log(resp.data);
    });
    Vue.axios.get("http://127.0.0.1:8000/subjectlist").then((resp) => {
      this.subjects = resp.data;

      console.log(resp.data);
    });
  },
  methods: {
    getresults() {
      Vue.axios
        .get("http://127.0.0.1:8000/result/" + this.roll)
        .then((resp) => {
          this.list = resp.data;

          console.log(resp.data);
        });
    },
    updateresult() {
      axios
        .post(
          "http://127.0.0.1:8000/resultpost/" +
            this.roll +
            "/" +
            this.updatestandard +
            "/" +
            this.updatesubject,
          this.marks
        )
        .then((response) => {
          console.warn(response);
          // this.smessage="Succesfully added"
          this.getresults();
          this.$bvToast.toast("Fees Submitted", {
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
              "Students does not exist and Make sure all fields are filled correctly",
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
.searchdiv {
  width: 100%;
}
.searchdiv .input-group {
  width: 350px;
}
.searchdiv .btn {
  width: 150px;
  margin-left: 20%;
}
#result .submitdiv .form-control {
  width: 25%;
  margin: 0px 5px;
}
#result .btn {
  margin: 0px;
  margin-left: 20px;
}
.submitdiv {
  margin-left: 30px;
}
.input-group-addon {
  border: 1px solid rgb(219, 219, 219);
}

// *{
//   border: 1px solid;
// }
</style>
