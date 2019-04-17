export default {
  color: ['#3398db'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  title: [{
    text: '缺省数据',
    show: true,
    textStyle: {
      fontFamily: 'Arial',
      color: '#983'
    }
  }],
  xAxis: [{
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisTick: {
      alignWithLabel: true
    }
  }],
  yAxis: [{
    type: 'value'
  }],
  series: [{
    name: '直接访问',
    type: 'line',
    barWidth: '60%',
    data: [10, 52, 200, 334, 390, 330, 220]
  }]
}
