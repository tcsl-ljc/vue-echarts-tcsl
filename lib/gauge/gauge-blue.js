export const Option = {
  baseOption: {
    title: [{
      text: '75%',
      subtext: '完成率',
      itemGap: 0,
      x: 'center',
      y: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'normal'
      },
      subtextStyle: {
        color: 'rgba(255,255,255,.45)',
        fontSize: 14,
        fontWeight: 'normal'
      }
    }],
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['37%', '50%'],
        silent: true,
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        z: 1,
        data: [{
          value: 75,
          name: '',
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(101, 228, 255, 1)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(63, 95, 252, 1)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            }
          }
        },
        {
          value: 25,
          name: '',
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: '#111220'
            }
          }
        }
        ]
      }, { // 条纹
        name: '',
        type: 'gauge',
        radius: '50.5%',
        startAngle: 0,
        endAngle: 359.9,
        splitNumber: 8,
        z: 2,
        itemStyle: {
          color: '#111220'
        },
        axisTick: {
          show: false
        },
        splitLine: {
          length: '28%',
          lineStyle: {
            width: 8,
            color: '#20274E'
          }
        },
        axisLabel: {
          show: false
        },
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            opacity: 0
          }
        },
        detail: {
          show: false
        },
        data: [{
          value: 0,
          name: ''
        }]
      } ]
  },
  media: [{
    query: {
      maxWidth: 800
    },
    option: {
      title: [{
        textStyle: {
          fontSize: 34
        },
        subtextStyle: {
          fontSize: 16
        }
      }]
    }
  }, {
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
      }]
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
      }]
    }
  }, {
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
      }]
    }
  }, {
    option: {
      title: [{
        textStyle: {
          fontSize: 34
        },
        subtextStyle: {
          fontSize: 14
        }
      }]
    }
  }]
};
