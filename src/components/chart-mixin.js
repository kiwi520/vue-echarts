import * as echarts from "echarts";
import LineChart from "@/components/LineChart";
import BarChart from '@/components/BarChart';
import PieChart from '@/components/PieChart'
export default {
    install(Vue){
        Vue.mixin({
            methods: {
                initCHart(container, option, onClick ) {
                    const myChart = echarts.init(container)
                    // option.color=['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
                    myChart.setOption(option);
                    if (onClick) myChart.on('click',onClick)
                }
            },
        })
        Vue.component('chart-line',LineChart)
        Vue.component('chart-bar',BarChart)
        Vue.component('chart-pie',PieChart)
    }
}
