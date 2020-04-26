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
        data: {"result": {"minY": 401.0, "minX": 0.0, "maxY": 2704.0, "series": [{"data": [[0.0, 401.0], [0.1, 459.0], [0.2, 484.0], [0.3, 508.0], [0.4, 517.0], [0.5, 538.0], [0.6, 545.0], [0.7, 549.0], [0.8, 553.0], [0.9, 557.0], [1.0, 559.0], [1.1, 564.0], [1.2, 567.0], [1.3, 570.0], [1.4, 573.0], [1.5, 576.0], [1.6, 577.0], [1.7, 580.0], [1.8, 580.0], [1.9, 580.0], [2.0, 585.0], [2.1, 587.0], [2.2, 588.0], [2.3, 591.0], [2.4, 592.0], [2.5, 595.0], [2.6, 597.0], [2.7, 598.0], [2.8, 599.0], [2.9, 599.0], [3.0, 600.0], [3.1, 601.0], [3.2, 602.0], [3.3, 603.0], [3.4, 604.0], [3.5, 605.0], [3.6, 606.0], [3.7, 607.0], [3.8, 608.0], [3.9, 609.0], [4.0, 610.0], [4.1, 611.0], [4.2, 611.0], [4.3, 612.0], [4.4, 613.0], [4.5, 615.0], [4.6, 615.0], [4.7, 616.0], [4.8, 617.0], [4.9, 618.0], [5.0, 618.0], [5.1, 619.0], [5.2, 619.0], [5.3, 621.0], [5.4, 621.0], [5.5, 623.0], [5.6, 624.0], [5.7, 624.0], [5.8, 625.0], [5.9, 626.0], [6.0, 627.0], [6.1, 628.0], [6.2, 629.0], [6.3, 630.0], [6.4, 630.0], [6.5, 632.0], [6.6, 632.0], [6.7, 634.0], [6.8, 634.0], [6.9, 635.0], [7.0, 635.0], [7.1, 637.0], [7.2, 638.0], [7.3, 639.0], [7.4, 640.0], [7.5, 641.0], [7.6, 642.0], [7.7, 642.0], [7.8, 643.0], [7.9, 643.0], [8.0, 644.0], [8.1, 644.0], [8.2, 645.0], [8.3, 645.0], [8.4, 645.0], [8.5, 647.0], [8.6, 648.0], [8.7, 648.0], [8.8, 649.0], [8.9, 649.0], [9.0, 650.0], [9.1, 651.0], [9.2, 652.0], [9.3, 653.0], [9.4, 653.0], [9.5, 654.0], [9.6, 656.0], [9.7, 657.0], [9.8, 657.0], [9.9, 658.0], [10.0, 658.0], [10.1, 658.0], [10.2, 659.0], [10.3, 660.0], [10.4, 660.0], [10.5, 661.0], [10.6, 661.0], [10.7, 661.0], [10.8, 662.0], [10.9, 662.0], [11.0, 663.0], [11.1, 663.0], [11.2, 665.0], [11.3, 666.0], [11.4, 667.0], [11.5, 667.0], [11.6, 668.0], [11.7, 668.0], [11.8, 669.0], [11.9, 670.0], [12.0, 670.0], [12.1, 670.0], [12.2, 671.0], [12.3, 672.0], [12.4, 673.0], [12.5, 673.0], [12.6, 674.0], [12.7, 674.0], [12.8, 675.0], [12.9, 677.0], [13.0, 678.0], [13.1, 678.0], [13.2, 679.0], [13.3, 679.0], [13.4, 680.0], [13.5, 680.0], [13.6, 681.0], [13.7, 681.0], [13.8, 681.0], [13.9, 682.0], [14.0, 682.0], [14.1, 683.0], [14.2, 683.0], [14.3, 684.0], [14.4, 685.0], [14.5, 685.0], [14.6, 686.0], [14.7, 686.0], [14.8, 687.0], [14.9, 687.0], [15.0, 688.0], [15.1, 689.0], [15.2, 689.0], [15.3, 690.0], [15.4, 691.0], [15.5, 691.0], [15.6, 692.0], [15.7, 692.0], [15.8, 692.0], [15.9, 693.0], [16.0, 693.0], [16.1, 693.0], [16.2, 694.0], [16.3, 694.0], [16.4, 694.0], [16.5, 695.0], [16.6, 695.0], [16.7, 696.0], [16.8, 697.0], [16.9, 698.0], [17.0, 698.0], [17.1, 699.0], [17.2, 699.0], [17.3, 699.0], [17.4, 700.0], [17.5, 700.0], [17.6, 701.0], [17.7, 701.0], [17.8, 702.0], [17.9, 702.0], [18.0, 703.0], [18.1, 703.0], [18.2, 704.0], [18.3, 704.0], [18.4, 705.0], [18.5, 705.0], [18.6, 706.0], [18.7, 706.0], [18.8, 706.0], [18.9, 707.0], [19.0, 707.0], [19.1, 708.0], [19.2, 708.0], [19.3, 709.0], [19.4, 710.0], [19.5, 710.0], [19.6, 711.0], [19.7, 712.0], [19.8, 712.0], [19.9, 712.0], [20.0, 713.0], [20.1, 713.0], [20.2, 714.0], [20.3, 715.0], [20.4, 716.0], [20.5, 716.0], [20.6, 717.0], [20.7, 717.0], [20.8, 718.0], [20.9, 718.0], [21.0, 719.0], [21.1, 719.0], [21.2, 720.0], [21.3, 720.0], [21.4, 722.0], [21.5, 722.0], [21.6, 722.0], [21.7, 723.0], [21.8, 724.0], [21.9, 725.0], [22.0, 725.0], [22.1, 726.0], [22.2, 726.0], [22.3, 726.0], [22.4, 726.0], [22.5, 727.0], [22.6, 728.0], [22.7, 730.0], [22.8, 731.0], [22.9, 731.0], [23.0, 732.0], [23.1, 732.0], [23.2, 733.0], [23.3, 734.0], [23.4, 734.0], [23.5, 735.0], [23.6, 735.0], [23.7, 736.0], [23.8, 736.0], [23.9, 736.0], [24.0, 737.0], [24.1, 737.0], [24.2, 738.0], [24.3, 739.0], [24.4, 740.0], [24.5, 740.0], [24.6, 741.0], [24.7, 741.0], [24.8, 742.0], [24.9, 742.0], [25.0, 743.0], [25.1, 744.0], [25.2, 745.0], [25.3, 746.0], [25.4, 747.0], [25.5, 747.0], [25.6, 748.0], [25.7, 749.0], [25.8, 749.0], [25.9, 750.0], [26.0, 751.0], [26.1, 751.0], [26.2, 752.0], [26.3, 753.0], [26.4, 753.0], [26.5, 754.0], [26.6, 754.0], [26.7, 755.0], [26.8, 755.0], [26.9, 756.0], [27.0, 756.0], [27.1, 756.0], [27.2, 757.0], [27.3, 757.0], [27.4, 757.0], [27.5, 759.0], [27.6, 760.0], [27.7, 760.0], [27.8, 761.0], [27.9, 763.0], [28.0, 764.0], [28.1, 765.0], [28.2, 765.0], [28.3, 766.0], [28.4, 767.0], [28.5, 768.0], [28.6, 769.0], [28.7, 769.0], [28.8, 770.0], [28.9, 771.0], [29.0, 771.0], [29.1, 772.0], [29.2, 773.0], [29.3, 774.0], [29.4, 775.0], [29.5, 775.0], [29.6, 776.0], [29.7, 776.0], [29.8, 777.0], [29.9, 778.0], [30.0, 778.0], [30.1, 779.0], [30.2, 780.0], [30.3, 781.0], [30.4, 782.0], [30.5, 782.0], [30.6, 782.0], [30.7, 783.0], [30.8, 783.0], [30.9, 784.0], [31.0, 784.0], [31.1, 785.0], [31.2, 786.0], [31.3, 787.0], [31.4, 787.0], [31.5, 787.0], [31.6, 787.0], [31.7, 788.0], [31.8, 789.0], [31.9, 790.0], [32.0, 790.0], [32.1, 791.0], [32.2, 792.0], [32.3, 793.0], [32.4, 793.0], [32.5, 795.0], [32.6, 795.0], [32.7, 796.0], [32.8, 797.0], [32.9, 797.0], [33.0, 798.0], [33.1, 798.0], [33.2, 799.0], [33.3, 799.0], [33.4, 800.0], [33.5, 802.0], [33.6, 802.0], [33.7, 802.0], [33.8, 803.0], [33.9, 804.0], [34.0, 804.0], [34.1, 805.0], [34.2, 805.0], [34.3, 806.0], [34.4, 806.0], [34.5, 807.0], [34.6, 808.0], [34.7, 809.0], [34.8, 809.0], [34.9, 810.0], [35.0, 810.0], [35.1, 811.0], [35.2, 812.0], [35.3, 813.0], [35.4, 814.0], [35.5, 815.0], [35.6, 816.0], [35.7, 817.0], [35.8, 817.0], [35.9, 818.0], [36.0, 819.0], [36.1, 819.0], [36.2, 820.0], [36.3, 821.0], [36.4, 821.0], [36.5, 822.0], [36.6, 824.0], [36.7, 824.0], [36.8, 825.0], [36.9, 826.0], [37.0, 827.0], [37.1, 829.0], [37.2, 829.0], [37.3, 830.0], [37.4, 831.0], [37.5, 832.0], [37.6, 832.0], [37.7, 832.0], [37.8, 833.0], [37.9, 835.0], [38.0, 837.0], [38.1, 838.0], [38.2, 838.0], [38.3, 839.0], [38.4, 841.0], [38.5, 843.0], [38.6, 844.0], [38.7, 845.0], [38.8, 846.0], [38.9, 847.0], [39.0, 848.0], [39.1, 849.0], [39.2, 849.0], [39.3, 849.0], [39.4, 851.0], [39.5, 852.0], [39.6, 852.0], [39.7, 853.0], [39.8, 854.0], [39.9, 855.0], [40.0, 857.0], [40.1, 858.0], [40.2, 859.0], [40.3, 860.0], [40.4, 862.0], [40.5, 862.0], [40.6, 862.0], [40.7, 863.0], [40.8, 863.0], [40.9, 865.0], [41.0, 865.0], [41.1, 866.0], [41.2, 867.0], [41.3, 867.0], [41.4, 868.0], [41.5, 868.0], [41.6, 869.0], [41.7, 870.0], [41.8, 870.0], [41.9, 871.0], [42.0, 872.0], [42.1, 873.0], [42.2, 874.0], [42.3, 875.0], [42.4, 876.0], [42.5, 877.0], [42.6, 878.0], [42.7, 878.0], [42.8, 879.0], [42.9, 880.0], [43.0, 881.0], [43.1, 881.0], [43.2, 882.0], [43.3, 884.0], [43.4, 885.0], [43.5, 886.0], [43.6, 886.0], [43.7, 887.0], [43.8, 888.0], [43.9, 889.0], [44.0, 890.0], [44.1, 891.0], [44.2, 892.0], [44.3, 894.0], [44.4, 895.0], [44.5, 896.0], [44.6, 896.0], [44.7, 897.0], [44.8, 898.0], [44.9, 899.0], [45.0, 900.0], [45.1, 900.0], [45.2, 901.0], [45.3, 902.0], [45.4, 903.0], [45.5, 904.0], [45.6, 904.0], [45.7, 905.0], [45.8, 905.0], [45.9, 906.0], [46.0, 908.0], [46.1, 909.0], [46.2, 909.0], [46.3, 910.0], [46.4, 911.0], [46.5, 912.0], [46.6, 912.0], [46.7, 914.0], [46.8, 915.0], [46.9, 915.0], [47.0, 916.0], [47.1, 916.0], [47.2, 918.0], [47.3, 918.0], [47.4, 919.0], [47.5, 919.0], [47.6, 920.0], [47.7, 920.0], [47.8, 921.0], [47.9, 922.0], [48.0, 923.0], [48.1, 923.0], [48.2, 924.0], [48.3, 925.0], [48.4, 925.0], [48.5, 926.0], [48.6, 927.0], [48.7, 928.0], [48.8, 928.0], [48.9, 929.0], [49.0, 929.0], [49.1, 930.0], [49.2, 930.0], [49.3, 931.0], [49.4, 931.0], [49.5, 932.0], [49.6, 933.0], [49.7, 933.0], [49.8, 935.0], [49.9, 936.0], [50.0, 937.0], [50.1, 938.0], [50.2, 938.0], [50.3, 939.0], [50.4, 939.0], [50.5, 941.0], [50.6, 941.0], [50.7, 942.0], [50.8, 943.0], [50.9, 943.0], [51.0, 944.0], [51.1, 945.0], [51.2, 945.0], [51.3, 945.0], [51.4, 945.0], [51.5, 946.0], [51.6, 947.0], [51.7, 948.0], [51.8, 948.0], [51.9, 949.0], [52.0, 950.0], [52.1, 951.0], [52.2, 951.0], [52.3, 952.0], [52.4, 953.0], [52.5, 953.0], [52.6, 953.0], [52.7, 954.0], [52.8, 954.0], [52.9, 955.0], [53.0, 956.0], [53.1, 956.0], [53.2, 956.0], [53.3, 957.0], [53.4, 958.0], [53.5, 958.0], [53.6, 959.0], [53.7, 959.0], [53.8, 960.0], [53.9, 961.0], [54.0, 961.0], [54.1, 962.0], [54.2, 963.0], [54.3, 964.0], [54.4, 964.0], [54.5, 964.0], [54.6, 965.0], [54.7, 965.0], [54.8, 965.0], [54.9, 966.0], [55.0, 968.0], [55.1, 968.0], [55.2, 969.0], [55.3, 970.0], [55.4, 971.0], [55.5, 971.0], [55.6, 972.0], [55.7, 973.0], [55.8, 973.0], [55.9, 974.0], [56.0, 974.0], [56.1, 975.0], [56.2, 975.0], [56.3, 976.0], [56.4, 976.0], [56.5, 976.0], [56.6, 976.0], [56.7, 977.0], [56.8, 978.0], [56.9, 978.0], [57.0, 978.0], [57.1, 979.0], [57.2, 980.0], [57.3, 980.0], [57.4, 980.0], [57.5, 981.0], [57.6, 982.0], [57.7, 983.0], [57.8, 983.0], [57.9, 984.0], [58.0, 984.0], [58.1, 985.0], [58.2, 985.0], [58.3, 985.0], [58.4, 987.0], [58.5, 987.0], [58.6, 988.0], [58.7, 988.0], [58.8, 989.0], [58.9, 989.0], [59.0, 990.0], [59.1, 990.0], [59.2, 990.0], [59.3, 991.0], [59.4, 991.0], [59.5, 991.0], [59.6, 992.0], [59.7, 993.0], [59.8, 993.0], [59.9, 993.0], [60.0, 994.0], [60.1, 995.0], [60.2, 996.0], [60.3, 997.0], [60.4, 997.0], [60.5, 997.0], [60.6, 998.0], [60.7, 999.0], [60.8, 999.0], [60.9, 1000.0], [61.0, 1000.0], [61.1, 1000.0], [61.2, 1001.0], [61.3, 1002.0], [61.4, 1002.0], [61.5, 1003.0], [61.6, 1003.0], [61.7, 1004.0], [61.8, 1005.0], [61.9, 1005.0], [62.0, 1006.0], [62.1, 1008.0], [62.2, 1008.0], [62.3, 1009.0], [62.4, 1009.0], [62.5, 1010.0], [62.6, 1010.0], [62.7, 1011.0], [62.8, 1011.0], [62.9, 1012.0], [63.0, 1013.0], [63.1, 1014.0], [63.2, 1014.0], [63.3, 1015.0], [63.4, 1015.0], [63.5, 1016.0], [63.6, 1017.0], [63.7, 1017.0], [63.8, 1018.0], [63.9, 1018.0], [64.0, 1019.0], [64.1, 1020.0], [64.2, 1020.0], [64.3, 1020.0], [64.4, 1021.0], [64.5, 1022.0], [64.6, 1022.0], [64.7, 1022.0], [64.8, 1023.0], [64.9, 1023.0], [65.0, 1023.0], [65.1, 1024.0], [65.2, 1024.0], [65.3, 1025.0], [65.4, 1025.0], [65.5, 1026.0], [65.6, 1026.0], [65.7, 1026.0], [65.8, 1027.0], [65.9, 1027.0], [66.0, 1027.0], [66.1, 1028.0], [66.2, 1029.0], [66.3, 1029.0], [66.4, 1030.0], [66.5, 1031.0], [66.6, 1031.0], [66.7, 1032.0], [66.8, 1032.0], [66.9, 1033.0], [67.0, 1033.0], [67.1, 1034.0], [67.2, 1035.0], [67.3, 1035.0], [67.4, 1036.0], [67.5, 1037.0], [67.6, 1037.0], [67.7, 1038.0], [67.8, 1039.0], [67.9, 1039.0], [68.0, 1039.0], [68.1, 1040.0], [68.2, 1040.0], [68.3, 1040.0], [68.4, 1041.0], [68.5, 1041.0], [68.6, 1041.0], [68.7, 1042.0], [68.8, 1042.0], [68.9, 1042.0], [69.0, 1044.0], [69.1, 1044.0], [69.2, 1045.0], [69.3, 1045.0], [69.4, 1046.0], [69.5, 1046.0], [69.6, 1047.0], [69.7, 1047.0], [69.8, 1048.0], [69.9, 1048.0], [70.0, 1048.0], [70.1, 1049.0], [70.2, 1050.0], [70.3, 1051.0], [70.4, 1051.0], [70.5, 1051.0], [70.6, 1052.0], [70.7, 1053.0], [70.8, 1053.0], [70.9, 1054.0], [71.0, 1054.0], [71.1, 1055.0], [71.2, 1055.0], [71.3, 1056.0], [71.4, 1056.0], [71.5, 1057.0], [71.6, 1058.0], [71.7, 1058.0], [71.8, 1058.0], [71.9, 1059.0], [72.0, 1059.0], [72.1, 1060.0], [72.2, 1060.0], [72.3, 1061.0], [72.4, 1061.0], [72.5, 1062.0], [72.6, 1062.0], [72.7, 1063.0], [72.8, 1063.0], [72.9, 1064.0], [73.0, 1064.0], [73.1, 1064.0], [73.2, 1065.0], [73.3, 1065.0], [73.4, 1065.0], [73.5, 1066.0], [73.6, 1066.0], [73.7, 1066.0], [73.8, 1067.0], [73.9, 1067.0], [74.0, 1067.0], [74.1, 1068.0], [74.2, 1069.0], [74.3, 1069.0], [74.4, 1070.0], [74.5, 1070.0], [74.6, 1071.0], [74.7, 1071.0], [74.8, 1071.0], [74.9, 1072.0], [75.0, 1072.0], [75.1, 1073.0], [75.2, 1074.0], [75.3, 1074.0], [75.4, 1075.0], [75.5, 1075.0], [75.6, 1076.0], [75.7, 1076.0], [75.8, 1076.0], [75.9, 1077.0], [76.0, 1077.0], [76.1, 1078.0], [76.2, 1078.0], [76.3, 1078.0], [76.4, 1079.0], [76.5, 1079.0], [76.6, 1080.0], [76.7, 1081.0], [76.8, 1081.0], [76.9, 1081.0], [77.0, 1082.0], [77.1, 1083.0], [77.2, 1083.0], [77.3, 1083.0], [77.4, 1084.0], [77.5, 1084.0], [77.6, 1085.0], [77.7, 1085.0], [77.8, 1086.0], [77.9, 1086.0], [78.0, 1087.0], [78.1, 1087.0], [78.2, 1088.0], [78.3, 1088.0], [78.4, 1088.0], [78.5, 1088.0], [78.6, 1089.0], [78.7, 1089.0], [78.8, 1090.0], [78.9, 1090.0], [79.0, 1091.0], [79.1, 1091.0], [79.2, 1091.0], [79.3, 1092.0], [79.4, 1094.0], [79.5, 1095.0], [79.6, 1095.0], [79.7, 1096.0], [79.8, 1097.0], [79.9, 1098.0], [80.0, 1099.0], [80.1, 1100.0], [80.2, 1100.0], [80.3, 1101.0], [80.4, 1102.0], [80.5, 1103.0], [80.6, 1104.0], [80.7, 1104.0], [80.8, 1105.0], [80.9, 1105.0], [81.0, 1106.0], [81.1, 1106.0], [81.2, 1107.0], [81.3, 1107.0], [81.4, 1108.0], [81.5, 1109.0], [81.6, 1109.0], [81.7, 1110.0], [81.8, 1110.0], [81.9, 1111.0], [82.0, 1111.0], [82.1, 1112.0], [82.2, 1112.0], [82.3, 1112.0], [82.4, 1112.0], [82.5, 1113.0], [82.6, 1113.0], [82.7, 1114.0], [82.8, 1115.0], [82.9, 1115.0], [83.0, 1116.0], [83.1, 1116.0], [83.2, 1117.0], [83.3, 1117.0], [83.4, 1118.0], [83.5, 1118.0], [83.6, 1119.0], [83.7, 1119.0], [83.8, 1120.0], [83.9, 1120.0], [84.0, 1121.0], [84.1, 1121.0], [84.2, 1121.0], [84.3, 1122.0], [84.4, 1122.0], [84.5, 1123.0], [84.6, 1124.0], [84.7, 1125.0], [84.8, 1126.0], [84.9, 1126.0], [85.0, 1127.0], [85.1, 1127.0], [85.2, 1128.0], [85.3, 1129.0], [85.4, 1129.0], [85.5, 1130.0], [85.6, 1131.0], [85.7, 1132.0], [85.8, 1133.0], [85.9, 1135.0], [86.0, 1135.0], [86.1, 1136.0], [86.2, 1137.0], [86.3, 1139.0], [86.4, 1140.0], [86.5, 1141.0], [86.6, 1142.0], [86.7, 1142.0], [86.8, 1142.0], [86.9, 1143.0], [87.0, 1143.0], [87.1, 1144.0], [87.2, 1145.0], [87.3, 1146.0], [87.4, 1147.0], [87.5, 1148.0], [87.6, 1149.0], [87.7, 1150.0], [87.8, 1150.0], [87.9, 1152.0], [88.0, 1153.0], [88.1, 1155.0], [88.2, 1156.0], [88.3, 1156.0], [88.4, 1157.0], [88.5, 1158.0], [88.6, 1158.0], [88.7, 1160.0], [88.8, 1160.0], [88.9, 1161.0], [89.0, 1162.0], [89.1, 1162.0], [89.2, 1163.0], [89.3, 1163.0], [89.4, 1164.0], [89.5, 1166.0], [89.6, 1166.0], [89.7, 1168.0], [89.8, 1169.0], [89.9, 1171.0], [90.0, 1172.0], [90.1, 1172.0], [90.2, 1172.0], [90.3, 1173.0], [90.4, 1175.0], [90.5, 1176.0], [90.6, 1176.0], [90.7, 1180.0], [90.8, 1180.0], [90.9, 1181.0], [91.0, 1182.0], [91.1, 1182.0], [91.2, 1184.0], [91.3, 1185.0], [91.4, 1187.0], [91.5, 1192.0], [91.6, 1194.0], [91.7, 1194.0], [91.8, 1195.0], [91.9, 1198.0], [92.0, 1199.0], [92.1, 1200.0], [92.2, 1201.0], [92.3, 1204.0], [92.4, 1206.0], [92.5, 1207.0], [92.6, 1208.0], [92.7, 1209.0], [92.8, 1211.0], [92.9, 1216.0], [93.0, 1219.0], [93.1, 1221.0], [93.2, 1222.0], [93.3, 1224.0], [93.4, 1226.0], [93.5, 1229.0], [93.6, 1231.0], [93.7, 1235.0], [93.8, 1236.0], [93.9, 1239.0], [94.0, 1241.0], [94.1, 1243.0], [94.2, 1247.0], [94.3, 1252.0], [94.4, 1255.0], [94.5, 1264.0], [94.6, 1266.0], [94.7, 1267.0], [94.8, 1269.0], [94.9, 1277.0], [95.0, 1279.0], [95.1, 1285.0], [95.2, 1293.0], [95.3, 1299.0], [95.4, 1300.0], [95.5, 1304.0], [95.6, 1307.0], [95.7, 1313.0], [95.8, 1321.0], [95.9, 1327.0], [96.0, 1339.0], [96.1, 1341.0], [96.2, 1349.0], [96.3, 1351.0], [96.4, 1359.0], [96.5, 1364.0], [96.6, 1369.0], [96.7, 1391.0], [96.8, 1403.0], [96.9, 1413.0], [97.0, 1415.0], [97.1, 1423.0], [97.2, 1452.0], [97.3, 1456.0], [97.4, 1458.0], [97.5, 1480.0], [97.6, 1502.0], [97.7, 1514.0], [97.8, 1538.0], [97.9, 1557.0], [98.0, 1558.0], [98.1, 1578.0], [98.2, 1608.0], [98.3, 1626.0], [98.4, 1664.0], [98.5, 1674.0], [98.6, 1687.0], [98.7, 1708.0], [98.8, 1720.0], [98.9, 1743.0], [99.0, 1764.0], [99.1, 1789.0], [99.2, 1822.0], [99.3, 1870.0], [99.4, 1896.0], [99.5, 1965.0], [99.6, 2028.0], [99.7, 2078.0], [99.8, 2178.0], [99.9, 2579.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 615.0, "series": [{"data": [[2100.0, 3.0], [2200.0, 1.0], [600.0, 462.0], [2400.0, 1.0], [2500.0, 1.0], [2600.0, 2.0], [700.0, 514.0], [2700.0, 1.0], [800.0, 373.0], [900.0, 510.0], [1000.0, 615.0], [1100.0, 386.0], [1200.0, 104.0], [1300.0, 47.0], [1400.0, 26.0], [1500.0, 18.0], [1600.0, 16.0], [400.0, 9.0], [1700.0, 15.0], [1800.0, 9.0], [1900.0, 5.0], [500.0, 85.0], [2000.0, 5.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3122.0, "series": [{"data": [[0.0, 9.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3122.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 77.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.889460154241647, "minX": 1.58180232E12, "maxY": 10.0, "series": [{"data": [[1.5818025E12, 10.0], [1.58180232E12, 10.0], [1.58180238E12, 10.0], [1.58180256E12, 10.0], [1.58180262E12, 9.889460154241647], [1.58180244E12, 10.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180262E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 611.0, "minX": 2.0, "maxY": 1058.0, "series": [{"data": [[8.0, 635.0], [2.0, 651.0], [9.0, 1058.0], [10.0, 934.6201938105639], [5.0, 628.5], [6.0, 724.0], [3.0, 645.0], [7.0, 611.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}, {"data": [[9.986596009975063, 933.9407730673298]], "isOverall": false, "label": "getProductByCategory-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 786.6166666666667, "minX": 1.58180232E12, "maxY": 182300.43333333332, "series": [{"data": [[1.5818025E12, 165727.0], [1.58180232E12, 64659.01666666667], [1.58180238E12, 176870.96666666667], [1.58180256E12, 182300.43333333332], [1.58180262E12, 105687.43333333333], [1.58180244E12, 176321.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5818025E12, 2016.1166666666666], [1.58180232E12, 786.6166666666667], [1.58180238E12, 2151.65], [1.58180256E12, 2217.5333333333333], [1.58180262E12, 1285.7666666666667], [1.58180244E12, 2144.85]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180262E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 890.5991058122199, "minX": 1.58180232E12, "maxY": 994.8739495798318, "series": [{"data": [[1.5818025E12, 980.6213114754095], [1.58180232E12, 994.8739495798318], [1.58180238E12, 930.9370199692776], [1.58180256E12, 890.5991058122199], [1.58180262E12, 908.3907455012856], [1.58180244E12, 930.8582434514635]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180262E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 850.836065573771, "minX": 1.58180232E12, "maxY": 956.3739495798325, "series": [{"data": [[1.5818025E12, 940.9622950819662], [1.58180232E12, 956.3739495798325], [1.58180238E12, 892.251920122888], [1.58180256E12, 850.836065573771], [1.58180262E12, 869.5372750642666], [1.58180244E12, 892.052388289677]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180262E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 40.85604113110541, "minX": 1.58180232E12, "maxY": 42.05812220566321, "series": [{"data": [[1.5818025E12, 41.626229508196715], [1.58180232E12, 41.2647058823529], [1.58180238E12, 41.32258064516128], [1.58180256E12, 42.05812220566321], [1.58180262E12, 40.85604113110541], [1.58180244E12, 41.17719568567024]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180262E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 401.0, "minX": 1.58180232E12, "maxY": 2704.0, "series": [{"data": [[1.5818025E12, 2704.0], [1.58180232E12, 1699.0], [1.58180238E12, 1720.0], [1.58180256E12, 1568.0], [1.58180262E12, 2118.0], [1.58180244E12, 1876.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5818025E12, 401.0], [1.58180232E12, 579.0], [1.58180238E12, 545.0], [1.58180256E12, 430.0], [1.58180262E12, 517.0], [1.58180244E12, 440.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5818025E12, 1226.3999999999999], [1.58180232E12, 1281.1], [1.58180238E12, 1179.2000000000003], [1.58180256E12, 1121.0], [1.58180262E12, 1139.0], [1.58180244E12, 1172.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5818025E12, 2202.0299999999997], [1.58180232E12, 1633.1099999999992], [1.58180238E12, 1547.1200000000003], [1.58180256E12, 1285.3999999999992], [1.58180262E12, 2041.2000000000003], [1.58180244E12, 1736.5]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5818025E12, 1539.9499999999994], [1.58180232E12, 1364.25], [1.58180238E12, 1250.1999999999998], [1.58180256E12, 1163.4], [1.58180262E12, 1200.0], [1.58180244E12, 1303.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180262E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 800.5, "minX": 1.0, "maxY": 1797.0, "series": [{"data": [[8.0, 994.0], [2.0, 844.0], [9.0, 1012.0], [10.0, 967.0], [11.0, 800.5], [12.0, 803.0], [3.0, 1426.0], [13.0, 825.0], [14.0, 943.0], [15.0, 919.0], [16.0, 917.5], [1.0, 1710.0], [4.0, 1797.0], [17.0, 954.0], [18.0, 925.5], [19.0, 856.5], [20.0, 899.5], [6.0, 1183.0], [7.0, 1018.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 761.5, "minX": 1.0, "maxY": 1761.0, "series": [{"data": [[8.0, 957.0], [2.0, 805.5], [9.0, 973.0], [10.0, 926.5], [11.0, 761.5], [12.0, 763.0], [3.0, 1393.0], [13.0, 792.0], [14.0, 905.5], [15.0, 879.5], [16.0, 878.5], [1.0, 1657.0], [4.0, 1761.0], [17.0, 913.0], [18.0, 887.0], [19.0, 822.5], [20.0, 862.0], [6.0, 1145.5], [7.0, 976.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.133333333333334, "minX": 1.58180232E12, "maxY": 11.183333333333334, "series": [{"data": [[1.5818025E12, 10.166666666666666], [1.58180232E12, 4.133333333333334], [1.58180238E12, 10.85], [1.58180256E12, 11.183333333333334], [1.58180262E12, 6.316666666666666], [1.58180244E12, 10.816666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180262E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.966666666666667, "minX": 1.58180232E12, "maxY": 11.183333333333334, "series": [{"data": [[1.5818025E12, 10.166666666666666], [1.58180232E12, 3.966666666666667], [1.58180238E12, 10.85], [1.58180256E12, 11.183333333333334], [1.58180262E12, 6.483333333333333], [1.58180244E12, 10.816666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180262E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.966666666666667, "minX": 1.58180232E12, "maxY": 11.183333333333334, "series": [{"data": [[1.5818025E12, 10.166666666666666], [1.58180232E12, 3.966666666666667], [1.58180238E12, 10.85], [1.58180256E12, 11.183333333333334], [1.58180262E12, 6.483333333333333], [1.58180244E12, 10.816666666666666]], "isOverall": false, "label": "getProductByCategory-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180262E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.966666666666667, "minX": 1.58180232E12, "maxY": 11.183333333333334, "series": [{"data": [[1.5818025E12, 10.166666666666666], [1.58180232E12, 3.966666666666667], [1.58180238E12, 10.85], [1.58180256E12, 11.183333333333334], [1.58180262E12, 6.483333333333333], [1.58180244E12, 10.816666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180262E12, "title": "Total Transactions Per Second"}},
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

