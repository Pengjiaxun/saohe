$(function(){
	var myChart = echarts.init(document.getElementById('main_order'));
	var option = {
    grid:{backgroundColor:'white',
        x2:'0',
        x:'0',
        y2:'25',
        y:'25'
    },  
    xAxis:  {
        // 去掉了横坐标的网格线
        splitLine:{
　　　　    show:false
　　    },
        axisLine : {
            lineStyle:{color:'rgba(255,255,255,1)'}

            },
        //去掉坐标轴上的小间隔线
         axisTick : {  
                    show : false  
                },    
        type: 'category',
        data: ['1','2','3','4','5','6','7'],
        axisLabel : {
            show : true,
            lineStyle:{color:'#fff'},
            textStyle : {
            color : '#fff',
            }
        },
        
    },
    yAxis: {
        // 不显示纵坐标
        show:false,
        // 去掉了纵坐标的网格线
        splitLine:{
　　　　    show:false
　　    },
        axisLine : {
            lineStyle:{
                type:'solid',
                width:'0',//不显示纵坐标
                color:'#fff'
            }
        },
        type: 'value',
        
        axisLabel : {
            show : true,
            lineStyle:{color:'#fff'},
            textStyle : {
                color : '#fff',
            }
        },
    },
    series: [
        {   
            name:'收益',
            type:'line',
            data:[3, 4, 6, 8, 10, 12, 10],
            itemStyle : {  
                normal : {  
                    color:'#fff',
                    lineStyle : {  
                        width : 1  
                    },
                label : {  
                    show : true,  
                    position : 'top',  
                    textStyle : {  
                        fontStyle : '200',  
                        fontSize :10,
                    }  
                }  
            }
       },
       symbol:'emptyCircle',  
       symbolSize : 4,
        },
    ]
};
 myChart.setOption(option); 
 window.onresize = myChart.resize;
 });