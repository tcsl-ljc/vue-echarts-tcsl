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
import 'echarts/lib/chart/pie';
import minXinChart from '../mixin';
import {Option as pieblue} from './pie-blue.js';
import {Option as pieorange} from './pie-orange.js';
import {Option as piepurple}  from './pie-purple.js';
import {dataformatToNameValue} from '../dataformat';
export default {
  name: "dc-chart-template-pie",
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
      default: 'pie'
    },
    data: {
      default: function () {
        return [
          {value: 35, name: '订单量'},
          {value: 10, name: '取量'},
          {value: 10, name: '取消量'},
          {value: 34, name: '支付量'},
          {value: 34, name: '支量'},
          {value: 35, name: '投诉量'},
          {value: 25, name: '投量'},
          {value: 11, name: '被投诉'}];
      }
    }
  },
  data () {
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
    this.pieblue = pieblue;
    this.pieorange = pieorange;
    this.piepurple = piepurple;
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
      let _data = dataformatToNameValue(this.chartData);
      Option.series[0].data = _data;
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
