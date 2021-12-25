<template>
  <div v-if="isloggedin" id="sectionresult">
    <div class="secSelect">
      <h5>Select Standard</h5>
      <select class="form-control" v-model="selectedstandard">
        <option value="" disabled selected>Please select Standard</option>
        <option
          v-for="items in standards"
          :value="items.classid"
          :key="items.id"
        >
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
        <option disabled>Please select Subject</option>
        <option v-for="items in subjects" :key="items.id">
          {{ items.subjectname }}
        </option>
      </select>
      <button class="btn btn-primary" v-on:click="search">Search</button>
    </div>
    <div class="maindiv">
      <div id="ww" class="resultform">
        <div v-if="resultlist" class="rowdiv">
          <p>Roll No.</p>
          <p>Name</p>
          <p>Marks</p>
          <p>Status</p>
        </div>
        <div class="rowdiv" v-for="items in reslength" :key="items.id">
          <p class="form-control">
            {{ resultlist[items - 1].enrollstudent.student.rollnbr }}
          </p>
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
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[items - 1]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <hr v-if="resultlist" />
        <h6 v-if="resultlist">
          <b><u>Add New Students Results</u></b>
        </h6>
        <div v-if="counter != 0" class="rowdivv">
          <p>Roll No.</p>
          <p>Marks</p>
          <p>Status</p>
        </div>
        <div id="addrowdiv" class="rowdivadditional">
          <input
            type="text"
            v-model="rollist[reslength]"
            class="form-control"
            placeholder="Enter Roll No"
          />
          <input
            type="text"
            v-model="markarray[reslength]"
            class="form-control"
            placeholder="Enter Marks"
          />
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[reslength]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <div id="addrowdiv2" class="rowdivadditional">
          <input
            type="text"
            v-model="rollist[reslength + 1]"
            class="form-control"
            placeholder="Enter Roll No"
          />
          <input
            type="text"
            v-model="markarray[reslength + 1]"
            class="form-control"
            placeholder="Enter Marks"
          />
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[reslength + 1]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <div id="addrowdiv3" class="rowdivadditional">
          <input
            type="text"
            v-model="rollist[reslength + 2]"
            class="form-control"
            placeholder="Enter Roll No"
          />
          <input
            type="text"
            v-model="markarray[reslength + 2]"
            class="form-control"
            placeholder="Enter Marks"
          />
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[2]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <div id="addrowdiv4" class="rowdivadditional">
          <input
            type="text"
            v-model="rollist[reslength + 3]"
            class="form-control"
            placeholder="Enter Roll No"
          />
          <input
            type="text"
            v-model="markarray[reslength + 3]"
            class="form-control"
            placeholder="Enter Marks"
          />
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[reslength + 3]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <div id="addrowdiv5" class="rowdivadditional">
          <input
            type="text"
            v-model="rollist[reslength + 4]"
            class="form-control"
            placeholder="Enter Roll No"
          />
          <input
            type="text"
            v-model="markarray[reslength + 4]"
            class="form-control"
            placeholder="Enter Marks"
          />
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[reslength + 4]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <div id="addrowdiv6" class="rowdivadditional">
          <input
            type="text"
            v-model="rollist[reslength + 5]"
            class="form-control"
            placeholder="Enter Roll No"
          />
          <input
            type="text"
            v-model="markarray[reslength + 5]"
            class="form-control"
            placeholder="Enter Marks"
          />
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[reslength + 5]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <div id="addrowdiv7" class="rowdivadditional">
          <input
            type="text"
            v-model="rollist[reslength + 6]"
            class="form-control"
            placeholder="Enter Roll No"
          />
          <input
            type="text"
            v-model="markarray[reslength + 6]"
            class="form-control"
            placeholder="Enter Marks"
          />
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[reslength + 6]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <div id="addrowdiv8" class="rowdivadditional">
          <input
            type="text"
            v-model="rollist[reslength + 7]"
            class="form-control"
            placeholder="Enter Roll No"
          />
          <input
            type="text"
            v-model="markarray[reslength + 7]"
            class="form-control"
            placeholder="Enter Marks"
          />
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[reslength + 7]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <div id="addrowdiv9" class="rowdivadditional">
          <input
            type="text"
            v-model="rollist[reslength + 8]"
            class="form-control"
            placeholder="Enter Roll No"
          />
          <input
            type="text"
            v-model="markarray[reslength + 8]"
            class="form-control"
            placeholder="Enter Marks"
          />
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[reslength + 8]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <div id="addrowdiv10" class="rowdivadditional">
          <input
            type="text"
            v-model="rollist[reslength + 9]"
            class="form-control"
            placeholder="Enter Roll No"
          />
          <input
            type="text"
            v-model="markarray[reslength + 9]"
            class="form-control"
            placeholder="Enter Marks"
          />
          <div class="faildiv">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="failstatusArray[reslength + 9]"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Fail
            </label>
          </div>
        </div>
        <div v-if="resultlist">
          <button id="addbtn" class="btn btn-primary" v-on:click="addform">
            add
          </button>
        </div>

        <button
          v-if="resultlist"
          id="savebtn"
          disabled
          class="btn btn-primary"
          v-on:click="save"
        >
          Save
        </button>
        <h3 v-if="!resultlist">Select Subject and Standard</h3>
      </div>
      <div class="resultform">
        <div class="totalResultdiv">
          <p>Select Standard</p>
          <select
            class="form-control"
            @change="passGetMethod"
            v-model="passStandard"
          >
            <option class="hidden" selected disabled>
              Please select Standard
            </option>
            <option
              v-for="items in standards"
              :key="items.id"
              :value="items.classid"
            >
              {{ items.standardname }}
            </option>
          </select>
          <button @click="passmethod" class="btn btn-primary">
            Promote Passed Students
          </button>
        </div>
        <div v-if="rollListsum.length" class="rowdiv">
          <p>Roll No.</p>
          <p>Name</p>
          <p>Total Marks</p>
          <p>Status</p>
        </div>
        <div v-for="items in rollListsum.length" :key="items" class="rowdiv">
          <p>{{ rollListsum[items - 1] }}</p>
          <p>{{ nameArray[items - 1] }}</p>
          <p>{{ sumMarkarray[items - 1] }}</p>
          <p v-if="overAllFailArray[items - 1]">Failed</p>
          <p v-if="!overAllFailArray[items - 1]">Passed</p>
        </div>
      </div>
    </div>
    <vue-confirm-dialog></vue-confirm-dialog>
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
      allresult: null,
      resultlist: null,
      subjects: null,
      counter: 0,
      studentmarks: {
        subjectmarks: null,
        fail: true,
      },
      markarray: [],
      reslength: 0,
      rollist: [],
      rollListsum: [],
      markSum: 0,
      sumMarkarray: [],
      failstatusArray: [],
      subjectArray: [],
      nameArray: [],
      passStandard: null,
      overAllFailArray: [],
      overAllFail: null,
      success: false,
      countertoast: 1,
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
    passGetMethod() {
      this.rollListsum = [];
      this.nameArray = [];
      this.sumMarkarray = [];
      Vue.axios
        .get("http://127.0.0.1:8000/resbystandard/" + this.passStandard)
        .then((resp) => {
          this.allresult = resp.data;
          for (let i = 0; i < this.allresult.length; i++) {
            if (
              !this.rollListsum.includes(
                this.allresult[i].enrollstudent.student.rollnbr
              )
            ) {
              this.rollListsum.push(
                this.allresult[i].enrollstudent.student.rollnbr
              );
              this.nameArray.push(
                this.allresult[i].enrollstudent.student.s_name
              );
              for (let j = 0; j < this.allresult.length; j++) {
                if (
                  this.allresult[i].enrollstudent.student.rollnbr ==
                    this.allresult[j].enrollstudent.student.rollnbr &&
                  !this.subjectArray.includes(
                    this.allresult[j].subjectname.subjectname
                  )
                ) {
                  this.subjectArray.push(
                    this.allresult[j].subjectname.subjectname
                  );
                  this.markSum += this.allresult[j].subjectmarks;
                  if (this.allresult[j].fail) {
                    this.overAllFail = true;
                  } else {
                    this.overAllFail = false;
                  }
                }
              }
              this.overAllFailArray.push(this.overAllFail);
              this.overAllFail = false;
              this.subjectArray = [];
              this.sumMarkarray.push(this.markSum);
              this.markSum = 0;
            }
          }
        });
    },
    passmethod() {
      this.$confirm({
        message: "Are you sure you want to Promote the students",
        button: {
          no: "No",
          yes: "Yes",
        },
        /**
         * Callback Function
         * @param {Boolean} confirm
         */
        callback: (confirm) => {
          if (confirm) {
            let success = false;
            for (let i = 0; i < this.rollListsum.length; i++) {
              if (!this.overAllFailArray[i]) {
                Vue.axios
                  .get(
                    "http://127.0.0.1:8000/studentstandard/" +
                      this.rollListsum[i]
                  )
                  .then(() => {
                    success = true;
                  });
              }
            }
            if (!success) {
              this.$toaster.success("Succesfully Promoted.");
            } else {
              this.$toaster.error("Invalid inputs.");
            }
          }
        },
      });
    },
    search() {
      (this.resultlist = null), (this.reslength = null), (this.rollist = []);
      this.markarray = [];
      this.failstatusArray = [];
      Vue.axios
        .get(
          "http://127.0.0.1:8000/rbystandard/" +
            this.selectedstandard +
            "/" +
            this.selectedsubject
        )
        .then((resp) => {
          this.resultlist = resp.data;
          this.reslength = resp.data.length;
          for (let i = 0; i < resp.data.length; i++) {
            this.rollist[i] = resp.data[i].enrollstudent.student.rollnbr;
          }
          setTimeout(function () {
            document.getElementById("savebtn").disabled = false;
            //your code to be executed after 1 second
          }, 500);
        });
    },
    addform() {
      this.counter++;
      switch (this.counter) {
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
      this.countertoast = 1;
      for (let i = 0; i < this.rollist.length; i++) {
        this.studentmarks.subjectmarks = this.markarray[i];
        this.studentmarks.fail = this.failstatusArray[i];
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
            if (this.countertoast == 1) {
              this.$toaster.success("Succesfully added.");
              this.countertoast = this.countertoast + 1;
            }
          })
          .catch(() => {
            if (this.countertoast == 1) {
              this.$toaster.error("Invalid inputs.");
              this.countertoast = this.countertoast + 1;
            }
          });
      }

      // setTimeout(function () {
      //   console.log(this.success)

      // }, 500);
    },
  },
};
</script>

