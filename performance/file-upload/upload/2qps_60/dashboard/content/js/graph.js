/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 783.0, "minX": 0.0, "maxY": 1571.0, "series": [{"data": [[0.0, 783.0], [0.1, 783.0], [0.2, 783.0], [0.3, 783.0], [0.4, 783.0], [0.5, 783.0], [0.6, 783.0], [0.7, 783.0], [0.8, 803.0], [0.9, 803.0], [1.0, 803.0], [1.1, 803.0], [1.2, 803.0], [1.3, 803.0], [1.4, 803.0], [1.5, 803.0], [1.6, 803.0], [1.7, 803.0], [1.8, 803.0], [1.9, 803.0], [2.0, 803.0], [2.1, 803.0], [2.2, 803.0], [2.3, 803.0], [2.4, 803.0], [2.5, 803.0], [2.6, 803.0], [2.7, 803.0], [2.8, 803.0], [2.9, 803.0], [3.0, 803.0], [3.1, 803.0], [3.2, 804.0], [3.3, 804.0], [3.4, 804.0], [3.5, 804.0], [3.6, 804.0], [3.7, 804.0], [3.8, 804.0], [3.9, 806.0], [4.0, 806.0], [4.1, 806.0], [4.2, 806.0], [4.3, 806.0], [4.4, 806.0], [4.5, 806.0], [4.6, 806.0], [4.7, 807.0], [4.8, 807.0], [4.9, 807.0], [5.0, 807.0], [5.1, 807.0], [5.2, 807.0], [5.3, 807.0], [5.4, 807.0], [5.5, 810.0], [5.6, 810.0], [5.7, 810.0], [5.8, 810.0], [5.9, 810.0], [6.0, 810.0], [6.1, 810.0], [6.2, 810.0], [6.3, 814.0], [6.4, 814.0], [6.5, 814.0], [6.6, 814.0], [6.7, 814.0], [6.8, 814.0], [6.9, 814.0], [7.0, 815.0], [7.1, 815.0], [7.2, 815.0], [7.3, 815.0], [7.4, 815.0], [7.5, 815.0], [7.6, 815.0], [7.7, 815.0], [7.8, 818.0], [7.9, 818.0], [8.0, 818.0], [8.1, 818.0], [8.2, 818.0], [8.3, 818.0], [8.4, 818.0], [8.5, 818.0], [8.6, 819.0], [8.7, 819.0], [8.8, 819.0], [8.9, 819.0], [9.0, 819.0], [9.1, 819.0], [9.2, 819.0], [9.3, 819.0], [9.4, 819.0], [9.5, 819.0], [9.6, 819.0], [9.7, 819.0], [9.8, 819.0], [9.9, 819.0], [10.0, 819.0], [10.1, 820.0], [10.2, 820.0], [10.3, 820.0], [10.4, 820.0], [10.5, 820.0], [10.6, 820.0], [10.7, 820.0], [10.8, 820.0], [10.9, 821.0], [11.0, 821.0], [11.1, 821.0], [11.2, 821.0], [11.3, 821.0], [11.4, 821.0], [11.5, 821.0], [11.6, 821.0], [11.7, 833.0], [11.8, 833.0], [11.9, 833.0], [12.0, 833.0], [12.1, 833.0], [12.2, 833.0], [12.3, 833.0], [12.4, 833.0], [12.5, 833.0], [12.6, 833.0], [12.7, 833.0], [12.8, 833.0], [12.9, 833.0], [13.0, 833.0], [13.1, 833.0], [13.2, 834.0], [13.3, 834.0], [13.4, 834.0], [13.5, 834.0], [13.6, 834.0], [13.7, 834.0], [13.8, 834.0], [13.9, 834.0], [14.0, 835.0], [14.1, 835.0], [14.2, 835.0], [14.3, 835.0], [14.4, 835.0], [14.5, 835.0], [14.6, 835.0], [14.7, 835.0], [14.8, 836.0], [14.9, 836.0], [15.0, 836.0], [15.1, 836.0], [15.2, 836.0], [15.3, 836.0], [15.4, 836.0], [15.5, 836.0], [15.6, 838.0], [15.7, 838.0], [15.8, 838.0], [15.9, 838.0], [16.0, 838.0], [16.1, 838.0], [16.2, 838.0], [16.3, 838.0], [16.4, 838.0], [16.5, 838.0], [16.6, 838.0], [16.7, 838.0], [16.8, 838.0], [16.9, 838.0], [17.0, 838.0], [17.1, 847.0], [17.2, 847.0], [17.3, 847.0], [17.4, 847.0], [17.5, 847.0], [17.6, 847.0], [17.7, 847.0], [17.8, 847.0], [17.9, 847.0], [18.0, 847.0], [18.1, 847.0], [18.2, 847.0], [18.3, 847.0], [18.4, 847.0], [18.5, 847.0], [18.6, 847.0], [18.7, 848.0], [18.8, 848.0], [18.9, 848.0], [19.0, 848.0], [19.1, 848.0], [19.2, 848.0], [19.3, 848.0], [19.4, 853.0], [19.5, 853.0], [19.6, 853.0], [19.7, 853.0], [19.8, 853.0], [19.9, 853.0], [20.0, 853.0], [20.1, 853.0], [20.2, 856.0], [20.3, 856.0], [20.4, 856.0], [20.5, 856.0], [20.6, 856.0], [20.7, 856.0], [20.8, 856.0], [20.9, 856.0], [21.0, 858.0], [21.1, 858.0], [21.2, 858.0], [21.3, 858.0], [21.4, 858.0], [21.5, 858.0], [21.6, 858.0], [21.7, 858.0], [21.8, 861.0], [21.9, 861.0], [22.0, 861.0], [22.1, 861.0], [22.2, 861.0], [22.3, 861.0], [22.4, 861.0], [22.5, 861.0], [22.6, 861.0], [22.7, 861.0], [22.8, 861.0], [22.9, 861.0], [23.0, 861.0], [23.1, 861.0], [23.2, 861.0], [23.3, 862.0], [23.4, 862.0], [23.5, 862.0], [23.6, 862.0], [23.7, 862.0], [23.8, 862.0], [23.9, 862.0], [24.0, 862.0], [24.1, 863.0], [24.2, 863.0], [24.3, 863.0], [24.4, 863.0], [24.5, 863.0], [24.6, 863.0], [24.7, 863.0], [24.8, 863.0], [24.9, 864.0], [25.0, 864.0], [25.1, 864.0], [25.2, 864.0], [25.3, 864.0], [25.4, 864.0], [25.5, 864.0], [25.6, 869.0], [25.7, 869.0], [25.8, 869.0], [25.9, 869.0], [26.0, 869.0], [26.1, 869.0], [26.2, 869.0], [26.3, 869.0], [26.4, 871.0], [26.5, 871.0], [26.6, 871.0], [26.7, 871.0], [26.8, 871.0], [26.9, 871.0], [27.0, 871.0], [27.1, 871.0], [27.2, 872.0], [27.3, 872.0], [27.4, 872.0], [27.5, 872.0], [27.6, 872.0], [27.7, 872.0], [27.8, 872.0], [27.9, 872.0], [28.0, 872.0], [28.1, 872.0], [28.2, 872.0], [28.3, 872.0], [28.4, 872.0], [28.5, 872.0], [28.6, 872.0], [28.7, 873.0], [28.8, 873.0], [28.9, 873.0], [29.0, 873.0], [29.1, 873.0], [29.2, 873.0], [29.3, 873.0], [29.4, 873.0], [29.5, 876.0], [29.6, 876.0], [29.7, 876.0], [29.8, 876.0], [29.9, 876.0], [30.0, 876.0], [30.1, 876.0], [30.2, 876.0], [30.3, 877.0], [30.4, 877.0], [30.5, 877.0], [30.6, 877.0], [30.7, 877.0], [30.8, 877.0], [30.9, 877.0], [31.0, 877.0], [31.1, 877.0], [31.2, 877.0], [31.3, 877.0], [31.4, 877.0], [31.5, 877.0], [31.6, 877.0], [31.7, 877.0], [31.8, 878.0], [31.9, 878.0], [32.0, 878.0], [32.1, 878.0], [32.2, 878.0], [32.3, 878.0], [32.4, 878.0], [32.5, 878.0], [32.6, 881.0], [32.7, 881.0], [32.8, 881.0], [32.9, 881.0], [33.0, 881.0], [33.1, 881.0], [33.2, 881.0], [33.3, 881.0], [33.4, 883.0], [33.5, 883.0], [33.6, 883.0], [33.7, 883.0], [33.8, 883.0], [33.9, 883.0], [34.0, 883.0], [34.1, 883.0], [34.2, 887.0], [34.3, 887.0], [34.4, 887.0], [34.5, 887.0], [34.6, 887.0], [34.7, 887.0], [34.8, 887.0], [34.9, 887.0], [35.0, 887.0], [35.1, 887.0], [35.2, 887.0], [35.3, 887.0], [35.4, 887.0], [35.5, 887.0], [35.6, 887.0], [35.7, 888.0], [35.8, 888.0], [35.9, 888.0], [36.0, 888.0], [36.1, 888.0], [36.2, 888.0], [36.3, 888.0], [36.4, 888.0], [36.5, 890.0], [36.6, 890.0], [36.7, 890.0], [36.8, 890.0], [36.9, 890.0], [37.0, 890.0], [37.1, 890.0], [37.2, 890.0], [37.3, 891.0], [37.4, 891.0], [37.5, 891.0], [37.6, 891.0], [37.7, 891.0], [37.8, 891.0], [37.9, 891.0], [38.0, 892.0], [38.1, 892.0], [38.2, 892.0], [38.3, 892.0], [38.4, 892.0], [38.5, 892.0], [38.6, 892.0], [38.7, 892.0], [38.8, 893.0], [38.9, 893.0], [39.0, 893.0], [39.1, 893.0], [39.2, 893.0], [39.3, 893.0], [39.4, 893.0], [39.5, 893.0], [39.6, 896.0], [39.7, 896.0], [39.8, 896.0], [39.9, 896.0], [40.0, 896.0], [40.1, 896.0], [40.2, 896.0], [40.3, 896.0], [40.4, 899.0], [40.5, 899.0], [40.6, 899.0], [40.7, 899.0], [40.8, 899.0], [40.9, 899.0], [41.0, 899.0], [41.1, 902.0], [41.2, 902.0], [41.3, 902.0], [41.4, 902.0], [41.5, 902.0], [41.6, 902.0], [41.7, 902.0], [41.8, 902.0], [41.9, 905.0], [42.0, 905.0], [42.1, 905.0], [42.2, 905.0], [42.3, 905.0], [42.4, 905.0], [42.5, 905.0], [42.6, 905.0], [42.7, 905.0], [42.8, 905.0], [42.9, 905.0], [43.0, 905.0], [43.1, 905.0], [43.2, 905.0], [43.3, 905.0], [43.4, 905.0], [43.5, 908.0], [43.6, 908.0], [43.7, 908.0], [43.8, 908.0], [43.9, 908.0], [44.0, 908.0], [44.1, 908.0], [44.2, 908.0], [44.3, 908.0], [44.4, 908.0], [44.5, 908.0], [44.6, 908.0], [44.7, 908.0], [44.8, 908.0], [44.9, 908.0], [45.0, 908.0], [45.1, 908.0], [45.2, 908.0], [45.3, 908.0], [45.4, 908.0], [45.5, 908.0], [45.6, 908.0], [45.7, 908.0], [45.8, 911.0], [45.9, 911.0], [46.0, 911.0], [46.1, 911.0], [46.2, 911.0], [46.3, 911.0], [46.4, 911.0], [46.5, 911.0], [46.6, 911.0], [46.7, 911.0], [46.8, 911.0], [46.9, 911.0], [47.0, 911.0], [47.1, 911.0], [47.2, 911.0], [47.3, 912.0], [47.4, 912.0], [47.5, 912.0], [47.6, 912.0], [47.7, 912.0], [47.8, 912.0], [47.9, 912.0], [48.0, 912.0], [48.1, 912.0], [48.2, 912.0], [48.3, 912.0], [48.4, 912.0], [48.5, 912.0], [48.6, 912.0], [48.7, 912.0], [48.8, 912.0], [48.9, 913.0], [49.0, 913.0], [49.1, 913.0], [49.2, 913.0], [49.3, 913.0], [49.4, 913.0], [49.5, 913.0], [49.6, 913.0], [49.7, 915.0], [49.8, 915.0], [49.9, 915.0], [50.0, 915.0], [50.1, 915.0], [50.2, 915.0], [50.3, 915.0], [50.4, 919.0], [50.5, 919.0], [50.6, 919.0], [50.7, 919.0], [50.8, 919.0], [50.9, 919.0], [51.0, 919.0], [51.1, 919.0], [51.2, 921.0], [51.3, 921.0], [51.4, 921.0], [51.5, 921.0], [51.6, 921.0], [51.7, 921.0], [51.8, 921.0], [51.9, 921.0], [52.0, 922.0], [52.1, 922.0], [52.2, 922.0], [52.3, 922.0], [52.4, 922.0], [52.5, 922.0], [52.6, 922.0], [52.7, 922.0], [52.8, 922.0], [52.9, 922.0], [53.0, 922.0], [53.1, 922.0], [53.2, 922.0], [53.3, 922.0], [53.4, 922.0], [53.5, 923.0], [53.6, 923.0], [53.7, 923.0], [53.8, 923.0], [53.9, 923.0], [54.0, 923.0], [54.1, 923.0], [54.2, 923.0], [54.3, 925.0], [54.4, 925.0], [54.5, 925.0], [54.6, 925.0], [54.7, 925.0], [54.8, 925.0], [54.9, 925.0], [55.0, 925.0], [55.1, 927.0], [55.2, 927.0], [55.3, 927.0], [55.4, 927.0], [55.5, 927.0], [55.6, 927.0], [55.7, 927.0], [55.8, 927.0], [55.9, 927.0], [56.0, 927.0], [56.1, 927.0], [56.2, 927.0], [56.3, 927.0], [56.4, 927.0], [56.5, 927.0], [56.6, 927.0], [56.7, 927.0], [56.8, 927.0], [56.9, 927.0], [57.0, 927.0], [57.1, 927.0], [57.2, 927.0], [57.3, 927.0], [57.4, 928.0], [57.5, 928.0], [57.6, 928.0], [57.7, 928.0], [57.8, 928.0], [57.9, 928.0], [58.0, 928.0], [58.1, 928.0], [58.2, 929.0], [58.3, 929.0], [58.4, 929.0], [58.5, 929.0], [58.6, 929.0], [58.7, 929.0], [58.8, 929.0], [58.9, 929.0], [59.0, 930.0], [59.1, 930.0], [59.2, 930.0], [59.3, 930.0], [59.4, 930.0], [59.5, 930.0], [59.6, 930.0], [59.7, 934.0], [59.8, 934.0], [59.9, 934.0], [60.0, 934.0], [60.1, 934.0], [60.2, 934.0], [60.3, 934.0], [60.4, 934.0], [60.5, 934.0], [60.6, 934.0], [60.7, 934.0], [60.8, 934.0], [60.9, 934.0], [61.0, 934.0], [61.1, 934.0], [61.2, 934.0], [61.3, 936.0], [61.4, 936.0], [61.5, 936.0], [61.6, 936.0], [61.7, 936.0], [61.8, 936.0], [61.9, 936.0], [62.0, 936.0], [62.1, 937.0], [62.2, 937.0], [62.3, 937.0], [62.4, 937.0], [62.5, 937.0], [62.6, 937.0], [62.7, 937.0], [62.8, 938.0], [62.9, 938.0], [63.0, 938.0], [63.1, 938.0], [63.2, 938.0], [63.3, 938.0], [63.4, 938.0], [63.5, 938.0], [63.6, 939.0], [63.7, 939.0], [63.8, 939.0], [63.9, 939.0], [64.0, 939.0], [64.1, 939.0], [64.2, 939.0], [64.3, 939.0], [64.4, 940.0], [64.5, 940.0], [64.6, 940.0], [64.7, 940.0], [64.8, 940.0], [64.9, 940.0], [65.0, 940.0], [65.1, 940.0], [65.2, 941.0], [65.3, 941.0], [65.4, 941.0], [65.5, 941.0], [65.6, 941.0], [65.7, 941.0], [65.8, 941.0], [65.9, 944.0], [66.0, 944.0], [66.1, 944.0], [66.2, 944.0], [66.3, 944.0], [66.4, 944.0], [66.5, 944.0], [66.6, 944.0], [66.7, 944.0], [66.8, 944.0], [66.9, 944.0], [67.0, 944.0], [67.1, 944.0], [67.2, 944.0], [67.3, 944.0], [67.4, 944.0], [67.5, 944.0], [67.6, 944.0], [67.7, 944.0], [67.8, 944.0], [67.9, 944.0], [68.0, 944.0], [68.1, 944.0], [68.2, 944.0], [68.3, 945.0], [68.4, 945.0], [68.5, 945.0], [68.6, 945.0], [68.7, 945.0], [68.8, 945.0], [68.9, 945.0], [69.0, 946.0], [69.1, 946.0], [69.2, 946.0], [69.3, 946.0], [69.4, 946.0], [69.5, 946.0], [69.6, 946.0], [69.7, 946.0], [69.8, 948.0], [69.9, 948.0], [70.0, 948.0], [70.1, 948.0], [70.2, 948.0], [70.3, 948.0], [70.4, 948.0], [70.5, 948.0], [70.6, 949.0], [70.7, 949.0], [70.8, 949.0], [70.9, 949.0], [71.0, 949.0], [71.1, 949.0], [71.2, 949.0], [71.3, 949.0], [71.4, 951.0], [71.5, 951.0], [71.6, 951.0], [71.7, 951.0], [71.8, 951.0], [71.9, 951.0], [72.0, 951.0], [72.1, 952.0], [72.2, 952.0], [72.3, 952.0], [72.4, 952.0], [72.5, 952.0], [72.6, 952.0], [72.7, 952.0], [72.8, 952.0], [72.9, 952.0], [73.0, 952.0], [73.1, 952.0], [73.2, 952.0], [73.3, 952.0], [73.4, 952.0], [73.5, 952.0], [73.6, 952.0], [73.7, 952.0], [73.8, 952.0], [73.9, 952.0], [74.0, 952.0], [74.1, 952.0], [74.2, 952.0], [74.3, 952.0], [74.4, 952.0], [74.5, 953.0], [74.6, 953.0], [74.7, 953.0], [74.8, 953.0], [74.9, 953.0], [75.0, 953.0], [75.1, 953.0], [75.2, 953.0], [75.3, 953.0], [75.4, 953.0], [75.5, 953.0], [75.6, 953.0], [75.7, 953.0], [75.8, 953.0], [75.9, 953.0], [76.0, 957.0], [76.1, 957.0], [76.2, 957.0], [76.3, 957.0], [76.4, 957.0], [76.5, 957.0], [76.6, 957.0], [76.7, 957.0], [76.8, 958.0], [76.9, 958.0], [77.0, 958.0], [77.1, 958.0], [77.2, 958.0], [77.3, 958.0], [77.4, 958.0], [77.5, 958.0], [77.6, 959.0], [77.7, 959.0], [77.8, 959.0], [77.9, 959.0], [78.0, 959.0], [78.1, 959.0], [78.2, 959.0], [78.3, 961.0], [78.4, 961.0], [78.5, 961.0], [78.6, 961.0], [78.7, 961.0], [78.8, 961.0], [78.9, 961.0], [79.0, 961.0], [79.1, 961.0], [79.2, 961.0], [79.3, 961.0], [79.4, 961.0], [79.5, 961.0], [79.6, 961.0], [79.7, 961.0], [79.8, 961.0], [79.9, 964.0], [80.0, 964.0], [80.1, 964.0], [80.2, 964.0], [80.3, 964.0], [80.4, 964.0], [80.5, 964.0], [80.6, 964.0], [80.7, 966.0], [80.8, 966.0], [80.9, 966.0], [81.0, 966.0], [81.1, 966.0], [81.2, 966.0], [81.3, 966.0], [81.4, 966.0], [81.5, 966.0], [81.6, 966.0], [81.7, 966.0], [81.8, 966.0], [81.9, 966.0], [82.0, 966.0], [82.1, 966.0], [82.2, 966.0], [82.3, 966.0], [82.4, 966.0], [82.5, 966.0], [82.6, 966.0], [82.7, 966.0], [82.8, 966.0], [82.9, 966.0], [83.0, 974.0], [83.1, 974.0], [83.2, 974.0], [83.3, 974.0], [83.4, 974.0], [83.5, 974.0], [83.6, 974.0], [83.7, 974.0], [83.8, 976.0], [83.9, 976.0], [84.0, 976.0], [84.1, 976.0], [84.2, 976.0], [84.3, 976.0], [84.4, 976.0], [84.5, 979.0], [84.6, 979.0], [84.7, 979.0], [84.8, 979.0], [84.9, 979.0], [85.0, 979.0], [85.1, 979.0], [85.2, 979.0], [85.3, 982.0], [85.4, 982.0], [85.5, 982.0], [85.6, 982.0], [85.7, 982.0], [85.8, 982.0], [85.9, 982.0], [86.0, 982.0], [86.1, 983.0], [86.2, 983.0], [86.3, 983.0], [86.4, 983.0], [86.5, 983.0], [86.6, 983.0], [86.7, 983.0], [86.8, 983.0], [86.9, 985.0], [87.0, 985.0], [87.1, 985.0], [87.2, 985.0], [87.3, 985.0], [87.4, 985.0], [87.5, 985.0], [87.6, 996.0], [87.7, 996.0], [87.8, 996.0], [87.9, 996.0], [88.0, 996.0], [88.1, 996.0], [88.2, 996.0], [88.3, 996.0], [88.4, 1002.0], [88.5, 1002.0], [88.6, 1002.0], [88.7, 1002.0], [88.8, 1002.0], [88.9, 1002.0], [89.0, 1002.0], [89.1, 1002.0], [89.2, 1039.0], [89.3, 1039.0], [89.4, 1039.0], [89.5, 1039.0], [89.6, 1039.0], [89.7, 1039.0], [89.8, 1039.0], [89.9, 1039.0], [90.0, 1049.0], [90.1, 1049.0], [90.2, 1049.0], [90.3, 1049.0], [90.4, 1049.0], [90.5, 1049.0], [90.6, 1049.0], [90.7, 1055.0], [90.8, 1055.0], [90.9, 1055.0], [91.0, 1055.0], [91.1, 1055.0], [91.2, 1055.0], [91.3, 1055.0], [91.4, 1055.0], [91.5, 1061.0], [91.6, 1061.0], [91.7, 1061.0], [91.8, 1061.0], [91.9, 1061.0], [92.0, 1061.0], [92.1, 1061.0], [92.2, 1061.0], [92.3, 1062.0], [92.4, 1062.0], [92.5, 1062.0], [92.6, 1062.0], [92.7, 1062.0], [92.8, 1062.0], [92.9, 1062.0], [93.0, 1062.0], [93.1, 1080.0], [93.2, 1080.0], [93.3, 1080.0], [93.4, 1080.0], [93.5, 1080.0], [93.6, 1080.0], [93.7, 1080.0], [93.8, 1111.0], [93.9, 1111.0], [94.0, 1111.0], [94.1, 1111.0], [94.2, 1111.0], [94.3, 1111.0], [94.4, 1111.0], [94.5, 1111.0], [94.6, 1139.0], [94.7, 1139.0], [94.8, 1139.0], [94.9, 1139.0], [95.0, 1139.0], [95.1, 1139.0], [95.2, 1139.0], [95.3, 1139.0], [95.4, 1142.0], [95.5, 1142.0], [95.6, 1142.0], [95.7, 1142.0], [95.8, 1142.0], [95.9, 1142.0], [96.0, 1142.0], [96.1, 1142.0], [96.2, 1142.0], [96.3, 1142.0], [96.4, 1142.0], [96.5, 1142.0], [96.6, 1142.0], [96.7, 1142.0], [96.8, 1142.0], [96.9, 1146.0], [97.0, 1146.0], [97.1, 1146.0], [97.2, 1146.0], [97.3, 1146.0], [97.4, 1146.0], [97.5, 1146.0], [97.6, 1146.0], [97.7, 1172.0], [97.8, 1172.0], [97.9, 1172.0], [98.0, 1172.0], [98.1, 1172.0], [98.2, 1172.0], [98.3, 1172.0], [98.4, 1172.0], [98.5, 1477.0], [98.6, 1477.0], [98.7, 1477.0], [98.8, 1477.0], [98.9, 1477.0], [99.0, 1477.0], [99.1, 1477.0], [99.2, 1477.0], [99.3, 1571.0], [99.4, 1571.0], [99.5, 1571.0], [99.6, 1571.0], [99.7, 1571.0], [99.8, 1571.0], [99.9, 1571.0]], "isOverall": false, "label": "uploadFile", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 61.0, "series": [{"data": [[1100.0, 6.0], [700.0, 1.0], [1400.0, 1.0], [1500.0, 1.0], [800.0, 52.0], [900.0, 61.0], [1000.0, 7.0]], "isOverall": false, "label": "uploadFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 128.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 128.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.9894736842105263, "minX": 1.58242842E12, "maxY": 2.0, "series": [{"data": [[1.58242848E12, 1.9894736842105263], [1.58242842E12, 2.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58242848E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 908.0, "minX": 1.0, "maxY": 927.9609374999998, "series": [{"data": [[2.0, 927.9609374999998], [1.0, 908.0]], "isOverall": false, "label": "uploadFile", "isController": false}, {"data": [[1.9922480620155039, 927.8062015503874]], "isOverall": false, "label": "uploadFile-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 2.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 58.36666666666667, "minX": 1.58242842E12, "maxY": 1568187.2166666666, "series": [{"data": [[1.58242848E12, 163.08333333333334], [1.58242842E12, 58.36666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58242848E12, 1568187.2166666666], [1.58242842E12, 560181.7333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58242848E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 883.2941176470588, "minX": 1.58242842E12, "maxY": 943.7368421052633, "series": [{"data": [[1.58242848E12, 943.7368421052633], [1.58242842E12, 883.2941176470588]], "isOverall": false, "label": "uploadFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58242848E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 883.2647058823528, "minX": 1.58242842E12, "maxY": 943.7263157894735, "series": [{"data": [[1.58242848E12, 943.7263157894735], [1.58242842E12, 883.2647058823528]], "isOverall": false, "label": "uploadFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58242848E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 38.273684210526326, "minX": 1.58242842E12, "maxY": 38.35294117647059, "series": [{"data": [[1.58242848E12, 38.273684210526326], [1.58242842E12, 38.35294117647059]], "isOverall": false, "label": "uploadFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58242848E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 783.0, "minX": 1.58242842E12, "maxY": 1571.0, "series": [{"data": [[1.58242848E12, 1571.0], [1.58242842E12, 1146.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58242848E12, 803.0], [1.58242842E12, 783.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58242848E12, 1051.4], [1.58242842E12, 1023.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58242848E12, 1571.0], [1.58242842E12, 1146.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58242848E12, 1142.0], [1.58242842E12, 1119.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58242848E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 848.0, "minX": 1.0, "maxY": 1142.0, "series": [{"data": [[2.0, 924.0], [4.0, 906.0], [1.0, 1142.0], [3.0, 848.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 848.0, "minX": 1.0, "maxY": 1142.0, "series": [{"data": [[2.0, 924.0], [4.0, 906.0], [1.0, 1142.0], [3.0, 848.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.6, "minX": 1.58242842E12, "maxY": 1.55, "series": [{"data": [[1.58242848E12, 1.55], [1.58242842E12, 0.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58242848E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.58242842E12, "maxY": 1.5833333333333333, "series": [{"data": [[1.58242848E12, 1.5833333333333333], [1.58242842E12, 0.5666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58242848E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.58242842E12, "maxY": 1.5833333333333333, "series": [{"data": [[1.58242848E12, 1.5833333333333333], [1.58242842E12, 0.5666666666666667]], "isOverall": false, "label": "uploadFile-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58242848E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.5666666666666667, "minX": 1.58242842E12, "maxY": 1.5833333333333333, "series": [{"data": [[1.58242848E12, 1.5833333333333333], [1.58242842E12, 0.5666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58242848E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

