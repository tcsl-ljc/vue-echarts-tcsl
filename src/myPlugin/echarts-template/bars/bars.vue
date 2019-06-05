<template>
    <div :id="id"></div>
</template>

<script>
import 'echarts/lib/chart/bar';
import minXinChart from '../mixin';
import {Option as barsblue} from './bars-blue.js';
import {Option as barsorange} from './bars-orange.js';
import {Option as barspurple}  from './bars-purple.js';
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
    this.barsblue = barsblue;
    this.barsorange = barsorange;
    this.barspurple = barspurple;
  },
  methods: {
    resolveData (Option) {
      // Option.series[0].data = this.data;
      Option.series[0].data = this.chartData.yAxis[0].data;
      let _max = Math.max(...this.chartData.yAxis[0].data) * 1.1;
      let _data = [];
      let _perdata = [];
      for (let i = 0; i < this.chartData.xAxis.length; i++) {
        _data.push({
          name: this.chartData.xAxis[i],
          value: 50
        });
        _perdata.push(_max);
      }
      // title数据
      Option.series[1].data = _data;
      // 右侧百分比数据
      // Option.series[2].data = _data;

      if (this.theme === 'blue') {
        Option.series[2].data = _perdata;
        // 蓝色主题下还有边框
        Option.series[3].data = _perdata;
        // 处理10个小方块数据
        let _block = _perdata.map((e) => {
          return e / 10;
        });
        for (let i = 4; i < 14; i++) {
          Option.series[i].data = _block;
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
