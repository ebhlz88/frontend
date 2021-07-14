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
        <input
          type="text"
          class="form-control"
          v-model="amount.teacheramount"
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
                Date Payed
              </p>
            </div>
            <div class="header__item">
              <p id="wins" class="filter__link filter__link--number">
                Amount Payed
              </p>
            </div>
          </div>
        </div>
        <div class="table-content">
          <div v-for="payment in list" class="table-row" :key="payment.id">
            <div class="table-data">
              {{ payment.teacher.id }}
            </div>
            <div class="table-data">
              {{ payment.teacher.t_name }}
            </div>
            <div class="table-data">
              {{ payment.date_payed }}
            </div>
            <div class="table-data">{{ payment.teacheramount }}</div>
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
      amount: {
        teacheramount: null,
      },
      showtable: true,
    };
  },
  props: {
    roll: {
      type: String,
      default: NaN,
    },
  },
  mounted() {
    this.getpayments();
  },
  methods: {
    getpayments() {
      Vue.axios
        .get("http://127.0.0.1:8000/teacherpayment/" + this.roll)
        .then((resp) => {
          this.list = resp.data;

          console.log(resp.data);
        });
    },
    updatefees() {
      axios
        .post("http://127.0.0.1:8000/tpaymentpost/" + this.roll, this.amount)
        .then((response) => {
          console.warn(response);
          // this.smessage="Succesfully added"
          this.getpayments();
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
