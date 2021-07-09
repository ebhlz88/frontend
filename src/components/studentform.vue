<template>
  <div id="form">
    <div class="container">
      <h2>Add a new Student</h2>
      <b-form @submit.prevent="submitData" method="POST" id="onlyform">
        <div class="row rowmargin">
          <div class="form-group col-md-6 row">
            <b-form-group
              id="sname"
              label="Student Name"
              label-for="sname"
              class="col-md-3 col-form-label marginleft"
              label-align="left"
            ></b-form-group>
            <div class="formgroup col-md-8">
              <b-form-input
                id="sntxtbox"
                v-model="posts.s_name"
                placeholder="Enter Student name"
                class="form-control"
                required
              ></b-form-input>
            </div>
          </div>

          <div class="form-group col-md-6 row">
            <b-form-group
              id="fname"
              label="Father Name"
              label-for="fname"
              class="col-sm-3 col-form-label marginleft"
              label-align="left"
            ></b-form-group>
            <div class="formgroup col-md-8">
              <b-form-input
                id="ftxtbox"
                v-model="posts.s_fname"
                placeholder="Enter Fathers name"
                class="form-control"
                required
              ></b-form-input>
            </div>
          </div>
        </div>

        <div class="row rowmargin">
          <div class="form-group col-md-6 row">
            <b-form-group
              id="sex"
              label="Sex"
              class="col-sm-3 col-form-label toleft marginleft"
              label-for="sex"
            ></b-form-group>
            <b-form-radio-group
              class="col-sm-3 toleft"
              v-model="posts.sex"
              :options="sexoptions"
            ></b-form-radio-group>
          </div>
          <div class="form-group col-md-6 row">
            <b-form-group
              id="fname"
              label="Father Mobile Number"
              label-for="fmobile"
              class="col-sm-3 col-form-label marginleft"
              label-align="left"
            ></b-form-group>
            <div class="formgroup col-md-8">
              <b-form-input
                id="fmntxtbox"
                v-model="posts.fm_number"
                placeholder="Enter Fathers Mobile Number"
                class="form-control"
                required
              ></b-form-input>
            </div>
          </div>
        </div>

        <div class="form-group row rowmargin">
          <div class="fromgroup col-md-6 row">
            <b-form-group
              id="doj"
              label="Date of Birth"
              label-for="dob"
              class="col-md-3 m-auto marginleft"
            ></b-form-group>
            <div class="formgroup col-md-8 row">
              <b-input-group class="formgroup">
                <b-form-input
                  type="text"
                  v-model="posts.dob"
                  id="dob"
                  class="form-control"
                  placeholder="DD-MM-YY"
                  autocomplete="off"
                >
                </b-form-input>
                <b-input-group-append class="m-auto">
                  <b-form-datepicker
                    placeholder="Enter Students joining date"
                    button-only
                    right
                    v-model="posts.dob"
                    today-button
                    reset-button
                    close-button
                    locale="en-US"
                  ></b-form-datepicker>
                </b-input-group-append>
              </b-input-group>
            </div>
          </div>

          <div class="col-md-6 row">
            <b-form-group
              id="doj"
              label="Date of Joining"
              label-for="doj"
              class="col-md-3 m-auto marginleft"
            ></b-form-group>
            <div class="formgroup col-md-8 row">
              <b-input-group class="formgroup">
                <b-form-input
                  type="text"
                  id="dojtxt"
                  v-model="posts.date_join"
                  class="formgroup"
                  placeholder="DD-MM-YY"
                  autocomplete="off"
                >
                </b-form-input>
                <b-input-group-append class="m-auto">
                  <b-form-datepicker
                    placeholder="Enter Students joining date"
                    aria-controls="dojtxt"
                    button-only
                    right
                    v-model="posts.date_join"
                    today-button
                    reset-button
                    close-button
                    locale="en-US"
                  ></b-form-datepicker>
                </b-input-group-append>
              </b-input-group>
            </div>
          </div>
        </div>

        <div class="form-group row rowmargin">
          <div class="col-md-2">
            <b-form-group
              id="address"
              label="Student's address"
              label-align="left"
              label-for="address"
              class="formgroup marginzero toleft"
            ></b-form-group>
          </div>
          <div class="col-md-10">
            <b-form-input
              id="addresstxtbox"
              v-model="posts.address"
              class="input"
              placeholder="Enter Student's address"
            ></b-form-input>
          </div>
        </div>

        <!-- <b-form-group id="mobile" label="Student Contact Number" label-align="left" label-for="mobile" class="formgroup"></b-form-group>
                <b-form-input id="mtxtbox" placeholder="Enter Student's Contact Number"  class="input"
                ></b-form-input>
            

            <b-form-group id="fmobile" label="Father or guardian Mobile Number" label-align="left" label-for="fmobile" class="formgroup"></b-form-group>
                <b-form-input id="fmobiletxtbox"  class="input" placeholder="Enter Father or Guardian mobile Number" 
                ></b-form-input> -->
        <!-- <b-form-group id="email" label="Student Email address" label-align="left" label-for="email" class="formgroup"></b-form-group>
                <b-form-input id="emailtxtbox"  class="input" placeholder="Enter Student's email address" 
                ></b-form-input>
            <b-form-group id="address" label="Student's address" label-align="left" label-for="address" class="formgroup"></b-form-group>
                <b-form-input id="addresstxtbox"  class="input" placeholder="Enter Student's address" 
                ></b-form-input> -->

        <b-form-group
          id="c_position"
          label="Is currently enrolled"
          label-align="left"
          label-for="c_position"
          class="formgroup"
        ></b-form-group>
        <b-form-checkbox name="enrolled" v-model="posts.c_position" switch>
          Is enrolled
        </b-form-checkbox>
        <b-button class="formgroup" type="submit" variant="success"
          >Add Student</b-button
        >
      </b-form>
      <!-- <button v-on:click="hh">button</button>

                    {{this.token}} -->

      <!--     
        <div class="form-group row">
            
            <div class="form-group col-md-6 row">
            <b-form-group id="sname" 
            label="Student Name" label-for="sname" 
            class="col-md-3" label-align="left" ></b-form-group>
            <div class="col-md-7 row">
                <b-form-input id="dob" placeholder="Enter Student name" class="form-control"
                required></b-form-input>
           </div>
      <b-input-group-append  class="col-md-2">
        <b-form-datepicker
          locale="en-US"
          aria-controls="example-input"
          button-only
          right
          :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
        ></b-form-datepicker>
      </b-input-group-append>
                </div>

                <div class="form-group col-md-6 row">
                     <div class="col-md-4 row">
             <b-form-group id="doj" label="Date of Joining" label-align="left" 
                label-for="doj" class="formgroup"
                ></b-form-group>
                     </div>
                     <div class="col-md-8 row">
                <b-input-group class="mb-3">
                <b-form-input type="text" id="dojtxt"  class="input" placeholder="DD-MM-YY"
                autocomplete="off">
                </b-form-input>
            <b-input-group-append>
                <b-form-datepicker placeholder="Enter Students joining date" 
                aria-controls="dojtxt" button-only right today-button reset-button 
                close-button locale="en-US"
                ></b-form-datepicker>
                </b-input-group-append>
                </b-input-group>
                </div>
                </div>
                

            </div>  -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      cposition: null,
      sexoptions: [
        { text: "Male", value: "True" },
        { text: "Female", value: "False" },
      ],
      posts: {
        s_name: null,
        s_fname: null,
        dob: null,
        date_join: null,
        c_position: true,
        address: null,
        fm_number: null,
        sex: null,
      },
    };
  },
  methods: {
    submitData() {
      axios
        .post("http://127.0.0.1:8000", this.posts)
        .then((response) => {
          console.log(response);

          // this.smessage="Succesfully added"
          this.$bvToast.toast("Succesfully added", {
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
              "Make sure all fields are filled or pass Null value",
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

<style>
#form {
  background-color: rgb(83, 83, 158);
  color: white;
  position: absolute;
  width: 100%;
  height: auto;
}
#onlyform {
  margin: 0px;
}
.form-group {
  margin-top: 18px;
}
.marginleft {
  margin: 3px;
}
.formgroup {
  margin: 10px;
}

.marginzero {
  margin: 0px 0px !important;
}
.toleft {
  margin-right: auto;
}
.form-control {
  height: 40px;
  margin: auto;
}
/* *{
    border: 1px solid;
}    */
.rowmargin {
  margin: 37.8px 0px;
}
</style>
