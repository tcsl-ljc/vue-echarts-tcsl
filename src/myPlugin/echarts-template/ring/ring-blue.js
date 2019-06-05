export const Option = {
  baseOption: {
    title: [{
      text: '',
      subtext: '',
      x: '34%',
      y: 'center',
      textAlign: 'center',
      itemGap: 0,
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
    color: ['#3F5FFC', '#55F696', '#FFF65F', '#FF4BED', '#7AE6E2', '#FFAF2E', '#8FEE49', '#9D5BFF', '#FF6339', '#FC344C'],
    legend: {
      textStyle: {
        color: '#efefef'
      },
      data: [],
      orient: 'vertival',
      selectedMode: false,
      itemGap: 10,
      itemWidth: 14,
      itemHeight: 14,
      // left: 'right',
      right: '4%',
      top: 'center'
    },
    series: [{ // 数据部分
      data: [],
      type: 'pie',
      label: {show: false},
      labelLine: {show: false},
      hoverAnimation: false,
      radius: ['35%', '50%'],
      center: ['35%', '50%']
    }, { // 外部圆圈
      data: [10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1],
      type: 'pie',
      itemStyle: {
        normal: {
          color: function (a) {
            if (a.data === 10) {
              return '#35387E';
            }
            if (a.data === 1) {
              return 'rgba(0,0,0, 0)';
            }
          }
        },
        emphasis: {
          color: function (a) {
            if (a.data === 10) {
              return '#35387E';
            }
            if (a.data === 1) {
              return 'rgba(0,0,0, 0)';
            }
          }
        }
      },
      hoverAnimation: false,
      labelLine: {show: false},
      radius: ['56%', '60%'],
      center: ['35%', '50%']
    }, { // 内部圆圈
      data: [
        {value: 100, name: ''}
      ],
      type: 'pie',
      label: {show: false},
      labelLine: {show: false},
      itemStyle: {
        normal: {
          color: '#323B81'
        },
        emphasis: {
          color: '#323B81'
        }
      },
      hoverAnimation: false,
      radius: ['30%', '31%'],
      center: ['35%', '50%']
    }]
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
          fontSize: 12
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
  }
  ]
};
