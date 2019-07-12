import {grid} from '../common';
// const colors = ['rgba(123, 46, 255, 1)', '', '', '', '', '', ''];
export const Option = {
  legend: {
    show: false
  },
  grid: grid,
  color: ['rgba(123, 46, 255, 0.6)', 'rgba(242, 37, 105, 0.6)', 'rgba(101, 227, 255, 0.6)',
    'rgba(45, 55, 255, 0.6)', 'rgba(137, 220, 47, 0.6)', 'rgba(255, 213, 62, 0.6)',
    'rgba(255, 85, 57, 0.6)', 'rgba(85, 246, 150, 0.6)', 'rgba(247, 84, 211, 0.6)', 'rgba(54, 139, 255, 0.6)'],
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
    name: '移动',
    type: 'line',
    showSymbol: false,
    stack: 'st',
    areaStyle: {
      color: 'rgba(134, 75, 255, 1)'
    },
    itemStyle: {
    },
    data: []
  }]
};
