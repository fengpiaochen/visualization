﻿
var Source = function(opt) {
	
	this.topic = "user-architecture";
	
	this.pattern = false;
	
	this.el = null;
	
	this.handle = function(data) {
		
	}
	
	for (var i in opt) {
		this[i] = opt[i];
	}
	
	Sub.subscribe(this);
}

optionSource = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{b}: {c} ({d}%)"
		},
		//固定圆环颜色
		color:[ '#fc9706','#33FF00','#f3fb09','#10cefe','#FFCC66','#FFFF33'],  
	    legend: {
	        orient: 'vertical',
	        x: 'left',
			data:[],
			itemWidth:30,
            itemHeight:20,
            textStyle:{
               fontSize:15,
               color:'#fff'
            }
	    },
	    series: [
	        {
	            name:'用户来源',
	            type:'pie',
				radius: ['100%', '60%'],
				// 改动位置
				//  center: ['50%', '50%'],		 
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '10',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                
	            ]
	        }
	    ]
	};

