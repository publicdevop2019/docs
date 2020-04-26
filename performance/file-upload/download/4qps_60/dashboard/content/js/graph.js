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
        data: {"result": {"minY": 526.0, "minX": 0.0, "maxY": 2038.0, "series": [{"data": [[0.0, 526.0], [0.1, 526.0], [0.2, 526.0], [0.3, 526.0], [0.4, 528.0], [0.5, 528.0], [0.6, 528.0], [0.7, 528.0], [0.8, 538.0], [0.9, 538.0], [1.0, 538.0], [1.1, 538.0], [1.2, 538.0], [1.3, 538.0], [1.4, 538.0], [1.5, 538.0], [1.6, 543.0], [1.7, 543.0], [1.8, 543.0], [1.9, 543.0], [2.0, 576.0], [2.1, 576.0], [2.2, 576.0], [2.3, 576.0], [2.4, 582.0], [2.5, 582.0], [2.6, 582.0], [2.7, 582.0], [2.8, 591.0], [2.9, 591.0], [3.0, 591.0], [3.1, 591.0], [3.2, 605.0], [3.3, 605.0], [3.4, 605.0], [3.5, 605.0], [3.6, 656.0], [3.7, 656.0], [3.8, 656.0], [3.9, 656.0], [4.0, 667.0], [4.1, 667.0], [4.2, 667.0], [4.3, 670.0], [4.4, 670.0], [4.5, 670.0], [4.6, 670.0], [4.7, 691.0], [4.8, 691.0], [4.9, 691.0], [5.0, 691.0], [5.1, 695.0], [5.2, 695.0], [5.3, 695.0], [5.4, 695.0], [5.5, 703.0], [5.6, 703.0], [5.7, 703.0], [5.8, 703.0], [5.9, 703.0], [6.0, 703.0], [6.1, 703.0], [6.2, 703.0], [6.3, 714.0], [6.4, 714.0], [6.5, 714.0], [6.6, 714.0], [6.7, 716.0], [6.8, 716.0], [6.9, 716.0], [7.0, 716.0], [7.1, 721.0], [7.2, 721.0], [7.3, 721.0], [7.4, 721.0], [7.5, 721.0], [7.6, 721.0], [7.7, 721.0], [7.8, 721.0], [7.9, 728.0], [8.0, 728.0], [8.1, 728.0], [8.2, 728.0], [8.3, 734.0], [8.4, 734.0], [8.5, 734.0], [8.6, 738.0], [8.7, 738.0], [8.8, 738.0], [8.9, 738.0], [9.0, 739.0], [9.1, 739.0], [9.2, 739.0], [9.3, 739.0], [9.4, 743.0], [9.5, 743.0], [9.6, 743.0], [9.7, 743.0], [9.8, 743.0], [9.9, 743.0], [10.0, 743.0], [10.1, 743.0], [10.2, 749.0], [10.3, 749.0], [10.4, 749.0], [10.5, 749.0], [10.6, 749.0], [10.7, 749.0], [10.8, 749.0], [10.9, 749.0], [11.0, 750.0], [11.1, 750.0], [11.2, 750.0], [11.3, 750.0], [11.4, 752.0], [11.5, 752.0], [11.6, 752.0], [11.7, 752.0], [11.8, 757.0], [11.9, 757.0], [12.0, 757.0], [12.1, 757.0], [12.2, 760.0], [12.3, 760.0], [12.4, 760.0], [12.5, 764.0], [12.6, 764.0], [12.7, 764.0], [12.8, 764.0], [12.9, 767.0], [13.0, 767.0], [13.1, 767.0], [13.2, 767.0], [13.3, 769.0], [13.4, 769.0], [13.5, 769.0], [13.6, 769.0], [13.7, 771.0], [13.8, 771.0], [13.9, 771.0], [14.0, 771.0], [14.1, 777.0], [14.2, 777.0], [14.3, 777.0], [14.4, 777.0], [14.5, 779.0], [14.6, 779.0], [14.7, 779.0], [14.8, 779.0], [14.9, 779.0], [15.0, 779.0], [15.1, 779.0], [15.2, 779.0], [15.3, 797.0], [15.4, 797.0], [15.5, 797.0], [15.6, 797.0], [15.7, 798.0], [15.8, 798.0], [15.9, 798.0], [16.0, 798.0], [16.1, 806.0], [16.2, 806.0], [16.3, 806.0], [16.4, 806.0], [16.5, 807.0], [16.6, 807.0], [16.7, 807.0], [16.8, 809.0], [16.9, 809.0], [17.0, 809.0], [17.1, 809.0], [17.2, 812.0], [17.3, 812.0], [17.4, 812.0], [17.5, 812.0], [17.6, 812.0], [17.7, 812.0], [17.8, 812.0], [17.9, 812.0], [18.0, 813.0], [18.1, 813.0], [18.2, 813.0], [18.3, 813.0], [18.4, 814.0], [18.5, 814.0], [18.6, 814.0], [18.7, 814.0], [18.8, 814.0], [18.9, 814.0], [19.0, 814.0], [19.1, 814.0], [19.2, 820.0], [19.3, 820.0], [19.4, 820.0], [19.5, 820.0], [19.6, 822.0], [19.7, 822.0], [19.8, 822.0], [19.9, 822.0], [20.0, 824.0], [20.1, 824.0], [20.2, 824.0], [20.3, 824.0], [20.4, 825.0], [20.5, 825.0], [20.6, 825.0], [20.7, 825.0], [20.8, 826.0], [20.9, 826.0], [21.0, 826.0], [21.1, 826.0], [21.2, 826.0], [21.3, 826.0], [21.4, 826.0], [21.5, 828.0], [21.6, 828.0], [21.7, 828.0], [21.8, 828.0], [21.9, 829.0], [22.0, 829.0], [22.1, 829.0], [22.2, 829.0], [22.3, 829.0], [22.4, 829.0], [22.5, 829.0], [22.6, 829.0], [22.7, 832.0], [22.8, 832.0], [22.9, 832.0], [23.0, 832.0], [23.1, 833.0], [23.2, 833.0], [23.3, 833.0], [23.4, 833.0], [23.5, 834.0], [23.6, 834.0], [23.7, 834.0], [23.8, 834.0], [23.9, 835.0], [24.0, 835.0], [24.1, 835.0], [24.2, 835.0], [24.3, 838.0], [24.4, 838.0], [24.5, 838.0], [24.6, 838.0], [24.7, 841.0], [24.8, 841.0], [24.9, 841.0], [25.0, 841.0], [25.1, 841.0], [25.2, 841.0], [25.3, 841.0], [25.4, 843.0], [25.5, 843.0], [25.6, 843.0], [25.7, 843.0], [25.8, 846.0], [25.9, 846.0], [26.0, 846.0], [26.1, 846.0], [26.2, 846.0], [26.3, 846.0], [26.4, 846.0], [26.5, 846.0], [26.6, 848.0], [26.7, 848.0], [26.8, 848.0], [26.9, 848.0], [27.0, 850.0], [27.1, 850.0], [27.2, 850.0], [27.3, 850.0], [27.4, 851.0], [27.5, 851.0], [27.6, 851.0], [27.7, 851.0], [27.8, 854.0], [27.9, 854.0], [28.0, 854.0], [28.1, 854.0], [28.2, 854.0], [28.3, 854.0], [28.4, 854.0], [28.5, 854.0], [28.6, 855.0], [28.7, 855.0], [28.8, 855.0], [28.9, 855.0], [29.0, 858.0], [29.1, 858.0], [29.2, 858.0], [29.3, 859.0], [29.4, 859.0], [29.5, 859.0], [29.6, 859.0], [29.7, 861.0], [29.8, 861.0], [29.9, 861.0], [30.0, 861.0], [30.1, 864.0], [30.2, 864.0], [30.3, 864.0], [30.4, 864.0], [30.5, 865.0], [30.6, 865.0], [30.7, 865.0], [30.8, 865.0], [30.9, 866.0], [31.0, 866.0], [31.1, 866.0], [31.2, 866.0], [31.3, 866.0], [31.4, 866.0], [31.5, 866.0], [31.6, 866.0], [31.7, 866.0], [31.8, 866.0], [31.9, 866.0], [32.0, 866.0], [32.1, 867.0], [32.2, 867.0], [32.3, 867.0], [32.4, 867.0], [32.5, 867.0], [32.6, 867.0], [32.7, 867.0], [32.8, 867.0], [32.9, 868.0], [33.0, 868.0], [33.1, 868.0], [33.2, 868.0], [33.3, 871.0], [33.4, 871.0], [33.5, 871.0], [33.6, 872.0], [33.7, 872.0], [33.8, 872.0], [33.9, 872.0], [34.0, 872.0], [34.1, 872.0], [34.2, 872.0], [34.3, 872.0], [34.4, 874.0], [34.5, 874.0], [34.6, 874.0], [34.7, 874.0], [34.8, 875.0], [34.9, 875.0], [35.0, 875.0], [35.1, 875.0], [35.2, 875.0], [35.3, 875.0], [35.4, 875.0], [35.5, 875.0], [35.6, 876.0], [35.7, 876.0], [35.8, 876.0], [35.9, 876.0], [36.0, 876.0], [36.1, 876.0], [36.2, 876.0], [36.3, 876.0], [36.4, 877.0], [36.5, 877.0], [36.6, 877.0], [36.7, 877.0], [36.8, 878.0], [36.9, 878.0], [37.0, 878.0], [37.1, 878.0], [37.2, 878.0], [37.3, 878.0], [37.4, 878.0], [37.5, 879.0], [37.6, 879.0], [37.7, 879.0], [37.8, 879.0], [37.9, 880.0], [38.0, 880.0], [38.1, 880.0], [38.2, 880.0], [38.3, 881.0], [38.4, 881.0], [38.5, 881.0], [38.6, 881.0], [38.7, 881.0], [38.8, 881.0], [38.9, 881.0], [39.0, 881.0], [39.1, 882.0], [39.2, 882.0], [39.3, 882.0], [39.4, 882.0], [39.5, 882.0], [39.6, 882.0], [39.7, 882.0], [39.8, 882.0], [39.9, 883.0], [40.0, 883.0], [40.1, 883.0], [40.2, 883.0], [40.3, 883.0], [40.4, 883.0], [40.5, 883.0], [40.6, 883.0], [40.7, 887.0], [40.8, 887.0], [40.9, 887.0], [41.0, 887.0], [41.1, 889.0], [41.2, 889.0], [41.3, 889.0], [41.4, 889.0], [41.5, 896.0], [41.6, 896.0], [41.7, 896.0], [41.8, 899.0], [41.9, 899.0], [42.0, 899.0], [42.1, 899.0], [42.2, 899.0], [42.3, 899.0], [42.4, 899.0], [42.5, 899.0], [42.6, 901.0], [42.7, 901.0], [42.8, 901.0], [42.9, 901.0], [43.0, 903.0], [43.1, 903.0], [43.2, 903.0], [43.3, 903.0], [43.4, 904.0], [43.5, 904.0], [43.6, 904.0], [43.7, 904.0], [43.8, 904.0], [43.9, 904.0], [44.0, 904.0], [44.1, 904.0], [44.2, 904.0], [44.3, 904.0], [44.4, 904.0], [44.5, 904.0], [44.6, 905.0], [44.7, 905.0], [44.8, 905.0], [44.9, 905.0], [45.0, 905.0], [45.1, 905.0], [45.2, 905.0], [45.3, 905.0], [45.4, 908.0], [45.5, 908.0], [45.6, 908.0], [45.7, 908.0], [45.8, 913.0], [45.9, 913.0], [46.0, 913.0], [46.1, 917.0], [46.2, 917.0], [46.3, 917.0], [46.4, 917.0], [46.5, 918.0], [46.6, 918.0], [46.7, 918.0], [46.8, 918.0], [46.9, 918.0], [47.0, 918.0], [47.1, 918.0], [47.2, 918.0], [47.3, 918.0], [47.4, 918.0], [47.5, 918.0], [47.6, 918.0], [47.7, 919.0], [47.8, 919.0], [47.9, 919.0], [48.0, 919.0], [48.1, 919.0], [48.2, 919.0], [48.3, 919.0], [48.4, 919.0], [48.5, 921.0], [48.6, 921.0], [48.7, 921.0], [48.8, 921.0], [48.9, 922.0], [49.0, 922.0], [49.1, 922.0], [49.2, 922.0], [49.3, 923.0], [49.4, 923.0], [49.5, 923.0], [49.6, 923.0], [49.7, 923.0], [49.8, 923.0], [49.9, 923.0], [50.0, 924.0], [50.1, 924.0], [50.2, 924.0], [50.3, 924.0], [50.4, 924.0], [50.5, 924.0], [50.6, 924.0], [50.7, 924.0], [50.8, 925.0], [50.9, 925.0], [51.0, 925.0], [51.1, 925.0], [51.2, 925.0], [51.3, 925.0], [51.4, 925.0], [51.5, 925.0], [51.6, 926.0], [51.7, 926.0], [51.8, 926.0], [51.9, 926.0], [52.0, 927.0], [52.1, 927.0], [52.2, 927.0], [52.3, 927.0], [52.4, 927.0], [52.5, 927.0], [52.6, 927.0], [52.7, 927.0], [52.8, 927.0], [52.9, 927.0], [53.0, 927.0], [53.1, 927.0], [53.2, 929.0], [53.3, 929.0], [53.4, 929.0], [53.5, 929.0], [53.6, 930.0], [53.7, 930.0], [53.8, 930.0], [53.9, 930.0], [54.0, 931.0], [54.1, 931.0], [54.2, 931.0], [54.3, 931.0], [54.4, 931.0], [54.5, 931.0], [54.6, 931.0], [54.7, 932.0], [54.8, 932.0], [54.9, 932.0], [55.0, 932.0], [55.1, 932.0], [55.2, 932.0], [55.3, 932.0], [55.4, 932.0], [55.5, 933.0], [55.6, 933.0], [55.7, 933.0], [55.8, 933.0], [55.9, 934.0], [56.0, 934.0], [56.1, 934.0], [56.2, 934.0], [56.3, 935.0], [56.4, 935.0], [56.5, 935.0], [56.6, 935.0], [56.7, 936.0], [56.8, 936.0], [56.9, 936.0], [57.0, 936.0], [57.1, 938.0], [57.2, 938.0], [57.3, 938.0], [57.4, 938.0], [57.5, 940.0], [57.6, 940.0], [57.7, 940.0], [57.8, 940.0], [57.9, 940.0], [58.0, 940.0], [58.1, 940.0], [58.2, 940.0], [58.3, 942.0], [58.4, 942.0], [58.5, 942.0], [58.6, 942.0], [58.7, 942.0], [58.8, 942.0], [58.9, 942.0], [59.0, 944.0], [59.1, 944.0], [59.2, 944.0], [59.3, 944.0], [59.4, 944.0], [59.5, 944.0], [59.6, 944.0], [59.7, 944.0], [59.8, 946.0], [59.9, 946.0], [60.0, 946.0], [60.1, 946.0], [60.2, 948.0], [60.3, 948.0], [60.4, 948.0], [60.5, 948.0], [60.6, 948.0], [60.7, 948.0], [60.8, 948.0], [60.9, 948.0], [61.0, 949.0], [61.1, 949.0], [61.2, 949.0], [61.3, 949.0], [61.4, 950.0], [61.5, 950.0], [61.6, 950.0], [61.7, 950.0], [61.8, 950.0], [61.9, 950.0], [62.0, 950.0], [62.1, 950.0], [62.2, 950.0], [62.3, 950.0], [62.4, 950.0], [62.5, 954.0], [62.6, 954.0], [62.7, 954.0], [62.8, 954.0], [62.9, 954.0], [63.0, 954.0], [63.1, 954.0], [63.2, 954.0], [63.3, 957.0], [63.4, 957.0], [63.5, 957.0], [63.6, 957.0], [63.7, 959.0], [63.8, 959.0], [63.9, 959.0], [64.0, 959.0], [64.1, 961.0], [64.2, 961.0], [64.3, 961.0], [64.4, 961.0], [64.5, 962.0], [64.6, 962.0], [64.7, 962.0], [64.8, 962.0], [64.9, 964.0], [65.0, 964.0], [65.1, 964.0], [65.2, 964.0], [65.3, 964.0], [65.4, 964.0], [65.5, 964.0], [65.6, 964.0], [65.7, 967.0], [65.8, 967.0], [65.9, 967.0], [66.0, 967.0], [66.1, 968.0], [66.2, 968.0], [66.3, 968.0], [66.4, 968.0], [66.5, 976.0], [66.6, 976.0], [66.7, 976.0], [66.8, 977.0], [66.9, 977.0], [67.0, 977.0], [67.1, 977.0], [67.2, 977.0], [67.3, 977.0], [67.4, 977.0], [67.5, 977.0], [67.6, 978.0], [67.7, 978.0], [67.8, 978.0], [67.9, 978.0], [68.0, 981.0], [68.1, 981.0], [68.2, 981.0], [68.3, 981.0], [68.4, 984.0], [68.5, 984.0], [68.6, 984.0], [68.7, 984.0], [68.8, 985.0], [68.9, 985.0], [69.0, 985.0], [69.1, 985.0], [69.2, 986.0], [69.3, 986.0], [69.4, 986.0], [69.5, 986.0], [69.6, 987.0], [69.7, 987.0], [69.8, 987.0], [69.9, 987.0], [70.0, 987.0], [70.1, 987.0], [70.2, 987.0], [70.3, 987.0], [70.4, 988.0], [70.5, 988.0], [70.6, 988.0], [70.7, 988.0], [70.8, 988.0], [70.9, 988.0], [71.0, 988.0], [71.1, 991.0], [71.2, 991.0], [71.3, 991.0], [71.4, 991.0], [71.5, 991.0], [71.6, 991.0], [71.7, 991.0], [71.8, 991.0], [71.9, 992.0], [72.0, 992.0], [72.1, 992.0], [72.2, 992.0], [72.3, 992.0], [72.4, 992.0], [72.5, 992.0], [72.6, 992.0], [72.7, 993.0], [72.8, 993.0], [72.9, 993.0], [73.0, 993.0], [73.1, 993.0], [73.2, 993.0], [73.3, 993.0], [73.4, 993.0], [73.5, 995.0], [73.6, 995.0], [73.7, 995.0], [73.8, 995.0], [73.9, 996.0], [74.0, 996.0], [74.1, 996.0], [74.2, 996.0], [74.3, 999.0], [74.4, 999.0], [74.5, 999.0], [74.6, 999.0], [74.7, 1000.0], [74.8, 1000.0], [74.9, 1000.0], [75.0, 1001.0], [75.1, 1001.0], [75.2, 1001.0], [75.3, 1001.0], [75.4, 1003.0], [75.5, 1003.0], [75.6, 1003.0], [75.7, 1003.0], [75.8, 1004.0], [75.9, 1004.0], [76.0, 1004.0], [76.1, 1004.0], [76.2, 1005.0], [76.3, 1005.0], [76.4, 1005.0], [76.5, 1005.0], [76.6, 1008.0], [76.7, 1008.0], [76.8, 1008.0], [76.9, 1008.0], [77.0, 1010.0], [77.1, 1010.0], [77.2, 1010.0], [77.3, 1010.0], [77.4, 1011.0], [77.5, 1011.0], [77.6, 1011.0], [77.7, 1011.0], [77.8, 1012.0], [77.9, 1012.0], [78.0, 1012.0], [78.1, 1012.0], [78.2, 1015.0], [78.3, 1015.0], [78.4, 1015.0], [78.5, 1015.0], [78.6, 1022.0], [78.7, 1022.0], [78.8, 1022.0], [78.9, 1022.0], [79.0, 1022.0], [79.1, 1022.0], [79.2, 1022.0], [79.3, 1024.0], [79.4, 1024.0], [79.5, 1024.0], [79.6, 1024.0], [79.7, 1024.0], [79.8, 1024.0], [79.9, 1024.0], [80.0, 1024.0], [80.1, 1026.0], [80.2, 1026.0], [80.3, 1026.0], [80.4, 1026.0], [80.5, 1027.0], [80.6, 1027.0], [80.7, 1027.0], [80.8, 1027.0], [80.9, 1031.0], [81.0, 1031.0], [81.1, 1031.0], [81.2, 1031.0], [81.3, 1033.0], [81.4, 1033.0], [81.5, 1033.0], [81.6, 1033.0], [81.7, 1035.0], [81.8, 1035.0], [81.9, 1035.0], [82.0, 1035.0], [82.1, 1040.0], [82.2, 1040.0], [82.3, 1040.0], [82.4, 1040.0], [82.5, 1042.0], [82.6, 1042.0], [82.7, 1042.0], [82.8, 1042.0], [82.9, 1047.0], [83.0, 1047.0], [83.1, 1047.0], [83.2, 1047.0], [83.3, 1048.0], [83.4, 1048.0], [83.5, 1048.0], [83.6, 1048.0], [83.7, 1048.0], [83.8, 1048.0], [83.9, 1048.0], [84.0, 1048.0], [84.1, 1048.0], [84.2, 1048.0], [84.3, 1048.0], [84.4, 1054.0], [84.5, 1054.0], [84.6, 1054.0], [84.7, 1054.0], [84.8, 1055.0], [84.9, 1055.0], [85.0, 1055.0], [85.1, 1055.0], [85.2, 1064.0], [85.3, 1064.0], [85.4, 1064.0], [85.5, 1064.0], [85.6, 1069.0], [85.7, 1069.0], [85.8, 1069.0], [85.9, 1069.0], [86.0, 1072.0], [86.1, 1072.0], [86.2, 1072.0], [86.3, 1072.0], [86.4, 1074.0], [86.5, 1074.0], [86.6, 1074.0], [86.7, 1074.0], [86.8, 1074.0], [86.9, 1074.0], [87.0, 1074.0], [87.1, 1074.0], [87.2, 1076.0], [87.3, 1076.0], [87.4, 1076.0], [87.5, 1090.0], [87.6, 1090.0], [87.7, 1090.0], [87.8, 1090.0], [87.9, 1101.0], [88.0, 1101.0], [88.1, 1101.0], [88.2, 1101.0], [88.3, 1103.0], [88.4, 1103.0], [88.5, 1103.0], [88.6, 1103.0], [88.7, 1104.0], [88.8, 1104.0], [88.9, 1104.0], [89.0, 1104.0], [89.1, 1104.0], [89.2, 1104.0], [89.3, 1104.0], [89.4, 1104.0], [89.5, 1108.0], [89.6, 1108.0], [89.7, 1108.0], [89.8, 1108.0], [89.9, 1129.0], [90.0, 1129.0], [90.1, 1129.0], [90.2, 1129.0], [90.3, 1133.0], [90.4, 1133.0], [90.5, 1133.0], [90.6, 1133.0], [90.7, 1140.0], [90.8, 1140.0], [90.9, 1140.0], [91.0, 1140.0], [91.1, 1143.0], [91.2, 1143.0], [91.3, 1143.0], [91.4, 1143.0], [91.5, 1148.0], [91.6, 1148.0], [91.7, 1148.0], [91.8, 1164.0], [91.9, 1164.0], [92.0, 1164.0], [92.1, 1164.0], [92.2, 1220.0], [92.3, 1220.0], [92.4, 1220.0], [92.5, 1220.0], [92.6, 1249.0], [92.7, 1249.0], [92.8, 1249.0], [92.9, 1249.0], [93.0, 1251.0], [93.1, 1251.0], [93.2, 1251.0], [93.3, 1251.0], [93.4, 1259.0], [93.5, 1259.0], [93.6, 1259.0], [93.7, 1259.0], [93.8, 1269.0], [93.9, 1269.0], [94.0, 1269.0], [94.1, 1269.0], [94.2, 1287.0], [94.3, 1287.0], [94.4, 1287.0], [94.5, 1287.0], [94.6, 1300.0], [94.7, 1300.0], [94.8, 1300.0], [94.9, 1300.0], [95.0, 1307.0], [95.1, 1307.0], [95.2, 1307.0], [95.3, 1307.0], [95.4, 1319.0], [95.5, 1319.0], [95.6, 1319.0], [95.7, 1319.0], [95.8, 1326.0], [95.9, 1326.0], [96.0, 1326.0], [96.1, 1327.0], [96.2, 1327.0], [96.3, 1327.0], [96.4, 1327.0], [96.5, 1355.0], [96.6, 1355.0], [96.7, 1355.0], [96.8, 1355.0], [96.9, 1370.0], [97.0, 1370.0], [97.1, 1370.0], [97.2, 1370.0], [97.3, 1394.0], [97.4, 1394.0], [97.5, 1394.0], [97.6, 1394.0], [97.7, 1447.0], [97.8, 1447.0], [97.9, 1447.0], [98.0, 1447.0], [98.1, 1457.0], [98.2, 1457.0], [98.3, 1457.0], [98.4, 1457.0], [98.5, 1511.0], [98.6, 1511.0], [98.7, 1511.0], [98.8, 1511.0], [98.9, 1565.0], [99.0, 1565.0], [99.1, 1565.0], [99.2, 1565.0], [99.3, 1568.0], [99.4, 1568.0], [99.5, 1568.0], [99.6, 1568.0], [99.7, 2038.0], [99.8, 2038.0], [99.9, 2038.0]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 82.0, "series": [{"data": [[1100.0, 11.0], [1200.0, 6.0], [600.0, 6.0], [1300.0, 8.0], [700.0, 27.0], [1400.0, 2.0], [1500.0, 3.0], [800.0, 68.0], [900.0, 82.0], [500.0, 8.0], [1000.0, 34.0], [2000.0, 1.0]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 252.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 252.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.853658536585366, "minX": 1.58243142E12, "maxY": 4.0, "series": [{"data": [[1.58243142E12, 4.0], [1.58243148E12, 3.853658536585366]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58243148E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 874.0, "minX": 1.0, "maxY": 976.0, "series": [{"data": [[4.0, 936.5138339920949], [2.0, 976.0], [1.0, 874.0], [3.0, 968.0]], "isOverall": false, "label": "downloaddFile", "isController": false}, {"data": [[3.9765625, 936.546875]], "isOverall": false, "label": "downloaddFile-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 116.85, "minX": 1.58243142E12, "maxY": 3439279.8666666667, "series": [{"data": [[1.58243142E12, 3439279.8666666667], [1.58243148E12, 656265.7333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58243142E12, 612.75], [1.58243148E12, 116.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58243148E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 932.3414634146341, "minX": 1.58243142E12, "maxY": 937.3488372093022, "series": [{"data": [[1.58243142E12, 937.3488372093022], [1.58243148E12, 932.3414634146341]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58243148E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 119.65853658536587, "minX": 1.58243142E12, "maxY": 149.96279069767436, "series": [{"data": [[1.58243142E12, 149.96279069767436], [1.58243148E12, 119.65853658536587]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58243148E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 58.24390243902438, "minX": 1.58243142E12, "maxY": 71.74883720930231, "series": [{"data": [[1.58243142E12, 71.74883720930231], [1.58243148E12, 58.24390243902438]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58243148E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 526.0, "minX": 1.58243142E12, "maxY": 2038.0, "series": [{"data": [[1.58243142E12, 2038.0], [1.58243148E12, 1103.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58243142E12, 526.0], [1.58243148E12, 813.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58243142E12, 1154.4], [1.58243148E12, 1035.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58243142E12, 1567.52], [1.58243148E12, 1103.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58243142E12, 1326.2], [1.58243148E12, 1066.8999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58243148E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 757.0, "minX": 1.0, "maxY": 1133.0, "series": [{"data": [[2.0, 855.0], [4.0, 949.0], [1.0, 1133.0], [5.0, 918.0], [6.0, 757.0], [3.0, 935.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 110.0, "minX": 1.0, "maxY": 405.0, "series": [{"data": [[2.0, 112.0], [4.0, 128.0], [1.0, 405.0], [5.0, 121.0], [6.0, 164.0], [3.0, 110.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.58243142E12, "maxY": 3.65, "series": [{"data": [[1.58243142E12, 3.65], [1.58243148E12, 0.6166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58243148E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.58243142E12, "maxY": 3.5833333333333335, "series": [{"data": [[1.58243142E12, 3.5833333333333335], [1.58243148E12, 0.6833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58243148E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.58243142E12, "maxY": 3.5833333333333335, "series": [{"data": [[1.58243142E12, 3.5833333333333335], [1.58243148E12, 0.6833333333333333]], "isOverall": false, "label": "downloaddFile-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58243148E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.58243142E12, "maxY": 3.5833333333333335, "series": [{"data": [[1.58243142E12, 3.5833333333333335], [1.58243148E12, 0.6833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58243148E12, "title": "Total Transactions Per Second"}},
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

