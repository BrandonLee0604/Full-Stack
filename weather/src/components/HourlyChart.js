import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/grid'

import React from 'react';

class HourlyChart extends React.Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('forecast-chart'));

        const xdata = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        const ydata = {
            ydata1:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        }

        myChart.setOption({
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Temperature']
            },
            toolbox: {
                show : true,
                feature : {
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {
                        show: true,
                        type: 'jpg'
                    }
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : xdata
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Temperature',
                    type:'bar',
                    data: ydata.ydata1,
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                }
            ]
        });
    }

    render() {
        return (
            <div className='chart-wrapper'>
                <div id='forecast-chart' style={{ width: '100%', height: 500 }}>

                </div>
            </div>

        )
    }
}

export default HourlyChart

