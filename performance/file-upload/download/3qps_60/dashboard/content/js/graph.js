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
        data: {"result": {"minY": 655.0, "minX": 0.0, "maxY": 2335.0, "series": [{"data": [[0.0, 655.0], [0.1, 655.0], [0.2, 655.0], [0.3, 655.0], [0.4, 655.0], [0.5, 656.0], [0.6, 656.0], [0.7, 656.0], [0.8, 656.0], [0.9, 656.0], [1.0, 670.0], [1.1, 670.0], [1.2, 670.0], [1.3, 670.0], [1.4, 670.0], [1.5, 693.0], [1.6, 693.0], [1.7, 693.0], [1.8, 693.0], [1.9, 693.0], [2.0, 702.0], [2.1, 702.0], [2.2, 702.0], [2.3, 702.0], [2.4, 702.0], [2.5, 715.0], [2.6, 715.0], [2.7, 715.0], [2.8, 715.0], [2.9, 715.0], [3.0, 721.0], [3.1, 721.0], [3.2, 721.0], [3.3, 721.0], [3.4, 728.0], [3.5, 728.0], [3.6, 728.0], [3.7, 728.0], [3.8, 728.0], [3.9, 732.0], [4.0, 732.0], [4.1, 732.0], [4.2, 732.0], [4.3, 732.0], [4.4, 736.0], [4.5, 736.0], [4.6, 736.0], [4.7, 736.0], [4.8, 736.0], [4.9, 743.0], [5.0, 743.0], [5.1, 743.0], [5.2, 743.0], [5.3, 743.0], [5.4, 747.0], [5.5, 747.0], [5.6, 747.0], [5.7, 747.0], [5.8, 747.0], [5.9, 749.0], [6.0, 749.0], [6.1, 749.0], [6.2, 749.0], [6.3, 749.0], [6.4, 754.0], [6.5, 754.0], [6.6, 754.0], [6.7, 754.0], [6.8, 755.0], [6.9, 755.0], [7.0, 755.0], [7.1, 755.0], [7.2, 755.0], [7.3, 766.0], [7.4, 766.0], [7.5, 766.0], [7.6, 766.0], [7.7, 766.0], [7.8, 770.0], [7.9, 770.0], [8.0, 770.0], [8.1, 770.0], [8.2, 770.0], [8.3, 771.0], [8.4, 771.0], [8.5, 771.0], [8.6, 771.0], [8.7, 771.0], [8.8, 772.0], [8.9, 772.0], [9.0, 772.0], [9.1, 772.0], [9.2, 772.0], [9.3, 775.0], [9.4, 775.0], [9.5, 775.0], [9.6, 775.0], [9.7, 775.0], [9.8, 777.0], [9.9, 777.0], [10.0, 777.0], [10.1, 777.0], [10.2, 777.0], [10.3, 777.0], [10.4, 777.0], [10.5, 777.0], [10.6, 777.0], [10.7, 780.0], [10.8, 780.0], [10.9, 780.0], [11.0, 780.0], [11.1, 780.0], [11.2, 780.0], [11.3, 780.0], [11.4, 780.0], [11.5, 780.0], [11.6, 780.0], [11.7, 780.0], [11.8, 780.0], [11.9, 780.0], [12.0, 780.0], [12.1, 780.0], [12.2, 782.0], [12.3, 782.0], [12.4, 782.0], [12.5, 782.0], [12.6, 782.0], [12.7, 782.0], [12.8, 782.0], [12.9, 782.0], [13.0, 782.0], [13.1, 782.0], [13.2, 783.0], [13.3, 783.0], [13.4, 783.0], [13.5, 783.0], [13.6, 783.0], [13.7, 783.0], [13.8, 783.0], [13.9, 783.0], [14.0, 783.0], [14.1, 784.0], [14.2, 784.0], [14.3, 784.0], [14.4, 784.0], [14.5, 784.0], [14.6, 784.0], [14.7, 784.0], [14.8, 784.0], [14.9, 784.0], [15.0, 784.0], [15.1, 785.0], [15.2, 785.0], [15.3, 785.0], [15.4, 785.0], [15.5, 785.0], [15.6, 786.0], [15.7, 786.0], [15.8, 786.0], [15.9, 786.0], [16.0, 786.0], [16.1, 791.0], [16.2, 791.0], [16.3, 791.0], [16.4, 791.0], [16.5, 791.0], [16.6, 792.0], [16.7, 792.0], [16.8, 792.0], [16.9, 792.0], [17.0, 794.0], [17.1, 794.0], [17.2, 794.0], [17.3, 794.0], [17.4, 794.0], [17.5, 794.0], [17.6, 794.0], [17.7, 794.0], [17.8, 794.0], [17.9, 794.0], [18.0, 795.0], [18.1, 795.0], [18.2, 795.0], [18.3, 795.0], [18.4, 795.0], [18.5, 795.0], [18.6, 795.0], [18.7, 795.0], [18.8, 795.0], [18.9, 795.0], [19.0, 795.0], [19.1, 795.0], [19.2, 795.0], [19.3, 795.0], [19.4, 795.0], [19.5, 799.0], [19.6, 799.0], [19.7, 799.0], [19.8, 799.0], [19.9, 799.0], [20.0, 799.0], [20.1, 799.0], [20.2, 799.0], [20.3, 799.0], [20.4, 799.0], [20.5, 799.0], [20.6, 799.0], [20.7, 799.0], [20.8, 799.0], [20.9, 800.0], [21.0, 800.0], [21.1, 800.0], [21.2, 800.0], [21.3, 800.0], [21.4, 800.0], [21.5, 800.0], [21.6, 800.0], [21.7, 800.0], [21.8, 800.0], [21.9, 802.0], [22.0, 802.0], [22.1, 802.0], [22.2, 802.0], [22.3, 802.0], [22.4, 802.0], [22.5, 802.0], [22.6, 802.0], [22.7, 802.0], [22.8, 802.0], [22.9, 802.0], [23.0, 802.0], [23.1, 802.0], [23.2, 802.0], [23.3, 802.0], [23.4, 803.0], [23.5, 803.0], [23.6, 803.0], [23.7, 803.0], [23.8, 803.0], [23.9, 803.0], [24.0, 803.0], [24.1, 803.0], [24.2, 803.0], [24.3, 804.0], [24.4, 804.0], [24.5, 804.0], [24.6, 804.0], [24.7, 804.0], [24.8, 804.0], [24.9, 804.0], [25.0, 804.0], [25.1, 804.0], [25.2, 804.0], [25.3, 805.0], [25.4, 805.0], [25.5, 805.0], [25.6, 805.0], [25.7, 805.0], [25.8, 810.0], [25.9, 810.0], [26.0, 810.0], [26.1, 810.0], [26.2, 810.0], [26.3, 811.0], [26.4, 811.0], [26.5, 811.0], [26.6, 811.0], [26.7, 811.0], [26.8, 811.0], [26.9, 811.0], [27.0, 811.0], [27.1, 811.0], [27.2, 811.0], [27.3, 811.0], [27.4, 811.0], [27.5, 811.0], [27.6, 811.0], [27.7, 813.0], [27.8, 813.0], [27.9, 813.0], [28.0, 813.0], [28.1, 813.0], [28.2, 813.0], [28.3, 813.0], [28.4, 813.0], [28.5, 813.0], [28.6, 813.0], [28.7, 815.0], [28.8, 815.0], [28.9, 815.0], [29.0, 815.0], [29.1, 815.0], [29.2, 815.0], [29.3, 815.0], [29.4, 815.0], [29.5, 815.0], [29.6, 815.0], [29.7, 815.0], [29.8, 815.0], [29.9, 815.0], [30.0, 815.0], [30.1, 817.0], [30.2, 817.0], [30.3, 817.0], [30.4, 817.0], [30.5, 817.0], [30.6, 818.0], [30.7, 818.0], [30.8, 818.0], [30.9, 818.0], [31.0, 818.0], [31.1, 818.0], [31.2, 818.0], [31.3, 818.0], [31.4, 818.0], [31.5, 818.0], [31.6, 819.0], [31.7, 819.0], [31.8, 819.0], [31.9, 819.0], [32.0, 819.0], [32.1, 820.0], [32.2, 820.0], [32.3, 820.0], [32.4, 820.0], [32.5, 820.0], [32.6, 820.0], [32.7, 820.0], [32.8, 820.0], [32.9, 820.0], [33.0, 820.0], [33.1, 821.0], [33.2, 821.0], [33.3, 821.0], [33.4, 821.0], [33.5, 823.0], [33.6, 823.0], [33.7, 823.0], [33.8, 823.0], [33.9, 823.0], [34.0, 823.0], [34.1, 823.0], [34.2, 823.0], [34.3, 823.0], [34.4, 823.0], [34.5, 824.0], [34.6, 824.0], [34.7, 824.0], [34.8, 824.0], [34.9, 824.0], [35.0, 824.0], [35.1, 824.0], [35.2, 824.0], [35.3, 824.0], [35.4, 824.0], [35.5, 825.0], [35.6, 825.0], [35.7, 825.0], [35.8, 825.0], [35.9, 825.0], [36.0, 829.0], [36.1, 829.0], [36.2, 829.0], [36.3, 829.0], [36.4, 829.0], [36.5, 829.0], [36.6, 829.0], [36.7, 829.0], [36.8, 829.0], [36.9, 830.0], [37.0, 830.0], [37.1, 830.0], [37.2, 830.0], [37.3, 830.0], [37.4, 833.0], [37.5, 833.0], [37.6, 833.0], [37.7, 833.0], [37.8, 833.0], [37.9, 834.0], [38.0, 834.0], [38.1, 834.0], [38.2, 834.0], [38.3, 834.0], [38.4, 836.0], [38.5, 836.0], [38.6, 836.0], [38.7, 836.0], [38.8, 836.0], [38.9, 836.0], [39.0, 836.0], [39.1, 836.0], [39.2, 836.0], [39.3, 836.0], [39.4, 837.0], [39.5, 837.0], [39.6, 837.0], [39.7, 837.0], [39.8, 837.0], [39.9, 838.0], [40.0, 838.0], [40.1, 838.0], [40.2, 838.0], [40.3, 838.0], [40.4, 838.0], [40.5, 838.0], [40.6, 838.0], [40.7, 838.0], [40.8, 839.0], [40.9, 839.0], [41.0, 839.0], [41.1, 839.0], [41.2, 839.0], [41.3, 840.0], [41.4, 840.0], [41.5, 840.0], [41.6, 840.0], [41.7, 840.0], [41.8, 841.0], [41.9, 841.0], [42.0, 841.0], [42.1, 841.0], [42.2, 841.0], [42.3, 841.0], [42.4, 841.0], [42.5, 841.0], [42.6, 841.0], [42.7, 841.0], [42.8, 842.0], [42.9, 842.0], [43.0, 842.0], [43.1, 842.0], [43.2, 842.0], [43.3, 842.0], [43.4, 842.0], [43.5, 842.0], [43.6, 842.0], [43.7, 844.0], [43.8, 844.0], [43.9, 844.0], [44.0, 844.0], [44.1, 844.0], [44.2, 846.0], [44.3, 846.0], [44.4, 846.0], [44.5, 846.0], [44.6, 846.0], [44.7, 847.0], [44.8, 847.0], [44.9, 847.0], [45.0, 847.0], [45.1, 847.0], [45.2, 847.0], [45.3, 847.0], [45.4, 847.0], [45.5, 847.0], [45.6, 847.0], [45.7, 849.0], [45.8, 849.0], [45.9, 849.0], [46.0, 849.0], [46.1, 849.0], [46.2, 851.0], [46.3, 851.0], [46.4, 851.0], [46.5, 851.0], [46.6, 851.0], [46.7, 853.0], [46.8, 853.0], [46.9, 853.0], [47.0, 853.0], [47.1, 854.0], [47.2, 854.0], [47.3, 854.0], [47.4, 854.0], [47.5, 854.0], [47.6, 854.0], [47.7, 854.0], [47.8, 854.0], [47.9, 854.0], [48.0, 854.0], [48.1, 854.0], [48.2, 854.0], [48.3, 854.0], [48.4, 854.0], [48.5, 854.0], [48.6, 857.0], [48.7, 857.0], [48.8, 857.0], [48.9, 857.0], [49.0, 857.0], [49.1, 857.0], [49.2, 857.0], [49.3, 857.0], [49.4, 857.0], [49.5, 857.0], [49.6, 857.0], [49.7, 857.0], [49.8, 857.0], [49.9, 857.0], [50.0, 857.0], [50.1, 857.0], [50.2, 857.0], [50.3, 857.0], [50.4, 857.0], [50.5, 859.0], [50.6, 859.0], [50.7, 859.0], [50.8, 859.0], [50.9, 859.0], [51.0, 861.0], [51.1, 861.0], [51.2, 861.0], [51.3, 861.0], [51.4, 861.0], [51.5, 861.0], [51.6, 861.0], [51.7, 861.0], [51.8, 861.0], [51.9, 861.0], [52.0, 862.0], [52.1, 862.0], [52.2, 862.0], [52.3, 862.0], [52.4, 862.0], [52.5, 862.0], [52.6, 862.0], [52.7, 862.0], [52.8, 862.0], [52.9, 862.0], [53.0, 862.0], [53.1, 862.0], [53.2, 862.0], [53.3, 862.0], [53.4, 864.0], [53.5, 864.0], [53.6, 864.0], [53.7, 864.0], [53.8, 864.0], [53.9, 865.0], [54.0, 865.0], [54.1, 865.0], [54.2, 865.0], [54.3, 865.0], [54.4, 866.0], [54.5, 866.0], [54.6, 866.0], [54.7, 866.0], [54.8, 866.0], [54.9, 868.0], [55.0, 868.0], [55.1, 868.0], [55.2, 868.0], [55.3, 868.0], [55.4, 870.0], [55.5, 870.0], [55.6, 870.0], [55.7, 870.0], [55.8, 870.0], [55.9, 871.0], [56.0, 871.0], [56.1, 871.0], [56.2, 871.0], [56.3, 871.0], [56.4, 871.0], [56.5, 871.0], [56.6, 871.0], [56.7, 871.0], [56.8, 873.0], [56.9, 873.0], [57.0, 873.0], [57.1, 873.0], [57.2, 873.0], [57.3, 873.0], [57.4, 873.0], [57.5, 873.0], [57.6, 873.0], [57.7, 873.0], [57.8, 873.0], [57.9, 873.0], [58.0, 873.0], [58.1, 873.0], [58.2, 873.0], [58.3, 876.0], [58.4, 876.0], [58.5, 876.0], [58.6, 876.0], [58.7, 876.0], [58.8, 877.0], [58.9, 877.0], [59.0, 877.0], [59.1, 877.0], [59.2, 877.0], [59.3, 879.0], [59.4, 879.0], [59.5, 879.0], [59.6, 879.0], [59.7, 879.0], [59.8, 880.0], [59.9, 880.0], [60.0, 880.0], [60.1, 880.0], [60.2, 881.0], [60.3, 881.0], [60.4, 881.0], [60.5, 881.0], [60.6, 881.0], [60.7, 882.0], [60.8, 882.0], [60.9, 882.0], [61.0, 882.0], [61.1, 882.0], [61.2, 882.0], [61.3, 882.0], [61.4, 882.0], [61.5, 882.0], [61.6, 882.0], [61.7, 883.0], [61.8, 883.0], [61.9, 883.0], [62.0, 883.0], [62.1, 883.0], [62.2, 884.0], [62.3, 884.0], [62.4, 884.0], [62.5, 884.0], [62.6, 884.0], [62.7, 884.0], [62.8, 884.0], [62.9, 884.0], [63.0, 884.0], [63.1, 884.0], [63.2, 885.0], [63.3, 885.0], [63.4, 885.0], [63.5, 885.0], [63.6, 885.0], [63.7, 885.0], [63.8, 885.0], [63.9, 885.0], [64.0, 885.0], [64.1, 886.0], [64.2, 886.0], [64.3, 886.0], [64.4, 886.0], [64.5, 886.0], [64.6, 887.0], [64.7, 887.0], [64.8, 887.0], [64.9, 887.0], [65.0, 887.0], [65.1, 888.0], [65.2, 888.0], [65.3, 888.0], [65.4, 888.0], [65.5, 888.0], [65.6, 889.0], [65.7, 889.0], [65.8, 889.0], [65.9, 889.0], [66.0, 889.0], [66.1, 889.0], [66.2, 889.0], [66.3, 889.0], [66.4, 889.0], [66.5, 889.0], [66.6, 892.0], [66.7, 892.0], [66.8, 892.0], [66.9, 892.0], [67.0, 895.0], [67.1, 895.0], [67.2, 895.0], [67.3, 895.0], [67.4, 895.0], [67.5, 897.0], [67.6, 897.0], [67.7, 897.0], [67.8, 897.0], [67.9, 897.0], [68.0, 897.0], [68.1, 897.0], [68.2, 897.0], [68.3, 897.0], [68.4, 897.0], [68.5, 898.0], [68.6, 898.0], [68.7, 898.0], [68.8, 898.0], [68.9, 898.0], [69.0, 905.0], [69.1, 905.0], [69.2, 905.0], [69.3, 905.0], [69.4, 905.0], [69.5, 911.0], [69.6, 911.0], [69.7, 911.0], [69.8, 911.0], [69.9, 911.0], [70.0, 911.0], [70.1, 911.0], [70.2, 911.0], [70.3, 911.0], [70.4, 912.0], [70.5, 912.0], [70.6, 912.0], [70.7, 912.0], [70.8, 912.0], [70.9, 913.0], [71.0, 913.0], [71.1, 913.0], [71.2, 913.0], [71.3, 913.0], [71.4, 914.0], [71.5, 914.0], [71.6, 914.0], [71.7, 914.0], [71.8, 914.0], [71.9, 917.0], [72.0, 917.0], [72.1, 917.0], [72.2, 917.0], [72.3, 917.0], [72.4, 917.0], [72.5, 917.0], [72.6, 917.0], [72.7, 917.0], [72.8, 917.0], [72.9, 919.0], [73.0, 919.0], [73.1, 919.0], [73.2, 919.0], [73.3, 919.0], [73.4, 922.0], [73.5, 922.0], [73.6, 922.0], [73.7, 922.0], [73.8, 924.0], [73.9, 924.0], [74.0, 924.0], [74.1, 924.0], [74.2, 924.0], [74.3, 925.0], [74.4, 925.0], [74.5, 925.0], [74.6, 925.0], [74.7, 925.0], [74.8, 926.0], [74.9, 926.0], [75.0, 926.0], [75.1, 926.0], [75.2, 926.0], [75.3, 928.0], [75.4, 928.0], [75.5, 928.0], [75.6, 928.0], [75.7, 928.0], [75.8, 929.0], [75.9, 929.0], [76.0, 929.0], [76.1, 929.0], [76.2, 929.0], [76.3, 929.0], [76.4, 929.0], [76.5, 929.0], [76.6, 929.0], [76.7, 930.0], [76.8, 930.0], [76.9, 930.0], [77.0, 930.0], [77.1, 930.0], [77.2, 932.0], [77.3, 932.0], [77.4, 932.0], [77.5, 932.0], [77.6, 932.0], [77.7, 933.0], [77.8, 933.0], [77.9, 933.0], [78.0, 933.0], [78.1, 933.0], [78.2, 935.0], [78.3, 935.0], [78.4, 935.0], [78.5, 935.0], [78.6, 935.0], [78.7, 935.0], [78.8, 935.0], [78.9, 935.0], [79.0, 935.0], [79.1, 935.0], [79.2, 938.0], [79.3, 938.0], [79.4, 938.0], [79.5, 938.0], [79.6, 938.0], [79.7, 938.0], [79.8, 938.0], [79.9, 938.0], [80.0, 938.0], [80.1, 939.0], [80.2, 939.0], [80.3, 939.0], [80.4, 939.0], [80.5, 939.0], [80.6, 940.0], [80.7, 940.0], [80.8, 940.0], [80.9, 940.0], [81.0, 940.0], [81.1, 941.0], [81.2, 941.0], [81.3, 941.0], [81.4, 941.0], [81.5, 941.0], [81.6, 941.0], [81.7, 941.0], [81.8, 941.0], [81.9, 941.0], [82.0, 941.0], [82.1, 943.0], [82.2, 943.0], [82.3, 943.0], [82.4, 943.0], [82.5, 943.0], [82.6, 944.0], [82.7, 944.0], [82.8, 944.0], [82.9, 944.0], [83.0, 944.0], [83.1, 944.0], [83.2, 944.0], [83.3, 944.0], [83.4, 944.0], [83.5, 945.0], [83.6, 945.0], [83.7, 945.0], [83.8, 945.0], [83.9, 945.0], [84.0, 946.0], [84.1, 946.0], [84.2, 946.0], [84.3, 946.0], [84.4, 946.0], [84.5, 947.0], [84.6, 947.0], [84.7, 947.0], [84.8, 947.0], [84.9, 947.0], [85.0, 947.0], [85.1, 947.0], [85.2, 947.0], [85.3, 947.0], [85.4, 947.0], [85.5, 948.0], [85.6, 948.0], [85.7, 948.0], [85.8, 948.0], [85.9, 948.0], [86.0, 951.0], [86.1, 951.0], [86.2, 951.0], [86.3, 951.0], [86.4, 951.0], [86.5, 953.0], [86.6, 953.0], [86.7, 953.0], [86.8, 953.0], [86.9, 953.0], [87.0, 953.0], [87.1, 953.0], [87.2, 953.0], [87.3, 953.0], [87.4, 955.0], [87.5, 955.0], [87.6, 955.0], [87.7, 955.0], [87.8, 955.0], [87.9, 959.0], [88.0, 959.0], [88.1, 959.0], [88.2, 959.0], [88.3, 959.0], [88.4, 962.0], [88.5, 962.0], [88.6, 962.0], [88.7, 962.0], [88.8, 962.0], [88.9, 967.0], [89.0, 967.0], [89.1, 967.0], [89.2, 967.0], [89.3, 967.0], [89.4, 968.0], [89.5, 968.0], [89.6, 968.0], [89.7, 968.0], [89.8, 968.0], [89.9, 969.0], [90.0, 969.0], [90.1, 969.0], [90.2, 969.0], [90.3, 972.0], [90.4, 972.0], [90.5, 972.0], [90.6, 972.0], [90.7, 972.0], [90.8, 972.0], [90.9, 972.0], [91.0, 972.0], [91.1, 972.0], [91.2, 972.0], [91.3, 977.0], [91.4, 977.0], [91.5, 977.0], [91.6, 977.0], [91.7, 977.0], [91.8, 978.0], [91.9, 978.0], [92.0, 978.0], [92.1, 978.0], [92.2, 978.0], [92.3, 982.0], [92.4, 982.0], [92.5, 982.0], [92.6, 982.0], [92.7, 982.0], [92.8, 989.0], [92.9, 989.0], [93.0, 989.0], [93.1, 989.0], [93.2, 989.0], [93.3, 995.0], [93.4, 995.0], [93.5, 995.0], [93.6, 995.0], [93.7, 995.0], [93.8, 995.0], [93.9, 995.0], [94.0, 995.0], [94.1, 995.0], [94.2, 996.0], [94.3, 996.0], [94.4, 996.0], [94.5, 996.0], [94.6, 996.0], [94.7, 1002.0], [94.8, 1002.0], [94.9, 1002.0], [95.0, 1002.0], [95.1, 1002.0], [95.2, 1009.0], [95.3, 1009.0], [95.4, 1009.0], [95.5, 1009.0], [95.6, 1009.0], [95.7, 1016.0], [95.8, 1016.0], [95.9, 1016.0], [96.0, 1016.0], [96.1, 1016.0], [96.2, 1020.0], [96.3, 1020.0], [96.4, 1020.0], [96.5, 1020.0], [96.6, 1020.0], [96.7, 1032.0], [96.8, 1032.0], [96.9, 1032.0], [97.0, 1032.0], [97.1, 1032.0], [97.2, 1032.0], [97.3, 1032.0], [97.4, 1032.0], [97.5, 1032.0], [97.6, 1064.0], [97.7, 1064.0], [97.8, 1064.0], [97.9, 1064.0], [98.0, 1064.0], [98.1, 1085.0], [98.2, 1085.0], [98.3, 1085.0], [98.4, 1085.0], [98.5, 1085.0], [98.6, 1162.0], [98.7, 1162.0], [98.8, 1162.0], [98.9, 1162.0], [99.0, 1162.0], [99.1, 1163.0], [99.2, 1163.0], [99.3, 1163.0], [99.4, 1163.0], [99.5, 1163.0], [99.6, 2335.0], [99.7, 2335.0], [99.8, 2335.0], [99.9, 2335.0]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 99.0, "series": [{"data": [[1100.0, 2.0], [2300.0, 1.0], [600.0, 4.0], [700.0, 39.0], [800.0, 99.0], [900.0, 53.0], [1000.0, 8.0]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 205.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 205.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.9785714285714286, "minX": 1.58243166E12, "maxY": 3.0, "series": [{"data": [[1.58243172E12, 2.9785714285714286], [1.58243166E12, 3.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58243172E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 693.0, "minX": 1.0, "maxY": 2335.0, "series": [{"data": [[2.0, 693.0], [1.0, 2335.0], [3.0, 865.3872549019607]], "isOverall": false, "label": "downloaddFile", "isController": false}, {"data": [[2.9854368932038833, 871.6844660194173]], "isOverall": false, "label": "downloaddFile-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 3.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 188.1, "minX": 1.58243166E12, "maxY": 2239751.5, "series": [{"data": [[1.58243172E12, 2239751.5], [1.58243166E12, 1055882.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58243172E12, 399.0], [1.58243166E12, 188.1]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58243172E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 855.0606060606061, "minX": 1.58243166E12, "maxY": 879.5214285714284, "series": [{"data": [[1.58243172E12, 879.5214285714284], [1.58243166E12, 855.0606060606061]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58243172E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 105.39393939393938, "minX": 1.58243166E12, "maxY": 110.57142857142863, "series": [{"data": [[1.58243172E12, 110.57142857142863], [1.58243166E12, 105.39393939393938]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58243172E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 50.77272727272728, "minX": 1.58243166E12, "maxY": 57.07142857142855, "series": [{"data": [[1.58243172E12, 57.07142857142855], [1.58243166E12, 50.77272727272728]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58243172E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 655.0, "minX": 1.58243166E12, "maxY": 2335.0, "series": [{"data": [[1.58243172E12, 2335.0], [1.58243166E12, 1009.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58243172E12, 655.0], [1.58243166E12, 656.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58243172E12, 977.9], [1.58243166E12, 949.4000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58243172E12, 1854.480000000004], [1.58243166E12, 1009.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58243172E12, 1031.3999999999999], [1.58243166E12, 987.5999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58243172E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 793.0, "minX": 3.0, "maxY": 873.0, "series": [{"data": [[4.0, 849.0], [5.0, 793.0], [3.0, 873.0], [6.0, 812.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 94.5, "minX": 3.0, "maxY": 110.5, "series": [{"data": [[4.0, 110.5], [5.0, 104.0], [3.0, 103.5], [6.0, 94.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.15, "minX": 1.58243166E12, "maxY": 2.283333333333333, "series": [{"data": [[1.58243172E12, 2.283333333333333], [1.58243166E12, 1.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58243172E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.58243166E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.58243172E12, 2.3333333333333335], [1.58243166E12, 1.1]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58243172E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.58243166E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.58243172E12, 2.3333333333333335], [1.58243166E12, 1.1]], "isOverall": false, "label": "downloaddFile-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58243172E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.1, "minX": 1.58243166E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.58243172E12, 2.3333333333333335], [1.58243166E12, 1.1]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58243172E12, "title": "Total Transactions Per Second"}},
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

