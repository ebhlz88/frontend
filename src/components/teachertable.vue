<template>
  <div  v-if="isloggedin" class="cont">
<h2 class="tlist">List of all Teachers</h2>
  <div id="tcard" class="d-flex justify-content-around row">
      <div class="card my-2 mx-2" v-for="items in list" :key="items.id">
        <a :href="hrefdetail + items.id">
          <img
            class="card-img-top"
            :src="'http://127.0.0.1:8000' + items.teacher_pic"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">{{ items.t_name }}</p>
            <a :href="hrefpayment + items.id">Payments</a>
          </div>
        </a>
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
  name: "tchrtable",
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
        });
    },
  },
  computed: {
    ...mapGetters(["isloggedin"]),
  },
  mounted() {
    Vue.axios.get("http://127.0.0.1:8000/allteachers").then((resp) => {
      this.list = resp.data;
    });
  },
};
</script>

<style lang="scss">
.cont{
  padding: 0px 45px;
}
#tcard a {
  text-decoration: none;
}
#tcard a:hover {
  cursor: pointer;
}
#tcard .card-img-top {
  height: 220px;
  width: 250px;
}
#tcard .card {
  width: 253px !important;
  padding: 0px !important;
  background-color: #bcc0f2ab;
}
#tcard .row {
  margin-right: 0px;
}
.tlist{
  margin-top: 30px;
}
</style>
