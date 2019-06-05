export const Option = {
  baseOption: {
    title: [{
      text: '',
      subtext: '',
      x: '34%',
      y: 'center',
      itemGap: 0,
      textAlign: 'center',
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
    color: ['#FF7417', '#FFF65F', '#5B95FF', '#5A4EFF', '#B54CFF', '#F754D3', '#FF5539', '#55F696', '#B9FF21', '#FFC343'],
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
    }, { // 内部圆圈
      data: [
        {value: 100, name: ''}
      ],
      type: 'pie',
      label: {show: false},
      labelLine: {show: false},
      itemStyle: {
        normal: {
          color: '#A47202'
        },
        emphasis: {
          color: '#A47202'
        }
      },
      hoverAnimation: false,
      radius: ['30%', '31%'],
      center: ['35%', '50%']
    }]
  },
  media: [
    {
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
