<template>
    <div :id="id"></div>
</template>

<script>
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';
import minXinChart from '../mixin';
import {Option as mapblue} from './map-blue.js';
import {Option as maporange} from './map-orange.js';
import {Option as mappurple}  from './map-purple.js';
import {geoCoordMap} from './constant';
import {dataformatToNameValue} from '../dataformat';
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
    this.mapblue = mapblue;
    this.maporange = maporange;
    this.mappurple = mappurple;
  },
  methods: {
    resolveData (Option) {
      let _data = dataformatToNameValue(this.chartData);
      Option.series[0].data = _data;
      Option.series[1].data = this.convertData(_data.sort(function (a, b) {
        return b.value - a.value;
      }).slice(0, 9));
    },
    convertData (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    }
  }
};
</script>

<style scoped>

</style>
