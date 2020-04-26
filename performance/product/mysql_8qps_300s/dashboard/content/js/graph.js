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
        data: {"result": {"minY": 232.0, "minX": 0.0, "maxY": 2541.0, "series": [{"data": [[0.0, 232.0], [0.1, 278.0], [0.2, 288.0], [0.3, 303.0], [0.4, 320.0], [0.5, 323.0], [0.6, 341.0], [0.7, 346.0], [0.8, 348.0], [0.9, 353.0], [1.0, 356.0], [1.1, 362.0], [1.2, 363.0], [1.3, 369.0], [1.4, 374.0], [1.5, 376.0], [1.6, 379.0], [1.7, 382.0], [1.8, 382.0], [1.9, 384.0], [2.0, 387.0], [2.1, 392.0], [2.2, 393.0], [2.3, 394.0], [2.4, 396.0], [2.5, 400.0], [2.6, 402.0], [2.7, 404.0], [2.8, 408.0], [2.9, 408.0], [3.0, 409.0], [3.1, 412.0], [3.2, 414.0], [3.3, 415.0], [3.4, 417.0], [3.5, 418.0], [3.6, 419.0], [3.7, 420.0], [3.8, 420.0], [3.9, 421.0], [4.0, 423.0], [4.1, 424.0], [4.2, 427.0], [4.3, 428.0], [4.4, 429.0], [4.5, 431.0], [4.6, 433.0], [4.7, 435.0], [4.8, 436.0], [4.9, 438.0], [5.0, 439.0], [5.1, 439.0], [5.2, 440.0], [5.3, 444.0], [5.4, 445.0], [5.5, 446.0], [5.6, 447.0], [5.7, 449.0], [5.8, 450.0], [5.9, 451.0], [6.0, 451.0], [6.1, 452.0], [6.2, 453.0], [6.3, 454.0], [6.4, 455.0], [6.5, 456.0], [6.6, 457.0], [6.7, 458.0], [6.8, 460.0], [6.9, 461.0], [7.0, 461.0], [7.1, 461.0], [7.2, 463.0], [7.3, 463.0], [7.4, 464.0], [7.5, 465.0], [7.6, 466.0], [7.7, 466.0], [7.8, 466.0], [7.9, 467.0], [8.0, 469.0], [8.1, 470.0], [8.2, 471.0], [8.3, 472.0], [8.4, 472.0], [8.5, 473.0], [8.6, 473.0], [8.7, 473.0], [8.8, 474.0], [8.9, 475.0], [9.0, 475.0], [9.1, 475.0], [9.2, 476.0], [9.3, 477.0], [9.4, 477.0], [9.5, 478.0], [9.6, 478.0], [9.7, 479.0], [9.8, 479.0], [9.9, 480.0], [10.0, 480.0], [10.1, 481.0], [10.2, 481.0], [10.3, 482.0], [10.4, 482.0], [10.5, 482.0], [10.6, 483.0], [10.7, 483.0], [10.8, 484.0], [10.9, 485.0], [11.0, 485.0], [11.1, 485.0], [11.2, 486.0], [11.3, 488.0], [11.4, 488.0], [11.5, 488.0], [11.6, 490.0], [11.7, 490.0], [11.8, 490.0], [11.9, 490.0], [12.0, 491.0], [12.1, 491.0], [12.2, 491.0], [12.3, 492.0], [12.4, 493.0], [12.5, 494.0], [12.6, 494.0], [12.7, 494.0], [12.8, 495.0], [12.9, 495.0], [13.0, 496.0], [13.1, 496.0], [13.2, 497.0], [13.3, 497.0], [13.4, 497.0], [13.5, 498.0], [13.6, 498.0], [13.7, 498.0], [13.8, 499.0], [13.9, 500.0], [14.0, 500.0], [14.1, 501.0], [14.2, 501.0], [14.3, 501.0], [14.4, 502.0], [14.5, 503.0], [14.6, 505.0], [14.7, 505.0], [14.8, 506.0], [14.9, 506.0], [15.0, 507.0], [15.1, 507.0], [15.2, 508.0], [15.3, 508.0], [15.4, 508.0], [15.5, 508.0], [15.6, 509.0], [15.7, 509.0], [15.8, 510.0], [15.9, 510.0], [16.0, 511.0], [16.1, 512.0], [16.2, 513.0], [16.3, 513.0], [16.4, 514.0], [16.5, 514.0], [16.6, 516.0], [16.7, 516.0], [16.8, 517.0], [16.9, 517.0], [17.0, 517.0], [17.1, 518.0], [17.2, 519.0], [17.3, 519.0], [17.4, 520.0], [17.5, 520.0], [17.6, 521.0], [17.7, 521.0], [17.8, 522.0], [17.9, 522.0], [18.0, 522.0], [18.1, 523.0], [18.2, 523.0], [18.3, 523.0], [18.4, 524.0], [18.5, 524.0], [18.6, 525.0], [18.7, 526.0], [18.8, 527.0], [18.9, 528.0], [19.0, 529.0], [19.1, 529.0], [19.2, 530.0], [19.3, 530.0], [19.4, 531.0], [19.5, 532.0], [19.6, 532.0], [19.7, 532.0], [19.8, 533.0], [19.9, 533.0], [20.0, 535.0], [20.1, 535.0], [20.2, 536.0], [20.3, 536.0], [20.4, 537.0], [20.5, 538.0], [20.6, 538.0], [20.7, 538.0], [20.8, 539.0], [20.9, 540.0], [21.0, 540.0], [21.1, 541.0], [21.2, 541.0], [21.3, 541.0], [21.4, 542.0], [21.5, 542.0], [21.6, 543.0], [21.7, 543.0], [21.8, 544.0], [21.9, 545.0], [22.0, 545.0], [22.1, 546.0], [22.2, 547.0], [22.3, 547.0], [22.4, 548.0], [22.5, 548.0], [22.6, 549.0], [22.7, 549.0], [22.8, 550.0], [22.9, 550.0], [23.0, 551.0], [23.1, 552.0], [23.2, 552.0], [23.3, 554.0], [23.4, 554.0], [23.5, 555.0], [23.6, 557.0], [23.7, 557.0], [23.8, 558.0], [23.9, 558.0], [24.0, 559.0], [24.1, 560.0], [24.2, 561.0], [24.3, 562.0], [24.4, 563.0], [24.5, 563.0], [24.6, 564.0], [24.7, 564.0], [24.8, 565.0], [24.9, 565.0], [25.0, 566.0], [25.1, 567.0], [25.2, 568.0], [25.3, 568.0], [25.4, 569.0], [25.5, 569.0], [25.6, 570.0], [25.7, 571.0], [25.8, 571.0], [25.9, 572.0], [26.0, 572.0], [26.1, 572.0], [26.2, 573.0], [26.3, 574.0], [26.4, 576.0], [26.5, 577.0], [26.6, 578.0], [26.7, 578.0], [26.8, 579.0], [26.9, 579.0], [27.0, 581.0], [27.1, 582.0], [27.2, 583.0], [27.3, 583.0], [27.4, 585.0], [27.5, 585.0], [27.6, 586.0], [27.7, 587.0], [27.8, 588.0], [27.9, 588.0], [28.0, 589.0], [28.1, 590.0], [28.2, 591.0], [28.3, 591.0], [28.4, 593.0], [28.5, 593.0], [28.6, 595.0], [28.7, 595.0], [28.8, 596.0], [28.9, 597.0], [29.0, 598.0], [29.1, 599.0], [29.2, 600.0], [29.3, 600.0], [29.4, 601.0], [29.5, 601.0], [29.6, 602.0], [29.7, 603.0], [29.8, 603.0], [29.9, 604.0], [30.0, 605.0], [30.1, 606.0], [30.2, 608.0], [30.3, 608.0], [30.4, 609.0], [30.5, 610.0], [30.6, 611.0], [30.7, 612.0], [30.8, 613.0], [30.9, 614.0], [31.0, 614.0], [31.1, 616.0], [31.2, 617.0], [31.3, 617.0], [31.4, 618.0], [31.5, 619.0], [31.6, 619.0], [31.7, 621.0], [31.8, 621.0], [31.9, 621.0], [32.0, 622.0], [32.1, 622.0], [32.2, 623.0], [32.3, 623.0], [32.4, 624.0], [32.5, 624.0], [32.6, 625.0], [32.7, 625.0], [32.8, 626.0], [32.9, 627.0], [33.0, 627.0], [33.1, 628.0], [33.2, 629.0], [33.3, 629.0], [33.4, 630.0], [33.5, 631.0], [33.6, 631.0], [33.7, 632.0], [33.8, 633.0], [33.9, 633.0], [34.0, 634.0], [34.1, 635.0], [34.2, 636.0], [34.3, 636.0], [34.4, 637.0], [34.5, 638.0], [34.6, 639.0], [34.7, 639.0], [34.8, 639.0], [34.9, 640.0], [35.0, 641.0], [35.1, 641.0], [35.2, 643.0], [35.3, 644.0], [35.4, 644.0], [35.5, 645.0], [35.6, 646.0], [35.7, 646.0], [35.8, 647.0], [35.9, 647.0], [36.0, 648.0], [36.1, 649.0], [36.2, 649.0], [36.3, 650.0], [36.4, 650.0], [36.5, 651.0], [36.6, 652.0], [36.7, 652.0], [36.8, 652.0], [36.9, 653.0], [37.0, 654.0], [37.1, 654.0], [37.2, 655.0], [37.3, 655.0], [37.4, 655.0], [37.5, 656.0], [37.6, 657.0], [37.7, 657.0], [37.8, 658.0], [37.9, 658.0], [38.0, 660.0], [38.1, 660.0], [38.2, 661.0], [38.3, 661.0], [38.4, 663.0], [38.5, 663.0], [38.6, 664.0], [38.7, 665.0], [38.8, 666.0], [38.9, 667.0], [39.0, 667.0], [39.1, 668.0], [39.2, 668.0], [39.3, 669.0], [39.4, 669.0], [39.5, 670.0], [39.6, 671.0], [39.7, 671.0], [39.8, 672.0], [39.9, 672.0], [40.0, 673.0], [40.1, 673.0], [40.2, 674.0], [40.3, 674.0], [40.4, 674.0], [40.5, 675.0], [40.6, 676.0], [40.7, 676.0], [40.8, 677.0], [40.9, 677.0], [41.0, 678.0], [41.1, 679.0], [41.2, 680.0], [41.3, 681.0], [41.4, 682.0], [41.5, 682.0], [41.6, 684.0], [41.7, 685.0], [41.8, 685.0], [41.9, 686.0], [42.0, 686.0], [42.1, 687.0], [42.2, 687.0], [42.3, 688.0], [42.4, 688.0], [42.5, 689.0], [42.6, 690.0], [42.7, 691.0], [42.8, 692.0], [42.9, 693.0], [43.0, 693.0], [43.1, 694.0], [43.2, 695.0], [43.3, 696.0], [43.4, 697.0], [43.5, 698.0], [43.6, 699.0], [43.7, 700.0], [43.8, 701.0], [43.9, 702.0], [44.0, 704.0], [44.1, 705.0], [44.2, 707.0], [44.3, 707.0], [44.4, 708.0], [44.5, 708.0], [44.6, 709.0], [44.7, 710.0], [44.8, 711.0], [44.9, 711.0], [45.0, 712.0], [45.1, 713.0], [45.2, 713.0], [45.3, 714.0], [45.4, 714.0], [45.5, 715.0], [45.6, 715.0], [45.7, 716.0], [45.8, 716.0], [45.9, 716.0], [46.0, 717.0], [46.1, 717.0], [46.2, 718.0], [46.3, 718.0], [46.4, 719.0], [46.5, 720.0], [46.6, 721.0], [46.7, 721.0], [46.8, 722.0], [46.9, 722.0], [47.0, 723.0], [47.1, 724.0], [47.2, 724.0], [47.3, 724.0], [47.4, 725.0], [47.5, 726.0], [47.6, 726.0], [47.7, 727.0], [47.8, 727.0], [47.9, 727.0], [48.0, 727.0], [48.1, 728.0], [48.2, 728.0], [48.3, 729.0], [48.4, 730.0], [48.5, 730.0], [48.6, 731.0], [48.7, 732.0], [48.8, 732.0], [48.9, 732.0], [49.0, 733.0], [49.1, 734.0], [49.2, 734.0], [49.3, 735.0], [49.4, 735.0], [49.5, 736.0], [49.6, 737.0], [49.7, 738.0], [49.8, 738.0], [49.9, 738.0], [50.0, 739.0], [50.1, 740.0], [50.2, 740.0], [50.3, 741.0], [50.4, 742.0], [50.5, 743.0], [50.6, 743.0], [50.7, 744.0], [50.8, 744.0], [50.9, 745.0], [51.0, 745.0], [51.1, 745.0], [51.2, 746.0], [51.3, 746.0], [51.4, 747.0], [51.5, 747.0], [51.6, 747.0], [51.7, 748.0], [51.8, 749.0], [51.9, 749.0], [52.0, 749.0], [52.1, 750.0], [52.2, 750.0], [52.3, 750.0], [52.4, 751.0], [52.5, 751.0], [52.6, 751.0], [52.7, 752.0], [52.8, 752.0], [52.9, 753.0], [53.0, 753.0], [53.1, 754.0], [53.2, 754.0], [53.3, 755.0], [53.4, 755.0], [53.5, 755.0], [53.6, 756.0], [53.7, 757.0], [53.8, 757.0], [53.9, 758.0], [54.0, 758.0], [54.1, 759.0], [54.2, 760.0], [54.3, 760.0], [54.4, 761.0], [54.5, 762.0], [54.6, 762.0], [54.7, 763.0], [54.8, 763.0], [54.9, 763.0], [55.0, 764.0], [55.1, 764.0], [55.2, 765.0], [55.3, 765.0], [55.4, 765.0], [55.5, 766.0], [55.6, 766.0], [55.7, 767.0], [55.8, 767.0], [55.9, 768.0], [56.0, 769.0], [56.1, 769.0], [56.2, 769.0], [56.3, 770.0], [56.4, 770.0], [56.5, 770.0], [56.6, 771.0], [56.7, 771.0], [56.8, 772.0], [56.9, 772.0], [57.0, 772.0], [57.1, 772.0], [57.2, 772.0], [57.3, 773.0], [57.4, 773.0], [57.5, 774.0], [57.6, 774.0], [57.7, 774.0], [57.8, 775.0], [57.9, 775.0], [58.0, 776.0], [58.1, 776.0], [58.2, 777.0], [58.3, 777.0], [58.4, 778.0], [58.5, 778.0], [58.6, 778.0], [58.7, 779.0], [58.8, 779.0], [58.9, 780.0], [59.0, 780.0], [59.1, 781.0], [59.2, 781.0], [59.3, 781.0], [59.4, 782.0], [59.5, 782.0], [59.6, 782.0], [59.7, 783.0], [59.8, 783.0], [59.9, 784.0], [60.0, 784.0], [60.1, 785.0], [60.2, 786.0], [60.3, 786.0], [60.4, 787.0], [60.5, 787.0], [60.6, 787.0], [60.7, 788.0], [60.8, 789.0], [60.9, 789.0], [61.0, 789.0], [61.1, 789.0], [61.2, 789.0], [61.3, 790.0], [61.4, 790.0], [61.5, 791.0], [61.6, 791.0], [61.7, 791.0], [61.8, 792.0], [61.9, 793.0], [62.0, 794.0], [62.1, 795.0], [62.2, 795.0], [62.3, 796.0], [62.4, 797.0], [62.5, 797.0], [62.6, 797.0], [62.7, 797.0], [62.8, 798.0], [62.9, 798.0], [63.0, 799.0], [63.1, 799.0], [63.2, 799.0], [63.3, 800.0], [63.4, 800.0], [63.5, 801.0], [63.6, 801.0], [63.7, 802.0], [63.8, 802.0], [63.9, 803.0], [64.0, 803.0], [64.1, 803.0], [64.2, 804.0], [64.3, 804.0], [64.4, 805.0], [64.5, 805.0], [64.6, 806.0], [64.7, 806.0], [64.8, 806.0], [64.9, 807.0], [65.0, 807.0], [65.1, 808.0], [65.2, 808.0], [65.3, 808.0], [65.4, 809.0], [65.5, 809.0], [65.6, 809.0], [65.7, 809.0], [65.8, 810.0], [65.9, 810.0], [66.0, 810.0], [66.1, 811.0], [66.2, 811.0], [66.3, 811.0], [66.4, 812.0], [66.5, 812.0], [66.6, 812.0], [66.7, 812.0], [66.8, 813.0], [66.9, 814.0], [67.0, 814.0], [67.1, 815.0], [67.2, 815.0], [67.3, 816.0], [67.4, 816.0], [67.5, 816.0], [67.6, 817.0], [67.7, 817.0], [67.8, 817.0], [67.9, 818.0], [68.0, 818.0], [68.1, 818.0], [68.2, 819.0], [68.3, 819.0], [68.4, 819.0], [68.5, 820.0], [68.6, 821.0], [68.7, 821.0], [68.8, 822.0], [68.9, 822.0], [69.0, 822.0], [69.1, 823.0], [69.2, 823.0], [69.3, 824.0], [69.4, 824.0], [69.5, 825.0], [69.6, 825.0], [69.7, 825.0], [69.8, 825.0], [69.9, 826.0], [70.0, 826.0], [70.1, 826.0], [70.2, 826.0], [70.3, 827.0], [70.4, 827.0], [70.5, 828.0], [70.6, 828.0], [70.7, 828.0], [70.8, 829.0], [70.9, 829.0], [71.0, 830.0], [71.1, 830.0], [71.2, 831.0], [71.3, 831.0], [71.4, 832.0], [71.5, 832.0], [71.6, 832.0], [71.7, 833.0], [71.8, 833.0], [71.9, 834.0], [72.0, 834.0], [72.1, 835.0], [72.2, 835.0], [72.3, 835.0], [72.4, 836.0], [72.5, 836.0], [72.6, 836.0], [72.7, 836.0], [72.8, 836.0], [72.9, 837.0], [73.0, 838.0], [73.1, 838.0], [73.2, 838.0], [73.3, 839.0], [73.4, 839.0], [73.5, 839.0], [73.6, 839.0], [73.7, 840.0], [73.8, 840.0], [73.9, 840.0], [74.0, 841.0], [74.1, 841.0], [74.2, 841.0], [74.3, 842.0], [74.4, 842.0], [74.5, 843.0], [74.6, 843.0], [74.7, 844.0], [74.8, 844.0], [74.9, 844.0], [75.0, 844.0], [75.1, 845.0], [75.2, 845.0], [75.3, 845.0], [75.4, 845.0], [75.5, 846.0], [75.6, 846.0], [75.7, 846.0], [75.8, 847.0], [75.9, 847.0], [76.0, 847.0], [76.1, 847.0], [76.2, 848.0], [76.3, 848.0], [76.4, 848.0], [76.5, 849.0], [76.6, 849.0], [76.7, 849.0], [76.8, 850.0], [76.9, 850.0], [77.0, 851.0], [77.1, 851.0], [77.2, 852.0], [77.3, 852.0], [77.4, 852.0], [77.5, 853.0], [77.6, 853.0], [77.7, 853.0], [77.8, 853.0], [77.9, 854.0], [78.0, 854.0], [78.1, 854.0], [78.2, 855.0], [78.3, 855.0], [78.4, 856.0], [78.5, 857.0], [78.6, 857.0], [78.7, 858.0], [78.8, 858.0], [78.9, 859.0], [79.0, 859.0], [79.1, 859.0], [79.2, 860.0], [79.3, 860.0], [79.4, 860.0], [79.5, 860.0], [79.6, 861.0], [79.7, 861.0], [79.8, 861.0], [79.9, 861.0], [80.0, 861.0], [80.1, 862.0], [80.2, 862.0], [80.3, 863.0], [80.4, 864.0], [80.5, 864.0], [80.6, 865.0], [80.7, 865.0], [80.8, 865.0], [80.9, 866.0], [81.0, 866.0], [81.1, 867.0], [81.2, 867.0], [81.3, 867.0], [81.4, 867.0], [81.5, 868.0], [81.6, 869.0], [81.7, 869.0], [81.8, 869.0], [81.9, 869.0], [82.0, 869.0], [82.1, 870.0], [82.2, 870.0], [82.3, 870.0], [82.4, 871.0], [82.5, 871.0], [82.6, 872.0], [82.7, 872.0], [82.8, 873.0], [82.9, 873.0], [83.0, 873.0], [83.1, 874.0], [83.2, 874.0], [83.3, 874.0], [83.4, 874.0], [83.5, 875.0], [83.6, 875.0], [83.7, 876.0], [83.8, 877.0], [83.9, 877.0], [84.0, 877.0], [84.1, 878.0], [84.2, 878.0], [84.3, 878.0], [84.4, 879.0], [84.5, 879.0], [84.6, 879.0], [84.7, 880.0], [84.8, 880.0], [84.9, 881.0], [85.0, 881.0], [85.1, 881.0], [85.2, 882.0], [85.3, 882.0], [85.4, 882.0], [85.5, 882.0], [85.6, 883.0], [85.7, 883.0], [85.8, 883.0], [85.9, 884.0], [86.0, 884.0], [86.1, 884.0], [86.2, 885.0], [86.3, 886.0], [86.4, 886.0], [86.5, 887.0], [86.6, 887.0], [86.7, 888.0], [86.8, 888.0], [86.9, 888.0], [87.0, 889.0], [87.1, 890.0], [87.2, 891.0], [87.3, 891.0], [87.4, 892.0], [87.5, 892.0], [87.6, 892.0], [87.7, 892.0], [87.8, 893.0], [87.9, 894.0], [88.0, 895.0], [88.1, 895.0], [88.2, 896.0], [88.3, 896.0], [88.4, 897.0], [88.5, 897.0], [88.6, 898.0], [88.7, 899.0], [88.8, 899.0], [88.9, 900.0], [89.0, 900.0], [89.1, 901.0], [89.2, 901.0], [89.3, 901.0], [89.4, 902.0], [89.5, 902.0], [89.6, 902.0], [89.7, 903.0], [89.8, 903.0], [89.9, 903.0], [90.0, 904.0], [90.1, 904.0], [90.2, 905.0], [90.3, 905.0], [90.4, 906.0], [90.5, 907.0], [90.6, 907.0], [90.7, 908.0], [90.8, 908.0], [90.9, 909.0], [91.0, 909.0], [91.1, 910.0], [91.2, 910.0], [91.3, 911.0], [91.4, 911.0], [91.5, 912.0], [91.6, 912.0], [91.7, 913.0], [91.8, 914.0], [91.9, 915.0], [92.0, 915.0], [92.1, 916.0], [92.2, 916.0], [92.3, 917.0], [92.4, 918.0], [92.5, 918.0], [92.6, 919.0], [92.7, 919.0], [92.8, 919.0], [92.9, 920.0], [93.0, 920.0], [93.1, 920.0], [93.2, 921.0], [93.3, 922.0], [93.4, 922.0], [93.5, 923.0], [93.6, 923.0], [93.7, 924.0], [93.8, 925.0], [93.9, 925.0], [94.0, 926.0], [94.1, 927.0], [94.2, 927.0], [94.3, 928.0], [94.4, 928.0], [94.5, 929.0], [94.6, 929.0], [94.7, 930.0], [94.8, 930.0], [94.9, 931.0], [95.0, 932.0], [95.1, 932.0], [95.2, 933.0], [95.3, 934.0], [95.4, 935.0], [95.5, 936.0], [95.6, 936.0], [95.7, 937.0], [95.8, 938.0], [95.9, 939.0], [96.0, 941.0], [96.1, 942.0], [96.2, 942.0], [96.3, 943.0], [96.4, 944.0], [96.5, 945.0], [96.6, 946.0], [96.7, 948.0], [96.8, 950.0], [96.9, 952.0], [97.0, 952.0], [97.1, 954.0], [97.2, 955.0], [97.3, 956.0], [97.4, 957.0], [97.5, 958.0], [97.6, 959.0], [97.7, 960.0], [97.8, 961.0], [97.9, 965.0], [98.0, 968.0], [98.1, 971.0], [98.2, 975.0], [98.3, 976.0], [98.4, 978.0], [98.5, 981.0], [98.6, 984.0], [98.7, 986.0], [98.8, 989.0], [98.9, 993.0], [99.0, 1001.0], [99.1, 1004.0], [99.2, 1012.0], [99.3, 1014.0], [99.4, 1019.0], [99.5, 1039.0], [99.6, 1060.0], [99.7, 1110.0], [99.8, 1945.0], [99.9, 2135.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 861.0, "series": [{"data": [[2100.0, 2.0], [600.0, 487.0], [2400.0, 1.0], [2500.0, 1.0], [700.0, 661.0], [200.0, 10.0], [800.0, 861.0], [900.0, 342.0], [1000.0, 22.0], [1100.0, 2.0], [300.0, 74.0], [1400.0, 1.0], [400.0, 382.0], [1600.0, 1.0], [1700.0, 1.0], [1900.0, 1.0], [500.0, 515.0], [2000.0, 2.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2885.0, "series": [{"data": [[0.0, 472.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2885.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.6938775510204085, "minX": 1.5818031E12, "maxY": 8.0, "series": [{"data": [[1.58180328E12, 8.0], [1.58180334E12, 8.0], [1.58180316E12, 8.0], [1.58180322E12, 8.0], [1.5818031E12, 7.6938775510204085], [1.5818034E12, 7.954022988505746]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5818034E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 375.0, "minX": 1.0, "maxY": 712.5175909361951, "series": [{"data": [[4.0, 505.33333333333337], [8.0, 712.5175909361951], [2.0, 375.0], [1.0, 433.0], [5.0, 391.66666666666663], [6.0, 578.0], [3.0, 431.0], [7.0, 576.5]], "isOverall": false, "label": "getProductByCategory", "isController": false}, {"data": [[7.987225193107545, 711.6592394533568]], "isOverall": false, "label": "getProductByCategory-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 162.05, "minX": 1.5818031E12, "maxY": 186374.21666666667, "series": [{"data": [[1.58180328E12, 181203.21666666667], [1.58180334E12, 184746.93333333332], [1.58180316E12, 186374.21666666667], [1.58180322E12, 183396.15], [1.5818031E12, 13312.883333333333], [1.5818034E12, 165459.43333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58180328E12, 2204.3166666666666], [1.58180334E12, 2247.4], [1.58180316E12, 2267.15], [1.58180322E12, 2230.983333333333], [1.5818031E12, 162.05], [1.5818034E12, 2012.8333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5818034E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 655.204081632653, "minX": 1.5818031E12, "maxY": 733.1428571428576, "series": [{"data": [[1.58180328E12, 717.7421289355324], [1.58180334E12, 704.1544117647057], [1.58180316E12, 700.5000000000006], [1.58180322E12, 709.265185185185], [1.5818031E12, 655.204081632653], [1.5818034E12, 733.1428571428576]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5818034E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 616.795918367347, "minX": 1.5818031E12, "maxY": 694.0607553366175, "series": [{"data": [[1.58180328E12, 679.7316341829087], [1.58180334E12, 664.9088235294112], [1.58180316E12, 662.155976676385], [1.58180322E12, 670.6755555555552], [1.5818031E12, 616.795918367347], [1.5818034E12, 694.0607553366175]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5818034E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 41.223032069970834, "minX": 1.5818031E12, "maxY": 43.42857142857142, "series": [{"data": [[1.58180328E12, 41.31934032983509], [1.58180334E12, 42.19705882352947], [1.58180316E12, 41.223032069970834], [1.58180322E12, 41.74666666666668], [1.5818031E12, 43.42857142857142], [1.5818034E12, 41.23481116584562]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5818034E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 232.0, "minX": 1.5818031E12, "maxY": 2541.0, "series": [{"data": [[1.58180328E12, 1027.0], [1.58180334E12, 1048.0], [1.58180316E12, 1002.0], [1.58180322E12, 1049.0], [1.5818031E12, 940.0], [1.5818034E12, 2541.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58180328E12, 295.0], [1.58180334E12, 274.0], [1.58180316E12, 341.0], [1.58180322E12, 276.0], [1.5818031E12, 232.0], [1.5818034E12, 298.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58180328E12, 913.0], [1.58180334E12, 897.0], [1.58180316E12, 884.0], [1.58180322E12, 903.8], [1.5818031E12, 878.0], [1.5818034E12, 915.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58180328E12, 993.6400000000001], [1.58180334E12, 992.4199999999989], [1.58180316E12, 958.13], [1.58180322E12, 982.96], [1.5818031E12, 940.0], [1.5818034E12, 2022.399999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58180328E12, 936.6], [1.58180334E12, 931.9499999999999], [1.58180316E12, 921.0], [1.58180322E12, 938.0], [1.5818031E12, 904.0], [1.5818034E12, 943.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5818034E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 347.0, "minX": 5.0, "maxY": 953.0, "series": [{"data": [[8.0, 819.0], [16.0, 660.5], [9.0, 787.5], [5.0, 347.0], [10.0, 757.0], [11.0, 730.0], [12.0, 683.0], [6.0, 953.0], [13.0, 668.0], [14.0, 713.5], [15.0, 753.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 323.0, "minX": 5.0, "maxY": 911.0, "series": [{"data": [[8.0, 781.0], [16.0, 616.5], [9.0, 749.5], [5.0, 323.0], [10.0, 719.0], [11.0, 692.0], [12.0, 643.0], [6.0, 911.0], [13.0, 630.5], [14.0, 676.0], [15.0, 716.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.95, "minX": 1.5818031E12, "maxY": 11.433333333333334, "series": [{"data": [[1.58180328E12, 11.116666666666667], [1.58180334E12, 11.333333333333334], [1.58180316E12, 11.433333333333334], [1.58180322E12, 11.25], [1.5818031E12, 0.95], [1.5818034E12, 10.016666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5818034E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.5818031E12, "maxY": 11.433333333333334, "series": [{"data": [[1.58180328E12, 11.116666666666667], [1.58180334E12, 11.333333333333334], [1.58180316E12, 11.433333333333334], [1.58180322E12, 11.25], [1.5818031E12, 0.8166666666666667], [1.5818034E12, 10.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5818034E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.5818031E12, "maxY": 11.433333333333334, "series": [{"data": [[1.58180328E12, 11.116666666666667], [1.58180334E12, 11.333333333333334], [1.58180316E12, 11.433333333333334], [1.58180322E12, 11.25], [1.5818031E12, 0.8166666666666667], [1.5818034E12, 10.15]], "isOverall": false, "label": "getProductByCategory-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5818034E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.5818031E12, "maxY": 11.433333333333334, "series": [{"data": [[1.58180328E12, 11.116666666666667], [1.58180334E12, 11.333333333333334], [1.58180316E12, 11.433333333333334], [1.58180322E12, 11.25], [1.5818031E12, 0.8166666666666667], [1.5818034E12, 10.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5818034E12, "title": "Total Transactions Per Second"}},
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

