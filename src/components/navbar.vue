<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light nav">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><img src="../assets/Estaal.png" alt="logo"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 mlauto">
            <li class="nav-item">
              <router-link class="nav-link active" to="/"
                ><b>Home</b></router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cardview"
                ><b>Contact Us</b></router-link
              >
            </li>
            <li>
              <form class="d-flex">
                <div class="searchdiv">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="start-date"
                      placeholder="Search Here"
                    />
                    <span class="input-group-addon" id="start-date"
                      ><img src="../assets/searchicon.png" alt="serar"
                    /></span>
                  </div>
                </div>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "navbar",
  methods: {
    clicked() {
      console.log("clicked");
    },
  },
};
</script>

<style>
.navbar {
  display: flex;
  /* background-color: #4e71ee;
  background-color: rgb(83, 83, 158); */
  background-image: linear-gradient(to right, #3931af, #00c6ff);
  padding: 0px !important;
  width: 100%;
}
.mlauto {
  margin-left: auto;
}
.navbar-brand img {
  height: 90px;
  padding: 5px;
}
.navbar-nav li .nav-link {
  color: white !important;
}
.navbar-nav li router-link {
  color: white !important;
  font-weight: 600;
}
.fa-bars {
  color: #fff;
}
#nav .btn-outline-success {
  background-color: #19029b;
  border-radius: 10px;
  border: none;
  padding: 8px 25px;
  box-shadow: none;
  width: auto;
  margin: auto;
  color: white;
}

/* Add Zoom Animation */
.astext {
  background: none;
  border: none;
  margin: 0;
  cursor: pointer;
}
.nav-link {
  padding-top: 15px;
  color: white;
}
img {
  height: 30px;
  border: none;
}
span {
  border: none;
}
span:hover {
  cursor: pointer;
}
#nav .input-group {
  margin: auto;
}
.searchdiv {
  margin: auto;
}
</style>
