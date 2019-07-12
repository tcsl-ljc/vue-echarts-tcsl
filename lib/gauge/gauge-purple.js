export const Option = {
  baseOption: {
    title: [{
      text: '75%',
      subtext: '完成率',
      x: 'center',
      y: '60%',
      textStyle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'normal'
      },
      subtextStyle: {
        color: 'rgba(255,255,255,.6)',
        fontSize: 14,
        fontWeight: 'normal'
      }
    }],
    series: [{
      name: '',
      type: 'gauge',
      radius: '50%',
      center: ['50%', '50%'],
      splitNumber: 1,
      axisLine: { // 仪表盘颜色
        lineStyle: {
          width: 35,
          color: [[0.75, '#6727EA'], [1, '#0C0918']]
        }
      },
      axisLabel: {
        show: false
      },
      itemStyle: {
        color: '#A39FAE'
      },
      pointer: {
        width: 10,
        length: '50%'
      },
      splitLine: {
        show: false
      },
      axisTick: { // 刻度样式
        show: false
      },
      max: 100,
      min: 0,
      markPoint: {
        symbol: 'circle',
        symbolSize: 28,
        silent: true,
        itemStyle: {
          color: '#191F3A', // 中心圆圈颜色
          borderColor: '#A39FAE',
          borderWidth: 12
        },
        data: [
          {
            name: '',
            x: '50%',
            y: '50%'
          }
        ]
      },
      detail: {
        show: false
      },
      data: [{value: 75, name: ''}]
    }, {
      name: '',
      type: 'gauge',
      radius: '56%',
      splitNumber: 5,
      axisLine: { // 仪表盘颜色
        lineStyle: {
          width: 2,
          color: [[1, '#A39FAE']]
        }
      },
      axisLabel: {
        distance: -56,
        color: '#AFB0B3'
      },
      itemStyle: {
        color: '#DBDDE6'
      },
      splitLine: {
        show: false
      },
      axisTick: { // 刻度样式
        show: false
      },
      max: 100,
      min: 0,
      detail: {
        show: false
      },
      data: []
    }]
  },
  media: [
    {
      query: {
        maxWidth: 600
      },
      option: {
        title: [{
          textStyle: {
            fontSize: 24
          },
          subtextStyle: {
            fontSize: 14
          }
        }],
        series: [
          {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            axisLine: { // 仪表盘颜色
              lineStyle: {
                width: 24
              }
            },
            markPoint: {
              symbolSize: 16,
              itemStyle: {
                borderWidth: 6
              }
            },
            pointer: {
              width: 6,
              length: '48%'
            },
            detail: {
              fontSize: 10
            }
          }
        ]
      }
    }, {
      query: {
        maxWidth: 300
      },
      option: {
        title: [{
          textStyle: {
            fontSize: 20
          },
          subtextStyle: {
            fontSize: 10
          }
        }],
        series: [
          {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            axisLine: { // 仪表盘颜色
              lineStyle: {
                width: 8
              }
            },
            markPoint: {
              symbolSize: 16,
              itemStyle: {
                borderWidth: 6
              }
            },
            pointer: {
              width: 6,
              length: '48%'
            },
            detail: {
              fontSize: 10
            }
          }
        ]
      }
    },
    {
      query: {
        maxHeight: 220,
        minAspectRatio: 1.7
      },
      option: {
        title: [{
          textStyle: {
            fontSize: 20
          },
          subtextStyle: {
            fontSize: 10
          }
        }],
        series: [
          {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            axisLine: { // 仪表盘颜色
              lineStyle: {
                width: 7
              }
            },
            markPoint: {
              symbolSize: 16,
              itemStyle: {
                borderWidth: 6
              }
            },
            pointer: {
              width: 6,
              length: '48%'
            },
            detail: {
              fontSize: 10
            }
          }
        ]
      }
    },
    {
      option: {
        title: [{
          textStyle: {
            fontSize: 34
          },
          subtextStyle: {
            fontSize: 16
          }
        }],
        series: [
          {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            axisLine: { // 仪表盘颜色
              lineStyle: {
                width: 28
              }
            },
            markPoint: {
              symbolSize: 28,
              itemStyle: {
                borderWidth: 12
              }
            },
            pointer: {
              width: 10,
              length: '50%'
            }
          }
        ]
      }
    }
  ]
};
