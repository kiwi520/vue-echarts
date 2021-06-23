<template>
  <div id="app">
    <chart-bar width="500px" height="400px" :data="bar"></chart-bar>
    <chart-line width="500px" height="400px" :data="line" :colorList="colorList" :options="options"></chart-line>
    <chart-pie width="500px" height="400px" :data="pie"></chart-pie>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data (){
    return {
      options:{
        title:'测试一下',
        tooltipFmter(data){
          return `${data.marker} ${data.name} ${data.seriesName}: ${data.value}`
        },
        keys:[
          {
            label: "收入",
            value: "income"
          },
          {
            label: "支出",
            value: "pay"
          }
        ]
      },
      colorList:['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
      line:[
        {
          name:'一月',
          income:21321,
          pay:11478
        },
        {
          name:'二月',
          income:15456,
          pay:13219
        },
        {
          name:'三月',
          income:21388,
          pay:12378
        },
        {
          name:'四月',
          income:19943,
          pay:12320
        },
        {
          name:'五月',
          income:16000,
          pay:21100
        },
        {
          name:'六月',
          income:23189,
          pay:12009
        },
        {
          name:'七月',
          income:11110,
          pay:32000
        },
        {
          name:'八月',
          income:20233,
          pay:33434
        },
        {
          name:'九月',
          income:32444,
          pay:32434
        },
        {
          name:'十月',
          income:23234,
          pay:43545
        },
        {
          name:'十一月',
          income:32432,
          pay:32421
        },
        {
          name:'十二月',
          income:42342,
          pay:21345
        }
      ],
      pie: [
        {value: 1548, name: '幽州'},
        {value: 535, name: '荆州'},
        {value: 510, name: '兖州'},
        {value: 634, name: '益州'},
        {value: 735, name: '凉州'},
        {value: 435, name: '豫州'},
      ],
      bar: [
        {value: 1548, name: '幽州'},
        {value: 535, name: '荆州'},
        {value: 510, name: '兖州'},
        {value: 634, name: '益州'},
        {value: 735, name: '凉州'},
        {value: 435, name: '豫州'},
      ]
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style>
html, body {
  height: 100%;
}

#app {
  margin: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
}

</style>