<style>
#sectionresult {
  margin: 40px 30px;
  font-size: 1rem;
}
.maindiv {
  display: flex;
}
.secSelect {
  display: flex;
  width: 50%;
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
  width: 50%;
  display: block;
  margin: 20px 20px;
  border: 1px solid rgb(165, 164, 164);
  border-radius: 5px;
  padding: 15px 30px;
  min-height: 75vh;
}
.rowdiv {
  display: flex;
}
.rowdiv .form-control {
  margin: 0px 4px;
  margin-bottom: 13px;
}
.rowdiv p {
  width: 72%;
  margin: 5px 4px;
}
#savebtn {
  float: right;
  margin-right: 20px;
}
.rowdivadditional {
  display: none;
  width: 65%;
  margin: auto auto;
}
.rowdivv {
  display: flex;
  width: 70%;
  margin: auto auto;
}
.rowdivv p {
  width: 100%;
  margin: 5px 4px;
}
.rowdivadditional input {
  margin: 0px 4px;
  margin-bottom: 13px;
}
.faildiv {
  width: 13rem;
  padding: 5px;
  margin: 5px;
}
#statusfail {
  float: right;
}
.totalResultdiv {
  display: flex;
  align-items: center;
}
.totalResultdiv p {
  margin: auto 7px;
}
.totalResultdiv .btn {
  margin-left: auto;
}
.totalResultdiv select {
  width: 30%;
}

@media screen and (max-width: 450px) {
  #sectionresult {
    margin: 40px 0px;
  }
  .secSelect {
    display: block;
    width: 89%;
    margin: 0px auto;
  }
  .secSelect select {
    margin: 10px auto;
  }

  .maindiv {
    display: block;
    margin: 25px 0px;
    margin-right: 20px;
    font-size: 0.9rem;
  }
  .maindiv .form-control {
    font-size: 0.8rem;
  }
  .resultform {
    width: 100%;
    margin: 20px 10px;
    padding: 15px 5px;
    padding-bottom: 50px;
    min-height: 2vh;
  }
  .totalResultdiv {
    display: block;
  }
  .totalResultdiv select {
    margin: 5px auto;
    width: 60%;
  }
}
</style>
