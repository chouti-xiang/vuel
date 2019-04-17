<template>
<div :id="id"  :style="{height:height,width:width}" ref="myEchart" ></div>
</template>

<script>
import echarts from 'echarts'
import echartDefaultOptions from './echartDefaultOptions'
export default {
  name: 'Echarts',
  props: {
    value: false,
    height: {
      type: String,
      default: '200px'
    },
    width: {
      type: String,
      default: '400px'
    },
    className: {
      type: String,
      default: 'yourClassName'
    },
    id: {
      default () {
        return 'echart-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      }
    },
    options: {
      type: Object,
      default () {
        return echartDefaultOptions
      }
    }
  },
  data () {
    return {
      chart: ''
    }
  },
  watch: {
   
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.chart = echarts.init(document.getElementById(this.id))
      const options = Object.assign({}, echartDefaultOptions, this.options)
      this.chart.setOption(options)
    }
  }
  
}
</script>
