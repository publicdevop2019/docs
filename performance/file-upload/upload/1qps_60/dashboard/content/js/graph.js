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
        data: {"result": {"minY": 667.0, "minX": 0.0, "maxY": 966.0, "series": [{"data": [[0.0, 667.0], [0.1, 667.0], [0.2, 667.0], [0.3, 667.0], [0.4, 667.0], [0.5, 667.0], [0.6, 667.0], [0.7, 667.0], [0.8, 667.0], [0.9, 667.0], [1.0, 667.0], [1.1, 667.0], [1.2, 667.0], [1.3, 667.0], [1.4, 671.0], [1.5, 671.0], [1.6, 671.0], [1.7, 671.0], [1.8, 671.0], [1.9, 671.0], [2.0, 671.0], [2.1, 671.0], [2.2, 671.0], [2.3, 671.0], [2.4, 671.0], [2.5, 671.0], [2.6, 671.0], [2.7, 686.0], [2.8, 686.0], [2.9, 686.0], [3.0, 686.0], [3.1, 686.0], [3.2, 686.0], [3.3, 686.0], [3.4, 686.0], [3.5, 686.0], [3.6, 686.0], [3.7, 686.0], [3.8, 686.0], [3.9, 686.0], [4.0, 689.0], [4.1, 689.0], [4.2, 689.0], [4.3, 689.0], [4.4, 689.0], [4.5, 689.0], [4.6, 689.0], [4.7, 689.0], [4.8, 689.0], [4.9, 689.0], [5.0, 689.0], [5.1, 689.0], [5.2, 689.0], [5.3, 699.0], [5.4, 699.0], [5.5, 699.0], [5.6, 699.0], [5.7, 699.0], [5.8, 699.0], [5.9, 699.0], [6.0, 699.0], [6.1, 699.0], [6.2, 699.0], [6.3, 699.0], [6.4, 699.0], [6.5, 699.0], [6.6, 700.0], [6.7, 700.0], [6.8, 700.0], [6.9, 700.0], [7.0, 700.0], [7.1, 700.0], [7.2, 700.0], [7.3, 700.0], [7.4, 700.0], [7.5, 700.0], [7.6, 700.0], [7.7, 700.0], [7.8, 700.0], [7.9, 710.0], [8.0, 710.0], [8.1, 710.0], [8.2, 710.0], [8.3, 710.0], [8.4, 710.0], [8.5, 710.0], [8.6, 710.0], [8.7, 710.0], [8.8, 710.0], [8.9, 710.0], [9.0, 710.0], [9.1, 710.0], [9.2, 710.0], [9.3, 711.0], [9.4, 711.0], [9.5, 711.0], [9.6, 711.0], [9.7, 711.0], [9.8, 711.0], [9.9, 711.0], [10.0, 711.0], [10.1, 711.0], [10.2, 711.0], [10.3, 711.0], [10.4, 711.0], [10.5, 711.0], [10.6, 718.0], [10.7, 718.0], [10.8, 718.0], [10.9, 718.0], [11.0, 718.0], [11.1, 718.0], [11.2, 718.0], [11.3, 718.0], [11.4, 718.0], [11.5, 718.0], [11.6, 718.0], [11.7, 718.0], [11.8, 718.0], [11.9, 721.0], [12.0, 721.0], [12.1, 721.0], [12.2, 721.0], [12.3, 721.0], [12.4, 721.0], [12.5, 721.0], [12.6, 721.0], [12.7, 721.0], [12.8, 721.0], [12.9, 721.0], [13.0, 721.0], [13.1, 721.0], [13.2, 726.0], [13.3, 726.0], [13.4, 726.0], [13.5, 726.0], [13.6, 726.0], [13.7, 726.0], [13.8, 726.0], [13.9, 726.0], [14.0, 726.0], [14.1, 726.0], [14.2, 726.0], [14.3, 726.0], [14.4, 726.0], [14.5, 727.0], [14.6, 727.0], [14.7, 727.0], [14.8, 727.0], [14.9, 727.0], [15.0, 727.0], [15.1, 727.0], [15.2, 727.0], [15.3, 727.0], [15.4, 727.0], [15.5, 727.0], [15.6, 727.0], [15.7, 727.0], [15.8, 727.0], [15.9, 727.0], [16.0, 727.0], [16.1, 727.0], [16.2, 727.0], [16.3, 727.0], [16.4, 727.0], [16.5, 727.0], [16.6, 727.0], [16.7, 727.0], [16.8, 727.0], [16.9, 727.0], [17.0, 727.0], [17.1, 727.0], [17.2, 735.0], [17.3, 735.0], [17.4, 735.0], [17.5, 735.0], [17.6, 735.0], [17.7, 735.0], [17.8, 735.0], [17.9, 735.0], [18.0, 735.0], [18.1, 735.0], [18.2, 735.0], [18.3, 735.0], [18.4, 735.0], [18.5, 736.0], [18.6, 736.0], [18.7, 736.0], [18.8, 736.0], [18.9, 736.0], [19.0, 736.0], [19.1, 736.0], [19.2, 736.0], [19.3, 736.0], [19.4, 736.0], [19.5, 736.0], [19.6, 736.0], [19.7, 736.0], [19.8, 737.0], [19.9, 737.0], [20.0, 737.0], [20.1, 737.0], [20.2, 737.0], [20.3, 737.0], [20.4, 737.0], [20.5, 737.0], [20.6, 737.0], [20.7, 737.0], [20.8, 737.0], [20.9, 737.0], [21.0, 737.0], [21.1, 739.0], [21.2, 739.0], [21.3, 739.0], [21.4, 739.0], [21.5, 739.0], [21.6, 739.0], [21.7, 739.0], [21.8, 739.0], [21.9, 739.0], [22.0, 739.0], [22.1, 739.0], [22.2, 739.0], [22.3, 739.0], [22.4, 740.0], [22.5, 740.0], [22.6, 740.0], [22.7, 740.0], [22.8, 740.0], [22.9, 740.0], [23.0, 740.0], [23.1, 740.0], [23.2, 740.0], [23.3, 740.0], [23.4, 740.0], [23.5, 740.0], [23.6, 740.0], [23.7, 742.0], [23.8, 742.0], [23.9, 742.0], [24.0, 742.0], [24.1, 742.0], [24.2, 742.0], [24.3, 742.0], [24.4, 742.0], [24.5, 742.0], [24.6, 742.0], [24.7, 742.0], [24.8, 742.0], [24.9, 742.0], [25.0, 742.0], [25.1, 743.0], [25.2, 743.0], [25.3, 743.0], [25.4, 743.0], [25.5, 743.0], [25.6, 743.0], [25.7, 743.0], [25.8, 743.0], [25.9, 743.0], [26.0, 743.0], [26.1, 743.0], [26.2, 743.0], [26.3, 743.0], [26.4, 743.0], [26.5, 743.0], [26.6, 743.0], [26.7, 743.0], [26.8, 743.0], [26.9, 743.0], [27.0, 743.0], [27.1, 743.0], [27.2, 743.0], [27.3, 743.0], [27.4, 743.0], [27.5, 743.0], [27.6, 743.0], [27.7, 746.0], [27.8, 746.0], [27.9, 746.0], [28.0, 746.0], [28.1, 746.0], [28.2, 746.0], [28.3, 746.0], [28.4, 746.0], [28.5, 746.0], [28.6, 746.0], [28.7, 746.0], [28.8, 746.0], [28.9, 746.0], [29.0, 748.0], [29.1, 748.0], [29.2, 748.0], [29.3, 748.0], [29.4, 748.0], [29.5, 748.0], [29.6, 748.0], [29.7, 748.0], [29.8, 748.0], [29.9, 748.0], [30.0, 748.0], [30.1, 748.0], [30.2, 748.0], [30.3, 749.0], [30.4, 749.0], [30.5, 749.0], [30.6, 749.0], [30.7, 749.0], [30.8, 749.0], [30.9, 749.0], [31.0, 749.0], [31.1, 749.0], [31.2, 749.0], [31.3, 749.0], [31.4, 749.0], [31.5, 749.0], [31.6, 751.0], [31.7, 751.0], [31.8, 751.0], [31.9, 751.0], [32.0, 751.0], [32.1, 751.0], [32.2, 751.0], [32.3, 751.0], [32.4, 751.0], [32.5, 751.0], [32.6, 751.0], [32.7, 751.0], [32.8, 751.0], [32.9, 753.0], [33.0, 753.0], [33.1, 753.0], [33.2, 753.0], [33.3, 753.0], [33.4, 753.0], [33.5, 753.0], [33.6, 753.0], [33.7, 753.0], [33.8, 753.0], [33.9, 753.0], [34.0, 753.0], [34.1, 753.0], [34.2, 753.0], [34.3, 754.0], [34.4, 754.0], [34.5, 754.0], [34.6, 754.0], [34.7, 754.0], [34.8, 754.0], [34.9, 754.0], [35.0, 754.0], [35.1, 754.0], [35.2, 754.0], [35.3, 754.0], [35.4, 754.0], [35.5, 754.0], [35.6, 754.0], [35.7, 754.0], [35.8, 754.0], [35.9, 754.0], [36.0, 754.0], [36.1, 754.0], [36.2, 754.0], [36.3, 754.0], [36.4, 754.0], [36.5, 754.0], [36.6, 754.0], [36.7, 754.0], [36.8, 754.0], [36.9, 757.0], [37.0, 757.0], [37.1, 757.0], [37.2, 757.0], [37.3, 757.0], [37.4, 757.0], [37.5, 757.0], [37.6, 757.0], [37.7, 757.0], [37.8, 757.0], [37.9, 757.0], [38.0, 757.0], [38.1, 757.0], [38.2, 758.0], [38.3, 758.0], [38.4, 758.0], [38.5, 758.0], [38.6, 758.0], [38.7, 758.0], [38.8, 758.0], [38.9, 758.0], [39.0, 758.0], [39.1, 758.0], [39.2, 758.0], [39.3, 758.0], [39.4, 758.0], [39.5, 760.0], [39.6, 760.0], [39.7, 760.0], [39.8, 760.0], [39.9, 760.0], [40.0, 760.0], [40.1, 760.0], [40.2, 760.0], [40.3, 760.0], [40.4, 760.0], [40.5, 760.0], [40.6, 760.0], [40.7, 760.0], [40.8, 763.0], [40.9, 763.0], [41.0, 763.0], [41.1, 763.0], [41.2, 763.0], [41.3, 763.0], [41.4, 763.0], [41.5, 763.0], [41.6, 763.0], [41.7, 763.0], [41.8, 763.0], [41.9, 763.0], [42.0, 763.0], [42.1, 763.0], [42.2, 764.0], [42.3, 764.0], [42.4, 764.0], [42.5, 764.0], [42.6, 764.0], [42.7, 764.0], [42.8, 764.0], [42.9, 764.0], [43.0, 764.0], [43.1, 764.0], [43.2, 764.0], [43.3, 764.0], [43.4, 764.0], [43.5, 766.0], [43.6, 766.0], [43.7, 766.0], [43.8, 766.0], [43.9, 766.0], [44.0, 766.0], [44.1, 766.0], [44.2, 766.0], [44.3, 766.0], [44.4, 766.0], [44.5, 766.0], [44.6, 766.0], [44.7, 766.0], [44.8, 767.0], [44.9, 767.0], [45.0, 767.0], [45.1, 767.0], [45.2, 767.0], [45.3, 767.0], [45.4, 767.0], [45.5, 767.0], [45.6, 767.0], [45.7, 767.0], [45.8, 767.0], [45.9, 767.0], [46.0, 767.0], [46.1, 768.0], [46.2, 768.0], [46.3, 768.0], [46.4, 768.0], [46.5, 768.0], [46.6, 768.0], [46.7, 768.0], [46.8, 768.0], [46.9, 768.0], [47.0, 768.0], [47.1, 768.0], [47.2, 768.0], [47.3, 768.0], [47.4, 772.0], [47.5, 772.0], [47.6, 772.0], [47.7, 772.0], [47.8, 772.0], [47.9, 772.0], [48.0, 772.0], [48.1, 772.0], [48.2, 772.0], [48.3, 772.0], [48.4, 772.0], [48.5, 772.0], [48.6, 772.0], [48.7, 776.0], [48.8, 776.0], [48.9, 776.0], [49.0, 776.0], [49.1, 776.0], [49.2, 776.0], [49.3, 776.0], [49.4, 776.0], [49.5, 776.0], [49.6, 776.0], [49.7, 776.0], [49.8, 776.0], [49.9, 776.0], [50.0, 776.0], [50.1, 778.0], [50.2, 778.0], [50.3, 778.0], [50.4, 778.0], [50.5, 778.0], [50.6, 778.0], [50.7, 778.0], [50.8, 778.0], [50.9, 778.0], [51.0, 778.0], [51.1, 778.0], [51.2, 778.0], [51.3, 778.0], [51.4, 779.0], [51.5, 779.0], [51.6, 779.0], [51.7, 779.0], [51.8, 779.0], [51.9, 779.0], [52.0, 779.0], [52.1, 779.0], [52.2, 779.0], [52.3, 779.0], [52.4, 779.0], [52.5, 779.0], [52.6, 779.0], [52.7, 783.0], [52.8, 783.0], [52.9, 783.0], [53.0, 783.0], [53.1, 783.0], [53.2, 783.0], [53.3, 783.0], [53.4, 783.0], [53.5, 783.0], [53.6, 783.0], [53.7, 783.0], [53.8, 783.0], [53.9, 783.0], [54.0, 783.0], [54.1, 783.0], [54.2, 783.0], [54.3, 783.0], [54.4, 783.0], [54.5, 783.0], [54.6, 783.0], [54.7, 783.0], [54.8, 783.0], [54.9, 783.0], [55.0, 783.0], [55.1, 783.0], [55.2, 783.0], [55.3, 788.0], [55.4, 788.0], [55.5, 788.0], [55.6, 788.0], [55.7, 788.0], [55.8, 788.0], [55.9, 788.0], [56.0, 788.0], [56.1, 788.0], [56.2, 788.0], [56.3, 788.0], [56.4, 788.0], [56.5, 788.0], [56.6, 791.0], [56.7, 791.0], [56.8, 791.0], [56.9, 791.0], [57.0, 791.0], [57.1, 791.0], [57.2, 791.0], [57.3, 791.0], [57.4, 791.0], [57.5, 791.0], [57.6, 791.0], [57.7, 791.0], [57.8, 791.0], [57.9, 791.0], [58.0, 791.0], [58.1, 791.0], [58.2, 791.0], [58.3, 791.0], [58.4, 791.0], [58.5, 791.0], [58.6, 791.0], [58.7, 791.0], [58.8, 791.0], [58.9, 791.0], [59.0, 791.0], [59.1, 791.0], [59.2, 791.0], [59.3, 793.0], [59.4, 793.0], [59.5, 793.0], [59.6, 793.0], [59.7, 793.0], [59.8, 793.0], [59.9, 793.0], [60.0, 793.0], [60.1, 793.0], [60.2, 793.0], [60.3, 793.0], [60.4, 793.0], [60.5, 793.0], [60.6, 797.0], [60.7, 797.0], [60.8, 797.0], [60.9, 797.0], [61.0, 797.0], [61.1, 797.0], [61.2, 797.0], [61.3, 797.0], [61.4, 797.0], [61.5, 797.0], [61.6, 797.0], [61.7, 797.0], [61.8, 797.0], [61.9, 799.0], [62.0, 799.0], [62.1, 799.0], [62.2, 799.0], [62.3, 799.0], [62.4, 799.0], [62.5, 799.0], [62.6, 799.0], [62.7, 799.0], [62.8, 799.0], [62.9, 799.0], [63.0, 799.0], [63.1, 799.0], [63.2, 800.0], [63.3, 800.0], [63.4, 800.0], [63.5, 800.0], [63.6, 800.0], [63.7, 800.0], [63.8, 800.0], [63.9, 800.0], [64.0, 800.0], [64.1, 800.0], [64.2, 800.0], [64.3, 800.0], [64.4, 800.0], [64.5, 803.0], [64.6, 803.0], [64.7, 803.0], [64.8, 803.0], [64.9, 803.0], [65.0, 803.0], [65.1, 803.0], [65.2, 803.0], [65.3, 803.0], [65.4, 803.0], [65.5, 803.0], [65.6, 803.0], [65.7, 803.0], [65.8, 806.0], [65.9, 806.0], [66.0, 806.0], [66.1, 806.0], [66.2, 806.0], [66.3, 806.0], [66.4, 806.0], [66.5, 806.0], [66.6, 806.0], [66.7, 806.0], [66.8, 806.0], [66.9, 806.0], [67.0, 806.0], [67.1, 806.0], [67.2, 809.0], [67.3, 809.0], [67.4, 809.0], [67.5, 809.0], [67.6, 809.0], [67.7, 809.0], [67.8, 809.0], [67.9, 809.0], [68.0, 809.0], [68.1, 809.0], [68.2, 809.0], [68.3, 809.0], [68.4, 809.0], [68.5, 811.0], [68.6, 811.0], [68.7, 811.0], [68.8, 811.0], [68.9, 811.0], [69.0, 811.0], [69.1, 811.0], [69.2, 811.0], [69.3, 811.0], [69.4, 811.0], [69.5, 811.0], [69.6, 811.0], [69.7, 811.0], [69.8, 814.0], [69.9, 814.0], [70.0, 814.0], [70.1, 814.0], [70.2, 814.0], [70.3, 814.0], [70.4, 814.0], [70.5, 814.0], [70.6, 814.0], [70.7, 814.0], [70.8, 814.0], [70.9, 814.0], [71.0, 814.0], [71.1, 815.0], [71.2, 815.0], [71.3, 815.0], [71.4, 815.0], [71.5, 815.0], [71.6, 815.0], [71.7, 815.0], [71.8, 815.0], [71.9, 815.0], [72.0, 815.0], [72.1, 815.0], [72.2, 815.0], [72.3, 815.0], [72.4, 818.0], [72.5, 818.0], [72.6, 818.0], [72.7, 818.0], [72.8, 818.0], [72.9, 818.0], [73.0, 818.0], [73.1, 818.0], [73.2, 818.0], [73.3, 818.0], [73.4, 818.0], [73.5, 818.0], [73.6, 818.0], [73.7, 820.0], [73.8, 820.0], [73.9, 820.0], [74.0, 820.0], [74.1, 820.0], [74.2, 820.0], [74.3, 820.0], [74.4, 820.0], [74.5, 820.0], [74.6, 820.0], [74.7, 820.0], [74.8, 820.0], [74.9, 820.0], [75.0, 820.0], [75.1, 829.0], [75.2, 829.0], [75.3, 829.0], [75.4, 829.0], [75.5, 829.0], [75.6, 829.0], [75.7, 829.0], [75.8, 829.0], [75.9, 829.0], [76.0, 829.0], [76.1, 829.0], [76.2, 829.0], [76.3, 829.0], [76.4, 829.0], [76.5, 829.0], [76.6, 829.0], [76.7, 829.0], [76.8, 829.0], [76.9, 829.0], [77.0, 829.0], [77.1, 829.0], [77.2, 829.0], [77.3, 829.0], [77.4, 829.0], [77.5, 829.0], [77.6, 829.0], [77.7, 834.0], [77.8, 834.0], [77.9, 834.0], [78.0, 834.0], [78.1, 834.0], [78.2, 834.0], [78.3, 834.0], [78.4, 834.0], [78.5, 834.0], [78.6, 834.0], [78.7, 834.0], [78.8, 834.0], [78.9, 834.0], [79.0, 845.0], [79.1, 845.0], [79.2, 845.0], [79.3, 845.0], [79.4, 845.0], [79.5, 845.0], [79.6, 845.0], [79.7, 845.0], [79.8, 845.0], [79.9, 845.0], [80.0, 845.0], [80.1, 845.0], [80.2, 845.0], [80.3, 850.0], [80.4, 850.0], [80.5, 850.0], [80.6, 850.0], [80.7, 850.0], [80.8, 850.0], [80.9, 850.0], [81.0, 850.0], [81.1, 850.0], [81.2, 850.0], [81.3, 850.0], [81.4, 850.0], [81.5, 850.0], [81.6, 862.0], [81.7, 862.0], [81.8, 862.0], [81.9, 862.0], [82.0, 862.0], [82.1, 862.0], [82.2, 862.0], [82.3, 862.0], [82.4, 862.0], [82.5, 862.0], [82.6, 862.0], [82.7, 862.0], [82.8, 862.0], [82.9, 863.0], [83.0, 863.0], [83.1, 863.0], [83.2, 863.0], [83.3, 863.0], [83.4, 863.0], [83.5, 863.0], [83.6, 863.0], [83.7, 863.0], [83.8, 863.0], [83.9, 863.0], [84.0, 863.0], [84.1, 863.0], [84.2, 863.0], [84.3, 865.0], [84.4, 865.0], [84.5, 865.0], [84.6, 865.0], [84.7, 865.0], [84.8, 865.0], [84.9, 865.0], [85.0, 865.0], [85.1, 865.0], [85.2, 865.0], [85.3, 865.0], [85.4, 865.0], [85.5, 865.0], [85.6, 869.0], [85.7, 869.0], [85.8, 869.0], [85.9, 869.0], [86.0, 869.0], [86.1, 869.0], [86.2, 869.0], [86.3, 869.0], [86.4, 869.0], [86.5, 869.0], [86.6, 869.0], [86.7, 869.0], [86.8, 869.0], [86.9, 870.0], [87.0, 870.0], [87.1, 870.0], [87.2, 870.0], [87.3, 870.0], [87.4, 870.0], [87.5, 870.0], [87.6, 870.0], [87.7, 870.0], [87.8, 870.0], [87.9, 870.0], [88.0, 870.0], [88.1, 870.0], [88.2, 872.0], [88.3, 872.0], [88.4, 872.0], [88.5, 872.0], [88.6, 872.0], [88.7, 872.0], [88.8, 872.0], [88.9, 872.0], [89.0, 872.0], [89.1, 872.0], [89.2, 872.0], [89.3, 872.0], [89.4, 872.0], [89.5, 872.0], [89.6, 872.0], [89.7, 872.0], [89.8, 872.0], [89.9, 872.0], [90.0, 872.0], [90.1, 872.0], [90.2, 872.0], [90.3, 872.0], [90.4, 872.0], [90.5, 872.0], [90.6, 872.0], [90.7, 872.0], [90.8, 875.0], [90.9, 875.0], [91.0, 875.0], [91.1, 875.0], [91.2, 875.0], [91.3, 875.0], [91.4, 875.0], [91.5, 875.0], [91.6, 875.0], [91.7, 875.0], [91.8, 875.0], [91.9, 875.0], [92.0, 875.0], [92.1, 875.0], [92.2, 875.0], [92.3, 875.0], [92.4, 875.0], [92.5, 875.0], [92.6, 875.0], [92.7, 875.0], [92.8, 875.0], [92.9, 875.0], [93.0, 875.0], [93.1, 875.0], [93.2, 875.0], [93.3, 875.0], [93.4, 875.0], [93.5, 885.0], [93.6, 885.0], [93.7, 885.0], [93.8, 885.0], [93.9, 885.0], [94.0, 885.0], [94.1, 885.0], [94.2, 885.0], [94.3, 885.0], [94.4, 885.0], [94.5, 885.0], [94.6, 885.0], [94.7, 885.0], [94.8, 913.0], [94.9, 913.0], [95.0, 913.0], [95.1, 913.0], [95.2, 913.0], [95.3, 913.0], [95.4, 913.0], [95.5, 913.0], [95.6, 913.0], [95.7, 913.0], [95.8, 913.0], [95.9, 913.0], [96.0, 913.0], [96.1, 920.0], [96.2, 920.0], [96.3, 920.0], [96.4, 920.0], [96.5, 920.0], [96.6, 920.0], [96.7, 920.0], [96.8, 920.0], [96.9, 920.0], [97.0, 920.0], [97.1, 920.0], [97.2, 920.0], [97.3, 920.0], [97.4, 939.0], [97.5, 939.0], [97.6, 939.0], [97.7, 939.0], [97.8, 939.0], [97.9, 939.0], [98.0, 939.0], [98.1, 939.0], [98.2, 939.0], [98.3, 939.0], [98.4, 939.0], [98.5, 939.0], [98.6, 939.0], [98.7, 966.0], [98.8, 966.0], [98.9, 966.0], [99.0, 966.0], [99.1, 966.0], [99.2, 966.0], [99.3, 966.0], [99.4, 966.0], [99.5, 966.0], [99.6, 966.0], [99.7, 966.0], [99.8, 966.0], [99.9, 966.0]], "isOverall": false, "label": "uploadFile", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 600.0, "maxY": 43.0, "series": [{"data": [[600.0, 5.0], [700.0, 43.0], [800.0, 24.0], [900.0, 4.0]], "isOverall": false, "label": "uploadFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 76.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 76.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 76.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.5824295E12, "maxY": 1.0, "series": [{"data": [[1.5824295E12, 1.0], [1.58242956E12, 1.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58242956E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 786.6315789473687, "minX": 1.0, "maxY": 786.6315789473687, "series": [{"data": [[1.0, 786.6315789473687]], "isOverall": false, "label": "uploadFile", "isController": false}, {"data": [[1.0, 786.6315789473687]], "isOverall": false, "label": "uploadFile-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 48.06666666666667, "minX": 1.5824295E12, "maxY": 792266.9, "series": [{"data": [[1.5824295E12, 48.06666666666667], [1.58242956E12, 82.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5824295E12, 462154.86666666664], [1.58242956E12, 792266.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58242956E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 782.3571428571429, "minX": 1.5824295E12, "maxY": 789.125, "series": [{"data": [[1.5824295E12, 782.3571428571429], [1.58242956E12, 789.125]], "isOverall": false, "label": "uploadFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58242956E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 782.3571428571429, "minX": 1.5824295E12, "maxY": 789.125, "series": [{"data": [[1.5824295E12, 782.3571428571429], [1.58242956E12, 789.125]], "isOverall": false, "label": "uploadFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58242956E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 38.31249999999999, "minX": 1.5824295E12, "maxY": 41.25, "series": [{"data": [[1.5824295E12, 41.25], [1.58242956E12, 38.31249999999999]], "isOverall": false, "label": "uploadFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58242956E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 667.0, "minX": 1.5824295E12, "maxY": 966.0, "series": [{"data": [[1.5824295E12, 875.0], [1.58242956E12, 966.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5824295E12, 667.0], [1.58242956E12, 671.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5824295E12, 870.5], [1.58242956E12, 887.8000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5824295E12, 875.0], [1.58242956E12, 966.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5824295E12, 875.0], [1.58242956E12, 930.4499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58242956E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 761.5, "minX": 1.0, "maxY": 790.5, "series": [{"data": [[1.0, 790.5], [2.0, 761.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 761.5, "minX": 1.0, "maxY": 790.5, "series": [{"data": [[1.0, 790.5], [2.0, 761.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.5824295E12, "maxY": 0.7833333333333333, "series": [{"data": [[1.5824295E12, 0.48333333333333334], [1.58242956E12, 0.7833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58242956E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.5824295E12, "maxY": 0.8, "series": [{"data": [[1.5824295E12, 0.4666666666666667], [1.58242956E12, 0.8]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58242956E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.5824295E12, "maxY": 0.8, "series": [{"data": [[1.5824295E12, 0.4666666666666667], [1.58242956E12, 0.8]], "isOverall": false, "label": "uploadFile-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58242956E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.5824295E12, "maxY": 0.8, "series": [{"data": [[1.5824295E12, 0.4666666666666667], [1.58242956E12, 0.8]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58242956E12, "title": "Total Transactions Per Second"}},
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

