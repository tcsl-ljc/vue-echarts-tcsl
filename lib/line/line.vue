<template>
  <div class="farther" :class="parentClass" v-loading="loading">
    <article>{{title}}</article>
    <div style="height:calc(100% - 15px);">
      <div ref="chartTemplate" :id="specialId" style="height:100%;"></div>
      <div v-show="!isShowChart && chartMsg" class="child" v-text="chartMsg"></div>
    </div>
  </div>
</template>

<script>
import "echarts/lib/chart/line";
import * as echarts from "echarts/lib/echarts";
import minXinChart from "../mixin";
import _ from "lodash";
import { dataformatCommon } from "../dataformat";
import { Option as lineblue } from "./line-blue.js";
import { Option as lineorange } from "./line-orange.js";
import { Option as linepurple } from "./line-purple.js";
export default {
  name: "dc-chart-template-line",
  mixins: [minXinChart],
  computed: {
    parentClass() {
      return `chart-parent-${this.theme}`;
    }
  },
  props: {
    chartData: Object,
    title: {
      type: String,
      required: true,
      default: function() {
        return "默认图表";
      }
    },
    specialId: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      default: function() {
        return "blue";
      }
    },
    chartType: {
      default: 'line'
    }
  },
  data() {
    return {
      loading: true,
      isShowChart: false,
      chart: "",
      chartMsg: ""
    };
  },
  mounted() {
    setTimeout(_ => {
      this.loaderStop();
    }, 1000);
  },
  created() {
    this.lineblue = lineblue;
    this.lineorange = lineorange;
    this.linepurple = linepurple;
  },
  methods: {
    loaderStop() {
      this.loading = false;
      this.isShowChart = true;
    },
    loader() {
      this.loading = true;
    },
    resize() {
      try {
        echarts.getInstanceByDom(this.$refs.chartTemplate).resize();
        // this.$refs.chartTemplate.resize();
      } catch (e) {

      }
    },
    resolveData(Option) {
      // Option.series[0].data = this.data;
      let _data = dataformatCommon(this.chartData);
      Option.xAxis.data = _data.xAxisData;
      let temp = _.cloneDeep(Option.series[0]);
      Option.series = [];
      for (let i = 0; i < _data.seriesData.length; i++) {
        let ser = _.cloneDeep(temp);
        ser.data = _data.seriesData[i].data;
        ser.name = _data.seriesData[i].name;
        Option.series.push(ser);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/common.scss";
</style>
<style lang="scss">
@import "../style/reset.scss";
</style>