<template>
  <div id="fees">
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
        <input
          type="text"
          class="form-control"
          v-model="amount.studentamount"
          aria-describedby="start-date"
          placeholder="Submit Amount Here"
        />
        <input
          type="Submit"
          class="btn btn-primary"
          v-on:click="updatefees"
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
              <p id="wins" class="filter__link filter__link--number">
                Date Submitted
              </p>
            </div>
            <div class="header__item">
              <p id="wins" class="filter__link filter__link--number">
                Amount Submitted
              </p>
            </div>
          </div>
        </div>
        <div class="table-content">
          <div v-for="fees in list" class="table-row" :key="fees.id">
            <div class="table-data">
              {{ fees.enrollstudent.student.rollnbr }}
            </div>
            <div class="table-data">
              {{ fees.enrollstudent.student.s_name }}
            </div>
            <div class="table-data">
              {{ fees.enrollstudent.standard.standardname }}
            </div>
            <div class="table-data">{{ fees.date_enroll }}</div>
            <div class="table-data">{{ fees.studentamount }}</div>
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

import { mapGetters } from "vuex";

Vue.use(VueAxios, axios);
export default {
  name: "fees",
  data() {
    return {
      list: undefined,
      selectedmonth: null,
      amount: {
        studentamount: null,
      },
      updatestandard: null,
      standards: null,
      showtable: true,
    };
  },
  computed: {
    ...mapGetters(["token"]),
  },
  props: {
    roll: {
      type: String,
      default: NaN,
    },
  },
  mounted() {
    this.getfees();
    Vue.axios.get("http://127.0.0.1:8000/standardlist").then((resp) => {
      this.standards = resp.data;
    });
  },
  methods: {
    getfees() {
      Vue.axios
        .get("http://127.0.0.1:8000/feesByroll/" + this.roll)
        .then((resp) => {
          this.list = resp.data;
        });
    },
    updatefees() {
      axios
        .post(
          "http://127.0.0.1:8000/feespost/" +
            this.roll +
            "/" +
            this.updatestandard,
          this.amount,
          this.token
        )
        .then(() => {
          // this.smessage="Succesfully added"
          this.getfees();
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
#fees .submitdiv .form-control {
  width: 35%;
  margin: 0px 5px;
}
#fees .btn {
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
