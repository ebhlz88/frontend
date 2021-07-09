<template>
  <div id="fees">
    <div class="row m-4">
      <div class="col-md-8 row">
        <form @submit.prevent="updatefees" class="d-flex">
          <h6 class="m-auto">Submit Fees Here</h6>
          <div class="searchdiv">
            <div class="input-group">
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="updateyear"
              >
                <option selected>Select Year</option>
                <option
                  v-for="items in year"
                  v-bind:key="items.year"
                  v-bind:value="items.year"
                >
                  {{ items.year }}
                </option>
              </select>

              <select
                class="form-select"
                aria-label="Default select example"
                v-model="selectedmonth"
              >
                <option selected>Select Month</option>
                <option
                  v-for="(items, key) in months"
                  :key="key"
                  :value="items.monthh"
                >
                  {{ items.monthh }}
                </option>
              </select>

              <select
                class="form-select"
                aria-label="Default select example"
                v-model="updatestandard"
              >
                <option selected>Select Standard</option>
                <option
                  v-for="(items, key) in standards"
                  :key="key"
                  :value="items.standardname"
                >
                  {{ items.standardname }}
                </option>
              </select>

              <label for="amount" class="m-auto">Amount submitted</label>
              <b-form-input
                id="amount"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Enter amount"
                v-model="amount.studentamount"
              ></b-form-input>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-4 row">
        <form class="d-flex">
          <div class="searchdiv">
            <div class="input-group">
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
          </div>
        </form>
      </div>
    </div>

    <div>
      <div class="table">
        <div class="table-header">
          <div class="header__item">
            <p id="name" class="filter__link">Roll No.</p>
          </div>
          <div class="header__item">
            <p id="wins" class="filter__link filter__link--number">Name</p>
          </div>
          <div class="header__item">
            <p id="wins" class="filter__link filter__link--number">Month</p>
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
          <div class="table-data">{{ fees.enrollstudent.student.rollnbr }}</div>
          <div class="table-data">{{ fees.enrollstudent.student.s_name }}</div>
          <div class="table-data">{{ fees.months.monthname }}</div>
          <div class="table-data">{{ fees.studentamount }}</div>
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
      year: undefined,
      selectedmonth: null,
      updateyear: null,
      amount: {
        studentamount: null,
      },
      updatestandard: null,
      standards: null,
      roll: 1,
      months: [
        { monthh: "january" },
        { monthh: "february" },
        { monthh: "march" },
        { monthh: "april" },
        { monthh: "may" },
        { monthh: "june" },
        { monthh: "july" },
        { monthh: "august" },
        { monthh: "september" },
        { monthh: "october" },
        { monthh: "november" },
        { monthh: "december" },
      ],
    };
  },
  mounted() {
    Vue.axios
      .get("http://127.0.0.1:8000/feesByroll/" + this.roll)
      .then((resp) => {
        this.list = resp.data;

        console.log(resp.data);
      });
    Vue.axios.get("http://127.0.0.1:8000/standardlist").then((resp) => {
      this.standards = resp.data;

      console.log(resp.data);
    });
    Vue.axios.get("http://127.0.0.1:8000/yearlist").then((resp) => {
      this.year = resp.data;

      console.warn(resp.data);
    });
  },
  methods: {
    updatefees() {
      axios
        .post(
          "http://127.0.0.1:8000/feespost/" +
            "1" +
            "/" +
            this.updateyear +
            "/" +
            this.selectedmonth +
            "/" +
            this.updatestandard,
          this.amount
        )
        .then((response) => {
          console.warn(response);
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

<style lang="scss"></style>
