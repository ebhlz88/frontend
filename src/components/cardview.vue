<template>
  <div id="cardview">
    <div class="row">
      <div class="cardd animate" style="width: 14rem" v-on:click="schoolinfo">
        <img
          class="card-img-top"
          src="../assets/SchoolInfo.png"
          alt="Card image cap"
        />
        <div class="card-body">School Information</div>
      </div>
      <div class="cardd animate" style="width: 14rem" v-on:click="register">
        <img
          class="card-img-top"
          src="../assets/RegStudent.png"
          alt="Card image cap"
        />
        <div class="card-body">Registration</div>
      </div>
      <div class="cardd animate" style="width: 14rem" v-on:click="stdtmngmt">
        <img
          class="card-img-top"
          src="../assets/StudentMgmt.png"
          alt="Card image cap"
        />
        <div class="card-body">Student Management</div>
      </div>
      <div class="cardd animate" style="width: 14rem" v-on:click="staffmgmt">
        <img
          class="card-img-top"
          src="../assets/StaffMgmt.png"
          alt="Card image cap"
        />
        <div class="card-body">Staff Management</div>
      </div>
      <div class="cardd animate" style="width: 14rem" v-on:click="generaterpt">
        <img
          class="card-img-top"
          src="../assets/reports.png"
          alt="Card image cap"
        />
        <div class="card-body">Financial Report</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    stdtmngmt() {
      this.$router.push("/list");
    },
    generaterpt() {
      this.$router.push("/graph");
    },
    staffmgmt() {
      this.$router.push("/ttable");
    },
    register() {
      this.$router.push("/sform");
    },
    schoolinfo() {},
  },
};
</script>

<style>
.card-img-top {
  height: 60%;
  display: inline;
}
.cardd:hover {
  box-shadow: 0 40px 60px -20px rgba(12, 5, 62, 0.15);
  z-index: 100;
}
#cardview .btn {
  margin: 0px 10px;
  margin-bottom: 10px;
}
.cardd .animate {
  margin: 0px 25px;
  margin-bottom: 15px;
}
#cardview .card-body {
  background-color: rgb(49, 127, 222);
  color: white;
  border-radius: 0.7rem;
}
.row {
  display: flex;
  justify-content: center;
}
.footer {
  background-color: yellow;
  height: 20px;
}
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
#cardview {
  margin-top: 1px;
}
.cardd {
  height: 54vh;
  background-color: transparent;
  margin: 8vh;
  margin-bottom: 0px;
  padding: 0px 0px;
}
.cardd:hover {
  cursor: pointer;
  background-color: #fff;
  box-shadow: none;
}
/* *{
  border: 1px solid;
} */
</style>
