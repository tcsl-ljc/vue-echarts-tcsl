import {grid} from '../common';
export const Option = {
  legend: {
    show: false
  },
  grid: grid,
  xAxis: {
    type: 'category',
    data: [],
    axisLabel: {
      rotate: 45,
      color: 'rgba(255,255,255,0.6)'
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0.4)'
      }
    },
    axisTick: {
      alignWithLabel: true
    }
  },
  yAxis: [{
    type: 'value',
    name: '',
    axisLabel: {
      formatter: '{value}',
      color: 'rgba(255,255,255,0.6)'
    },
    axisLine: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(55,55,55,0.6)'
      }
    }
  }],
  series: [{
    name: '',
    type: 'bar',
    data: [],
    barMaxWidth: 12,
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
          offset: 0,
          color: 'rgba(255, 182, 23, 1)' // 0% 处的颜色
        }, {
          offset: 1,
          color: 'rgba(255, 97, 42, 1)' // 100% 处的颜色
        }]
      },
      barBorderRadius: [8, 8, 8, 8]
    }
  }]
};
