<template>
  <div id="graph">
    <div class="input-group col-md-6 width m-3">
      <h5 class="p-3"><b>Select a year</b></h5>
      <select
        split-variant="outline-primary"
        variant="primary"
        text="Select the year"
        class="width m-3 form-control"
        v-model="selectedsubject"
      >
        <option disabled>Please select an Year</option>
        <option v-for="items in subjects" :key="items.id">
          {{ items.subjectname }}
        </option>
      </select>
      <button class="btn btn-primary" v-on:click="search">search</button>
    </div>
    <div id="chart" class="chartdiv">
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>

    <!-- <div class="tabletop">
  <h2 class="textalign">Student Info</h2>
  </div>
<div class="tablebottom divmargin container" >
<img src="./photo.jpg" class="d-inline-block align-top imgsize" alt="schoagement">
<h5 class="bphototext">Emad baloch</h5>
<p class="infodiv">this i s text</p>
  </div> -->
  </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
Vue.use(VueAxios, axios);
export default {
  name: "studentslist",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      nofsubjects: null,
      subjects: undefined,
      selectedsubject: null,
      subjectmarks: null,
      chartdata: null,
      series: [
        {
          name: "payed",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: true,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Subject marks through classes",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#000000", "#9c9c9c"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: [],
          title: {
            text: "Class",
          },
        },
        yaxis: {
          title: {
            text: "Marks",
          },
          min: this.min,
          max: this.max,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  },
  mounted() {
    Vue.axios.get("http://127.0.0.1:8000/subjectlist").then((resp) => {
      this.subjects = resp.data;
    });
  },

  methods: {
    search() {
      Vue.axios
        .get("http://127.0.0.1:8000/calcsubject/10/" + this.selectedsubject)
        .then((resp) => {
          this.subjectmarks = resp.data;
          this.updatechart();
        });
      Vue.axios
        .get("http://127.0.0.1:8000/nofsubjects/10/" + this.selectedsubject)
        .then((resp) => {
          this.nofsubjects = resp.data;
        });
    },
    updatechart() {
      const newdata = [];
      let count = Object.keys(this.subjectmarks).length;
      for (let i = 0; i < count; i++) {
        this.chartOptions.xaxis.categories.push(
          this.subjectmarks[i].enrollstudent.standard.standardname
        );
        this.chartdata = this.series[0].data.map(() => {
          return this.subjectmarks[i].subjectmarks;
        });
        newdata.push(this.chartdata);
      }
      var sdata = new Array(this.nofsubjects.nosubjects);
      for (let i = 0; i < this.nofsubjects.nosubjects; i++) {
        sdata[i] = this.series[0].data.map(() => {
          return this.subjectmarks.subjectmarks;
        });
      }
      this.series = [
        {
          data: [String(newdata[0]), newdata[1]],
        },
      ];
    },
  },
};
</script>
<style scoped>
#graph .width {
  width: 35%;
}
#graph .pad {
  margin-top: 10vh;
}
#graph .btn {
  background-color: rgb(84, 43, 197);
  border-radius: 4rem;
  background-clip: border-box;
}
#graph .tabletop {
  background-color: #3988d1;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  position: relative;
  top: 13vh;
  width: 60rem;
  height: 5rem;
  align-self: center;
  margin: auto;
}
#graph .tablebottom {
  background-color: rgba(0, 0, 0, 0.4);
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  position: relative;
  top: 5rem;
  width: 60rem;
  height: 50rem;
  margin: auto;
}
#graph .textalign {
  text-align: center;
  color: white;
  position: relative;
  top: 1.5rem;
}
#graph img {
  margin-left: 20px;
  margin-top: 20px;
  width: 12rem;
  height: auto;
}
#graph .divmargin {
  padding: 20px;
}
#graph .bphototext {
  color: white;
  margin-top: 8px;
  margin-left: 50px;
}
.infodiv {
  position: absolute;
  left: 15rem;
}
#graph .chartdiv {
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.877);
  color: black;
}
/* *{
  border: 1px solid;
} */
</style>
