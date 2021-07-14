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
            <p id="name" class="filter__link">Roll No.</p>
          </div>
          <div class="header__item">
            <p id="wins" class="filter__link filter__link--number">name</p>
          </div>
          <div class="header__item">
            <p id="draws" class="filter__link filter__link--number">
              FATHER NAME
            </p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">
              sex
            </p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">father's MOBILE NO.</p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">DoB</p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">ADDRESS</p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">Date of joining</p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">Current position</p>
          </div>
        </div>
        
        <div class="table-content">
          <div class="table-row">
            <div class="table-data">{{ list.rollnbr }}</div>
            <div class="table-data">{{ list.s_name }}</div>
            <div class="table-data">{{ list.s_fname }}</div>
            <div class="table-data">{{ list.sex }}</div>
            <div class="table-data">{{ list.fm_number }}</div>
            <div class="table-data">{{ list.dob }}</div>
            <div class="table-data">{{ list.address }}</div>
            <div class="table-data">{{ list.date_join }}</div>
            <div class="table-data">{{ list.c_position }}</div>

            
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
      hreffee: "/#/fees/",
      hrefresult: "/#/result/",
      hrefdetail: "/#/sdetail/",
      searchitem: null,
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
    Vue.axios.get("http://127.0.0.1:8000/student/"+this.roll).then((resp) => {
      this.list = resp.data;

      console.log(resp.data);
    });
  },
};
</script>

<style lang="scss">

</style>
