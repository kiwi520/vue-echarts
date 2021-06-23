<template>
  <div class="barChart" :style="{width,height}" ref="chart"></div>
</template>

<script>
export default {
  name: "BarChart",
  props: {
    width: {
      type: String,
      default() {
        return '500px'
      }
    },
    height: {
      type: String,
      default() {
        return '300px'
      }
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },

  },
  mounted() {

    //bar 柱状图
    let option = {
      legend:{},
      title: {
        text: '三国各州面积柱状图',
        subtext: '平方公里'
      },
      tooltip: {},
      xAxis: {
        data: this.data.map(item=>item.name),
        axisLabel:{
          rotate: 30,
          fontSize:10
        },

      },
      yAxis: {},
      series: [{
        name: '面积',
        type: 'bar',
        itemStyle:{
          normal:{
            color:function (c) { //指定不同柱体颜色
              let colorList = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
              return colorList[c.dataIndex]
            }
          }
        },
        data: this.data.map(item=>item.value)
      }]
    }

    // 绘制图表
    this.initCHart(this.$refs.chart, option,function (data) {
      console.log(data.name)
    })
  }
}
</script>

<style scoped>

</style>
