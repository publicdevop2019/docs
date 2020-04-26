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
        data: {"result": {"minY": 213.0, "minX": 0.0, "maxY": 1151.0, "series": [{"data": [[0.0, 213.0], [0.1, 315.0], [0.2, 379.0], [0.3, 394.0], [0.4, 403.0], [0.5, 410.0], [0.6, 416.0], [0.7, 424.0], [0.8, 429.0], [0.9, 434.0], [1.0, 434.0], [1.1, 440.0], [1.2, 444.0], [1.3, 449.0], [1.4, 451.0], [1.5, 452.0], [1.6, 456.0], [1.7, 460.0], [1.8, 463.0], [1.9, 465.0], [2.0, 467.0], [2.1, 470.0], [2.2, 474.0], [2.3, 477.0], [2.4, 479.0], [2.5, 480.0], [2.6, 483.0], [2.7, 487.0], [2.8, 490.0], [2.9, 492.0], [3.0, 493.0], [3.1, 494.0], [3.2, 496.0], [3.3, 498.0], [3.4, 500.0], [3.5, 502.0], [3.6, 502.0], [3.7, 502.0], [3.8, 503.0], [3.9, 504.0], [4.0, 504.0], [4.1, 506.0], [4.2, 507.0], [4.3, 507.0], [4.4, 508.0], [4.5, 509.0], [4.6, 511.0], [4.7, 512.0], [4.8, 513.0], [4.9, 515.0], [5.0, 516.0], [5.1, 517.0], [5.2, 518.0], [5.3, 518.0], [5.4, 519.0], [5.5, 520.0], [5.6, 521.0], [5.7, 522.0], [5.8, 523.0], [5.9, 524.0], [6.0, 525.0], [6.1, 526.0], [6.2, 526.0], [6.3, 529.0], [6.4, 530.0], [6.5, 530.0], [6.6, 531.0], [6.7, 532.0], [6.8, 532.0], [6.9, 532.0], [7.0, 533.0], [7.1, 535.0], [7.2, 535.0], [7.3, 537.0], [7.4, 538.0], [7.5, 538.0], [7.6, 539.0], [7.7, 539.0], [7.8, 540.0], [7.9, 540.0], [8.0, 542.0], [8.1, 542.0], [8.2, 544.0], [8.3, 545.0], [8.4, 545.0], [8.5, 545.0], [8.6, 547.0], [8.7, 548.0], [8.8, 549.0], [8.9, 549.0], [9.0, 550.0], [9.1, 550.0], [9.2, 550.0], [9.3, 551.0], [9.4, 551.0], [9.5, 552.0], [9.6, 553.0], [9.7, 553.0], [9.8, 554.0], [9.9, 555.0], [10.0, 555.0], [10.1, 556.0], [10.2, 556.0], [10.3, 556.0], [10.4, 558.0], [10.5, 558.0], [10.6, 559.0], [10.7, 559.0], [10.8, 560.0], [10.9, 560.0], [11.0, 561.0], [11.1, 561.0], [11.2, 562.0], [11.3, 562.0], [11.4, 564.0], [11.5, 564.0], [11.6, 564.0], [11.7, 565.0], [11.8, 566.0], [11.9, 566.0], [12.0, 567.0], [12.1, 567.0], [12.2, 568.0], [12.3, 568.0], [12.4, 569.0], [12.5, 569.0], [12.6, 570.0], [12.7, 570.0], [12.8, 571.0], [12.9, 571.0], [13.0, 572.0], [13.1, 572.0], [13.2, 573.0], [13.3, 573.0], [13.4, 574.0], [13.5, 575.0], [13.6, 575.0], [13.7, 575.0], [13.8, 576.0], [13.9, 577.0], [14.0, 577.0], [14.1, 578.0], [14.2, 578.0], [14.3, 579.0], [14.4, 579.0], [14.5, 579.0], [14.6, 579.0], [14.7, 580.0], [14.8, 580.0], [14.9, 580.0], [15.0, 581.0], [15.1, 582.0], [15.2, 582.0], [15.3, 583.0], [15.4, 584.0], [15.5, 584.0], [15.6, 585.0], [15.7, 585.0], [15.8, 586.0], [15.9, 587.0], [16.0, 587.0], [16.1, 588.0], [16.2, 588.0], [16.3, 589.0], [16.4, 589.0], [16.5, 590.0], [16.6, 591.0], [16.7, 591.0], [16.8, 592.0], [16.9, 593.0], [17.0, 593.0], [17.1, 594.0], [17.2, 594.0], [17.3, 595.0], [17.4, 595.0], [17.5, 596.0], [17.6, 596.0], [17.7, 597.0], [17.8, 597.0], [17.9, 598.0], [18.0, 599.0], [18.1, 599.0], [18.2, 600.0], [18.3, 600.0], [18.4, 600.0], [18.5, 601.0], [18.6, 602.0], [18.7, 603.0], [18.8, 604.0], [18.9, 605.0], [19.0, 605.0], [19.1, 605.0], [19.2, 606.0], [19.3, 606.0], [19.4, 607.0], [19.5, 607.0], [19.6, 608.0], [19.7, 608.0], [19.8, 609.0], [19.9, 610.0], [20.0, 610.0], [20.1, 610.0], [20.2, 611.0], [20.3, 612.0], [20.4, 612.0], [20.5, 613.0], [20.6, 614.0], [20.7, 614.0], [20.8, 615.0], [20.9, 615.0], [21.0, 616.0], [21.1, 616.0], [21.2, 617.0], [21.3, 618.0], [21.4, 619.0], [21.5, 620.0], [21.6, 620.0], [21.7, 621.0], [21.8, 622.0], [21.9, 622.0], [22.0, 622.0], [22.1, 624.0], [22.2, 624.0], [22.3, 624.0], [22.4, 625.0], [22.5, 625.0], [22.6, 626.0], [22.7, 626.0], [22.8, 627.0], [22.9, 628.0], [23.0, 629.0], [23.1, 629.0], [23.2, 630.0], [23.3, 630.0], [23.4, 630.0], [23.5, 631.0], [23.6, 632.0], [23.7, 633.0], [23.8, 633.0], [23.9, 633.0], [24.0, 634.0], [24.1, 635.0], [24.2, 636.0], [24.3, 637.0], [24.4, 638.0], [24.5, 639.0], [24.6, 640.0], [24.7, 641.0], [24.8, 641.0], [24.9, 642.0], [25.0, 642.0], [25.1, 643.0], [25.2, 643.0], [25.3, 644.0], [25.4, 645.0], [25.5, 645.0], [25.6, 646.0], [25.7, 647.0], [25.8, 647.0], [25.9, 648.0], [26.0, 649.0], [26.1, 649.0], [26.2, 650.0], [26.3, 650.0], [26.4, 650.0], [26.5, 651.0], [26.6, 652.0], [26.7, 652.0], [26.8, 653.0], [26.9, 653.0], [27.0, 654.0], [27.1, 654.0], [27.2, 655.0], [27.3, 656.0], [27.4, 656.0], [27.5, 656.0], [27.6, 657.0], [27.7, 657.0], [27.8, 658.0], [27.9, 658.0], [28.0, 659.0], [28.1, 659.0], [28.2, 659.0], [28.3, 660.0], [28.4, 661.0], [28.5, 662.0], [28.6, 662.0], [28.7, 663.0], [28.8, 664.0], [28.9, 664.0], [29.0, 665.0], [29.1, 665.0], [29.2, 666.0], [29.3, 667.0], [29.4, 667.0], [29.5, 668.0], [29.6, 668.0], [29.7, 669.0], [29.8, 669.0], [29.9, 670.0], [30.0, 670.0], [30.1, 670.0], [30.2, 671.0], [30.3, 671.0], [30.4, 672.0], [30.5, 673.0], [30.6, 674.0], [30.7, 675.0], [30.8, 675.0], [30.9, 676.0], [31.0, 676.0], [31.1, 677.0], [31.2, 677.0], [31.3, 678.0], [31.4, 678.0], [31.5, 679.0], [31.6, 679.0], [31.7, 679.0], [31.8, 680.0], [31.9, 680.0], [32.0, 680.0], [32.1, 681.0], [32.2, 681.0], [32.3, 682.0], [32.4, 683.0], [32.5, 683.0], [32.6, 684.0], [32.7, 684.0], [32.8, 684.0], [32.9, 685.0], [33.0, 686.0], [33.1, 686.0], [33.2, 687.0], [33.3, 688.0], [33.4, 688.0], [33.5, 689.0], [33.6, 689.0], [33.7, 690.0], [33.8, 691.0], [33.9, 691.0], [34.0, 692.0], [34.1, 692.0], [34.2, 693.0], [34.3, 693.0], [34.4, 693.0], [34.5, 694.0], [34.6, 696.0], [34.7, 696.0], [34.8, 697.0], [34.9, 698.0], [35.0, 698.0], [35.1, 699.0], [35.2, 700.0], [35.3, 701.0], [35.4, 702.0], [35.5, 703.0], [35.6, 703.0], [35.7, 704.0], [35.8, 705.0], [35.9, 705.0], [36.0, 706.0], [36.1, 707.0], [36.2, 707.0], [36.3, 708.0], [36.4, 709.0], [36.5, 709.0], [36.6, 710.0], [36.7, 710.0], [36.8, 711.0], [36.9, 711.0], [37.0, 713.0], [37.1, 713.0], [37.2, 713.0], [37.3, 714.0], [37.4, 715.0], [37.5, 715.0], [37.6, 716.0], [37.7, 716.0], [37.8, 717.0], [37.9, 718.0], [38.0, 718.0], [38.1, 719.0], [38.2, 719.0], [38.3, 721.0], [38.4, 721.0], [38.5, 722.0], [38.6, 723.0], [38.7, 724.0], [38.8, 724.0], [38.9, 725.0], [39.0, 725.0], [39.1, 727.0], [39.2, 727.0], [39.3, 727.0], [39.4, 728.0], [39.5, 729.0], [39.6, 730.0], [39.7, 730.0], [39.8, 732.0], [39.9, 732.0], [40.0, 732.0], [40.1, 733.0], [40.2, 735.0], [40.3, 736.0], [40.4, 737.0], [40.5, 738.0], [40.6, 738.0], [40.7, 739.0], [40.8, 739.0], [40.9, 740.0], [41.0, 742.0], [41.1, 742.0], [41.2, 743.0], [41.3, 743.0], [41.4, 744.0], [41.5, 744.0], [41.6, 745.0], [41.7, 745.0], [41.8, 746.0], [41.9, 747.0], [42.0, 749.0], [42.1, 750.0], [42.2, 751.0], [42.3, 752.0], [42.4, 752.0], [42.5, 753.0], [42.6, 754.0], [42.7, 754.0], [42.8, 754.0], [42.9, 755.0], [43.0, 756.0], [43.1, 758.0], [43.2, 758.0], [43.3, 759.0], [43.4, 760.0], [43.5, 760.0], [43.6, 762.0], [43.7, 762.0], [43.8, 763.0], [43.9, 764.0], [44.0, 764.0], [44.1, 766.0], [44.2, 767.0], [44.3, 768.0], [44.4, 769.0], [44.5, 770.0], [44.6, 771.0], [44.7, 772.0], [44.8, 772.0], [44.9, 773.0], [45.0, 774.0], [45.1, 775.0], [45.2, 775.0], [45.3, 775.0], [45.4, 776.0], [45.5, 777.0], [45.6, 778.0], [45.7, 779.0], [45.8, 779.0], [45.9, 780.0], [46.0, 781.0], [46.1, 782.0], [46.2, 782.0], [46.3, 783.0], [46.4, 784.0], [46.5, 784.0], [46.6, 785.0], [46.7, 786.0], [46.8, 787.0], [46.9, 788.0], [47.0, 788.0], [47.1, 789.0], [47.2, 790.0], [47.3, 791.0], [47.4, 791.0], [47.5, 793.0], [47.6, 793.0], [47.7, 793.0], [47.8, 794.0], [47.9, 794.0], [48.0, 794.0], [48.1, 795.0], [48.2, 795.0], [48.3, 796.0], [48.4, 797.0], [48.5, 797.0], [48.6, 798.0], [48.7, 799.0], [48.8, 799.0], [48.9, 799.0], [49.0, 800.0], [49.1, 800.0], [49.2, 801.0], [49.3, 802.0], [49.4, 802.0], [49.5, 803.0], [49.6, 804.0], [49.7, 805.0], [49.8, 805.0], [49.9, 806.0], [50.0, 806.0], [50.1, 807.0], [50.2, 807.0], [50.3, 808.0], [50.4, 808.0], [50.5, 809.0], [50.6, 810.0], [50.7, 810.0], [50.8, 811.0], [50.9, 811.0], [51.0, 811.0], [51.1, 811.0], [51.2, 812.0], [51.3, 813.0], [51.4, 814.0], [51.5, 814.0], [51.6, 816.0], [51.7, 816.0], [51.8, 817.0], [51.9, 817.0], [52.0, 818.0], [52.1, 819.0], [52.2, 819.0], [52.3, 820.0], [52.4, 820.0], [52.5, 821.0], [52.6, 821.0], [52.7, 822.0], [52.8, 822.0], [52.9, 823.0], [53.0, 823.0], [53.1, 823.0], [53.2, 824.0], [53.3, 824.0], [53.4, 825.0], [53.5, 825.0], [53.6, 826.0], [53.7, 827.0], [53.8, 828.0], [53.9, 829.0], [54.0, 830.0], [54.1, 830.0], [54.2, 831.0], [54.3, 831.0], [54.4, 832.0], [54.5, 832.0], [54.6, 832.0], [54.7, 833.0], [54.8, 833.0], [54.9, 833.0], [55.0, 833.0], [55.1, 834.0], [55.2, 835.0], [55.3, 835.0], [55.4, 836.0], [55.5, 837.0], [55.6, 837.0], [55.7, 838.0], [55.8, 838.0], [55.9, 839.0], [56.0, 839.0], [56.1, 840.0], [56.2, 840.0], [56.3, 841.0], [56.4, 841.0], [56.5, 842.0], [56.6, 842.0], [56.7, 843.0], [56.8, 844.0], [56.9, 844.0], [57.0, 845.0], [57.1, 845.0], [57.2, 845.0], [57.3, 845.0], [57.4, 846.0], [57.5, 846.0], [57.6, 847.0], [57.7, 847.0], [57.8, 847.0], [57.9, 848.0], [58.0, 849.0], [58.1, 849.0], [58.2, 849.0], [58.3, 850.0], [58.4, 850.0], [58.5, 851.0], [58.6, 851.0], [58.7, 852.0], [58.8, 853.0], [58.9, 853.0], [59.0, 853.0], [59.1, 854.0], [59.2, 854.0], [59.3, 854.0], [59.4, 855.0], [59.5, 856.0], [59.6, 856.0], [59.7, 856.0], [59.8, 857.0], [59.9, 857.0], [60.0, 857.0], [60.1, 857.0], [60.2, 858.0], [60.3, 858.0], [60.4, 859.0], [60.5, 860.0], [60.6, 860.0], [60.7, 860.0], [60.8, 861.0], [60.9, 861.0], [61.0, 862.0], [61.1, 863.0], [61.2, 863.0], [61.3, 864.0], [61.4, 864.0], [61.5, 864.0], [61.6, 864.0], [61.7, 865.0], [61.8, 865.0], [61.9, 865.0], [62.0, 866.0], [62.1, 867.0], [62.2, 867.0], [62.3, 868.0], [62.4, 868.0], [62.5, 869.0], [62.6, 869.0], [62.7, 870.0], [62.8, 870.0], [62.9, 871.0], [63.0, 872.0], [63.1, 872.0], [63.2, 873.0], [63.3, 873.0], [63.4, 873.0], [63.5, 874.0], [63.6, 874.0], [63.7, 875.0], [63.8, 875.0], [63.9, 876.0], [64.0, 876.0], [64.1, 877.0], [64.2, 877.0], [64.3, 877.0], [64.4, 878.0], [64.5, 878.0], [64.6, 878.0], [64.7, 878.0], [64.8, 879.0], [64.9, 879.0], [65.0, 879.0], [65.1, 880.0], [65.2, 880.0], [65.3, 881.0], [65.4, 881.0], [65.5, 881.0], [65.6, 881.0], [65.7, 881.0], [65.8, 882.0], [65.9, 882.0], [66.0, 882.0], [66.1, 883.0], [66.2, 883.0], [66.3, 883.0], [66.4, 883.0], [66.5, 884.0], [66.6, 884.0], [66.7, 885.0], [66.8, 885.0], [66.9, 885.0], [67.0, 886.0], [67.1, 887.0], [67.2, 887.0], [67.3, 888.0], [67.4, 888.0], [67.5, 888.0], [67.6, 889.0], [67.7, 889.0], [67.8, 889.0], [67.9, 890.0], [68.0, 890.0], [68.1, 890.0], [68.2, 890.0], [68.3, 891.0], [68.4, 891.0], [68.5, 892.0], [68.6, 892.0], [68.7, 893.0], [68.8, 893.0], [68.9, 893.0], [69.0, 894.0], [69.1, 894.0], [69.2, 895.0], [69.3, 895.0], [69.4, 895.0], [69.5, 896.0], [69.6, 896.0], [69.7, 897.0], [69.8, 897.0], [69.9, 898.0], [70.0, 899.0], [70.1, 899.0], [70.2, 899.0], [70.3, 900.0], [70.4, 900.0], [70.5, 900.0], [70.6, 901.0], [70.7, 901.0], [70.8, 901.0], [70.9, 902.0], [71.0, 902.0], [71.1, 903.0], [71.2, 903.0], [71.3, 904.0], [71.4, 904.0], [71.5, 904.0], [71.6, 905.0], [71.7, 905.0], [71.8, 905.0], [71.9, 905.0], [72.0, 906.0], [72.1, 906.0], [72.2, 907.0], [72.3, 907.0], [72.4, 907.0], [72.5, 907.0], [72.6, 907.0], [72.7, 908.0], [72.8, 908.0], [72.9, 908.0], [73.0, 909.0], [73.1, 909.0], [73.2, 909.0], [73.3, 910.0], [73.4, 910.0], [73.5, 910.0], [73.6, 910.0], [73.7, 911.0], [73.8, 911.0], [73.9, 913.0], [74.0, 913.0], [74.1, 913.0], [74.2, 914.0], [74.3, 914.0], [74.4, 914.0], [74.5, 915.0], [74.6, 915.0], [74.7, 916.0], [74.8, 916.0], [74.9, 917.0], [75.0, 917.0], [75.1, 917.0], [75.2, 918.0], [75.3, 918.0], [75.4, 919.0], [75.5, 919.0], [75.6, 920.0], [75.7, 920.0], [75.8, 921.0], [75.9, 921.0], [76.0, 922.0], [76.1, 922.0], [76.2, 923.0], [76.3, 923.0], [76.4, 924.0], [76.5, 925.0], [76.6, 925.0], [76.7, 925.0], [76.8, 926.0], [76.9, 926.0], [77.0, 926.0], [77.1, 927.0], [77.2, 927.0], [77.3, 927.0], [77.4, 927.0], [77.5, 928.0], [77.6, 928.0], [77.7, 929.0], [77.8, 929.0], [77.9, 929.0], [78.0, 930.0], [78.1, 930.0], [78.2, 931.0], [78.3, 931.0], [78.4, 932.0], [78.5, 932.0], [78.6, 932.0], [78.7, 933.0], [78.8, 933.0], [78.9, 934.0], [79.0, 934.0], [79.1, 934.0], [79.2, 935.0], [79.3, 935.0], [79.4, 935.0], [79.5, 936.0], [79.6, 936.0], [79.7, 937.0], [79.8, 937.0], [79.9, 938.0], [80.0, 939.0], [80.1, 939.0], [80.2, 940.0], [80.3, 940.0], [80.4, 941.0], [80.5, 942.0], [80.6, 942.0], [80.7, 942.0], [80.8, 943.0], [80.9, 945.0], [81.0, 945.0], [81.1, 945.0], [81.2, 946.0], [81.3, 946.0], [81.4, 946.0], [81.5, 947.0], [81.6, 947.0], [81.7, 947.0], [81.8, 948.0], [81.9, 948.0], [82.0, 949.0], [82.1, 949.0], [82.2, 949.0], [82.3, 949.0], [82.4, 950.0], [82.5, 950.0], [82.6, 951.0], [82.7, 951.0], [82.8, 951.0], [82.9, 952.0], [83.0, 952.0], [83.1, 953.0], [83.2, 953.0], [83.3, 954.0], [83.4, 954.0], [83.5, 954.0], [83.6, 954.0], [83.7, 955.0], [83.8, 956.0], [83.9, 956.0], [84.0, 957.0], [84.1, 957.0], [84.2, 957.0], [84.3, 958.0], [84.4, 958.0], [84.5, 959.0], [84.6, 959.0], [84.7, 960.0], [84.8, 961.0], [84.9, 961.0], [85.0, 962.0], [85.1, 962.0], [85.2, 962.0], [85.3, 963.0], [85.4, 963.0], [85.5, 964.0], [85.6, 964.0], [85.7, 964.0], [85.8, 966.0], [85.9, 966.0], [86.0, 967.0], [86.1, 968.0], [86.2, 969.0], [86.3, 969.0], [86.4, 970.0], [86.5, 970.0], [86.6, 970.0], [86.7, 971.0], [86.8, 972.0], [86.9, 972.0], [87.0, 972.0], [87.1, 973.0], [87.2, 973.0], [87.3, 973.0], [87.4, 974.0], [87.5, 974.0], [87.6, 974.0], [87.7, 974.0], [87.8, 975.0], [87.9, 975.0], [88.0, 976.0], [88.1, 977.0], [88.2, 977.0], [88.3, 977.0], [88.4, 978.0], [88.5, 980.0], [88.6, 980.0], [88.7, 980.0], [88.8, 981.0], [88.9, 981.0], [89.0, 982.0], [89.1, 982.0], [89.2, 983.0], [89.3, 984.0], [89.4, 985.0], [89.5, 985.0], [89.6, 986.0], [89.7, 986.0], [89.8, 986.0], [89.9, 987.0], [90.0, 987.0], [90.1, 988.0], [90.2, 988.0], [90.3, 989.0], [90.4, 989.0], [90.5, 990.0], [90.6, 990.0], [90.7, 992.0], [90.8, 993.0], [90.9, 993.0], [91.0, 994.0], [91.1, 994.0], [91.2, 995.0], [91.3, 995.0], [91.4, 996.0], [91.5, 997.0], [91.6, 997.0], [91.7, 997.0], [91.8, 998.0], [91.9, 999.0], [92.0, 1000.0], [92.1, 1000.0], [92.2, 1001.0], [92.3, 1001.0], [92.4, 1001.0], [92.5, 1002.0], [92.6, 1002.0], [92.7, 1003.0], [92.8, 1003.0], [92.9, 1004.0], [93.0, 1005.0], [93.1, 1005.0], [93.2, 1006.0], [93.3, 1007.0], [93.4, 1008.0], [93.5, 1009.0], [93.6, 1009.0], [93.7, 1010.0], [93.8, 1010.0], [93.9, 1010.0], [94.0, 1011.0], [94.1, 1013.0], [94.2, 1013.0], [94.3, 1013.0], [94.4, 1015.0], [94.5, 1016.0], [94.6, 1016.0], [94.7, 1017.0], [94.8, 1018.0], [94.9, 1018.0], [95.0, 1019.0], [95.1, 1019.0], [95.2, 1021.0], [95.3, 1022.0], [95.4, 1023.0], [95.5, 1023.0], [95.6, 1024.0], [95.7, 1025.0], [95.8, 1025.0], [95.9, 1026.0], [96.0, 1028.0], [96.1, 1028.0], [96.2, 1028.0], [96.3, 1029.0], [96.4, 1029.0], [96.5, 1031.0], [96.6, 1031.0], [96.7, 1032.0], [96.8, 1033.0], [96.9, 1034.0], [97.0, 1035.0], [97.1, 1036.0], [97.2, 1037.0], [97.3, 1038.0], [97.4, 1038.0], [97.5, 1039.0], [97.6, 1040.0], [97.7, 1041.0], [97.8, 1042.0], [97.9, 1043.0], [98.0, 1046.0], [98.1, 1049.0], [98.2, 1050.0], [98.3, 1052.0], [98.4, 1053.0], [98.5, 1054.0], [98.6, 1055.0], [98.7, 1058.0], [98.8, 1059.0], [98.9, 1060.0], [99.0, 1062.0], [99.1, 1064.0], [99.2, 1066.0], [99.3, 1069.0], [99.4, 1074.0], [99.5, 1076.0], [99.6, 1093.0], [99.7, 1104.0], [99.8, 1113.0], [99.9, 1121.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 747.0, "series": [{"data": [[1100.0, 12.0], [300.0, 10.0], [600.0, 588.0], [700.0, 474.0], [400.0, 105.0], [200.0, 2.0], [800.0, 735.0], [900.0, 747.0], [500.0, 508.0], [1000.0, 267.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 119.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3329.0, "series": [{"data": [[0.0, 119.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3329.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.901639344262293, "minX": 1.58180352E12, "maxY": 9.0, "series": [{"data": [[1.58180376E12, 9.0], [1.58180382E12, 8.901639344262293], [1.58180364E12, 9.0], [1.5818037E12, 9.0], [1.58180352E12, 8.954268292682926], [1.58180358E12, 9.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180382E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 416.0, "minX": 1.0, "maxY": 912.0, "series": [{"data": [[8.0, 714.0], [4.0, 466.0], [2.0, 416.0], [1.0, 449.0], [9.0, 782.5212580081545], [5.0, 912.0], [6.0, 439.5], [3.0, 448.0], [7.0, 459.75]], "isOverall": false, "label": "getProductByCategory", "isController": false}, {"data": [[8.985208816705349, 781.3747099767994]], "isOverall": false, "label": "getProductByCategory-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 9.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1084.1333333333334, "minX": 1.58180352E12, "maxY": 189365.41666666666, "series": [{"data": [[1.58180376E12, 186374.98333333334], [1.58180382E12, 99437.75], [1.58180364E12, 189365.41666666666], [1.5818037E12, 185018.58333333334], [1.58180352E12, 89108.95], [1.58180358E12, 187465.66666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58180376E12, 2267.2166666666667], [1.58180382E12, 1209.6666666666667], [1.58180364E12, 2303.5833333333335], [1.5818037E12, 2250.75], [1.58180352E12, 1084.1333333333334], [1.58180358E12, 2280.383333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180382E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 769.4945355191251, "minX": 1.58180352E12, "maxY": 790.9825072886307, "series": [{"data": [[1.58180376E12, 790.9825072886307], [1.58180382E12, 769.4945355191251], [1.58180364E12, 776.7833572453368], [1.5818037E12, 786.5903083700432], [1.58180352E12, 770.7987804878052], [1.58180358E12, 782.6420289855076]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180382E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 731.0956284153004, "minX": 1.58180352E12, "maxY": 752.5524781341113, "series": [{"data": [[1.58180376E12, 752.5524781341113], [1.58180382E12, 731.0956284153004], [1.58180364E12, 738.6470588235296], [1.5818037E12, 747.7533039647582], [1.58180352E12, 731.5396341463413], [1.58180358E12, 743.7173913043473]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180382E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 40.62568306010929, "minX": 1.58180352E12, "maxY": 42.881057268722415, "series": [{"data": [[1.58180376E12, 41.215743440233254], [1.58180382E12, 40.62568306010929], [1.58180364E12, 40.74175035868011], [1.5818037E12, 42.881057268722415], [1.58180352E12, 42.027439024390226], [1.58180358E12, 41.881159420289876]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180382E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 213.0, "minX": 1.58180352E12, "maxY": 1151.0, "series": [{"data": [[1.58180376E12, 1151.0], [1.58180382E12, 1115.0], [1.58180364E12, 1115.0], [1.5818037E12, 1139.0], [1.58180352E12, 1109.0], [1.58180358E12, 1146.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58180376E12, 389.0], [1.58180382E12, 385.0], [1.58180364E12, 381.0], [1.5818037E12, 315.0], [1.58180352E12, 213.0], [1.58180358E12, 321.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58180376E12, 998.6000000000001], [1.58180382E12, 964.3], [1.58180364E12, 981.0], [1.5818037E12, 1000.8000000000001], [1.58180352E12, 983.2], [1.58180358E12, 982.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58180376E12, 1073.26], [1.58180382E12, 1054.98], [1.58180364E12, 1065.02], [1.5818037E12, 1067.2599999999998], [1.58180352E12, 1049.3899999999999], [1.58180358E12, 1063.18]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58180376E12, 1019.0], [1.58180382E12, 1011.9499999999999], [1.58180364E12, 1016.0], [1.5818037E12, 1031.9], [1.58180352E12, 1002.55], [1.58180358E12, 1015.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180382E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 355.0, "minX": 5.0, "maxY": 891.5, "series": [{"data": [[8.0, 891.5], [16.0, 882.5], [9.0, 849.0], [10.0, 840.0], [5.0, 449.0], [11.0, 810.0], [6.0, 355.0], [12.0, 716.0], [13.0, 753.0], [14.0, 831.0], [15.0, 825.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 317.0, "minX": 5.0, "maxY": 844.0, "series": [{"data": [[8.0, 839.5], [16.0, 844.0], [9.0, 810.0], [10.0, 800.5], [5.0, 413.0], [11.0, 773.0], [6.0, 317.0], [12.0, 679.0], [13.0, 715.0], [14.0, 794.0], [15.0, 781.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.616666666666666, "minX": 1.58180352E12, "maxY": 11.616666666666667, "series": [{"data": [[1.58180376E12, 11.433333333333334], [1.58180382E12, 5.95], [1.58180364E12, 11.616666666666667], [1.5818037E12, 11.35], [1.58180352E12, 5.616666666666666], [1.58180358E12, 11.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180382E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.466666666666667, "minX": 1.58180352E12, "maxY": 11.616666666666667, "series": [{"data": [[1.58180376E12, 11.433333333333334], [1.58180382E12, 6.1], [1.58180364E12, 11.616666666666667], [1.5818037E12, 11.35], [1.58180352E12, 5.466666666666667], [1.58180358E12, 11.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180382E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.466666666666667, "minX": 1.58180352E12, "maxY": 11.616666666666667, "series": [{"data": [[1.58180376E12, 11.433333333333334], [1.58180382E12, 6.1], [1.58180364E12, 11.616666666666667], [1.5818037E12, 11.35], [1.58180352E12, 5.466666666666667], [1.58180358E12, 11.5]], "isOverall": false, "label": "getProductByCategory-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180382E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.466666666666667, "minX": 1.58180352E12, "maxY": 11.616666666666667, "series": [{"data": [[1.58180376E12, 11.433333333333334], [1.58180382E12, 6.1], [1.58180364E12, 11.616666666666667], [1.5818037E12, 11.35], [1.58180352E12, 5.466666666666667], [1.58180358E12, 11.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180382E12, "title": "Total Transactions Per Second"}},
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

