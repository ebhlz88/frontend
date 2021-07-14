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
            <p id="wins" class="filter__link filter__link--number">
              father's name
            </p>
          </div>
          <div class="header__item">
            <p id="draws" class="filter__link filter__link--number">sex</p>
          </div>
          <div class="header__item">
            <p id="draws" class="filter__link filter__link--number">
              Mobile Number
            </p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">
              Speciality
            </p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">
              DATE OF hiring
            </p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">ADDRESS</p>
          </div>
          <div class="header__item">
            <p id="losses" class="filter__link filter__link--number">
              CURRENT POSITION
            </p>
          </div>
        </div>
        <div class="table-content">
          <div v-for="item in list" v-bind:key="item.id" class="table-row">
            <div class="table-data">{{ item.id }}</div>
            <div class="table-data">{{ item.t_name }}</div>
            <div class="table-data">{{ item.t_fname }}</div>
            <div class="table-data">{{ item.sex }}</div>
            <div class="table-data">{{ item.m_number }}</div>
            <div class="table-data">{{ item.speciality }}</div>
            <div class="table-data">{{ item.date_hiring }}</div>
            <div class="table-data">{{ item.address }}</div>
            <div class="table-data">{{ item.c_position }}</div>
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
      tsearchitem: null,
    };
  },
  props: {
    roll: {
      type: String,
      default: NaN,
    },
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
