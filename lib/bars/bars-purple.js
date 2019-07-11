export const Option = {
  legend: {
    show: false
  },
  grid: {
    top: '15%',
    bottom: '0'
  },
  color: ['#864BFF', '#F22569', '#65E3FF', '#2D37FF', '#89DC2F', '#FFD53E', '#FF5539', '#55F696', '#F754D3', '#368BFF'],
  xAxis: [{
    show: false
  },
  {
    show: false
  }
  ],
  yAxis: {
    type: 'category',
    inverse: true,
    axisLabel: {
      inside: true,
      show: false // 让Y轴数据不显示
    },
    axisTick: {
      show: false // 隐藏Y轴刻度
    },
    axisLine: {
      show: false // 隐藏Y轴线段
    }
  },
  series: [{
    name: '物业费',
    type: 'bar',
    data: [],
    barWidth: 12,
    label: {
      normal: {
        show: true,
        textStyle: {
          color: '#fff', // 百分比颜色
          fontSize: 12
        },
        position: 'right'
      }
    },
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
          offset: 0,
          color: 'rgba(103, 39, 234, 1)' // 0% 处的颜色
        }, {
          offset: 1,
          color: 'rgba(134, 75, 255, 1)' // 100% 处的颜色
        }]
      },
      barBorderRadius: [9, 9, 9, 9]
    },
    z: 2
  }, {
    name: '物',
    type: 'bar',
    xAxisIndex: 1,
    data: [],
    barGap: '-100%',
    barWidth: 12,
    label: {
      show: true,
      position: [0, '-150%'],
      color: '#fff',
      formatter: function (data) {
        // 富文本固定格式{colorName|这里填你想要写的内容}
        return '{a|' + (data.dataIndex + 1) + '}  ' + data.name;
      },
      rich: {
        a: {
          width: 16,
          height: 16,
          align: 'center',
          color: '#fff',
          backgroundColor: '#31489F'
        }
      }
    },
    itemStyle: {
      color: 'transparent',
      barBorderRadius: [8, 8, 8, 8]
    }
  }]
};
