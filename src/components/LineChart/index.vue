<template>
  <div  :style="{width,height}"  ref="lineChart"></div>
</template>

<script>
export default {
  name: "LineChart",
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
      },
      required: true
    },
    colorList: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return {}
      },
      required: true
    },

  },
  mounted() {
    let cl = this.colorList
    let series = this.options.keys.map(r=>{
      return {
        name: r.label,
        type:'line',
        data: this.data.map(item=>item[r.value]),
        itemStyle:{
          normal:{
            color:function (c) { //指定不同柱体颜色
              let colorList = cl ? cl : ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
              return colorList[c.dataIndex]
            }
          }
        }
      }
    })

    //line 折线图
    let lineChartOption = {
      title: {
        // text:"2020 收支统计",
        text: this.options.title,
        left:'center',
      },
      tooltip: {
        trigger:'axis',
        axisPointer: {
          type: 'cross'
        }
        // formatter:(data)=>{
        //   // console.log(data)
        //   // return `${data.marker} ${data.name} ${data.seriesName}: ${data.value}`
        //   return this.options.tooltipFmter(data)
        // }
      },
      legend:{
        top:20,
        right:10,
        formatter: '2020{name}'
      },
      xAxis: {
        type: 'category',
        data: this.data.map(item=>item.name),
        axisLabel:{
          rotate: 30
        }
      },
      yAxis: {
        type: 'value'
      },
      // color:['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
      series:series
      // series: [{
      //   name:'收入',
      //   data: this.data.map(item=>item.income),
      //   type: 'line',
      //   itemStyle:{
      //     normal:{
      //       color:function (c) { //指定不同柱体颜色
      //         let colorList = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
      //         return colorList[c.dataIndex]
      //       }
      //     }
      //   },
      // },{
      //   name:'支出',
      //   data: this.data.map(item=>item.pay),
      //   type: 'line',
      //   itemStyle:{
      //     normal:{
      //       color:function (c) { //指定不同柱体颜色
      //         let colorList = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
      //         return colorList[c.dataIndex]
      //       }
      //     }
      //   },
      // }]
    }

    this.initCHart(this.$refs.lineChart, lineChartOption)
  }
}
</script>

<style scoped>
.lineChart{
  width: 500px;
  height: 400px;
}
</style>
