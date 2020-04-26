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
        data: {"result": {"minY": 206.0, "minX": 0.0, "maxY": 1831.0, "series": [{"data": [[0.0, 206.0], [0.1, 275.0], [0.2, 315.0], [0.3, 332.0], [0.4, 343.0], [0.5, 351.0], [0.6, 357.0], [0.7, 363.0], [0.8, 372.0], [0.9, 377.0], [1.0, 386.0], [1.1, 388.0], [1.2, 394.0], [1.3, 400.0], [1.4, 403.0], [1.5, 405.0], [1.6, 409.0], [1.7, 410.0], [1.8, 412.0], [1.9, 413.0], [2.0, 414.0], [2.1, 415.0], [2.2, 415.0], [2.3, 417.0], [2.4, 419.0], [2.5, 421.0], [2.6, 423.0], [2.7, 425.0], [2.8, 425.0], [2.9, 427.0], [3.0, 429.0], [3.1, 430.0], [3.2, 431.0], [3.3, 433.0], [3.4, 434.0], [3.5, 435.0], [3.6, 437.0], [3.7, 439.0], [3.8, 441.0], [3.9, 443.0], [4.0, 445.0], [4.1, 446.0], [4.2, 447.0], [4.3, 448.0], [4.4, 449.0], [4.5, 450.0], [4.6, 452.0], [4.7, 453.0], [4.8, 454.0], [4.9, 455.0], [5.0, 456.0], [5.1, 457.0], [5.2, 457.0], [5.3, 459.0], [5.4, 459.0], [5.5, 460.0], [5.6, 462.0], [5.7, 462.0], [5.8, 462.0], [5.9, 463.0], [6.0, 464.0], [6.1, 465.0], [6.2, 465.0], [6.3, 466.0], [6.4, 467.0], [6.5, 468.0], [6.6, 468.0], [6.7, 468.0], [6.8, 469.0], [6.9, 469.0], [7.0, 470.0], [7.1, 470.0], [7.2, 471.0], [7.3, 472.0], [7.4, 473.0], [7.5, 473.0], [7.6, 474.0], [7.7, 474.0], [7.8, 474.0], [7.9, 475.0], [8.0, 475.0], [8.1, 476.0], [8.2, 476.0], [8.3, 477.0], [8.4, 477.0], [8.5, 478.0], [8.6, 479.0], [8.7, 479.0], [8.8, 480.0], [8.9, 481.0], [9.0, 482.0], [9.1, 482.0], [9.2, 484.0], [9.3, 484.0], [9.4, 484.0], [9.5, 485.0], [9.6, 485.0], [9.7, 486.0], [9.8, 486.0], [9.9, 487.0], [10.0, 487.0], [10.1, 488.0], [10.2, 488.0], [10.3, 489.0], [10.4, 489.0], [10.5, 490.0], [10.6, 490.0], [10.7, 491.0], [10.8, 491.0], [10.9, 492.0], [11.0, 492.0], [11.1, 493.0], [11.2, 494.0], [11.3, 494.0], [11.4, 494.0], [11.5, 495.0], [11.6, 495.0], [11.7, 496.0], [11.8, 496.0], [11.9, 497.0], [12.0, 497.0], [12.1, 498.0], [12.2, 498.0], [12.3, 499.0], [12.4, 499.0], [12.5, 500.0], [12.6, 501.0], [12.7, 501.0], [12.8, 502.0], [12.9, 502.0], [13.0, 503.0], [13.1, 503.0], [13.2, 504.0], [13.3, 504.0], [13.4, 504.0], [13.5, 505.0], [13.6, 505.0], [13.7, 505.0], [13.8, 506.0], [13.9, 506.0], [14.0, 506.0], [14.1, 507.0], [14.2, 507.0], [14.3, 507.0], [14.4, 508.0], [14.5, 508.0], [14.6, 509.0], [14.7, 509.0], [14.8, 510.0], [14.9, 510.0], [15.0, 511.0], [15.1, 511.0], [15.2, 511.0], [15.3, 512.0], [15.4, 512.0], [15.5, 512.0], [15.6, 513.0], [15.7, 514.0], [15.8, 514.0], [15.9, 515.0], [16.0, 515.0], [16.1, 515.0], [16.2, 516.0], [16.3, 516.0], [16.4, 516.0], [16.5, 517.0], [16.6, 518.0], [16.7, 518.0], [16.8, 519.0], [16.9, 519.0], [17.0, 520.0], [17.1, 520.0], [17.2, 520.0], [17.3, 521.0], [17.4, 522.0], [17.5, 522.0], [17.6, 522.0], [17.7, 523.0], [17.8, 523.0], [17.9, 524.0], [18.0, 524.0], [18.1, 524.0], [18.2, 525.0], [18.3, 525.0], [18.4, 526.0], [18.5, 526.0], [18.6, 526.0], [18.7, 527.0], [18.8, 528.0], [18.9, 528.0], [19.0, 528.0], [19.1, 529.0], [19.2, 529.0], [19.3, 530.0], [19.4, 530.0], [19.5, 530.0], [19.6, 531.0], [19.7, 531.0], [19.8, 531.0], [19.9, 531.0], [20.0, 531.0], [20.1, 532.0], [20.2, 533.0], [20.3, 533.0], [20.4, 533.0], [20.5, 533.0], [20.6, 534.0], [20.7, 534.0], [20.8, 535.0], [20.9, 535.0], [21.0, 535.0], [21.1, 536.0], [21.2, 536.0], [21.3, 536.0], [21.4, 537.0], [21.5, 537.0], [21.6, 538.0], [21.7, 538.0], [21.8, 539.0], [21.9, 539.0], [22.0, 540.0], [22.1, 540.0], [22.2, 541.0], [22.3, 541.0], [22.4, 542.0], [22.5, 542.0], [22.6, 543.0], [22.7, 543.0], [22.8, 544.0], [22.9, 544.0], [23.0, 544.0], [23.1, 544.0], [23.2, 545.0], [23.3, 545.0], [23.4, 546.0], [23.5, 546.0], [23.6, 547.0], [23.7, 547.0], [23.8, 548.0], [23.9, 548.0], [24.0, 549.0], [24.1, 549.0], [24.2, 549.0], [24.3, 550.0], [24.4, 551.0], [24.5, 551.0], [24.6, 552.0], [24.7, 552.0], [24.8, 552.0], [24.9, 553.0], [25.0, 553.0], [25.1, 554.0], [25.2, 554.0], [25.3, 555.0], [25.4, 556.0], [25.5, 556.0], [25.6, 557.0], [25.7, 557.0], [25.8, 558.0], [25.9, 558.0], [26.0, 559.0], [26.1, 559.0], [26.2, 559.0], [26.3, 560.0], [26.4, 560.0], [26.5, 561.0], [26.6, 562.0], [26.7, 562.0], [26.8, 563.0], [26.9, 563.0], [27.0, 563.0], [27.1, 564.0], [27.2, 564.0], [27.3, 565.0], [27.4, 566.0], [27.5, 566.0], [27.6, 567.0], [27.7, 567.0], [27.8, 568.0], [27.9, 568.0], [28.0, 569.0], [28.1, 569.0], [28.2, 569.0], [28.3, 570.0], [28.4, 570.0], [28.5, 571.0], [28.6, 571.0], [28.7, 571.0], [28.8, 572.0], [28.9, 573.0], [29.0, 573.0], [29.1, 574.0], [29.2, 574.0], [29.3, 575.0], [29.4, 575.0], [29.5, 575.0], [29.6, 576.0], [29.7, 576.0], [29.8, 577.0], [29.9, 578.0], [30.0, 579.0], [30.1, 579.0], [30.2, 580.0], [30.3, 580.0], [30.4, 581.0], [30.5, 583.0], [30.6, 583.0], [30.7, 584.0], [30.8, 584.0], [30.9, 585.0], [31.0, 585.0], [31.1, 586.0], [31.2, 586.0], [31.3, 587.0], [31.4, 587.0], [31.5, 587.0], [31.6, 588.0], [31.7, 589.0], [31.8, 589.0], [31.9, 590.0], [32.0, 591.0], [32.1, 591.0], [32.2, 592.0], [32.3, 592.0], [32.4, 593.0], [32.5, 594.0], [32.6, 595.0], [32.7, 595.0], [32.8, 596.0], [32.9, 597.0], [33.0, 598.0], [33.1, 598.0], [33.2, 599.0], [33.3, 599.0], [33.4, 600.0], [33.5, 600.0], [33.6, 600.0], [33.7, 601.0], [33.8, 601.0], [33.9, 602.0], [34.0, 603.0], [34.1, 604.0], [34.2, 604.0], [34.3, 605.0], [34.4, 606.0], [34.5, 606.0], [34.6, 607.0], [34.7, 608.0], [34.8, 608.0], [34.9, 609.0], [35.0, 610.0], [35.1, 611.0], [35.2, 611.0], [35.3, 612.0], [35.4, 613.0], [35.5, 614.0], [35.6, 615.0], [35.7, 615.0], [35.8, 617.0], [35.9, 617.0], [36.0, 618.0], [36.1, 618.0], [36.2, 619.0], [36.3, 620.0], [36.4, 620.0], [36.5, 621.0], [36.6, 622.0], [36.7, 623.0], [36.8, 624.0], [36.9, 624.0], [37.0, 625.0], [37.1, 625.0], [37.2, 626.0], [37.3, 627.0], [37.4, 627.0], [37.5, 628.0], [37.6, 628.0], [37.7, 629.0], [37.8, 629.0], [37.9, 629.0], [38.0, 630.0], [38.1, 631.0], [38.2, 632.0], [38.3, 632.0], [38.4, 633.0], [38.5, 634.0], [38.6, 635.0], [38.7, 636.0], [38.8, 636.0], [38.9, 637.0], [39.0, 637.0], [39.1, 638.0], [39.2, 639.0], [39.3, 639.0], [39.4, 639.0], [39.5, 640.0], [39.6, 640.0], [39.7, 640.0], [39.8, 641.0], [39.9, 641.0], [40.0, 642.0], [40.1, 642.0], [40.2, 643.0], [40.3, 643.0], [40.4, 644.0], [40.5, 645.0], [40.6, 645.0], [40.7, 646.0], [40.8, 647.0], [40.9, 648.0], [41.0, 648.0], [41.1, 649.0], [41.2, 650.0], [41.3, 651.0], [41.4, 651.0], [41.5, 652.0], [41.6, 652.0], [41.7, 653.0], [41.8, 653.0], [41.9, 654.0], [42.0, 654.0], [42.1, 655.0], [42.2, 656.0], [42.3, 657.0], [42.4, 658.0], [42.5, 658.0], [42.6, 659.0], [42.7, 659.0], [42.8, 659.0], [42.9, 660.0], [43.0, 661.0], [43.1, 661.0], [43.2, 662.0], [43.3, 662.0], [43.4, 663.0], [43.5, 663.0], [43.6, 664.0], [43.7, 664.0], [43.8, 664.0], [43.9, 665.0], [44.0, 665.0], [44.1, 665.0], [44.2, 665.0], [44.3, 666.0], [44.4, 667.0], [44.5, 667.0], [44.6, 668.0], [44.7, 668.0], [44.8, 669.0], [44.9, 669.0], [45.0, 670.0], [45.1, 670.0], [45.2, 671.0], [45.3, 672.0], [45.4, 672.0], [45.5, 672.0], [45.6, 673.0], [45.7, 673.0], [45.8, 674.0], [45.9, 674.0], [46.0, 675.0], [46.1, 675.0], [46.2, 675.0], [46.3, 676.0], [46.4, 677.0], [46.5, 677.0], [46.6, 677.0], [46.7, 677.0], [46.8, 678.0], [46.9, 679.0], [47.0, 679.0], [47.1, 679.0], [47.2, 680.0], [47.3, 680.0], [47.4, 681.0], [47.5, 681.0], [47.6, 682.0], [47.7, 682.0], [47.8, 683.0], [47.9, 683.0], [48.0, 683.0], [48.1, 684.0], [48.2, 685.0], [48.3, 685.0], [48.4, 687.0], [48.5, 687.0], [48.6, 688.0], [48.7, 688.0], [48.8, 689.0], [48.9, 689.0], [49.0, 689.0], [49.1, 690.0], [49.2, 690.0], [49.3, 691.0], [49.4, 691.0], [49.5, 692.0], [49.6, 692.0], [49.7, 692.0], [49.8, 693.0], [49.9, 694.0], [50.0, 695.0], [50.1, 695.0], [50.2, 695.0], [50.3, 695.0], [50.4, 696.0], [50.5, 696.0], [50.6, 697.0], [50.7, 697.0], [50.8, 698.0], [50.9, 698.0], [51.0, 698.0], [51.1, 698.0], [51.2, 699.0], [51.3, 700.0], [51.4, 700.0], [51.5, 700.0], [51.6, 701.0], [51.7, 701.0], [51.8, 701.0], [51.9, 701.0], [52.0, 702.0], [52.1, 702.0], [52.2, 702.0], [52.3, 703.0], [52.4, 703.0], [52.5, 704.0], [52.6, 704.0], [52.7, 704.0], [52.8, 705.0], [52.9, 705.0], [53.0, 705.0], [53.1, 706.0], [53.2, 706.0], [53.3, 707.0], [53.4, 707.0], [53.5, 707.0], [53.6, 708.0], [53.7, 708.0], [53.8, 709.0], [53.9, 709.0], [54.0, 710.0], [54.1, 710.0], [54.2, 710.0], [54.3, 711.0], [54.4, 711.0], [54.5, 711.0], [54.6, 711.0], [54.7, 712.0], [54.8, 712.0], [54.9, 712.0], [55.0, 713.0], [55.1, 713.0], [55.2, 713.0], [55.3, 714.0], [55.4, 714.0], [55.5, 715.0], [55.6, 715.0], [55.7, 716.0], [55.8, 716.0], [55.9, 716.0], [56.0, 716.0], [56.1, 716.0], [56.2, 717.0], [56.3, 717.0], [56.4, 717.0], [56.5, 718.0], [56.6, 718.0], [56.7, 718.0], [56.8, 719.0], [56.9, 719.0], [57.0, 720.0], [57.1, 720.0], [57.2, 720.0], [57.3, 721.0], [57.4, 721.0], [57.5, 721.0], [57.6, 722.0], [57.7, 722.0], [57.8, 723.0], [57.9, 723.0], [58.0, 724.0], [58.1, 725.0], [58.2, 725.0], [58.3, 726.0], [58.4, 726.0], [58.5, 726.0], [58.6, 726.0], [58.7, 727.0], [58.8, 728.0], [58.9, 728.0], [59.0, 728.0], [59.1, 729.0], [59.2, 729.0], [59.3, 729.0], [59.4, 729.0], [59.5, 730.0], [59.6, 730.0], [59.7, 730.0], [59.8, 731.0], [59.9, 731.0], [60.0, 731.0], [60.1, 732.0], [60.2, 732.0], [60.3, 732.0], [60.4, 733.0], [60.5, 733.0], [60.6, 733.0], [60.7, 733.0], [60.8, 734.0], [60.9, 734.0], [61.0, 734.0], [61.1, 735.0], [61.2, 735.0], [61.3, 735.0], [61.4, 736.0], [61.5, 736.0], [61.6, 737.0], [61.7, 737.0], [61.8, 738.0], [61.9, 738.0], [62.0, 738.0], [62.1, 739.0], [62.2, 739.0], [62.3, 739.0], [62.4, 740.0], [62.5, 740.0], [62.6, 740.0], [62.7, 740.0], [62.8, 741.0], [62.9, 741.0], [63.0, 741.0], [63.1, 741.0], [63.2, 742.0], [63.3, 742.0], [63.4, 742.0], [63.5, 743.0], [63.6, 743.0], [63.7, 743.0], [63.8, 744.0], [63.9, 744.0], [64.0, 744.0], [64.1, 744.0], [64.2, 745.0], [64.3, 745.0], [64.4, 746.0], [64.5, 746.0], [64.6, 746.0], [64.7, 747.0], [64.8, 747.0], [64.9, 747.0], [65.0, 748.0], [65.1, 749.0], [65.2, 749.0], [65.3, 750.0], [65.4, 751.0], [65.5, 751.0], [65.6, 751.0], [65.7, 751.0], [65.8, 752.0], [65.9, 752.0], [66.0, 752.0], [66.1, 753.0], [66.2, 753.0], [66.3, 753.0], [66.4, 754.0], [66.5, 754.0], [66.6, 754.0], [66.7, 755.0], [66.8, 755.0], [66.9, 755.0], [67.0, 756.0], [67.1, 756.0], [67.2, 756.0], [67.3, 757.0], [67.4, 757.0], [67.5, 757.0], [67.6, 757.0], [67.7, 758.0], [67.8, 758.0], [67.9, 758.0], [68.0, 758.0], [68.1, 759.0], [68.2, 759.0], [68.3, 759.0], [68.4, 760.0], [68.5, 760.0], [68.6, 760.0], [68.7, 761.0], [68.8, 761.0], [68.9, 761.0], [69.0, 761.0], [69.1, 762.0], [69.2, 762.0], [69.3, 762.0], [69.4, 762.0], [69.5, 763.0], [69.6, 763.0], [69.7, 764.0], [69.8, 764.0], [69.9, 764.0], [70.0, 765.0], [70.1, 765.0], [70.2, 765.0], [70.3, 766.0], [70.4, 766.0], [70.5, 766.0], [70.6, 766.0], [70.7, 767.0], [70.8, 767.0], [70.9, 768.0], [71.0, 768.0], [71.1, 768.0], [71.2, 768.0], [71.3, 769.0], [71.4, 769.0], [71.5, 769.0], [71.6, 770.0], [71.7, 770.0], [71.8, 770.0], [71.9, 770.0], [72.0, 771.0], [72.1, 771.0], [72.2, 771.0], [72.3, 772.0], [72.4, 772.0], [72.5, 773.0], [72.6, 773.0], [72.7, 773.0], [72.8, 774.0], [72.9, 774.0], [73.0, 774.0], [73.1, 774.0], [73.2, 775.0], [73.3, 775.0], [73.4, 776.0], [73.5, 776.0], [73.6, 776.0], [73.7, 777.0], [73.8, 778.0], [73.9, 779.0], [74.0, 779.0], [74.1, 780.0], [74.2, 780.0], [74.3, 781.0], [74.4, 781.0], [74.5, 781.0], [74.6, 782.0], [74.7, 782.0], [74.8, 783.0], [74.9, 783.0], [75.0, 783.0], [75.1, 784.0], [75.2, 784.0], [75.3, 784.0], [75.4, 785.0], [75.5, 785.0], [75.6, 786.0], [75.7, 786.0], [75.8, 787.0], [75.9, 787.0], [76.0, 787.0], [76.1, 788.0], [76.2, 788.0], [76.3, 789.0], [76.4, 789.0], [76.5, 789.0], [76.6, 790.0], [76.7, 790.0], [76.8, 790.0], [76.9, 791.0], [77.0, 791.0], [77.1, 791.0], [77.2, 792.0], [77.3, 792.0], [77.4, 793.0], [77.5, 793.0], [77.6, 793.0], [77.7, 794.0], [77.8, 794.0], [77.9, 795.0], [78.0, 795.0], [78.1, 795.0], [78.2, 796.0], [78.3, 796.0], [78.4, 797.0], [78.5, 797.0], [78.6, 797.0], [78.7, 797.0], [78.8, 798.0], [78.9, 798.0], [79.0, 799.0], [79.1, 799.0], [79.2, 799.0], [79.3, 800.0], [79.4, 800.0], [79.5, 800.0], [79.6, 800.0], [79.7, 800.0], [79.8, 801.0], [79.9, 802.0], [80.0, 802.0], [80.1, 802.0], [80.2, 803.0], [80.3, 803.0], [80.4, 803.0], [80.5, 803.0], [80.6, 804.0], [80.7, 804.0], [80.8, 805.0], [80.9, 805.0], [81.0, 806.0], [81.1, 806.0], [81.2, 806.0], [81.3, 807.0], [81.4, 807.0], [81.5, 807.0], [81.6, 808.0], [81.7, 808.0], [81.8, 808.0], [81.9, 808.0], [82.0, 809.0], [82.1, 809.0], [82.2, 809.0], [82.3, 810.0], [82.4, 811.0], [82.5, 811.0], [82.6, 812.0], [82.7, 812.0], [82.8, 813.0], [82.9, 814.0], [83.0, 814.0], [83.1, 814.0], [83.2, 815.0], [83.3, 815.0], [83.4, 815.0], [83.5, 815.0], [83.6, 816.0], [83.7, 816.0], [83.8, 817.0], [83.9, 817.0], [84.0, 818.0], [84.1, 818.0], [84.2, 818.0], [84.3, 818.0], [84.4, 818.0], [84.5, 819.0], [84.6, 819.0], [84.7, 819.0], [84.8, 820.0], [84.9, 820.0], [85.0, 820.0], [85.1, 821.0], [85.2, 821.0], [85.3, 822.0], [85.4, 823.0], [85.5, 823.0], [85.6, 824.0], [85.7, 824.0], [85.8, 825.0], [85.9, 826.0], [86.0, 826.0], [86.1, 827.0], [86.2, 828.0], [86.3, 828.0], [86.4, 829.0], [86.5, 829.0], [86.6, 829.0], [86.7, 830.0], [86.8, 830.0], [86.9, 830.0], [87.0, 831.0], [87.1, 831.0], [87.2, 831.0], [87.3, 832.0], [87.4, 832.0], [87.5, 832.0], [87.6, 833.0], [87.7, 833.0], [87.8, 834.0], [87.9, 834.0], [88.0, 835.0], [88.1, 836.0], [88.2, 836.0], [88.3, 837.0], [88.4, 838.0], [88.5, 838.0], [88.6, 838.0], [88.7, 839.0], [88.8, 839.0], [88.9, 840.0], [89.0, 840.0], [89.1, 841.0], [89.2, 841.0], [89.3, 842.0], [89.4, 843.0], [89.5, 843.0], [89.6, 844.0], [89.7, 844.0], [89.8, 845.0], [89.9, 845.0], [90.0, 846.0], [90.1, 846.0], [90.2, 846.0], [90.3, 847.0], [90.4, 847.0], [90.5, 847.0], [90.6, 848.0], [90.7, 848.0], [90.8, 849.0], [90.9, 850.0], [91.0, 851.0], [91.1, 851.0], [91.2, 851.0], [91.3, 852.0], [91.4, 852.0], [91.5, 853.0], [91.6, 854.0], [91.7, 854.0], [91.8, 854.0], [91.9, 855.0], [92.0, 856.0], [92.1, 856.0], [92.2, 857.0], [92.3, 857.0], [92.4, 858.0], [92.5, 858.0], [92.6, 859.0], [92.7, 859.0], [92.8, 860.0], [92.9, 860.0], [93.0, 861.0], [93.1, 861.0], [93.2, 862.0], [93.3, 863.0], [93.4, 864.0], [93.5, 864.0], [93.6, 865.0], [93.7, 866.0], [93.8, 867.0], [93.9, 868.0], [94.0, 869.0], [94.1, 869.0], [94.2, 870.0], [94.3, 870.0], [94.4, 871.0], [94.5, 871.0], [94.6, 872.0], [94.7, 873.0], [94.8, 874.0], [94.9, 875.0], [95.0, 876.0], [95.1, 877.0], [95.2, 878.0], [95.3, 879.0], [95.4, 880.0], [95.5, 881.0], [95.6, 881.0], [95.7, 883.0], [95.8, 884.0], [95.9, 885.0], [96.0, 886.0], [96.1, 887.0], [96.2, 888.0], [96.3, 890.0], [96.4, 891.0], [96.5, 892.0], [96.6, 894.0], [96.7, 895.0], [96.8, 897.0], [96.9, 899.0], [97.0, 900.0], [97.1, 903.0], [97.2, 903.0], [97.3, 904.0], [97.4, 905.0], [97.5, 907.0], [97.6, 908.0], [97.7, 909.0], [97.8, 910.0], [97.9, 912.0], [98.0, 914.0], [98.1, 918.0], [98.2, 920.0], [98.3, 922.0], [98.4, 926.0], [98.5, 928.0], [98.6, 934.0], [98.7, 937.0], [98.8, 941.0], [98.9, 945.0], [99.0, 952.0], [99.1, 967.0], [99.2, 974.0], [99.3, 993.0], [99.4, 1027.0], [99.5, 1048.0], [99.6, 1081.0], [99.7, 1124.0], [99.8, 1203.0], [99.9, 1617.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1116.0, "series": [{"data": [[600.0, 714.0], [700.0, 1116.0], [800.0, 706.0], [200.0, 6.0], [900.0, 93.0], [1000.0, 14.0], [1100.0, 5.0], [1200.0, 2.0], [300.0, 45.0], [1300.0, 1.0], [1500.0, 1.0], [1600.0, 1.0], [400.0, 444.0], [1700.0, 1.0], [1800.0, 2.0], [500.0, 836.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3481.0, "series": [{"data": [[0.0, 501.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3481.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 5.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.954887218045116, "minX": 1.58180628E12, "maxY": 9.0, "series": [{"data": [[1.58180646E12, 9.0], [1.58180628E12, 9.0], [1.5818064E12, 9.0], [1.58180652E12, 8.954887218045116], [1.58180634E12, 9.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180652E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 357.0, "minX": 1.0, "maxY": 716.0, "series": [{"data": [[8.0, 512.0], [4.0, 532.0], [2.0, 474.0], [1.0, 357.0], [9.0, 675.9507413923106], [5.0, 433.0], [6.0, 682.0], [3.0, 456.0], [7.0, 716.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}, {"data": [[8.99097065462754, 675.6383245548042]], "isOverall": false, "label": "getProductByCategory-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 9.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2570.9666666666667, "minX": 1.58180628E12, "maxY": 219520.25, "series": [{"data": [[1.58180646E12, 218713.51666666666], [1.58180628E12, 210283.76666666666], [1.5818064E12, 219520.25], [1.58180652E12, 216802.3], [1.58180634E12, 217891.78333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58180646E12, 2673.9666666666667], [1.58180628E12, 2570.9666666666667], [1.5818064E12, 2683.9333333333334], [1.58180652E12, 2650.65], [1.58180634E12, 2664.05]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180652E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 668.5378881987591, "minX": 1.58180628E12, "maxY": 692.2997416020672, "series": [{"data": [[1.58180646E12, 668.5378881987591], [1.58180628E12, 692.2997416020672], [1.5818064E12, 670.7029702970286], [1.58180652E12, 675.8333333333321], [1.58180634E12, 671.4638403990031]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180652E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 630.0782608695653, "minX": 1.58180628E12, "maxY": 649.5710594315244, "series": [{"data": [[1.58180646E12, 630.0782608695653], [1.58180628E12, 649.5710594315244], [1.5818064E12, 631.8960396039605], [1.58180652E12, 635.4912280701752], [1.58180634E12, 632.3690773067332]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180652E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 41.126708074534164, "minX": 1.58180628E12, "maxY": 46.23643410852714, "series": [{"data": [[1.58180646E12, 41.126708074534164], [1.58180628E12, 46.23643410852714], [1.5818064E12, 41.7660891089109], [1.58180652E12, 42.88847117794488], [1.58180634E12, 41.867830423940156]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180652E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 206.0, "minX": 1.58180628E12, "maxY": 1831.0, "series": [{"data": [[1.58180646E12, 942.0], [1.58180628E12, 1831.0], [1.5818064E12, 1027.0], [1.58180652E12, 1124.0], [1.58180634E12, 947.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58180646E12, 315.0], [1.58180628E12, 237.0], [1.5818064E12, 354.0], [1.58180652E12, 257.0], [1.58180634E12, 206.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58180646E12, 828.4], [1.58180628E12, 885.5], [1.5818064E12, 838.0], [1.58180652E12, 846.1], [1.58180634E12, 838.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58180646E12, 903.9399999999999], [1.58180628E12, 1224.5], [1.5818064E12, 918.0999999999997], [1.58180652E12, 945.05], [1.58180634E12, 902.97]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58180646E12, 853.0999999999998], [1.58180628E12, 926.25], [1.5818064E12, 859.55], [1.58180652E12, 877.0], [1.58180634E12, 860.8499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180652E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 672.0, "minX": 7.0, "maxY": 812.0, "series": [{"data": [[16.0, 718.0], [17.0, 700.0], [9.0, 812.0], [18.0, 711.5], [10.0, 712.0], [11.0, 693.5], [12.0, 715.0], [13.0, 677.0], [14.0, 672.0], [7.0, 793.0], [15.0, 688.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 631.5, "minX": 7.0, "maxY": 771.0, "series": [{"data": [[16.0, 679.0], [17.0, 663.0], [9.0, 771.0], [18.0, 662.5], [10.0, 671.0], [11.0, 654.5], [12.0, 673.5], [13.0, 640.0], [14.0, 631.5], [7.0, 755.0], [15.0, 649.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.58180622E12, "maxY": 13.466666666666667, "series": [{"data": [[1.58180646E12, 13.416666666666666], [1.58180628E12, 12.966666666666667], [1.58180622E12, 0.08333333333333333], [1.5818064E12, 13.466666666666667], [1.58180652E12, 13.15], [1.58180634E12, 13.366666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180652E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.9, "minX": 1.58180628E12, "maxY": 13.466666666666667, "series": [{"data": [[1.58180646E12, 13.416666666666666], [1.58180628E12, 12.9], [1.5818064E12, 13.466666666666667], [1.58180652E12, 13.3], [1.58180634E12, 13.366666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180652E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.9, "minX": 1.58180628E12, "maxY": 13.466666666666667, "series": [{"data": [[1.58180646E12, 13.416666666666666], [1.58180628E12, 12.9], [1.5818064E12, 13.466666666666667], [1.58180652E12, 13.3], [1.58180634E12, 13.366666666666667]], "isOverall": false, "label": "getProductByCategory-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180652E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.9, "minX": 1.58180628E12, "maxY": 13.466666666666667, "series": [{"data": [[1.58180646E12, 13.416666666666666], [1.58180628E12, 12.9], [1.5818064E12, 13.466666666666667], [1.58180652E12, 13.3], [1.58180634E12, 13.366666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180652E12, "title": "Total Transactions Per Second"}},
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

