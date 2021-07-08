<template>
  <div id="cardview">
    <h1>this is cardview</h1>
    <div class="row">
      <div class="cardd animate" style="width: 22rem">
        <img
          class="card-img-top"
          src="../assets/cardimage1.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <div class="diplay">
            <router-link class="btn btn-primary" to="/list">View</router-link>
            <router-link class="btn btn-primary" to="/sform"
              >Add Student</router-link
            >
          </div>
          <button class="btn btn-primary">Fees Detail</button>
          <button class="btn btn-primary">Result</button>
        </div>
      </div>

      <div class="cardd animate" style="width: 22rem">
        <img
          class="card-img-top"
          src="../assets/cardimage1.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <div class="diplay">
            <button class="btn btn-primary">List</button>
            <button class="btn btn-primary">Add Teacher</button>
          </div>
          <button class="btn btn-primary">Payment</button>
        </div>
      </div>

      <div class="cardd animate" style="width: 22rem">
        <img
          class="card-img-top"
          src="../assets/cardimage1.jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <div class="diplay">
            <button class="btn btn-primary">List</button>
            <button class="btn btn-primary">Add Student</button>
          </div>
          <button class="btn btn-primary">Fees Detail</button>
          <button class="btn btn-primary">Result</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card-img-top {
  height: 250px;
  width: 100%;
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
.row {
  display: flex;
  justify-content: center;
}
.footer {
  background-color: yellow;
  height: 20px;
}
.card-body {
  background-color: rgb(5, 90, 168);
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
</style>
