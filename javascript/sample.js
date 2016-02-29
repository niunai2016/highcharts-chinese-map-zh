(function() {
    "use strict";

    var mapTranslate = Highcharts.maps["translate/china"]; // 引入翻译文件

    buildMapCharts("中国地图", $("#china_map"));


    function buildMapCharts(title, element) {

        element.highcharts('Map', {
            title: {
                text: title
            },

            credits: {
                enabled: true
            },

            mapNavigation: {
                enabled: true
            },

            legend: {
                enabled: false
            },

            series: [{
                mapData: Highcharts.maps["countries/cn/custom/cn-all-sar-taiwan"],
                name: title,
                nullColor: 'rgba(200, 200, 200, 0.3)',
                dataLabels: {
                   enabled: true,
                   color: '#eee',
                   formatter: function () {
                       return mapTranslate[this.key]; // 返回中文名称
                   },
                   style: {
                       fontWeight: 'bold'
                   }
               }
            }]
        });
    }

}());
