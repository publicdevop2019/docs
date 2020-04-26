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
        data: {"result": {"minY": 640.0, "minX": 0.0, "maxY": 1083.0, "series": [{"data": [[0.0, 640.0], [0.1, 640.0], [0.2, 640.0], [0.3, 640.0], [0.4, 640.0], [0.5, 640.0], [0.6, 640.0], [0.7, 655.0], [0.8, 655.0], [0.9, 655.0], [1.0, 655.0], [1.1, 655.0], [1.2, 655.0], [1.3, 655.0], [1.4, 669.0], [1.5, 669.0], [1.6, 669.0], [1.7, 669.0], [1.8, 669.0], [1.9, 669.0], [2.0, 671.0], [2.1, 671.0], [2.2, 671.0], [2.3, 671.0], [2.4, 671.0], [2.5, 671.0], [2.6, 671.0], [2.7, 673.0], [2.8, 673.0], [2.9, 673.0], [3.0, 673.0], [3.1, 673.0], [3.2, 673.0], [3.3, 675.0], [3.4, 675.0], [3.5, 675.0], [3.6, 675.0], [3.7, 675.0], [3.8, 675.0], [3.9, 675.0], [4.0, 677.0], [4.1, 677.0], [4.2, 677.0], [4.3, 677.0], [4.4, 677.0], [4.5, 677.0], [4.6, 680.0], [4.7, 680.0], [4.8, 680.0], [4.9, 680.0], [5.0, 680.0], [5.1, 680.0], [5.2, 680.0], [5.3, 680.0], [5.4, 680.0], [5.5, 680.0], [5.6, 680.0], [5.7, 680.0], [5.8, 680.0], [5.9, 682.0], [6.0, 682.0], [6.1, 682.0], [6.2, 682.0], [6.3, 682.0], [6.4, 682.0], [6.5, 682.0], [6.6, 692.0], [6.7, 692.0], [6.8, 692.0], [6.9, 692.0], [7.0, 692.0], [7.1, 692.0], [7.2, 693.0], [7.3, 693.0], [7.4, 693.0], [7.5, 693.0], [7.6, 693.0], [7.7, 693.0], [7.8, 693.0], [7.9, 694.0], [8.0, 694.0], [8.1, 694.0], [8.2, 694.0], [8.3, 694.0], [8.4, 694.0], [8.5, 700.0], [8.6, 700.0], [8.7, 700.0], [8.8, 700.0], [8.9, 700.0], [9.0, 700.0], [9.1, 700.0], [9.2, 701.0], [9.3, 701.0], [9.4, 701.0], [9.5, 701.0], [9.6, 701.0], [9.7, 701.0], [9.8, 701.0], [9.9, 701.0], [10.0, 701.0], [10.1, 701.0], [10.2, 701.0], [10.3, 701.0], [10.4, 701.0], [10.5, 702.0], [10.6, 702.0], [10.7, 702.0], [10.8, 702.0], [10.9, 702.0], [11.0, 702.0], [11.1, 702.0], [11.2, 702.0], [11.3, 702.0], [11.4, 702.0], [11.5, 702.0], [11.6, 702.0], [11.7, 702.0], [11.8, 705.0], [11.9, 705.0], [12.0, 705.0], [12.1, 705.0], [12.2, 705.0], [12.3, 705.0], [12.4, 705.0], [12.5, 705.0], [12.6, 705.0], [12.7, 705.0], [12.8, 705.0], [12.9, 705.0], [13.0, 705.0], [13.1, 706.0], [13.2, 706.0], [13.3, 706.0], [13.4, 706.0], [13.5, 706.0], [13.6, 706.0], [13.7, 706.0], [13.8, 713.0], [13.9, 713.0], [14.0, 713.0], [14.1, 713.0], [14.2, 713.0], [14.3, 713.0], [14.4, 718.0], [14.5, 718.0], [14.6, 718.0], [14.7, 718.0], [14.8, 718.0], [14.9, 718.0], [15.0, 718.0], [15.1, 718.0], [15.2, 718.0], [15.3, 718.0], [15.4, 718.0], [15.5, 718.0], [15.6, 718.0], [15.7, 718.0], [15.8, 718.0], [15.9, 718.0], [16.0, 718.0], [16.1, 718.0], [16.2, 718.0], [16.3, 718.0], [16.4, 718.0], [16.5, 718.0], [16.6, 718.0], [16.7, 718.0], [16.8, 718.0], [16.9, 718.0], [17.0, 720.0], [17.1, 720.0], [17.2, 720.0], [17.3, 720.0], [17.4, 720.0], [17.5, 720.0], [17.6, 720.0], [17.7, 721.0], [17.8, 721.0], [17.9, 721.0], [18.0, 721.0], [18.1, 721.0], [18.2, 721.0], [18.3, 721.0], [18.4, 724.0], [18.5, 724.0], [18.6, 724.0], [18.7, 724.0], [18.8, 724.0], [18.9, 724.0], [19.0, 725.0], [19.1, 725.0], [19.2, 725.0], [19.3, 725.0], [19.4, 725.0], [19.5, 725.0], [19.6, 725.0], [19.7, 726.0], [19.8, 726.0], [19.9, 726.0], [20.0, 726.0], [20.1, 726.0], [20.2, 726.0], [20.3, 726.0], [20.4, 726.0], [20.5, 726.0], [20.6, 726.0], [20.7, 726.0], [20.8, 726.0], [20.9, 726.0], [21.0, 727.0], [21.1, 727.0], [21.2, 727.0], [21.3, 727.0], [21.4, 727.0], [21.5, 727.0], [21.6, 727.0], [21.7, 727.0], [21.8, 727.0], [21.9, 727.0], [22.0, 727.0], [22.1, 727.0], [22.2, 727.0], [22.3, 731.0], [22.4, 731.0], [22.5, 731.0], [22.6, 731.0], [22.7, 731.0], [22.8, 731.0], [22.9, 731.0], [23.0, 731.0], [23.1, 731.0], [23.2, 731.0], [23.3, 731.0], [23.4, 731.0], [23.5, 731.0], [23.6, 735.0], [23.7, 735.0], [23.8, 735.0], [23.9, 735.0], [24.0, 735.0], [24.1, 735.0], [24.2, 735.0], [24.3, 735.0], [24.4, 735.0], [24.5, 735.0], [24.6, 735.0], [24.7, 735.0], [24.8, 735.0], [24.9, 735.0], [25.0, 735.0], [25.1, 735.0], [25.2, 735.0], [25.3, 735.0], [25.4, 735.0], [25.5, 736.0], [25.6, 736.0], [25.7, 736.0], [25.8, 736.0], [25.9, 736.0], [26.0, 736.0], [26.1, 736.0], [26.2, 736.0], [26.3, 736.0], [26.4, 736.0], [26.5, 736.0], [26.6, 736.0], [26.7, 736.0], [26.8, 736.0], [26.9, 736.0], [27.0, 736.0], [27.1, 736.0], [27.2, 736.0], [27.3, 736.0], [27.4, 736.0], [27.5, 739.0], [27.6, 739.0], [27.7, 739.0], [27.8, 739.0], [27.9, 739.0], [28.0, 739.0], [28.1, 739.0], [28.2, 740.0], [28.3, 740.0], [28.4, 740.0], [28.5, 740.0], [28.6, 740.0], [28.7, 740.0], [28.8, 741.0], [28.9, 741.0], [29.0, 741.0], [29.1, 741.0], [29.2, 741.0], [29.3, 741.0], [29.4, 741.0], [29.5, 742.0], [29.6, 742.0], [29.7, 742.0], [29.8, 742.0], [29.9, 742.0], [30.0, 742.0], [30.1, 745.0], [30.2, 745.0], [30.3, 745.0], [30.4, 745.0], [30.5, 745.0], [30.6, 745.0], [30.7, 745.0], [30.8, 745.0], [30.9, 745.0], [31.0, 745.0], [31.1, 745.0], [31.2, 745.0], [31.3, 745.0], [31.4, 747.0], [31.5, 747.0], [31.6, 747.0], [31.7, 747.0], [31.8, 747.0], [31.9, 747.0], [32.0, 747.0], [32.1, 748.0], [32.2, 748.0], [32.3, 748.0], [32.4, 748.0], [32.5, 748.0], [32.6, 748.0], [32.7, 748.0], [32.8, 748.0], [32.9, 748.0], [33.0, 748.0], [33.1, 748.0], [33.2, 748.0], [33.3, 748.0], [33.4, 750.0], [33.5, 750.0], [33.6, 750.0], [33.7, 750.0], [33.8, 750.0], [33.9, 750.0], [34.0, 751.0], [34.1, 751.0], [34.2, 751.0], [34.3, 751.0], [34.4, 751.0], [34.5, 751.0], [34.6, 751.0], [34.7, 751.0], [34.8, 751.0], [34.9, 751.0], [35.0, 751.0], [35.1, 751.0], [35.2, 751.0], [35.3, 752.0], [35.4, 752.0], [35.5, 752.0], [35.6, 752.0], [35.7, 752.0], [35.8, 752.0], [35.9, 752.0], [36.0, 753.0], [36.1, 753.0], [36.2, 753.0], [36.3, 753.0], [36.4, 753.0], [36.5, 753.0], [36.6, 753.0], [36.7, 753.0], [36.8, 753.0], [36.9, 753.0], [37.0, 753.0], [37.1, 753.0], [37.2, 753.0], [37.3, 755.0], [37.4, 755.0], [37.5, 755.0], [37.6, 755.0], [37.7, 755.0], [37.8, 755.0], [37.9, 755.0], [38.0, 758.0], [38.1, 758.0], [38.2, 758.0], [38.3, 758.0], [38.4, 758.0], [38.5, 758.0], [38.6, 758.0], [38.7, 758.0], [38.8, 758.0], [38.9, 758.0], [39.0, 758.0], [39.1, 758.0], [39.2, 758.0], [39.3, 758.0], [39.4, 758.0], [39.5, 758.0], [39.6, 758.0], [39.7, 758.0], [39.8, 758.0], [39.9, 759.0], [40.0, 759.0], [40.1, 759.0], [40.2, 759.0], [40.3, 759.0], [40.4, 759.0], [40.5, 759.0], [40.6, 760.0], [40.7, 760.0], [40.8, 760.0], [40.9, 760.0], [41.0, 760.0], [41.1, 760.0], [41.2, 760.0], [41.3, 760.0], [41.4, 760.0], [41.5, 760.0], [41.6, 760.0], [41.7, 760.0], [41.8, 760.0], [41.9, 760.0], [42.0, 760.0], [42.1, 760.0], [42.2, 760.0], [42.3, 760.0], [42.4, 760.0], [42.5, 761.0], [42.6, 761.0], [42.7, 761.0], [42.8, 761.0], [42.9, 761.0], [43.0, 761.0], [43.1, 761.0], [43.2, 763.0], [43.3, 763.0], [43.4, 763.0], [43.5, 763.0], [43.6, 763.0], [43.7, 763.0], [43.8, 763.0], [43.9, 763.0], [44.0, 763.0], [44.1, 763.0], [44.2, 763.0], [44.3, 763.0], [44.4, 763.0], [44.5, 764.0], [44.6, 764.0], [44.7, 764.0], [44.8, 764.0], [44.9, 764.0], [45.0, 764.0], [45.1, 765.0], [45.2, 765.0], [45.3, 765.0], [45.4, 765.0], [45.5, 765.0], [45.6, 765.0], [45.7, 765.0], [45.8, 765.0], [45.9, 765.0], [46.0, 765.0], [46.1, 765.0], [46.2, 765.0], [46.3, 765.0], [46.4, 765.0], [46.5, 766.0], [46.6, 766.0], [46.7, 766.0], [46.8, 766.0], [46.9, 766.0], [47.0, 766.0], [47.1, 771.0], [47.2, 771.0], [47.3, 771.0], [47.4, 771.0], [47.5, 771.0], [47.6, 771.0], [47.7, 771.0], [47.8, 772.0], [47.9, 772.0], [48.0, 772.0], [48.1, 772.0], [48.2, 772.0], [48.3, 772.0], [48.4, 772.0], [48.5, 772.0], [48.6, 772.0], [48.7, 772.0], [48.8, 772.0], [48.9, 772.0], [49.0, 772.0], [49.1, 773.0], [49.2, 773.0], [49.3, 773.0], [49.4, 773.0], [49.5, 773.0], [49.6, 773.0], [49.7, 774.0], [49.8, 774.0], [49.9, 774.0], [50.0, 774.0], [50.1, 774.0], [50.2, 774.0], [50.3, 774.0], [50.4, 774.0], [50.5, 774.0], [50.6, 774.0], [50.7, 774.0], [50.8, 774.0], [50.9, 774.0], [51.0, 776.0], [51.1, 776.0], [51.2, 776.0], [51.3, 776.0], [51.4, 776.0], [51.5, 776.0], [51.6, 776.0], [51.7, 778.0], [51.8, 778.0], [51.9, 778.0], [52.0, 778.0], [52.1, 778.0], [52.2, 778.0], [52.3, 778.0], [52.4, 778.0], [52.5, 778.0], [52.6, 778.0], [52.7, 778.0], [52.8, 778.0], [52.9, 778.0], [53.0, 779.0], [53.1, 779.0], [53.2, 779.0], [53.3, 779.0], [53.4, 779.0], [53.5, 779.0], [53.6, 779.0], [53.7, 779.0], [53.8, 779.0], [53.9, 779.0], [54.0, 779.0], [54.1, 779.0], [54.2, 779.0], [54.3, 779.0], [54.4, 779.0], [54.5, 779.0], [54.6, 779.0], [54.7, 779.0], [54.8, 779.0], [54.9, 779.0], [55.0, 782.0], [55.1, 782.0], [55.2, 782.0], [55.3, 782.0], [55.4, 782.0], [55.5, 782.0], [55.6, 782.0], [55.7, 782.0], [55.8, 782.0], [55.9, 782.0], [56.0, 782.0], [56.1, 782.0], [56.2, 782.0], [56.3, 783.0], [56.4, 783.0], [56.5, 783.0], [56.6, 783.0], [56.7, 783.0], [56.8, 783.0], [56.9, 783.0], [57.0, 783.0], [57.1, 783.0], [57.2, 783.0], [57.3, 783.0], [57.4, 783.0], [57.5, 783.0], [57.6, 784.0], [57.7, 784.0], [57.8, 784.0], [57.9, 784.0], [58.0, 784.0], [58.1, 784.0], [58.2, 785.0], [58.3, 785.0], [58.4, 785.0], [58.5, 785.0], [58.6, 785.0], [58.7, 785.0], [58.8, 785.0], [58.9, 786.0], [59.0, 786.0], [59.1, 786.0], [59.2, 786.0], [59.3, 786.0], [59.4, 786.0], [59.5, 786.0], [59.6, 786.0], [59.7, 786.0], [59.8, 786.0], [59.9, 786.0], [60.0, 786.0], [60.1, 786.0], [60.2, 788.0], [60.3, 788.0], [60.4, 788.0], [60.5, 788.0], [60.6, 788.0], [60.7, 788.0], [60.8, 790.0], [60.9, 790.0], [61.0, 790.0], [61.1, 790.0], [61.2, 790.0], [61.3, 790.0], [61.4, 790.0], [61.5, 793.0], [61.6, 793.0], [61.7, 793.0], [61.8, 793.0], [61.9, 793.0], [62.0, 793.0], [62.1, 794.0], [62.2, 794.0], [62.3, 794.0], [62.4, 794.0], [62.5, 794.0], [62.6, 794.0], [62.7, 794.0], [62.8, 794.0], [62.9, 794.0], [63.0, 794.0], [63.1, 794.0], [63.2, 794.0], [63.3, 794.0], [63.4, 795.0], [63.5, 795.0], [63.6, 795.0], [63.7, 795.0], [63.8, 795.0], [63.9, 795.0], [64.0, 795.0], [64.1, 795.0], [64.2, 795.0], [64.3, 795.0], [64.4, 795.0], [64.5, 795.0], [64.6, 795.0], [64.7, 795.0], [64.8, 796.0], [64.9, 796.0], [65.0, 796.0], [65.1, 796.0], [65.2, 796.0], [65.3, 796.0], [65.4, 796.0], [65.5, 796.0], [65.6, 796.0], [65.7, 796.0], [65.8, 796.0], [65.9, 796.0], [66.0, 796.0], [66.1, 796.0], [66.2, 796.0], [66.3, 796.0], [66.4, 796.0], [66.5, 796.0], [66.6, 796.0], [66.7, 797.0], [66.8, 797.0], [66.9, 797.0], [67.0, 797.0], [67.1, 797.0], [67.2, 797.0], [67.3, 797.0], [67.4, 798.0], [67.5, 798.0], [67.6, 798.0], [67.7, 798.0], [67.8, 798.0], [67.9, 798.0], [68.0, 798.0], [68.1, 798.0], [68.2, 798.0], [68.3, 798.0], [68.4, 798.0], [68.5, 798.0], [68.6, 798.0], [68.7, 799.0], [68.8, 799.0], [68.9, 799.0], [69.0, 799.0], [69.1, 799.0], [69.2, 799.0], [69.3, 799.0], [69.4, 799.0], [69.5, 799.0], [69.6, 799.0], [69.7, 799.0], [69.8, 799.0], [69.9, 799.0], [70.0, 799.0], [70.1, 799.0], [70.2, 799.0], [70.3, 799.0], [70.4, 799.0], [70.5, 799.0], [70.6, 801.0], [70.7, 801.0], [70.8, 801.0], [70.9, 801.0], [71.0, 801.0], [71.1, 801.0], [71.2, 801.0], [71.3, 802.0], [71.4, 802.0], [71.5, 802.0], [71.6, 802.0], [71.7, 802.0], [71.8, 802.0], [71.9, 802.0], [72.0, 802.0], [72.1, 802.0], [72.2, 802.0], [72.3, 802.0], [72.4, 802.0], [72.5, 802.0], [72.6, 802.0], [72.7, 802.0], [72.8, 802.0], [72.9, 802.0], [73.0, 802.0], [73.1, 802.0], [73.2, 802.0], [73.3, 803.0], [73.4, 803.0], [73.5, 803.0], [73.6, 803.0], [73.7, 803.0], [73.8, 803.0], [73.9, 808.0], [74.0, 808.0], [74.1, 808.0], [74.2, 808.0], [74.3, 808.0], [74.4, 808.0], [74.5, 808.0], [74.6, 809.0], [74.7, 809.0], [74.8, 809.0], [74.9, 809.0], [75.0, 809.0], [75.1, 809.0], [75.2, 812.0], [75.3, 812.0], [75.4, 812.0], [75.5, 812.0], [75.6, 812.0], [75.7, 812.0], [75.8, 812.0], [75.9, 813.0], [76.0, 813.0], [76.1, 813.0], [76.2, 813.0], [76.3, 813.0], [76.4, 813.0], [76.5, 813.0], [76.6, 813.0], [76.7, 813.0], [76.8, 813.0], [76.9, 813.0], [77.0, 813.0], [77.1, 813.0], [77.2, 818.0], [77.3, 818.0], [77.4, 818.0], [77.5, 818.0], [77.6, 818.0], [77.7, 818.0], [77.8, 822.0], [77.9, 822.0], [78.0, 822.0], [78.1, 822.0], [78.2, 822.0], [78.3, 822.0], [78.4, 822.0], [78.5, 824.0], [78.6, 824.0], [78.7, 824.0], [78.8, 824.0], [78.9, 824.0], [79.0, 824.0], [79.1, 825.0], [79.2, 825.0], [79.3, 825.0], [79.4, 825.0], [79.5, 825.0], [79.6, 825.0], [79.7, 825.0], [79.8, 826.0], [79.9, 826.0], [80.0, 826.0], [80.1, 826.0], [80.2, 826.0], [80.3, 826.0], [80.4, 827.0], [80.5, 827.0], [80.6, 827.0], [80.7, 827.0], [80.8, 827.0], [80.9, 827.0], [81.0, 827.0], [81.1, 827.0], [81.2, 827.0], [81.3, 827.0], [81.4, 827.0], [81.5, 827.0], [81.6, 827.0], [81.7, 829.0], [81.8, 829.0], [81.9, 829.0], [82.0, 829.0], [82.1, 829.0], [82.2, 829.0], [82.3, 829.0], [82.4, 831.0], [82.5, 831.0], [82.6, 831.0], [82.7, 831.0], [82.8, 831.0], [82.9, 831.0], [83.0, 831.0], [83.1, 833.0], [83.2, 833.0], [83.3, 833.0], [83.4, 833.0], [83.5, 833.0], [83.6, 833.0], [83.7, 838.0], [83.8, 838.0], [83.9, 838.0], [84.0, 838.0], [84.1, 838.0], [84.2, 838.0], [84.3, 838.0], [84.4, 838.0], [84.5, 838.0], [84.6, 838.0], [84.7, 838.0], [84.8, 838.0], [84.9, 838.0], [85.0, 841.0], [85.1, 841.0], [85.2, 841.0], [85.3, 841.0], [85.4, 841.0], [85.5, 841.0], [85.6, 841.0], [85.7, 849.0], [85.8, 849.0], [85.9, 849.0], [86.0, 849.0], [86.1, 849.0], [86.2, 849.0], [86.3, 851.0], [86.4, 851.0], [86.5, 851.0], [86.6, 851.0], [86.7, 851.0], [86.8, 851.0], [86.9, 851.0], [87.0, 855.0], [87.1, 855.0], [87.2, 855.0], [87.3, 855.0], [87.4, 855.0], [87.5, 855.0], [87.6, 855.0], [87.7, 855.0], [87.8, 855.0], [87.9, 855.0], [88.0, 855.0], [88.1, 855.0], [88.2, 855.0], [88.3, 857.0], [88.4, 857.0], [88.5, 857.0], [88.6, 857.0], [88.7, 857.0], [88.8, 857.0], [88.9, 857.0], [89.0, 857.0], [89.1, 857.0], [89.2, 857.0], [89.3, 857.0], [89.4, 857.0], [89.5, 857.0], [89.6, 857.0], [89.7, 857.0], [89.8, 857.0], [89.9, 857.0], [90.0, 857.0], [90.1, 857.0], [90.2, 857.0], [90.3, 857.0], [90.4, 857.0], [90.5, 857.0], [90.6, 857.0], [90.7, 857.0], [90.8, 857.0], [90.9, 860.0], [91.0, 860.0], [91.1, 860.0], [91.2, 860.0], [91.3, 860.0], [91.4, 860.0], [91.5, 860.0], [91.6, 863.0], [91.7, 863.0], [91.8, 863.0], [91.9, 863.0], [92.0, 863.0], [92.1, 863.0], [92.2, 865.0], [92.3, 865.0], [92.4, 865.0], [92.5, 865.0], [92.6, 865.0], [92.7, 865.0], [92.8, 865.0], [92.9, 872.0], [93.0, 872.0], [93.1, 872.0], [93.2, 872.0], [93.3, 872.0], [93.4, 872.0], [93.5, 873.0], [93.6, 873.0], [93.7, 873.0], [93.8, 873.0], [93.9, 873.0], [94.0, 873.0], [94.1, 873.0], [94.2, 877.0], [94.3, 877.0], [94.4, 877.0], [94.5, 877.0], [94.6, 877.0], [94.7, 877.0], [94.8, 901.0], [94.9, 901.0], [95.0, 901.0], [95.1, 901.0], [95.2, 901.0], [95.3, 901.0], [95.4, 901.0], [95.5, 921.0], [95.6, 921.0], [95.7, 921.0], [95.8, 921.0], [95.9, 921.0], [96.0, 921.0], [96.1, 921.0], [96.2, 921.0], [96.3, 921.0], [96.4, 921.0], [96.5, 921.0], [96.6, 921.0], [96.7, 921.0], [96.8, 943.0], [96.9, 943.0], [97.0, 943.0], [97.1, 943.0], [97.2, 943.0], [97.3, 943.0], [97.4, 957.0], [97.5, 957.0], [97.6, 957.0], [97.7, 957.0], [97.8, 957.0], [97.9, 957.0], [98.0, 957.0], [98.1, 980.0], [98.2, 980.0], [98.3, 980.0], [98.4, 980.0], [98.5, 980.0], [98.6, 980.0], [98.7, 988.0], [98.8, 988.0], [98.9, 988.0], [99.0, 988.0], [99.1, 988.0], [99.2, 988.0], [99.3, 988.0], [99.4, 1083.0], [99.5, 1083.0], [99.6, 1083.0], [99.7, 1083.0], [99.8, 1083.0], [99.9, 1083.0]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 600.0, "maxY": 95.0, "series": [{"data": [[600.0, 13.0], [700.0, 95.0], [800.0, 37.0], [900.0, 7.0], [1000.0, 1.0]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 153.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 153.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 153.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.875, "minX": 1.58243154E12, "maxY": 2.0, "series": [{"data": [[1.58243154E12, 2.0], [1.5824316E12, 1.875]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5824316E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 718.0, "minX": 1.0, "maxY": 779.2763157894736, "series": [{"data": [[2.0, 779.2763157894736], [1.0, 718.0]], "isOverall": false, "label": "downloaddFile", "isController": false}, {"data": [[1.9934640522875817, 778.875816993464]], "isOverall": false, "label": "downloaddFile-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 2.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22.8, "minX": 1.58243154E12, "maxY": 2319404.1166666667, "series": [{"data": [[1.58243154E12, 2319404.1166666667], [1.5824316E12, 127985.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58243154E12, 413.25], [1.5824316E12, 22.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5824316E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 774.2206896551725, "minX": 1.58243154E12, "maxY": 863.25, "series": [{"data": [[1.58243154E12, 774.2206896551725], [1.5824316E12, 863.25]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5824316E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 86.87499999999999, "minX": 1.58243154E12, "maxY": 92.06206896551728, "series": [{"data": [[1.58243154E12, 92.06206896551728], [1.5824316E12, 86.87499999999999]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5824316E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.58243154E12, "maxY": 42.800000000000004, "series": [{"data": [[1.58243154E12, 42.800000000000004], [1.5824316E12, 40.0]], "isOverall": false, "label": "downloaddFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5824316E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 640.0, "minX": 1.58243154E12, "maxY": 1083.0, "series": [{"data": [[1.58243154E12, 988.0], [1.5824316E12, 1083.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58243154E12, 640.0], [1.5824316E12, 718.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58243154E12, 857.0], [1.5824316E12, 1083.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58243154E12, 973.7399999999998], [1.5824316E12, 1083.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58243154E12, 872.7], [1.5824316E12, 1083.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5824316E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 706.0, "minX": 1.0, "maxY": 787.0, "series": [{"data": [[1.0, 706.0], [2.0, 787.0], [4.0, 777.0], [3.0, 752.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 89.0, "minX": 1.0, "maxY": 107.5, "series": [{"data": [[1.0, 107.5], [2.0, 89.0], [4.0, 92.5], [3.0, 91.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.1, "minX": 1.58243154E12, "maxY": 2.45, "series": [{"data": [[1.58243154E12, 2.45], [1.5824316E12, 0.1]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5824316E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.58243154E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.58243154E12, 2.4166666666666665], [1.5824316E12, 0.13333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5824316E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.58243154E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.58243154E12, 2.4166666666666665], [1.5824316E12, 0.13333333333333333]], "isOverall": false, "label": "downloaddFile-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5824316E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.58243154E12, "maxY": 2.4166666666666665, "series": [{"data": [[1.58243154E12, 2.4166666666666665], [1.5824316E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5824316E12, "title": "Total Transactions Per Second"}},
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

