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
// import * as echarts from 'echarts/src/echarts';
import 'echarts/lib/chart/pie';
import minXinChart from '../mixin';
import {Option as ringblue} from './ring-blue.js';
import {Option as ringorange} from './ring-orange.js';
import {Option as ringpurple}  from './ring-purple.js';
import {dataformatToNameValue} from '../dataformat';
export default {
  name: "dc-chart-template-ring",
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
          {value: 935, name: '订单量'},
          {value: 410, name: '取消量'},
          {value: 334, name: '支付量'},
          {value: 235, name: '投诉量'},
          {value: 110, name: '被投诉'}];
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
      default: 'ring'
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
    this.ringblue = ringblue;
    this.ringorange = ringorange;
    this.ringpurple = ringpurple;
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
      let legend = _data.map(item => { return item.name; });
      Option.baseOption.series[0].data = _data;
      Option.baseOption.legend.data = legend;
      Option.baseOption.title[0].text = _data[0].value;
      Option.baseOption.title[0].subtext = _data[0].name;
      // Todo根据返回数据格式处理lengend
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
