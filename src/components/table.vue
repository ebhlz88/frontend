<template>
  <div>
    <form>
      <div class="formrow">
        <input
          type="text"
          v-model="searchitem"
          class="form-control"
          placeholder="Search Here"
        />
        <button v-on:click="searchstudent" class="btn btn-primary">
          Search
        </button>
      </div>
    </form>

    <div>
      <div class="table">
        <div class="table-header">
          <div class="header__item">
            <p class="filter__link">Roll No.</p>
          </div>
          <div class="header__item">
            <p class="filter__link filter__link--number">name</p>
          </div>
          <div class="header__item">
            <p class="filter__link filter__link--number">FATHER NAME</p>
          </div>
          <div class="header__item">
            <p class="filter__link filter__link--number">Fee Detail</p>
          </div>
          <div class="header__item">
            <p class="filter__link filter__link--number">Result</p>
          </div>
          <div v-if="isloggedin" class="header__item">
            <p class="filter__link filter__link--number">Delete</p>
          </div>
        </div>
        <div class="table-content">
          <div v-for="item in list" v-bind:key="item.id" class="table-row">
            <div class="table-data">{{ item.rollnbr }}</div>
            <a :href="hrefdetail + item.rollnbr" class="table-data">{{
              item.s_name
            }}</a>
            <div class="table-data">{{ item.s_fname }}</div>
            <div class="table-data">
              <a :href="hreffee + '' + item.rollnbr">Fees</a>
            </div>
            <div class="table-data">
              <a :href="hrefresult + '' + item.rollnbr">Result</a>
            </div>
            <div v-if="isloggedin" class="table-data">
              <button @click="delet(item.rollnbr)" class="btn btn-primary">
                Delete
              </button>
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
import { mapGetters } from "vuex";
Vue.use(VueAxios, axios);
export default {
  name: "stable",
  data() {
    return {
      list: undefined,
      hreffee: "/#/fees/",
      hrefresult: "/#/result/",
      hrefdetail: "/#/sdetail/",
      searchitem: null,
    };
  },
  computed: {
    ...mapGetters(["token"]),
    ...mapGetters(["isloggedin"]),
  },
  methods: {
    searchstudent() {
      Vue.axios
        .get("http://127.0.0.1:8000/studentsearch/?search=" + this.searchitem)
        .then((resp) => {
          this.list = resp.data;
        });
    },
    delet(a) {
      Vue.axios
        .delete("http://127.0.0.1:8000/student/" + a, this.token)
        .then(() => {
          this.$toaster.success("Deleted Successfully.");
          this.getstudents();
        })
        .catch(() => this.$toaster.error("Unsuccessfull."));
    },
    getstudents() {
      Vue.axios.get("http://127.0.0.1:8000/").then((resp) => {
        this.list = resp.data;
      });
    },
  },
  mounted() {
    this.getstudents();
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
