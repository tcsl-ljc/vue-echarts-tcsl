<template>
  <div class="farther" :class="parentClass" v-loading="loading">
    <article>{{title}}</article>
    <div style="height:calc(100% - 15px);">
      <div
        ref="chartTemplate"
        :id="specialId"
        class="table-list"
        style="height:100%;"
        :class="tableClass"
      >
        <el-table :data="visiableData" :size="tableSize" stripe>
          <el-table-column
            v-for="(item, index) in chartData.xAxis"
            :key="index"
            :prop="item"
            :label="item"
          ></el-table-column>
        </el-table>
      </div>
      <div v-show="!isShowChart && chartMsg" class="child" v-text="chartMsg"></div>
    </div>
  </div>
</template>

<script>
// import {fmoney} from '@/common/echarts/common/common.js';
import { dataformatForTable } from "../dataformat";
export default {
  name: "dc-chart-template-table",
  props: {
    specialId: String,
    title: {
      type: String,
      required: true,
      default: function() {
        return "默认图表";
      }
    },
    data: {
      default: function() {
        return [
          {
            date: "2015",
            name: "北京店",
            address: "2245"
          },
          {
            date: "2016",
            name: "天津分店",
            address: "33466"
          },
          {
            date: "2017",
            name: "山海分店",
            address: "223566"
          },
          {
            date: "2018",
            name: "广州分店",
            address: "35677"
          }
        ];
      }
    },
    chartType: {
      default: 'table'
    },
    theme: String,
    chartData: Object
  },
  computed: {
    parentClass() {
      return `chart-parent-${this.theme}`;
    }
  },
  data() {
    return {
      loading: true,
      isShowChart: false,
      chart: "",
      chartMsg: "",
      tableClass: `table-${this.theme}`,
      numbers: [],
      tableSize: "small",
      visiableData: dataformatForTable(this.chartData).slice(0)
    };
  },
  mounted() {
    this.initChart();
    debugger
    setTimeout(_ => {
      debugger
      this.loaderStop();
    }, 1000);
  },
  beforeMount() {
    var self = this;
    setInterval(scrollTable, 3000);
    function scrollTable() {
      let _data = self.visiableData.slice(0);
      _data.push(self.visiableData[0]);
      _data.shift();
      self.visiableData = _data.slice(0);
    }
    scrollTable();
  },
  methods: {
    loaderStop() {
      this.loading = false;
      this.isShowChart = true;
    },
    loader() {
      this.loading = true;
    },
    initChart() {
      this.tableClass = `table-${this.theme}`;
      this.resize();
    },
    resize() {
      const width = document.getElementById(this.specialId).offsetWidth;
      // const height = document.getElementById(this.id).offsetHeight;
      if (width < 300) {
        this.tableSize = "mini";
      } else if (width < 500) {
        this.tableSize = "small";
      } else {
        this.tableSize = "medium";
      }
    }
  },
  watch: {
    theme(val) {
      // 监听主题变化,编辑页面切换主题重新渲染
      this.initChart();
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
<style lang="scss">
.table-list {
  color: #fff;
  overflow: auto;
  .el-table thead {
    color: #fff;
  }
  .el-table th.is-leaf {
    border-bottom: none;
  }
  .el-table td {
    border-bottom: none;
  }
  .el-table,
  .el-table::before {
    background-color: transparent;
  }
}
</style>

<style lang="scss">
@mixin table-class($headbg-color, $trbg-color, $strip-color) {
  .has-gutter th {
    background-color: $headbg-color;
  }
  .el-table tr {
    background-color: $trbg-color;
  }
  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background-color: $strip-color;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: $trbg-color;
  }
}
.table-orange {
  $headbg-color: rgba(255, 173, 31, 0.1);
  $trbg-color: rgba(0, 0, 0, 0.4);
  $strip-color: rgba(31, 21, 13, 0.5);
  @include table-class(
    rgba(255, 173, 31, 0.1),
    rgba(0, 0, 0, 0.4),
    rgba(31, 21, 13, 0.5)
  );
}
.table-blue {
  $headbg-color: #222b61;
  $trbg-color: #121533;
  $strip-color: #14193c;
  @include table-class(#222b61, #121533, #14193c);
}
.table-purple {
  $headbg-color: #2f276a;
  $trbg-color: #1f1138;
  $strip-color: #231544;
  @include table-class(#2f276a, #1f1138, #231544);
}
</style>
