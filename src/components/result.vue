<template>
  <div id="result">
    <div id="rowdiv" class="row" v-if="!showModal">
      <div class="col-md-7 btndiv">
        <button
          v-if="isloggedin"
          class="btn btn-primary"
          v-on:click="showModal = true"
        >
          Add Result
        </button>
        <router-link class="btn btn-primary" :to="'/rgraph/' + roll">
          Result Graph
        </router-link>
      </div>
      <div class="col-md-4 row">
        <label for="standardselect" class="col-md-5 my-2"
          ><b>Select Standard</b></label
        >
        <div class="col-md-7">
          <select
            class="form-control mleft col-md-7"
            id="standardselect"
            v-model="filterstandard"
            @change="find($event)"
          >
            <option selected disabled>Please select Standard</option>
            <option v-for="items in standards" :key="items.id">
              {{ items.standardname }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div id="popup" v-if="isloggedin">
      <transition name="fade" appear>
        <div
          class="modal-overlay"
          v-if="showModal"
          v-on:click="showModal = false"
        ></div>
      </transition>
      <!-- <transition name="slide" appear> -->
      <div class="modalll" v-if="showModal">
        <div class="modal-body p-4 addfees">
          <h2>Add Result</h2>
          <div class="form-group d-flex my-3">
            <select class="form-control" v-model="updatestandard">
              <option selected disabled>Please select Standard</option>
              <option
                v-for="items in standards"
                :key="items.id"
                :value="items.classid"
              >
                {{ items.standardname }}
              </option>
            </select>
          </div>
          <div class="form-group d-flex my-3">
            <select class="form-control" v-model="updatesubject">
              <option class="hidden" selected disabled>
                Please select subject
              </option>
              <option v-for="items in subjects" :key="items.id">
                {{ items.subjectname }}
              </option>
            </select>
          </div>
          <div class="form-group d-flex my-3">
            <input
              type="text"
              class="form-control"
              v-model="marks.subjectmarks"
              aria-describedby="start-date"
              placeholder="Subject Marks"
            />
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-primary submit"
              v-on:click="updateresult"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <!-- </transition> -->
    </div>
    <!-- <div class="searchdiv m-4 row">
    </div> -->
    <resultlist :fstandard="filterstandard" :rollnbr="roll" />
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

import { mapGetters } from "vuex";
import resultlist from "./resultlist.vue";

Vue.use(VueAxios, axios);
export default {
  name: "result",
  components: {
    resultlist,
  },
  data() {
    return {
      list: undefined,
      updatestandard: null,
      updatesubject: null,
      standards: null,
      subjects: null,
      showtable: true,
      photo: null,
      filterstandard: null,
      resultlist: null,
      showModal: false,
      marks: {
        subjectmarks: null,
      },
    };
  },
  computed: {
    ...mapGetters(["token"]),
    ...mapGetters(["isloggedin"]),
  },
  props: {
    roll: {
      type: String,
      default: NaN,
    },
  },
  mounted() {
    Vue.axios.get("http://127.0.0.1:8000/standardlist").then((resp) => {
      this.standards = resp.data;
    });
    Vue.axios.get("http://127.0.0.1:8000/subjectlist").then((resp) => {
      this.subjects = resp.data;
    });
  },
  methods: {
    find(event) {
      this.$children[1].getresults(event.target.value);
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
          this.marks,
          this.token
        )
        .then(() => {
          // this.smessage="Succesfully added"
          this.$toaster.success("Succesfully added.");
        })
        .catch((error) =>
          console.log(
            error.response.request._response,
            this.$toaster.error("Invalid inputs.")
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

#result {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#result body {
  font-family: "montserrat", sans-serif;
}

#popup {
  position: absolute;
  height: 300px;
  width: 100%;
  justify-content: center;
  align-items: center;
}

#result .button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  height: 40px;
  display: inline-block;
  background-image: linear-gradient(to right, #2e3ecc, #2b3596);
  border-radius: 8px;

  color: #fff;
  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

  &:hover {
    box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
  }
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 524px;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}
.modalll {
  position: absolute;
  top: 20%;
  left: 36%;
  height: auto;
  width: 400px;
  border-radius: 16px;
  z-index: 99;
  background-color: #fff;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 800px;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  background-color: #fff;
  border-radius: 16px;

  padding: 25px;

  p {
    color: #666;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
#rowdiv .form-group {
  height: 30px;
}
.submit {
  margin-left: 0px;
  width: 130px;
  height: 40px;
}
#rowdiv .row {
  height: 40px;
}
#popup .form-group {
  margin: 0px 20px;
}
#rowdiv {
  margin-top: 25px !important;
  justify-content: unset !important;
  margin-right: 0px;
}
#rowdiv .btndiv {
  padding-right: 30%;
}
@media screen and (max-width: 412px) {
 #resultlist{
   margin-top: 4px;
 }
  #rowdiv .row{
height: auto;
 margin-left: 1px;
 }
 .modalll {
  left: 0;
}
 
}
</style>
