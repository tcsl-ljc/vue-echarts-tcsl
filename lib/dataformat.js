/**
 * 此方法适用于 area / line / column / stack 图表的数据格式转换
 */
export function dataformatCommon (chartData) {
  // console.log('原始数据:', chartData);
  let data = {};
  if (chartData && chartData.yAxis && chartData.yAxis.length > 0 && chartData.xAxis && chartData.xAxis.length > 0) {
    data.seriesData = chartData.yAxis;
    data.xAxisData = chartData.xAxis;
  }
  // console.log('转换后的数据:', data);
  return data;
}

/**
 * 此方法适用于 pie / ring / map / scatter 图表的数据格式转换
 */
export function dataformatToNameValue (chartData) {
  // console.log('原始数据:', chartData);
  let data = [];
  if (chartData && chartData.yAxis && chartData.yAxis.length > 0) {
    data = chartData.yAxis.map((data) => {
      return {name: data.name, value: data.data[0]};
    });
  }
  // console.log('转换后的数据:', data);
  return data;
}

/**
 * 此方法适用于 gauge 图表的数据格式转换
 */
export function dataformatForGauge (chartData) {
  // console.log('原始数据:', chartData);
  let data = {};
  if (chartData && chartData.yAxis && chartData.yAxis.length > 0) {
    data.max = chartData.yAxis[0].data[0];
    data.min = chartData.yAxis[0].data[1];
    data.value = chartData.yAxis[0].data[2];
    data.title = chartData.yAxis[0].name;
  }
  // console.log('转换后的数据:', data);
  return data;
}

/**
 * 此方法适用于 table 图表的数据格式转换
 */
export function dataformatForTable (chartData) {
  // console.log('原始数据:', chartData);
  let data = [];
  if (chartData && chartData.yAxis && chartData.yAxis.length > 0 && chartData.xAxis && chartData.xAxis.length > 0) {
    for (let i = 0; i < chartData.yAxis.length; i++) {
      let tmp = {};
      for (let j = 0; j < chartData.xAxis.length; j++) {
        tmp[chartData.xAxis[j]] = chartData.yAxis[i].data[j];
      }
      data.push(tmp);
    }
  }
  // console.log('转换后的数据:', data);
  return data;
}
