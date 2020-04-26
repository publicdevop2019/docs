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
        data: {"result": {"minY": 199.0, "minX": 0.0, "maxY": 1389.0, "series": [{"data": [[0.0, 199.0], [0.1, 255.0], [0.2, 281.0], [0.3, 285.0], [0.4, 290.0], [0.5, 294.0], [0.6, 295.0], [0.7, 296.0], [0.8, 301.0], [0.9, 301.0], [1.0, 302.0], [1.1, 307.0], [1.2, 311.0], [1.3, 314.0], [1.4, 316.0], [1.5, 324.0], [1.6, 326.0], [1.7, 329.0], [1.8, 331.0], [1.9, 333.0], [2.0, 336.0], [2.1, 340.0], [2.2, 341.0], [2.3, 344.0], [2.4, 345.0], [2.5, 345.0], [2.6, 347.0], [2.7, 349.0], [2.8, 350.0], [2.9, 352.0], [3.0, 352.0], [3.1, 353.0], [3.2, 353.0], [3.3, 354.0], [3.4, 355.0], [3.5, 357.0], [3.6, 358.0], [3.7, 359.0], [3.8, 359.0], [3.9, 360.0], [4.0, 362.0], [4.1, 362.0], [4.2, 363.0], [4.3, 364.0], [4.4, 366.0], [4.5, 367.0], [4.6, 370.0], [4.7, 371.0], [4.8, 372.0], [4.9, 373.0], [5.0, 374.0], [5.1, 377.0], [5.2, 377.0], [5.3, 377.0], [5.4, 378.0], [5.5, 380.0], [5.6, 381.0], [5.7, 382.0], [5.8, 382.0], [5.9, 383.0], [6.0, 384.0], [6.1, 384.0], [6.2, 385.0], [6.3, 386.0], [6.4, 387.0], [6.5, 387.0], [6.6, 388.0], [6.7, 389.0], [6.8, 389.0], [6.9, 390.0], [7.0, 390.0], [7.1, 391.0], [7.2, 392.0], [7.3, 392.0], [7.4, 393.0], [7.5, 394.0], [7.6, 394.0], [7.7, 395.0], [7.8, 396.0], [7.9, 397.0], [8.0, 397.0], [8.1, 398.0], [8.2, 398.0], [8.3, 399.0], [8.4, 400.0], [8.5, 400.0], [8.6, 401.0], [8.7, 402.0], [8.8, 403.0], [8.9, 403.0], [9.0, 404.0], [9.1, 404.0], [9.2, 405.0], [9.3, 405.0], [9.4, 406.0], [9.5, 407.0], [9.6, 407.0], [9.7, 408.0], [9.8, 408.0], [9.9, 409.0], [10.0, 409.0], [10.1, 410.0], [10.2, 410.0], [10.3, 410.0], [10.4, 411.0], [10.5, 412.0], [10.6, 412.0], [10.7, 412.0], [10.8, 413.0], [10.9, 413.0], [11.0, 413.0], [11.1, 414.0], [11.2, 415.0], [11.3, 416.0], [11.4, 416.0], [11.5, 416.0], [11.6, 417.0], [11.7, 417.0], [11.8, 417.0], [11.9, 418.0], [12.0, 418.0], [12.1, 419.0], [12.2, 420.0], [12.3, 420.0], [12.4, 421.0], [12.5, 423.0], [12.6, 423.0], [12.7, 424.0], [12.8, 424.0], [12.9, 425.0], [13.0, 426.0], [13.1, 426.0], [13.2, 426.0], [13.3, 427.0], [13.4, 428.0], [13.5, 428.0], [13.6, 428.0], [13.7, 429.0], [13.8, 429.0], [13.9, 429.0], [14.0, 430.0], [14.1, 431.0], [14.2, 431.0], [14.3, 432.0], [14.4, 432.0], [14.5, 433.0], [14.6, 434.0], [14.7, 434.0], [14.8, 434.0], [14.9, 435.0], [15.0, 435.0], [15.1, 436.0], [15.2, 437.0], [15.3, 437.0], [15.4, 438.0], [15.5, 438.0], [15.6, 439.0], [15.7, 440.0], [15.8, 440.0], [15.9, 441.0], [16.0, 442.0], [16.1, 442.0], [16.2, 442.0], [16.3, 443.0], [16.4, 443.0], [16.5, 444.0], [16.6, 445.0], [16.7, 445.0], [16.8, 446.0], [16.9, 446.0], [17.0, 446.0], [17.1, 447.0], [17.2, 448.0], [17.3, 448.0], [17.4, 448.0], [17.5, 449.0], [17.6, 450.0], [17.7, 450.0], [17.8, 451.0], [17.9, 451.0], [18.0, 451.0], [18.1, 451.0], [18.2, 452.0], [18.3, 452.0], [18.4, 453.0], [18.5, 454.0], [18.6, 455.0], [18.7, 455.0], [18.8, 456.0], [18.9, 456.0], [19.0, 457.0], [19.1, 458.0], [19.2, 458.0], [19.3, 459.0], [19.4, 459.0], [19.5, 460.0], [19.6, 460.0], [19.7, 460.0], [19.8, 461.0], [19.9, 462.0], [20.0, 462.0], [20.1, 463.0], [20.2, 463.0], [20.3, 463.0], [20.4, 464.0], [20.5, 464.0], [20.6, 464.0], [20.7, 465.0], [20.8, 465.0], [20.9, 465.0], [21.0, 465.0], [21.1, 467.0], [21.2, 467.0], [21.3, 468.0], [21.4, 469.0], [21.5, 469.0], [21.6, 469.0], [21.7, 471.0], [21.8, 471.0], [21.9, 472.0], [22.0, 473.0], [22.1, 474.0], [22.2, 474.0], [22.3, 475.0], [22.4, 475.0], [22.5, 476.0], [22.6, 477.0], [22.7, 477.0], [22.8, 477.0], [22.9, 478.0], [23.0, 478.0], [23.1, 480.0], [23.2, 480.0], [23.3, 481.0], [23.4, 482.0], [23.5, 482.0], [23.6, 482.0], [23.7, 483.0], [23.8, 483.0], [23.9, 484.0], [24.0, 484.0], [24.1, 485.0], [24.2, 485.0], [24.3, 485.0], [24.4, 486.0], [24.5, 486.0], [24.6, 486.0], [24.7, 487.0], [24.8, 487.0], [24.9, 488.0], [25.0, 488.0], [25.1, 488.0], [25.2, 489.0], [25.3, 490.0], [25.4, 491.0], [25.5, 492.0], [25.6, 492.0], [25.7, 492.0], [25.8, 493.0], [25.9, 495.0], [26.0, 496.0], [26.1, 496.0], [26.2, 498.0], [26.3, 498.0], [26.4, 498.0], [26.5, 499.0], [26.6, 500.0], [26.7, 501.0], [26.8, 502.0], [26.9, 502.0], [27.0, 504.0], [27.1, 504.0], [27.2, 506.0], [27.3, 506.0], [27.4, 507.0], [27.5, 507.0], [27.6, 508.0], [27.7, 509.0], [27.8, 509.0], [27.9, 510.0], [28.0, 512.0], [28.1, 512.0], [28.2, 513.0], [28.3, 514.0], [28.4, 514.0], [28.5, 514.0], [28.6, 515.0], [28.7, 516.0], [28.8, 516.0], [28.9, 518.0], [29.0, 519.0], [29.1, 519.0], [29.2, 520.0], [29.3, 520.0], [29.4, 521.0], [29.5, 521.0], [29.6, 522.0], [29.7, 522.0], [29.8, 523.0], [29.9, 524.0], [30.0, 525.0], [30.1, 525.0], [30.2, 526.0], [30.3, 526.0], [30.4, 527.0], [30.5, 527.0], [30.6, 527.0], [30.7, 528.0], [30.8, 529.0], [30.9, 530.0], [31.0, 530.0], [31.1, 531.0], [31.2, 531.0], [31.3, 532.0], [31.4, 533.0], [31.5, 535.0], [31.6, 535.0], [31.7, 535.0], [31.8, 535.0], [31.9, 536.0], [32.0, 536.0], [32.1, 537.0], [32.2, 538.0], [32.3, 539.0], [32.4, 540.0], [32.5, 540.0], [32.6, 540.0], [32.7, 541.0], [32.8, 541.0], [32.9, 542.0], [33.0, 543.0], [33.1, 544.0], [33.2, 544.0], [33.3, 545.0], [33.4, 546.0], [33.5, 546.0], [33.6, 547.0], [33.7, 547.0], [33.8, 548.0], [33.9, 549.0], [34.0, 549.0], [34.1, 550.0], [34.2, 550.0], [34.3, 551.0], [34.4, 552.0], [34.5, 552.0], [34.6, 553.0], [34.7, 553.0], [34.8, 554.0], [34.9, 555.0], [35.0, 555.0], [35.1, 555.0], [35.2, 556.0], [35.3, 557.0], [35.4, 558.0], [35.5, 558.0], [35.6, 559.0], [35.7, 560.0], [35.8, 560.0], [35.9, 560.0], [36.0, 560.0], [36.1, 561.0], [36.2, 562.0], [36.3, 562.0], [36.4, 563.0], [36.5, 563.0], [36.6, 563.0], [36.7, 564.0], [36.8, 565.0], [36.9, 566.0], [37.0, 566.0], [37.1, 567.0], [37.2, 567.0], [37.3, 568.0], [37.4, 568.0], [37.5, 569.0], [37.6, 570.0], [37.7, 570.0], [37.8, 571.0], [37.9, 572.0], [38.0, 572.0], [38.1, 573.0], [38.2, 573.0], [38.3, 574.0], [38.4, 574.0], [38.5, 574.0], [38.6, 575.0], [38.7, 575.0], [38.8, 575.0], [38.9, 576.0], [39.0, 576.0], [39.1, 577.0], [39.2, 577.0], [39.3, 577.0], [39.4, 578.0], [39.5, 578.0], [39.6, 579.0], [39.7, 580.0], [39.8, 580.0], [39.9, 581.0], [40.0, 581.0], [40.1, 582.0], [40.2, 583.0], [40.3, 583.0], [40.4, 584.0], [40.5, 585.0], [40.6, 585.0], [40.7, 586.0], [40.8, 586.0], [40.9, 587.0], [41.0, 587.0], [41.1, 587.0], [41.2, 588.0], [41.3, 588.0], [41.4, 589.0], [41.5, 590.0], [41.6, 591.0], [41.7, 592.0], [41.8, 593.0], [41.9, 593.0], [42.0, 594.0], [42.1, 594.0], [42.2, 595.0], [42.3, 595.0], [42.4, 596.0], [42.5, 596.0], [42.6, 597.0], [42.7, 597.0], [42.8, 598.0], [42.9, 598.0], [43.0, 599.0], [43.1, 599.0], [43.2, 600.0], [43.3, 600.0], [43.4, 600.0], [43.5, 601.0], [43.6, 601.0], [43.7, 602.0], [43.8, 602.0], [43.9, 603.0], [44.0, 603.0], [44.1, 604.0], [44.2, 604.0], [44.3, 605.0], [44.4, 606.0], [44.5, 607.0], [44.6, 607.0], [44.7, 608.0], [44.8, 609.0], [44.9, 609.0], [45.0, 609.0], [45.1, 610.0], [45.2, 610.0], [45.3, 611.0], [45.4, 611.0], [45.5, 611.0], [45.6, 611.0], [45.7, 612.0], [45.8, 613.0], [45.9, 614.0], [46.0, 614.0], [46.1, 614.0], [46.2, 615.0], [46.3, 616.0], [46.4, 616.0], [46.5, 617.0], [46.6, 617.0], [46.7, 617.0], [46.8, 618.0], [46.9, 618.0], [47.0, 619.0], [47.1, 620.0], [47.2, 620.0], [47.3, 621.0], [47.4, 621.0], [47.5, 622.0], [47.6, 622.0], [47.7, 622.0], [47.8, 624.0], [47.9, 624.0], [48.0, 625.0], [48.1, 625.0], [48.2, 625.0], [48.3, 626.0], [48.4, 626.0], [48.5, 627.0], [48.6, 628.0], [48.7, 628.0], [48.8, 629.0], [48.9, 629.0], [49.0, 630.0], [49.1, 631.0], [49.2, 631.0], [49.3, 632.0], [49.4, 632.0], [49.5, 632.0], [49.6, 633.0], [49.7, 633.0], [49.8, 634.0], [49.9, 635.0], [50.0, 635.0], [50.1, 635.0], [50.2, 636.0], [50.3, 636.0], [50.4, 637.0], [50.5, 637.0], [50.6, 638.0], [50.7, 638.0], [50.8, 639.0], [50.9, 639.0], [51.0, 640.0], [51.1, 640.0], [51.2, 640.0], [51.3, 641.0], [51.4, 642.0], [51.5, 642.0], [51.6, 642.0], [51.7, 643.0], [51.8, 643.0], [51.9, 644.0], [52.0, 644.0], [52.1, 644.0], [52.2, 645.0], [52.3, 646.0], [52.4, 646.0], [52.5, 646.0], [52.6, 646.0], [52.7, 647.0], [52.8, 648.0], [52.9, 648.0], [53.0, 648.0], [53.1, 649.0], [53.2, 649.0], [53.3, 650.0], [53.4, 650.0], [53.5, 651.0], [53.6, 652.0], [53.7, 652.0], [53.8, 652.0], [53.9, 653.0], [54.0, 653.0], [54.1, 654.0], [54.2, 655.0], [54.3, 655.0], [54.4, 656.0], [54.5, 656.0], [54.6, 657.0], [54.7, 657.0], [54.8, 658.0], [54.9, 659.0], [55.0, 659.0], [55.1, 660.0], [55.2, 660.0], [55.3, 660.0], [55.4, 661.0], [55.5, 661.0], [55.6, 662.0], [55.7, 662.0], [55.8, 662.0], [55.9, 662.0], [56.0, 663.0], [56.1, 663.0], [56.2, 664.0], [56.3, 664.0], [56.4, 664.0], [56.5, 665.0], [56.6, 665.0], [56.7, 666.0], [56.8, 666.0], [56.9, 667.0], [57.0, 667.0], [57.1, 667.0], [57.2, 668.0], [57.3, 669.0], [57.4, 669.0], [57.5, 669.0], [57.6, 670.0], [57.7, 670.0], [57.8, 670.0], [57.9, 671.0], [58.0, 671.0], [58.1, 671.0], [58.2, 671.0], [58.3, 672.0], [58.4, 672.0], [58.5, 673.0], [58.6, 673.0], [58.7, 674.0], [58.8, 674.0], [58.9, 674.0], [59.0, 674.0], [59.1, 675.0], [59.2, 675.0], [59.3, 676.0], [59.4, 676.0], [59.5, 676.0], [59.6, 677.0], [59.7, 678.0], [59.8, 678.0], [59.9, 679.0], [60.0, 679.0], [60.1, 679.0], [60.2, 680.0], [60.3, 680.0], [60.4, 681.0], [60.5, 681.0], [60.6, 682.0], [60.7, 682.0], [60.8, 682.0], [60.9, 682.0], [61.0, 683.0], [61.1, 683.0], [61.2, 684.0], [61.3, 684.0], [61.4, 684.0], [61.5, 685.0], [61.6, 685.0], [61.7, 686.0], [61.8, 686.0], [61.9, 686.0], [62.0, 687.0], [62.1, 687.0], [62.2, 687.0], [62.3, 687.0], [62.4, 688.0], [62.5, 688.0], [62.6, 688.0], [62.7, 689.0], [62.8, 689.0], [62.9, 689.0], [63.0, 690.0], [63.1, 690.0], [63.2, 691.0], [63.3, 691.0], [63.4, 691.0], [63.5, 692.0], [63.6, 693.0], [63.7, 693.0], [63.8, 693.0], [63.9, 693.0], [64.0, 694.0], [64.1, 694.0], [64.2, 695.0], [64.3, 695.0], [64.4, 696.0], [64.5, 697.0], [64.6, 697.0], [64.7, 697.0], [64.8, 698.0], [64.9, 698.0], [65.0, 699.0], [65.1, 699.0], [65.2, 699.0], [65.3, 700.0], [65.4, 700.0], [65.5, 700.0], [65.6, 700.0], [65.7, 701.0], [65.8, 701.0], [65.9, 701.0], [66.0, 702.0], [66.1, 702.0], [66.2, 702.0], [66.3, 702.0], [66.4, 702.0], [66.5, 703.0], [66.6, 703.0], [66.7, 704.0], [66.8, 704.0], [66.9, 704.0], [67.0, 705.0], [67.1, 705.0], [67.2, 705.0], [67.3, 706.0], [67.4, 706.0], [67.5, 706.0], [67.6, 707.0], [67.7, 707.0], [67.8, 708.0], [67.9, 708.0], [68.0, 709.0], [68.1, 709.0], [68.2, 709.0], [68.3, 710.0], [68.4, 710.0], [68.5, 710.0], [68.6, 711.0], [68.7, 711.0], [68.8, 711.0], [68.9, 712.0], [69.0, 712.0], [69.1, 713.0], [69.2, 713.0], [69.3, 713.0], [69.4, 713.0], [69.5, 714.0], [69.6, 714.0], [69.7, 714.0], [69.8, 714.0], [69.9, 715.0], [70.0, 715.0], [70.1, 716.0], [70.2, 716.0], [70.3, 716.0], [70.4, 716.0], [70.5, 716.0], [70.6, 717.0], [70.7, 717.0], [70.8, 717.0], [70.9, 717.0], [71.0, 718.0], [71.1, 718.0], [71.2, 718.0], [71.3, 719.0], [71.4, 719.0], [71.5, 719.0], [71.6, 719.0], [71.7, 719.0], [71.8, 720.0], [71.9, 720.0], [72.0, 721.0], [72.1, 721.0], [72.2, 722.0], [72.3, 722.0], [72.4, 722.0], [72.5, 722.0], [72.6, 723.0], [72.7, 723.0], [72.8, 723.0], [72.9, 724.0], [73.0, 724.0], [73.1, 724.0], [73.2, 725.0], [73.3, 725.0], [73.4, 725.0], [73.5, 726.0], [73.6, 726.0], [73.7, 726.0], [73.8, 727.0], [73.9, 727.0], [74.0, 727.0], [74.1, 728.0], [74.2, 728.0], [74.3, 728.0], [74.4, 728.0], [74.5, 729.0], [74.6, 729.0], [74.7, 729.0], [74.8, 729.0], [74.9, 730.0], [75.0, 730.0], [75.1, 731.0], [75.2, 732.0], [75.3, 732.0], [75.4, 733.0], [75.5, 733.0], [75.6, 733.0], [75.7, 734.0], [75.8, 734.0], [75.9, 734.0], [76.0, 735.0], [76.1, 735.0], [76.2, 736.0], [76.3, 736.0], [76.4, 737.0], [76.5, 737.0], [76.6, 737.0], [76.7, 738.0], [76.8, 738.0], [76.9, 738.0], [77.0, 739.0], [77.1, 739.0], [77.2, 740.0], [77.3, 740.0], [77.4, 741.0], [77.5, 741.0], [77.6, 741.0], [77.7, 741.0], [77.8, 742.0], [77.9, 742.0], [78.0, 742.0], [78.1, 743.0], [78.2, 744.0], [78.3, 744.0], [78.4, 744.0], [78.5, 745.0], [78.6, 745.0], [78.7, 745.0], [78.8, 746.0], [78.9, 746.0], [79.0, 747.0], [79.1, 747.0], [79.2, 747.0], [79.3, 748.0], [79.4, 748.0], [79.5, 748.0], [79.6, 749.0], [79.7, 750.0], [79.8, 750.0], [79.9, 751.0], [80.0, 751.0], [80.1, 752.0], [80.2, 752.0], [80.3, 753.0], [80.4, 753.0], [80.5, 753.0], [80.6, 754.0], [80.7, 754.0], [80.8, 754.0], [80.9, 755.0], [81.0, 755.0], [81.1, 755.0], [81.2, 755.0], [81.3, 756.0], [81.4, 756.0], [81.5, 757.0], [81.6, 757.0], [81.7, 758.0], [81.8, 758.0], [81.9, 759.0], [82.0, 759.0], [82.1, 760.0], [82.2, 761.0], [82.3, 761.0], [82.4, 761.0], [82.5, 762.0], [82.6, 762.0], [82.7, 763.0], [82.8, 763.0], [82.9, 764.0], [83.0, 764.0], [83.1, 764.0], [83.2, 764.0], [83.3, 765.0], [83.4, 766.0], [83.5, 766.0], [83.6, 767.0], [83.7, 767.0], [83.8, 767.0], [83.9, 767.0], [84.0, 768.0], [84.1, 769.0], [84.2, 769.0], [84.3, 770.0], [84.4, 770.0], [84.5, 771.0], [84.6, 771.0], [84.7, 772.0], [84.8, 772.0], [84.9, 772.0], [85.0, 772.0], [85.1, 772.0], [85.2, 773.0], [85.3, 773.0], [85.4, 774.0], [85.5, 774.0], [85.6, 774.0], [85.7, 774.0], [85.8, 775.0], [85.9, 775.0], [86.0, 776.0], [86.1, 776.0], [86.2, 776.0], [86.3, 777.0], [86.4, 777.0], [86.5, 777.0], [86.6, 778.0], [86.7, 778.0], [86.8, 778.0], [86.9, 779.0], [87.0, 779.0], [87.1, 779.0], [87.2, 780.0], [87.3, 780.0], [87.4, 781.0], [87.5, 781.0], [87.6, 781.0], [87.7, 782.0], [87.8, 782.0], [87.9, 783.0], [88.0, 783.0], [88.1, 783.0], [88.2, 784.0], [88.3, 784.0], [88.4, 785.0], [88.5, 785.0], [88.6, 786.0], [88.7, 786.0], [88.8, 786.0], [88.9, 787.0], [89.0, 787.0], [89.1, 788.0], [89.2, 789.0], [89.3, 789.0], [89.4, 790.0], [89.5, 790.0], [89.6, 790.0], [89.7, 791.0], [89.8, 791.0], [89.9, 792.0], [90.0, 792.0], [90.1, 793.0], [90.2, 794.0], [90.3, 794.0], [90.4, 795.0], [90.5, 795.0], [90.6, 796.0], [90.7, 796.0], [90.8, 797.0], [90.9, 797.0], [91.0, 798.0], [91.1, 800.0], [91.2, 801.0], [91.3, 802.0], [91.4, 803.0], [91.5, 803.0], [91.6, 803.0], [91.7, 803.0], [91.8, 804.0], [91.9, 804.0], [92.0, 805.0], [92.1, 806.0], [92.2, 807.0], [92.3, 808.0], [92.4, 809.0], [92.5, 809.0], [92.6, 809.0], [92.7, 811.0], [92.8, 811.0], [92.9, 812.0], [93.0, 813.0], [93.1, 813.0], [93.2, 814.0], [93.3, 816.0], [93.4, 816.0], [93.5, 817.0], [93.6, 817.0], [93.7, 818.0], [93.8, 819.0], [93.9, 820.0], [94.0, 821.0], [94.1, 823.0], [94.2, 824.0], [94.3, 825.0], [94.4, 827.0], [94.5, 828.0], [94.6, 828.0], [94.7, 830.0], [94.8, 831.0], [94.9, 832.0], [95.0, 832.0], [95.1, 833.0], [95.2, 835.0], [95.3, 836.0], [95.4, 836.0], [95.5, 837.0], [95.6, 838.0], [95.7, 839.0], [95.8, 841.0], [95.9, 842.0], [96.0, 843.0], [96.1, 844.0], [96.2, 846.0], [96.3, 848.0], [96.4, 849.0], [96.5, 852.0], [96.6, 856.0], [96.7, 857.0], [96.8, 858.0], [96.9, 859.0], [97.0, 862.0], [97.1, 863.0], [97.2, 866.0], [97.3, 869.0], [97.4, 871.0], [97.5, 872.0], [97.6, 875.0], [97.7, 876.0], [97.8, 884.0], [97.9, 886.0], [98.0, 888.0], [98.1, 889.0], [98.2, 898.0], [98.3, 900.0], [98.4, 904.0], [98.5, 912.0], [98.6, 921.0], [98.7, 933.0], [98.8, 938.0], [98.9, 946.0], [99.0, 960.0], [99.1, 984.0], [99.2, 999.0], [99.3, 1005.0], [99.4, 1040.0], [99.5, 1068.0], [99.6, 1083.0], [99.7, 1146.0], [99.8, 1197.0], [99.9, 1246.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 876.0, "series": [{"data": [[600.0, 750.0], [700.0, 876.0], [200.0, 26.0], [800.0, 245.0], [900.0, 31.0], [1000.0, 14.0], [1100.0, 7.0], [300.0, 257.0], [1200.0, 4.0], [1300.0, 2.0], [400.0, 617.0], [100.0, 1.0], [500.0, 564.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 905.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2489.0, "series": [{"data": [[0.0, 905.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2489.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.944162436548223, "minX": 1.58180268E12, "maxY": 7.0, "series": [{"data": [[1.58180298E12, 6.9573170731707314], [1.5818028E12, 7.0], [1.58180286E12, 7.0], [1.58180268E12, 6.944162436548223], [1.58180274E12, 7.0], [1.58180292E12, 7.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180298E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 405.0, "minX": 1.0, "maxY": 617.9101654846351, "series": [{"data": [[4.0, 405.0], [2.0, 597.0], [1.0, 498.0], [5.0, 416.0], [6.0, 606.0], [3.0, 600.0], [7.0, 617.9101654846351]], "isOverall": false, "label": "getProductByCategory", "isController": false}, {"data": [[6.990571596935763, 617.4899823217445]], "isOverall": false, "label": "getProductByCategory-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 7.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 651.1666666666666, "minX": 1.58180268E12, "maxY": 188279.88333333333, "series": [{"data": [[1.58180298E12, 133672.93333333332], [1.5818028E12, 188279.88333333333], [1.58180286E12, 182028.21666666667], [1.58180268E12, 53523.96666666667], [1.58180274E12, 180937.96666666667], [1.58180292E12, 183661.71666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58180298E12, 1626.0666666666666], [1.5818028E12, 2290.35], [1.58180286E12, 2214.383333333333], [1.58180268E12, 651.1666666666666], [1.58180274E12, 2201.133333333333], [1.58180292E12, 2234.133333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180298E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 597.1319796954309, "minX": 1.58180268E12, "maxY": 630.067567567567, "series": [{"data": [[1.58180298E12, 607.934959349594], [1.5818028E12, 605.5093795093796], [1.58180286E12, 627.2447761194023], [1.58180268E12, 597.1319796954309], [1.58180274E12, 630.067567567567], [1.58180292E12, 620.5991124260356]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180298E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 557.6649746192895, "minX": 1.58180268E12, "maxY": 590.9174174174167, "series": [{"data": [[1.58180298E12, 569.6524390243901], [1.5818028E12, 566.7041847041851], [1.58180286E12, 587.7641791044772], [1.58180268E12, 557.6649746192895], [1.58180274E12, 590.9174174174167], [1.58180292E12, 581.7100591715973]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180298E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 41.06349206349204, "minX": 1.58180268E12, "maxY": 41.979695431472074, "series": [{"data": [[1.58180298E12, 41.57723577235772], [1.5818028E12, 41.06349206349204], [1.58180286E12, 41.586567164179066], [1.58180268E12, 41.979695431472074], [1.58180274E12, 41.58258258258255], [1.58180292E12, 41.25443786982249]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180298E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 199.0, "minX": 1.58180268E12, "maxY": 1389.0, "series": [{"data": [[1.58180298E12, 912.0], [1.5818028E12, 1195.0], [1.58180286E12, 1224.0], [1.58180268E12, 837.0], [1.58180274E12, 1389.0], [1.58180292E12, 960.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58180298E12, 282.0], [1.5818028E12, 199.0], [1.58180286E12, 287.0], [1.58180268E12, 206.0], [1.58180274E12, 243.0], [1.58180292E12, 295.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58180298E12, 787.0], [1.5818028E12, 775.6], [1.58180286E12, 803.9], [1.58180268E12, 771.6], [1.58180274E12, 812.3000000000001], [1.58180292E12, 794.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58180298E12, 876.6999999999999], [1.5818028E12, 901.9399999999973], [1.58180286E12, 997.3199999999997], [1.58180268E12, 833.08], [1.58180274E12, 1155.4600000000025], [1.58180292E12, 884.9200000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58180298E12, 817.0], [1.5818028E12, 812.5999999999999], [1.58180286E12, 858.4499999999999], [1.58180268E12, 797.5999999999999], [1.58180274E12, 881.8999999999999], [1.58180292E12, 830.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180298E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 295.0, "minX": 4.0, "maxY": 856.0, "series": [{"data": [[4.0, 295.0], [8.0, 713.5], [9.0, 678.0], [10.0, 681.0], [11.0, 624.0], [12.0, 609.5], [6.0, 856.0], [13.0, 590.5], [7.0, 765.5], [14.0, 601.0], [15.0, 589.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 257.5, "minX": 4.0, "maxY": 821.0, "series": [{"data": [[4.0, 257.5], [8.0, 676.5], [9.0, 640.0], [10.0, 642.0], [11.0, 588.0], [12.0, 570.5], [6.0, 821.0], [13.0, 550.0], [7.0, 709.0], [14.0, 560.0], [15.0, 554.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.4, "minX": 1.58180268E12, "maxY": 11.55, "series": [{"data": [[1.58180298E12, 8.083333333333334], [1.5818028E12, 11.55], [1.58180286E12, 11.166666666666666], [1.58180268E12, 3.4], [1.58180274E12, 11.1], [1.58180292E12, 11.266666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180298E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.283333333333333, "minX": 1.58180268E12, "maxY": 11.55, "series": [{"data": [[1.58180298E12, 8.2], [1.5818028E12, 11.55], [1.58180286E12, 11.166666666666666], [1.58180268E12, 3.283333333333333], [1.58180274E12, 11.1], [1.58180292E12, 11.266666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180298E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.283333333333333, "minX": 1.58180268E12, "maxY": 11.55, "series": [{"data": [[1.58180298E12, 8.2], [1.5818028E12, 11.55], [1.58180286E12, 11.166666666666666], [1.58180268E12, 3.283333333333333], [1.58180274E12, 11.1], [1.58180292E12, 11.266666666666667]], "isOverall": false, "label": "getProductByCategory-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180298E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.283333333333333, "minX": 1.58180268E12, "maxY": 11.55, "series": [{"data": [[1.58180298E12, 8.2], [1.5818028E12, 11.55], [1.58180286E12, 11.166666666666666], [1.58180268E12, 3.283333333333333], [1.58180274E12, 11.1], [1.58180292E12, 11.266666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180298E12, "title": "Total Transactions Per Second"}},
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

