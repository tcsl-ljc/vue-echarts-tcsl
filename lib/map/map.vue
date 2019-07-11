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
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';
import minXinChart from '../mixin';
import {Option as mapblue} from './map-blue.js';
import {Option as maporange} from './map-orange.js';
import {Option as mappurple}  from './map-purple.js';
import {geoCoordMap} from './constant';
import {dataformatToNameValue} from '../dataformat';
export default {
  name: "dc-chart-template-map",
  mixins: [minXinChart],
  computed: {
    parentClass() {
      return `chart-parent-${this.theme}`;
    }
  },
  props: {
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
      default: 'map'
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
    this.mapblue = mapblue;
    this.maporange = maporange;
    this.mappurple = mappurple;
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

<style lang="scss" scoped>
@import "../style/common.scss";
</style>
<style lang="scss">
@import "../style/reset.scss";
</style>