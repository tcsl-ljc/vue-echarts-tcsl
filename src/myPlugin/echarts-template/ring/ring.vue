<template>
    <div :id="id"></div>
</template>

<script>
// import * as echarts from 'echarts/src/echarts';
import 'echarts/lib/chart/pie';
import minXinChart from '../mixin';
import {dataformatToNameValue} from '../dataformat';
export default {
  mixins: [minXinChart],
  props: {
    data: {
      default: function () {
        return [];
      }
    },
    chartData: Object
  },
  data () {
    return {
    };
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
