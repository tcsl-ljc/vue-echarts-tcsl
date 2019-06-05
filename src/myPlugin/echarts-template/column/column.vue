<template>
    <div :id="id"></div>
</template>

<script>
import 'echarts/lib/chart/bar';
import minXinChart from '../mixin';
import {Option as columnblue} from './column-blue.js';
import {Option as columnorange} from './column-orange.js';
import {Option as columnpurple}  from './column-purple.js';
import _ from 'lodash';
import {dataformatCommon} from '../dataformat';
export default {
  mixins: [minXinChart],
  props: {
    chartData: Object
  },
  data () {
    return {
    };
  },
   created () {
    this.columnblue = columnblue;
    this.columnorange = columnorange;
    this.columnpurple = columnpurple;
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
