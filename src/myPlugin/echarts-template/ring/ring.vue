<template>
    <div :id="id"></div>
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
  mixins: [minXinChart],
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
    chartData: Object
  },
  data () {
    return {
    };
  },
  created () {
    this.ringblue = ringblue;
    this.ringorange = ringorange;
    this.ringpurple = ringpurple;
  },
  methods: {
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

<style scoped>

</style>
