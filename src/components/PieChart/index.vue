<template>
  <div class="pieChart" :style="{width,height}" ref="pieChart"></div>
</template>

<script>

export default {
  name: "PieChart",
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

    //pie 饼状图
    let peiChartOption = {
      legend:{
      },
      tooltip: {},
      series: [
        {
          name: '州土面积',
          type: 'pie',
          data: this.data
        }
      ]
    }

    this.initCHart(this.$refs.pieChart, peiChartOption)
  }
}
</script>

<style scoped>

</style>
