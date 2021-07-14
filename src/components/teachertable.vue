<template>
  <div>
    <form>
      <div class="formrow">
        <input
          type="text"
          v-model="tsearchitem"
          class="form-control"
          placeholder="Search Here"
        />
        <button class="btn btn-primary" v-on:click="searchteacher">
          Search
        </button>
      </div>
    </form>

    <div>
      <div class="table">
        <div class="table-header">
          <div class="header__item">
            <p id="name" class="filter__link">Roll No.</p>
          </div>
          <div class="header__item">
            <p id="wins" class="filter__link filter__link--number">name</p>
          </div>
          <div class="header__item">
            <p id="draws" class="filter__link filter__link--number">
              Mobile Number
            </p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">
              Fee Detail
            </p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">
              Speciality
            </p>
          </div>
        </div>
        <div class="table-content">
          <div v-for="item in list" v-bind:key="item.id" class="table-row">
            <div class="table-data">{{ item.id }}</div>
            <a :href="hrefdetail + item.id" class="table-data">{{
              item.t_name
            }}</a>
            <div class="table-data">{{ item.m_number }}</div>
            <div class="table-data">{{ item.speciality }}</div>
            <div class="table-data">
              <a :href="hrefpayment + item.id">Payment</a>
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
  name: "table",
  data() {
    return {
      list: undefined,
      hrefpayment: "/#/payments/",
      hrefdetail: "/#/tdetail/",
      tsearchitem: null,
    };
  },
  methods: {
    searchteacher() {
      Vue.axios
        .get("http://127.0.0.1:8000/teachersearch/?search=" + this.tsearchitem)
        .then((resp) => {
          this.list = resp.data;

          console.log(resp.data);
        });
    },
  },
  mounted() {
    Vue.axios.get("http://127.0.0.1:8000/allteachers").then((resp) => {
      this.list = resp.data;

      console.log(resp.data);
    });
  },
};
</script>

<style lang="scss">
$base-spacing-unit: 24px;
$half-spacing-unit: $base-spacing-unit / 2;

$color-alpha: #1772ff;
$color-form-highlight: #eeeeee;

*,
*:before,
*:after {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

// .container {
//   max-width: 1000px;
//   margin-right: auto;
//   margin-left: auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// }

.table {
  width: 100%;
  border: 1px solid $color-form-highlight;
}

.table-header {
  display: flex;
  width: 100%;
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  padding: ($half-spacing-unit * 1.5) 0;
}

.table-row {
  display: flex;
  width: 100%;
  padding: ($half-spacing-unit * 1.5) 0;

  &:nth-of-type(odd) {
    background: $color-form-highlight;
  }
}

.table-data,
.header__item {
  flex: 1 1 20%;
  text-align: center;
  height: 38px;
}

.header__item {
  text-transform: uppercase;
}

.filter__link {
  color: white;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding-left: $base-spacing-unit;
  padding-right: $base-spacing-unit;
}
.formrow {
  display: flex;
  margin: 20px;
  width: 330px;
}
.btn {
  margin: auto;
  margin-left: 8px;
}
</style>
