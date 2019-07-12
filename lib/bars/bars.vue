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
import 'echarts/lib/chart/bar';
import * as echarts from "echarts/lib/echarts";
import minXinChart from '../mixin';
import {Option as barsblue} from './bars-blue.js';
import {Option as barsorange} from './bars-orange.js';
import {Option as barspurple}  from './bars-purple.js';
export default {
  name: "dc-chart-template-bars",
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
      default: 'bars'
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
  created () {
    this.barsblue = barsblue;
    this.barsorange = barsorange;
    this.barspurple = barspurple;
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
    resolveData (Option) {
      // Option.series[0].data = this.data;
      Option.series[0].data = this.chartData.yAxis[0].data;
      let _max = Math.max(...this.chartData.yAxis[0].data) * 1.1;
      let _data = [];
      let _perdata = [];
      for (let i = 0; i < this.chartData.xAxis.length; i++) {
        _data.push({
          name: this.chartData.xAxis[i],
          value: 50
        });
        _perdata.push(_max);
      }
      // title数据
      Option.series[1].data = _data;
      // 右侧百分比数据
      // Option.series[2].data = _data;

      if (this.theme === 'blue') {
        Option.series[2].data = _perdata;
        // 蓝色主题下还有边框
        Option.series[3].data = _perdata;
        // 处理10个小方块数据
        let _block = _perdata.map((e) => {
          return e / 10;
        });
        for (let i = 4; i < 14; i++) {
          Option.series[i].data = _block;
        }
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