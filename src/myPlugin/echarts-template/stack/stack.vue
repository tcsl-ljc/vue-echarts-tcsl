<template>
    <div :id="id"></div>
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
  mixins: [minXinChart],
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
    chartData: Object
  },
  data () {
    return {
    };
  },
  created () {
    this.stackblue = stackblue;
    this.stackorange = stackorange;
    this.stackpurple = stackpurple;
  },
  methods: {
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

<style scoped>

</style>
