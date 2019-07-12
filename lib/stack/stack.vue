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
import minXinChart from '../mixin';
import {Option as stackblue} from './stack-blue.js';
import {Option as stackorange} from './stack-orange.js';
import {Option as stackpurple}  from './stack-purple.js';
import _ from 'lodash';
import {dataformatCommon} from '../dataformat';
export default {
  name: "dc-chart-template-stack",
  mixins: [minXinChart],
  computed: {
    parentClass() {
      return `chart-parent-${this.theme}`;
    }
  },
  props: {
    data: {
      default: function () {
        return [
          {value: 35, name: '订单量'},
          {value: 10, name: '取消量'},
          {value: 34, name: '支付量'},
          {value: 35, name: '投诉量'},
          {value: 25, name: '投量'},
          {value: 11, name: '被投诉'}];
      }
    },
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
      default: 'stack'
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
    this.stackblue = stackblue;
    this.stackorange = stackorange;
    this.stackpurple = stackpurple;
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
