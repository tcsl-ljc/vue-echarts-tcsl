import {grid} from '../common';
export const Option = {
  legend: {
    show: false
  },
  grid: grid,
  color: ['#3F5FFC', '#55F696', '#FFF65F', '#FF4BED', '#7AE6E2', '#FFAF2E', '#8FEE49', '#9D5BFF', '#FF6339', '#FC344C'],
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
    stack: 'st',
    data: [],
    barMaxWidth: 20
  }]
};
