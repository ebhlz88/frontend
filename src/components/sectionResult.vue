<template>
  <div id="sectionresult">
    <div class="secSelect">
      <h5>Select Standard</h5>
      <select class="form-control" v-model="selectedstandard">
        <option class="hidden" selected disabled>Please select Standard</option>
        <option v-for="items in standards" :key="items.id">
          {{ items.standardname }}
        </option>
      </select>
      <select
        split-variant="outline-primary"
        variant="primary"
        text="Select the year"
        class="form-control"
        v-model="selectedsubject"
      >
        <option disabled>Please select an Year</option>
        <option v-for="items in subjects" :key="items.id">
          {{ items.subjectname }}
        </option>
      </select>
      <button class="btn btn-primary" v-on:click="search">Search</button>
    </div>
    <div id="ww" class="resultform">
      <div v-if="resultlist" class="rowdiv">
        <p>Roll No.</p>
        <p>Name</p>
        <p>Marks</p>
      </div>
      <div class="rowdiv" v-for="items in reslength" :key="items.id">
        <p class="form-control">{{resultlist[items - 1].enrollstudent.student.rollnbr}}</p>
        <input
          class="form-control"
          :value="resultlist[items - 1].enrollstudent.student.s_name"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Enter Marks"
          v-model="markarray[items - 1]"
        />
      </div>
      <hr>
      <h6><b><u>Add New Students Results</u></b></h6>
      <div v-if="counter != 0" class="rowdiv">
        <p>Roll No.</p>
        <p>Marks</p>
      </div>
      <div id="addrowdiv" class="rowdivadditional">
        <input type="text" v-model="rollist[reslength]" class="form-control" placeholder="Enter Roll No" />
        <input type="text" v-model="markarray[reslength]" class="form-control" placeholder="Enter Marks" />
      </div>
      <div id="addrowdiv2" class="rowdivadditional">
        <input type="text" v-model="rollist[reslength+1]" class="form-control" placeholder="Enter Roll No" />
        <input type="text" v-model="markarray[reslength+1]" class="form-control" placeholder="Enter Marks" />
      </div>
      <div id="addrowdiv3" class="rowdivadditional">
        <input type="text" v-model="rollist[reslength+2]" class="form-control" placeholder="Enter Roll No" />
        <input type="text" v-model="markarray[reslength+2]" class="form-control" placeholder="Enter Marks" />
      </div>
      <div id="addrowdiv4" class="rowdivadditional">
        <input type="text" v-model="rollist[reslength+3]" class="form-control" placeholder="Enter Roll No" />
        <input type="text" v-model="markarray[reslength+3]" class="form-control" placeholder="Enter Marks" />
      </div>
      <div  id="addrowdiv5" class="rowdivadditional">
        <input type="text" v-model="rollist[reslength+4]" class="form-control" placeholder="Enter Roll No" />
        <input type="text" v-model="markarray[reslength+4]" class="form-control" placeholder="Enter Marks" />
      </div>
      <div id="addrowdiv6" class="rowdivadditional">
        <input type="text" v-model="rollist[reslength+5]" class="form-control" placeholder="Enter Roll No" />
        <input type="text" v-model="markarray[reslength+5]" class="form-control" placeholder="Enter Marks" />
      </div>
      <div id="addrowdiv7" class="rowdivadditional">
        <input type="text" v-model="rollist[reslength+6]" class="form-control" placeholder="Enter Roll No" />
        <input type="text" v-model="markarray[reslength+6]" class="form-control" placeholder="Enter Marks" />
      </div>
      <div id="addrowdiv8" class="rowdivadditional">
        <input type="text" v-model="rollist[reslength+7]" class="form-control" placeholder="Enter Roll No" />
        <input type="text" v-model="markarray[reslength+7]" class="form-control" placeholder="Enter Marks" />
      </div>
      <div id="addrowdiv9" class="rowdivadditional">
        <input type="text" v-model="rollist[reslength+8]" class="form-control" placeholder="Enter Roll No" />
        <input type="text" v-model="markarray[reslength+8]" class="form-control" placeholder="Enter Marks" />
      </div>
      <div id="addrowdiv10" class="rowdivadditional">
        <input type="text" v-model="rollist[reslength+9]" class="form-control" placeholder="Enter Roll No" />
        <input type="text" v-model="markarray[reslength+9]" class="form-control" placeholder="Enter Marks" />
      </div>
      <div>
        <button id="addbtn" class="btn btn-primary" v-on:click="addform">add</button>
      </div>
      
      <button id="savebtn" disabled class="btn btn-primary" v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      standards: null,
      selectedstandard: null,
      selectedsubject: null,
      resultlist: null,
      subjects: null,
      counter:0,
      studentmarks: {
        subjectmarks: null,
      },
      markarray: [],
      rollist: [],
      reslength: 0,
    };
  },
   computed: {
    ...mapGetters(["token"]),
    ...mapGetters(["isloggedin"]),
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
    search() {
      Vue.axios
        .get(
          "http://127.0.0.1:8000/rbystandard/" +
            this.selectedstandard +
            "/" +
            this.selectedsubject
        )
        .then((resp) => {
          document.getElementById('savebtn').disabled = false;
          this.resultlist = resp.data;
          this.reslength = resp.data.length;
          for (let i = 0; i < resp.data.length; i++) {
            this.rollist[i] = resp.data[i].enrollstudent.student.rollnbr;
          }
        });
    },
    addform() {
      this.counter++
      switch(this.counter) {
        case 1:
            document.getElementById("addrowdiv").style.display = "flex";
          break;
        case 2:
          document.getElementById("addrowdiv2").style.display = "flex";
          break;
        case 3:
          document.getElementById("addrowdiv3").style.display = "flex";
          break;
        case 4:
          document.getElementById("addrowdiv4").style.display = "flex";
          break;
        case 5:
          document.getElementById("addrowdiv5").style.display = "flex";
          break;
        case 6:
          document.getElementById("addrowdiv6").style.display = "flex";
          break;
        case 7:
          document.getElementById("addrowdiv7").style.display = "flex";
          break;
        case 8:
          document.getElementById("addrowdiv8").style.display = "flex";
          break;
        case 9:
          document.getElementById("addrowdiv9").style.display = "flex";
          break;
        case 10:
          document.getElementById("addrowdiv10").style.display = "flex";
          break;
        case 11:
          document.getElementById("addbtn").disabled = true;
          break;
} 


    },
    save() {
      for (let i = 0; i < this.rollist.length; i++) {
        this.studentmarks.subjectmarks = this.markarray[i]
        console.log(this.studentmarks)
        axios
          .post(
            "http://127.0.0.1:8000/resultpost/" +
              this.rollist[i] +
              "/" +
              this.selectedstandard +
              "/" +
              this.selectedsubject,
            this.studentmarks,
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
      }
    },
  },
};
</script>

<style>
#sectionresult {
  margin: 40px 30px;
}
.secSelect {
  display: flex;
}
.secSelect h5 {
  width: 208px;
  margin: 5px 0px;
}
.secSelect select {
  width: 220px;
  height: 35px;
  margin: 0px 8px;
}
.resultform {
  width: 70%;
  display: block;
  margin: 20px auto;
  border: 1px solid rgb(165, 164, 164);
  border-radius: 5px;
  padding-bottom: 55px;
}
.rowdiv {
  display: flex;
}
.rowdiv .form-control {
  margin: 0px 4px;
  margin-bottom: 13px;
}
.rowdiv p {
  width: 100%;
  margin: 5px 4px;
}
#savebtn {
  float: right;
  margin-right: 20px;
}
.rowdivadditional{
  display: none;
}
.rowdivadditional input{
  margin: 0px 4px;
  margin-bottom: 13px;
}
</style>
