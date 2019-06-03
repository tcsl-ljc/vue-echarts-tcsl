<template>
    <div :id="id"></div>
</template>

<script>
import 'echarts/lib/chart/line';
import minXinChart from '../mixin';
import _ from 'lodash';
import {dataformatCommon} from '../dataformat';
import {Option as lineblue} from './line-blue.js';
import {Option as lineorange} from './line-orange.js';
import {Option as linepurple}  from './line-purple.js';
export default {
  mixins: [minXinChart],
  props: {
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
    },
    chartData: Object
  },
  data () {
    return {
    };
  },
  created () {
    this.lineblue = lineblue;
    this.lineorange = lineorange;
    this.linepurple = linepurple;
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
