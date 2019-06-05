<template>
    <div :id="id"></div>
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
  mixins: [minXinChart],
  props: {
    chartData: Object
  },
  data () {
    return {
    };
  },
  created () {
    this.gaugeblue = gaugeblue;
    this.gaugeorange = gaugeorange;
    this.gaugepurple = gaugepurple;
  },
  methods: {
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

<style scoped>

</style>
