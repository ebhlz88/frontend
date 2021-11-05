<template>
  <div id="books">
    <div class="row">
      <div class="col-md-4 row">
        <label for="standardselect" class="col-md-5 my-2"
          ><b>Select Standard</b></label
        >
        <div class="col-md-7">
          <select
            class="form-control"
            id="standardselect"
            v-model="selectedstandard"
            @change="onchange($event)"
          >
            <option selected disabled>Please select Standard</option>
            <option v-for="items in standards" :key="items.id">
              {{ items.standardname }}
            </option>
          </select>
        </div>
      </div>
      <h3 class="py-2" v-if="bookdata">
        Books for {{ bookdata[0].standard.standardname }} Standard
      </h3>
    </div>
    <div v-if="bookdata" class="d-flex justify-content-around row">
      <div class="card my-2" v-for="items in bookdata" :key="items.bookname">
        <a :href="'http://127.0.0.1:8000' + items.book">
          <img
            class="card-img-top"
            :src="'http://127.0.0.1:8000' + items.bookthumbnail"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">{{ items.bookname }}</p>
          </div>
        </a>
      </div>
    </div>
    <div v-else>
      <h1>Please Select standard</h1>
      <img class="elseimg" src="../assets/select.png" alt="Select standard" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios, axios);
export default {
  name: "books",
  data() {
    return {
      bookdata: null,
      standards: null,
      selectedstandard: null,
    };
  },
  mounted() {
    Vue.axios.get("http://127.0.0.1:8000/standardlist").then((resp) => {
      this.standards = resp.data;
    });
  },
  methods: {
    onchange(event) {
      this.selectedstandard = event.target.value;
      Vue.axios
        .get("http://127.0.0.1:8000/books/" + event.target.value)
        .then((resp) => {
          this.bookdata = resp.data;
        });
    },
  },
};
</script>

<style lang="scss">
#books {
  margin-top: 30px;
  padding: 0px 55px;
}
#books a {
  text-decoration: none;
  color: black;
}
#books a:hover {
  cursor: pointer;
}
#books .card-img-top {
  height: 200px;
}
#books .card {
  width: 407px !important;
  padding: 0px !important;
  background-color: #bcc0f2ab;
}
#books .row {
  margin-right: 0px;
}
</style>
