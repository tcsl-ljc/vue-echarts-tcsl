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
import 'echarts-liquidfill';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/component/markPoint';
import minXinChart from '../mixin';
import {Option as gaugeblue} from './gauge-blue.js';
import {Option as gaugeorange} from './gauge-orange.js';
import {Option as gaugepurple}  from './gauge-purple.js';
import {dataformatForGauge} from '../dataformat';
export default {
  name: "dc-chart-template-gauge",
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
      default: 'gauge'
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
    this.gaugeblue = gaugeblue;
    this.gaugeorange = gaugeorange;
    this.gaugepurple = gaugepurple;
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
      let _data = dataformatForGauge(this.chartData);
      // let _data = {
      //   max: 100,
      //   min: 0,
      //   value: '75%',
      //   title: '完成率'
      // };
      // Todo 处理中间title blue
      // Todo 处理数据
      // Option.baseOption.series[0].data[0].value = 75;
      let val = (_data.value / _data.max).toFixed(2);
      let rate = val * 100 + '%';
      // console.log('aaa = ', Option.baseOption.series[0].data);
      if (this.theme === 'orange') {
        Option.baseOption.series[0].data[0].value = val;
      }
      if (this.theme === 'blue') {
        Option.baseOption.series[0].data[0].value = val * 100;
        Option.baseOption.series[0].data[1].value = 100 - val * 100;
        Option.baseOption.title[0].text = rate;
        Option.baseOption.title[0].subtext = _data.title;
      }
      if (this.theme === 'purple') {
        Option.baseOption.series[0].data[0].value = _data.value;
        Option.baseOption.series[0].axisLine.lineStyle.color[0][0] = val;
        Option.baseOption.series[0].max = Option.baseOption.series[1].max = _data.max;
        Option.baseOption.series[0].min = Option.baseOption.series[1].min = _data.min;
        Option.baseOption.title[0].text = rate;
        Option.baseOption.title[0].subtext = _data.title;
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
