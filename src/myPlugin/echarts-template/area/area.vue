<template>
    <div :id="id"></div>
</template>

<script>
import 'echarts/lib/chart/line';
import minXinChart from '../mixin';
import _ from 'lodash';
import {dataformatCommon} from '../dataformat';
import {Option as areablue} from './area-blue.js';
import {Option as areaorange} from './area-orange.js';
import {Option as areapurple}  from './area-purple.js';
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
    this.areablue = areablue;
    this.areaorange = areaorange;
    this.areapurple = areapurple;
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
        // ser.areaStyle.color = purple[i];
        Option.series.push(ser);
      }
    }
  }
};
</script>

<style scoped>

</style>
