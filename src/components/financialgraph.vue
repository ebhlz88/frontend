<template>
  <div id="graph" v-if="isloggedin">
    <div class="input-group col-md-6 width m-3">
      <h5 class="p-3"><b>Select a year</b></h5>
      <select
        split-variant="outline-primary"
        variant="primary"
        text="Select the year"
        @change="onChange()"
        class="width m-3 form-control"
        v-model="selectedyear"
      >
        <option disabled>Please select an Year</option>
        <option v-for="items in yearlist" :key="items.id" :value="items.text">
          {{ items.text }}
        </option>
      </select>
      <button
        class="btn btn-primary"
        id="searchbtn"
        disabled
        v-on:click="search"
      >
        search
      </button>
    </div>
    <div id="chart" class="chartdiv">
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
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
      year: null,
      monthssum: undefined,
      selectedyear: 0,
      teacherpayment: null,
      yearlist: [
        { text: "2021", value: 2021 },
        { text: "2022", value: 2022 },
        { text: "2023", value: 2023 },
        { text: "2024", value: 2024 },
        { text: "2025", value: 2025 },
        { text: "2026", value: 2026 },
        { text: "2027", value: 2027 },
        { text: "2028", value: 2028 },
        { text: "2029", value: 2029 },
        { text: "2030", value: 2030 },
      ],
      series: [
        {
          name: "collected",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: "payed",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
          text: "Money Collected & Payed for School",
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
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "aug",
            "sep",
            "oct",
            "nov",
            "dec",
          ],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Amount",
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

  methods: {
    onChange() {
      Vue.axios
        .get("http://127.0.0.1:8000/calc/" + this.selectedyear)
        .then((resp) => {
          this.monthssum = resp.data;
        });
      Vue.axios
        .get("http://127.0.0.1:8000/tcalc/" + this.selectedyear)
        .then((resp) => {
          this.teacherpayment = resp.data;
        });
      document.getElementById("searchbtn").disabled = false;
    },
    search() {
      const newData = this.series[0].data.map(() => {
        return this.monthssum.jansum;
      });
      const seconddata = this.series[0].data.map(() => {
        return this.monthssum.febsum;
      });
      const marchdata = this.series[0].data.map(() => {
        return this.monthssum.marsum;
      });
      const aprildata = this.series[0].data.map(() => {
        return this.monthssum.aprsum;
      });
      const maydata = this.series[0].data.map(() => {
        return this.monthssum.maysum;
      });
      const junedata = this.series[0].data.map(() => {
        return this.monthssum.junsum;
      });
      const julydata = this.series[0].data.map(() => {
        return this.monthssum.julsum;
      });
      const septemberdata = this.series[0].data.map(() => {
        return this.monthssum.sepsum;
      });
      const octoberdata = this.series[0].data.map(() => {
        return this.monthssum.octsum;
      });
      const novemberdata = this.series[0].data.map(() => {
        return this.monthssum.novsum;
      });
      const decemberdata = this.series[0].data.map(() => {
        return this.monthssum.decsum;
      });
      const augustdata = this.series[0].data.map(() => {
        return this.monthssum.augsum;
      });

      const tnewData = this.series[0].data.map(() => {
        return this.teacherpayment.jansum;
        //Math.floor(Math.random() * (max - min + 1)) + min
      });
      const tseconddata = this.series[0].data.map(() => {
        return this.teacherpayment.febsum;
      });
      const tmarchdata = this.series[0].data.map(() => {
        return this.teacherpayment.marsum;
      });
      const taprildata = this.series[0].data.map(() => {
        return this.teacherpayment.aprsum;
      });
      const tmaydata = this.series[0].data.map(() => {
        return this.teacherpayment.maysum;
      });
      const tjunedata = this.series[0].data.map(() => {
        return this.teacherpayment.junsum;
      });
      const tjulydata = this.series[0].data.map(() => {
        return this.teacherpayment.julsum;
      });
      const tseptemberdata = this.series[0].data.map(() => {
        return this.teacherpayment.sepsum;
      });
      const toctoberdata = this.series[0].data.map(() => {
        return this.teacherpayment.octsum;
      });
      const tnovemberdata = this.series[0].data.map(() => {
        return this.teacherpayment.novsum;
      });
      const tdecemberdata = this.series[0].data.map(() => {
        return this.teacherpayment.decsum;
      });
      const taugustdata = this.series[0].data.map(() => {
        return this.teacherpayment.augsum;
      });
      this.series = [
        {
          data: [
            String(newData),
            seconddata,
            marchdata,
            aprildata,
            maydata,
            junedata,
            julydata,
            augustdata,
            septemberdata,
            octoberdata,
            novemberdata,
            decemberdata,
          ],
          //data: [String(newData),seconddata,marchdata,aprildata,maydata,junedata,julydata,augustdata,septemberdata,octoberdata,novemberdata,decemberdata]
        },
        {
          data: [
            String(tnewData),
            tseconddata,
            tmarchdata,
            taprildata,
            tmaydata,
            tjunedata,
            tjulydata,
            taugustdata,
            tseptemberdata,
            toctoberdata,
            tnovemberdata,
            tdecemberdata,
          ],
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
