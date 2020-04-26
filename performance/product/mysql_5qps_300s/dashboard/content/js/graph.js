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
        data: {"result": {"minY": 176.0, "minX": 0.0, "maxY": 1139.0, "series": [{"data": [[0.0, 176.0], [0.1, 177.0], [0.2, 179.0], [0.3, 183.0], [0.4, 187.0], [0.5, 189.0], [0.6, 190.0], [0.7, 190.0], [0.8, 193.0], [0.9, 194.0], [1.0, 196.0], [1.1, 198.0], [1.2, 200.0], [1.3, 202.0], [1.4, 203.0], [1.5, 203.0], [1.6, 204.0], [1.7, 207.0], [1.8, 207.0], [1.9, 207.0], [2.0, 209.0], [2.1, 210.0], [2.2, 211.0], [2.3, 212.0], [2.4, 213.0], [2.5, 215.0], [2.6, 216.0], [2.7, 217.0], [2.8, 219.0], [2.9, 219.0], [3.0, 220.0], [3.1, 220.0], [3.2, 221.0], [3.3, 223.0], [3.4, 224.0], [3.5, 225.0], [3.6, 226.0], [3.7, 227.0], [3.8, 228.0], [3.9, 228.0], [4.0, 229.0], [4.1, 229.0], [4.2, 229.0], [4.3, 231.0], [4.4, 231.0], [4.5, 231.0], [4.6, 234.0], [4.7, 235.0], [4.8, 236.0], [4.9, 238.0], [5.0, 238.0], [5.1, 239.0], [5.2, 240.0], [5.3, 240.0], [5.4, 241.0], [5.5, 242.0], [5.6, 242.0], [5.7, 244.0], [5.8, 245.0], [5.9, 247.0], [6.0, 248.0], [6.1, 248.0], [6.2, 250.0], [6.3, 251.0], [6.4, 253.0], [6.5, 254.0], [6.6, 256.0], [6.7, 256.0], [6.8, 257.0], [6.9, 258.0], [7.0, 260.0], [7.1, 260.0], [7.2, 262.0], [7.3, 263.0], [7.4, 263.0], [7.5, 264.0], [7.6, 265.0], [7.7, 266.0], [7.8, 266.0], [7.9, 266.0], [8.0, 267.0], [8.1, 268.0], [8.2, 269.0], [8.3, 269.0], [8.4, 269.0], [8.5, 270.0], [8.6, 271.0], [8.7, 271.0], [8.8, 272.0], [8.9, 274.0], [9.0, 275.0], [9.1, 275.0], [9.2, 276.0], [9.3, 276.0], [9.4, 277.0], [9.5, 278.0], [9.6, 279.0], [9.7, 279.0], [9.8, 280.0], [9.9, 280.0], [10.0, 281.0], [10.1, 282.0], [10.2, 282.0], [10.3, 283.0], [10.4, 284.0], [10.5, 284.0], [10.6, 285.0], [10.7, 286.0], [10.8, 288.0], [10.9, 288.0], [11.0, 289.0], [11.1, 290.0], [11.2, 291.0], [11.3, 291.0], [11.4, 292.0], [11.5, 292.0], [11.6, 293.0], [11.7, 293.0], [11.8, 294.0], [11.9, 294.0], [12.0, 295.0], [12.1, 296.0], [12.2, 297.0], [12.3, 298.0], [12.4, 298.0], [12.5, 298.0], [12.6, 299.0], [12.7, 299.0], [12.8, 299.0], [12.9, 300.0], [13.0, 301.0], [13.1, 301.0], [13.2, 302.0], [13.3, 302.0], [13.4, 303.0], [13.5, 303.0], [13.6, 304.0], [13.7, 304.0], [13.8, 305.0], [13.9, 306.0], [14.0, 307.0], [14.1, 307.0], [14.2, 308.0], [14.3, 309.0], [14.4, 309.0], [14.5, 310.0], [14.6, 310.0], [14.7, 311.0], [14.8, 311.0], [14.9, 312.0], [15.0, 313.0], [15.1, 314.0], [15.2, 314.0], [15.3, 315.0], [15.4, 316.0], [15.5, 316.0], [15.6, 317.0], [15.7, 317.0], [15.8, 318.0], [15.9, 319.0], [16.0, 319.0], [16.1, 320.0], [16.2, 321.0], [16.3, 321.0], [16.4, 322.0], [16.5, 322.0], [16.6, 322.0], [16.7, 323.0], [16.8, 323.0], [16.9, 324.0], [17.0, 324.0], [17.1, 324.0], [17.2, 325.0], [17.3, 325.0], [17.4, 326.0], [17.5, 327.0], [17.6, 327.0], [17.7, 328.0], [17.8, 329.0], [17.9, 329.0], [18.0, 329.0], [18.1, 330.0], [18.2, 331.0], [18.3, 331.0], [18.4, 331.0], [18.5, 332.0], [18.6, 332.0], [18.7, 333.0], [18.8, 333.0], [18.9, 333.0], [19.0, 334.0], [19.1, 334.0], [19.2, 335.0], [19.3, 335.0], [19.4, 335.0], [19.5, 336.0], [19.6, 336.0], [19.7, 337.0], [19.8, 337.0], [19.9, 338.0], [20.0, 338.0], [20.1, 338.0], [20.2, 339.0], [20.3, 339.0], [20.4, 340.0], [20.5, 340.0], [20.6, 340.0], [20.7, 341.0], [20.8, 341.0], [20.9, 341.0], [21.0, 342.0], [21.1, 342.0], [21.2, 342.0], [21.3, 342.0], [21.4, 342.0], [21.5, 342.0], [21.6, 343.0], [21.7, 343.0], [21.8, 344.0], [21.9, 344.0], [22.0, 344.0], [22.1, 345.0], [22.2, 345.0], [22.3, 346.0], [22.4, 346.0], [22.5, 347.0], [22.6, 348.0], [22.7, 348.0], [22.8, 349.0], [22.9, 349.0], [23.0, 349.0], [23.1, 349.0], [23.2, 350.0], [23.3, 351.0], [23.4, 351.0], [23.5, 351.0], [23.6, 352.0], [23.7, 352.0], [23.8, 352.0], [23.9, 352.0], [24.0, 353.0], [24.1, 353.0], [24.2, 354.0], [24.3, 354.0], [24.4, 355.0], [24.5, 355.0], [24.6, 355.0], [24.7, 356.0], [24.8, 357.0], [24.9, 357.0], [25.0, 357.0], [25.1, 358.0], [25.2, 358.0], [25.3, 358.0], [25.4, 359.0], [25.5, 359.0], [25.6, 360.0], [25.7, 360.0], [25.8, 360.0], [25.9, 361.0], [26.0, 361.0], [26.1, 362.0], [26.2, 362.0], [26.3, 362.0], [26.4, 362.0], [26.5, 363.0], [26.6, 363.0], [26.7, 363.0], [26.8, 363.0], [26.9, 364.0], [27.0, 364.0], [27.1, 365.0], [27.2, 366.0], [27.3, 366.0], [27.4, 367.0], [27.5, 367.0], [27.6, 367.0], [27.7, 368.0], [27.8, 368.0], [27.9, 368.0], [28.0, 368.0], [28.1, 369.0], [28.2, 369.0], [28.3, 370.0], [28.4, 370.0], [28.5, 371.0], [28.6, 372.0], [28.7, 372.0], [28.8, 372.0], [28.9, 373.0], [29.0, 373.0], [29.1, 373.0], [29.2, 374.0], [29.3, 374.0], [29.4, 374.0], [29.5, 375.0], [29.6, 375.0], [29.7, 375.0], [29.8, 376.0], [29.9, 376.0], [30.0, 377.0], [30.1, 378.0], [30.2, 379.0], [30.3, 379.0], [30.4, 379.0], [30.5, 379.0], [30.6, 380.0], [30.7, 381.0], [30.8, 381.0], [30.9, 382.0], [31.0, 382.0], [31.1, 383.0], [31.2, 383.0], [31.3, 384.0], [31.4, 385.0], [31.5, 385.0], [31.6, 385.0], [31.7, 386.0], [31.8, 386.0], [31.9, 386.0], [32.0, 386.0], [32.1, 387.0], [32.2, 387.0], [32.3, 387.0], [32.4, 388.0], [32.5, 388.0], [32.6, 389.0], [32.7, 389.0], [32.8, 390.0], [32.9, 390.0], [33.0, 391.0], [33.1, 391.0], [33.2, 391.0], [33.3, 392.0], [33.4, 392.0], [33.5, 393.0], [33.6, 393.0], [33.7, 393.0], [33.8, 394.0], [33.9, 394.0], [34.0, 394.0], [34.1, 395.0], [34.2, 395.0], [34.3, 395.0], [34.4, 396.0], [34.5, 396.0], [34.6, 397.0], [34.7, 398.0], [34.8, 398.0], [34.9, 398.0], [35.0, 398.0], [35.1, 399.0], [35.2, 400.0], [35.3, 400.0], [35.4, 401.0], [35.5, 401.0], [35.6, 401.0], [35.7, 401.0], [35.8, 402.0], [35.9, 403.0], [36.0, 403.0], [36.1, 404.0], [36.2, 404.0], [36.3, 405.0], [36.4, 405.0], [36.5, 406.0], [36.6, 406.0], [36.7, 406.0], [36.8, 407.0], [36.9, 407.0], [37.0, 407.0], [37.1, 407.0], [37.2, 407.0], [37.3, 408.0], [37.4, 408.0], [37.5, 408.0], [37.6, 409.0], [37.7, 409.0], [37.8, 409.0], [37.9, 410.0], [38.0, 410.0], [38.1, 411.0], [38.2, 411.0], [38.3, 411.0], [38.4, 412.0], [38.5, 412.0], [38.6, 413.0], [38.7, 413.0], [38.8, 413.0], [38.9, 414.0], [39.0, 414.0], [39.1, 415.0], [39.2, 416.0], [39.3, 416.0], [39.4, 416.0], [39.5, 416.0], [39.6, 418.0], [39.7, 418.0], [39.8, 419.0], [39.9, 419.0], [40.0, 419.0], [40.1, 420.0], [40.2, 420.0], [40.3, 421.0], [40.4, 421.0], [40.5, 421.0], [40.6, 421.0], [40.7, 422.0], [40.8, 422.0], [40.9, 423.0], [41.0, 423.0], [41.1, 424.0], [41.2, 424.0], [41.3, 425.0], [41.4, 425.0], [41.5, 426.0], [41.6, 426.0], [41.7, 427.0], [41.8, 427.0], [41.9, 427.0], [42.0, 427.0], [42.1, 428.0], [42.2, 428.0], [42.3, 429.0], [42.4, 429.0], [42.5, 430.0], [42.6, 430.0], [42.7, 430.0], [42.8, 430.0], [42.9, 431.0], [43.0, 431.0], [43.1, 431.0], [43.2, 432.0], [43.3, 432.0], [43.4, 433.0], [43.5, 433.0], [43.6, 433.0], [43.7, 434.0], [43.8, 434.0], [43.9, 434.0], [44.0, 435.0], [44.1, 435.0], [44.2, 435.0], [44.3, 436.0], [44.4, 436.0], [44.5, 436.0], [44.6, 437.0], [44.7, 437.0], [44.8, 438.0], [44.9, 438.0], [45.0, 438.0], [45.1, 438.0], [45.2, 439.0], [45.3, 439.0], [45.4, 439.0], [45.5, 440.0], [45.6, 440.0], [45.7, 441.0], [45.8, 442.0], [45.9, 442.0], [46.0, 442.0], [46.1, 443.0], [46.2, 443.0], [46.3, 443.0], [46.4, 443.0], [46.5, 443.0], [46.6, 444.0], [46.7, 444.0], [46.8, 444.0], [46.9, 444.0], [47.0, 445.0], [47.1, 445.0], [47.2, 446.0], [47.3, 446.0], [47.4, 446.0], [47.5, 446.0], [47.6, 446.0], [47.7, 447.0], [47.8, 447.0], [47.9, 448.0], [48.0, 448.0], [48.1, 448.0], [48.2, 449.0], [48.3, 449.0], [48.4, 449.0], [48.5, 449.0], [48.6, 450.0], [48.7, 450.0], [48.8, 451.0], [48.9, 451.0], [49.0, 451.0], [49.1, 452.0], [49.2, 452.0], [49.3, 452.0], [49.4, 453.0], [49.5, 453.0], [49.6, 453.0], [49.7, 453.0], [49.8, 453.0], [49.9, 454.0], [50.0, 454.0], [50.1, 455.0], [50.2, 455.0], [50.3, 455.0], [50.4, 456.0], [50.5, 456.0], [50.6, 456.0], [50.7, 457.0], [50.8, 457.0], [50.9, 457.0], [51.0, 458.0], [51.1, 458.0], [51.2, 459.0], [51.3, 459.0], [51.4, 459.0], [51.5, 460.0], [51.6, 460.0], [51.7, 461.0], [51.8, 461.0], [51.9, 461.0], [52.0, 461.0], [52.1, 462.0], [52.2, 462.0], [52.3, 462.0], [52.4, 462.0], [52.5, 463.0], [52.6, 463.0], [52.7, 464.0], [52.8, 464.0], [52.9, 464.0], [53.0, 465.0], [53.1, 465.0], [53.2, 466.0], [53.3, 466.0], [53.4, 466.0], [53.5, 467.0], [53.6, 467.0], [53.7, 468.0], [53.8, 468.0], [53.9, 468.0], [54.0, 469.0], [54.1, 469.0], [54.2, 469.0], [54.3, 469.0], [54.4, 470.0], [54.5, 470.0], [54.6, 470.0], [54.7, 470.0], [54.8, 471.0], [54.9, 471.0], [55.0, 471.0], [55.1, 472.0], [55.2, 472.0], [55.3, 472.0], [55.4, 472.0], [55.5, 473.0], [55.6, 473.0], [55.7, 473.0], [55.8, 473.0], [55.9, 474.0], [56.0, 474.0], [56.1, 474.0], [56.2, 475.0], [56.3, 475.0], [56.4, 475.0], [56.5, 476.0], [56.6, 476.0], [56.7, 476.0], [56.8, 477.0], [56.9, 477.0], [57.0, 477.0], [57.1, 477.0], [57.2, 478.0], [57.3, 478.0], [57.4, 479.0], [57.5, 479.0], [57.6, 479.0], [57.7, 480.0], [57.8, 480.0], [57.9, 480.0], [58.0, 480.0], [58.1, 480.0], [58.2, 481.0], [58.3, 481.0], [58.4, 481.0], [58.5, 482.0], [58.6, 482.0], [58.7, 482.0], [58.8, 483.0], [58.9, 483.0], [59.0, 483.0], [59.1, 483.0], [59.2, 483.0], [59.3, 484.0], [59.4, 484.0], [59.5, 485.0], [59.6, 485.0], [59.7, 485.0], [59.8, 486.0], [59.9, 486.0], [60.0, 486.0], [60.1, 487.0], [60.2, 487.0], [60.3, 487.0], [60.4, 487.0], [60.5, 488.0], [60.6, 488.0], [60.7, 488.0], [60.8, 489.0], [60.9, 489.0], [61.0, 490.0], [61.1, 490.0], [61.2, 490.0], [61.3, 490.0], [61.4, 491.0], [61.5, 491.0], [61.6, 492.0], [61.7, 492.0], [61.8, 492.0], [61.9, 492.0], [62.0, 493.0], [62.1, 493.0], [62.2, 494.0], [62.3, 494.0], [62.4, 494.0], [62.5, 495.0], [62.6, 495.0], [62.7, 495.0], [62.8, 495.0], [62.9, 496.0], [63.0, 496.0], [63.1, 496.0], [63.2, 496.0], [63.3, 497.0], [63.4, 497.0], [63.5, 497.0], [63.6, 498.0], [63.7, 498.0], [63.8, 498.0], [63.9, 498.0], [64.0, 498.0], [64.1, 499.0], [64.2, 499.0], [64.3, 499.0], [64.4, 499.0], [64.5, 499.0], [64.6, 500.0], [64.7, 500.0], [64.8, 501.0], [64.9, 502.0], [65.0, 502.0], [65.1, 502.0], [65.2, 503.0], [65.3, 503.0], [65.4, 503.0], [65.5, 504.0], [65.6, 504.0], [65.7, 504.0], [65.8, 505.0], [65.9, 505.0], [66.0, 505.0], [66.1, 506.0], [66.2, 506.0], [66.3, 506.0], [66.4, 506.0], [66.5, 507.0], [66.6, 507.0], [66.7, 507.0], [66.8, 508.0], [66.9, 508.0], [67.0, 508.0], [67.1, 509.0], [67.2, 509.0], [67.3, 509.0], [67.4, 509.0], [67.5, 510.0], [67.6, 510.0], [67.7, 510.0], [67.8, 511.0], [67.9, 511.0], [68.0, 511.0], [68.1, 512.0], [68.2, 512.0], [68.3, 512.0], [68.4, 513.0], [68.5, 513.0], [68.6, 514.0], [68.7, 514.0], [68.8, 514.0], [68.9, 515.0], [69.0, 515.0], [69.1, 515.0], [69.2, 515.0], [69.3, 516.0], [69.4, 516.0], [69.5, 516.0], [69.6, 516.0], [69.7, 516.0], [69.8, 517.0], [69.9, 517.0], [70.0, 517.0], [70.1, 517.0], [70.2, 518.0], [70.3, 518.0], [70.4, 518.0], [70.5, 519.0], [70.6, 519.0], [70.7, 519.0], [70.8, 520.0], [70.9, 520.0], [71.0, 520.0], [71.1, 521.0], [71.2, 521.0], [71.3, 521.0], [71.4, 521.0], [71.5, 522.0], [71.6, 522.0], [71.7, 523.0], [71.8, 523.0], [71.9, 523.0], [72.0, 524.0], [72.1, 524.0], [72.2, 524.0], [72.3, 525.0], [72.4, 525.0], [72.5, 525.0], [72.6, 525.0], [72.7, 526.0], [72.8, 526.0], [72.9, 526.0], [73.0, 526.0], [73.1, 527.0], [73.2, 527.0], [73.3, 527.0], [73.4, 527.0], [73.5, 528.0], [73.6, 528.0], [73.7, 528.0], [73.8, 529.0], [73.9, 529.0], [74.0, 529.0], [74.1, 529.0], [74.2, 530.0], [74.3, 530.0], [74.4, 530.0], [74.5, 530.0], [74.6, 530.0], [74.7, 531.0], [74.8, 531.0], [74.9, 531.0], [75.0, 532.0], [75.1, 532.0], [75.2, 532.0], [75.3, 532.0], [75.4, 532.0], [75.5, 533.0], [75.6, 533.0], [75.7, 533.0], [75.8, 533.0], [75.9, 534.0], [76.0, 534.0], [76.1, 534.0], [76.2, 535.0], [76.3, 535.0], [76.4, 535.0], [76.5, 535.0], [76.6, 536.0], [76.7, 536.0], [76.8, 536.0], [76.9, 536.0], [77.0, 537.0], [77.1, 537.0], [77.2, 537.0], [77.3, 537.0], [77.4, 537.0], [77.5, 537.0], [77.6, 537.0], [77.7, 538.0], [77.8, 539.0], [77.9, 539.0], [78.0, 539.0], [78.1, 539.0], [78.2, 539.0], [78.3, 540.0], [78.4, 540.0], [78.5, 540.0], [78.6, 541.0], [78.7, 541.0], [78.8, 541.0], [78.9, 542.0], [79.0, 542.0], [79.1, 542.0], [79.2, 542.0], [79.3, 542.0], [79.4, 543.0], [79.5, 543.0], [79.6, 543.0], [79.7, 543.0], [79.8, 544.0], [79.9, 544.0], [80.0, 544.0], [80.1, 545.0], [80.2, 545.0], [80.3, 545.0], [80.4, 546.0], [80.5, 546.0], [80.6, 546.0], [80.7, 546.0], [80.8, 547.0], [80.9, 547.0], [81.0, 547.0], [81.1, 547.0], [81.2, 548.0], [81.3, 548.0], [81.4, 548.0], [81.5, 548.0], [81.6, 549.0], [81.7, 549.0], [81.8, 549.0], [81.9, 549.0], [82.0, 549.0], [82.1, 550.0], [82.2, 550.0], [82.3, 550.0], [82.4, 551.0], [82.5, 551.0], [82.6, 551.0], [82.7, 551.0], [82.8, 552.0], [82.9, 552.0], [83.0, 552.0], [83.1, 552.0], [83.2, 553.0], [83.3, 553.0], [83.4, 553.0], [83.5, 554.0], [83.6, 554.0], [83.7, 555.0], [83.8, 555.0], [83.9, 555.0], [84.0, 556.0], [84.1, 556.0], [84.2, 557.0], [84.3, 557.0], [84.4, 558.0], [84.5, 558.0], [84.6, 558.0], [84.7, 559.0], [84.8, 559.0], [84.9, 559.0], [85.0, 560.0], [85.1, 560.0], [85.2, 561.0], [85.3, 561.0], [85.4, 561.0], [85.5, 561.0], [85.6, 561.0], [85.7, 562.0], [85.8, 562.0], [85.9, 562.0], [86.0, 563.0], [86.1, 563.0], [86.2, 563.0], [86.3, 563.0], [86.4, 564.0], [86.5, 565.0], [86.6, 565.0], [86.7, 565.0], [86.8, 566.0], [86.9, 566.0], [87.0, 566.0], [87.1, 566.0], [87.2, 567.0], [87.3, 567.0], [87.4, 568.0], [87.5, 568.0], [87.6, 568.0], [87.7, 568.0], [87.8, 569.0], [87.9, 569.0], [88.0, 570.0], [88.1, 570.0], [88.2, 570.0], [88.3, 570.0], [88.4, 570.0], [88.5, 571.0], [88.6, 571.0], [88.7, 571.0], [88.8, 572.0], [88.9, 572.0], [89.0, 572.0], [89.1, 573.0], [89.2, 573.0], [89.3, 574.0], [89.4, 574.0], [89.5, 574.0], [89.6, 575.0], [89.7, 575.0], [89.8, 575.0], [89.9, 576.0], [90.0, 576.0], [90.1, 576.0], [90.2, 577.0], [90.3, 577.0], [90.4, 578.0], [90.5, 578.0], [90.6, 578.0], [90.7, 579.0], [90.8, 580.0], [90.9, 581.0], [91.0, 581.0], [91.1, 581.0], [91.2, 582.0], [91.3, 583.0], [91.4, 583.0], [91.5, 584.0], [91.6, 584.0], [91.7, 584.0], [91.8, 585.0], [91.9, 586.0], [92.0, 586.0], [92.1, 586.0], [92.2, 587.0], [92.3, 587.0], [92.4, 588.0], [92.5, 588.0], [92.6, 588.0], [92.7, 589.0], [92.8, 590.0], [92.9, 591.0], [93.0, 592.0], [93.1, 592.0], [93.2, 593.0], [93.3, 594.0], [93.4, 594.0], [93.5, 595.0], [93.6, 596.0], [93.7, 596.0], [93.8, 597.0], [93.9, 598.0], [94.0, 598.0], [94.1, 599.0], [94.2, 600.0], [94.3, 600.0], [94.4, 601.0], [94.5, 601.0], [94.6, 602.0], [94.7, 603.0], [94.8, 604.0], [94.9, 604.0], [95.0, 605.0], [95.1, 606.0], [95.2, 607.0], [95.3, 609.0], [95.4, 610.0], [95.5, 610.0], [95.6, 611.0], [95.7, 612.0], [95.8, 612.0], [95.9, 613.0], [96.0, 614.0], [96.1, 615.0], [96.2, 616.0], [96.3, 617.0], [96.4, 618.0], [96.5, 619.0], [96.6, 620.0], [96.7, 621.0], [96.8, 622.0], [96.9, 623.0], [97.0, 624.0], [97.1, 625.0], [97.2, 626.0], [97.3, 629.0], [97.4, 632.0], [97.5, 633.0], [97.6, 637.0], [97.7, 639.0], [97.8, 643.0], [97.9, 648.0], [98.0, 649.0], [98.1, 650.0], [98.2, 653.0], [98.3, 657.0], [98.4, 660.0], [98.5, 665.0], [98.6, 668.0], [98.7, 674.0], [98.8, 681.0], [98.9, 684.0], [99.0, 686.0], [99.1, 701.0], [99.2, 716.0], [99.3, 719.0], [99.4, 737.0], [99.5, 790.0], [99.6, 818.0], [99.7, 839.0], [99.8, 904.0], [99.9, 1028.0], [100.0, 1139.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 100.0, "maxY": 999.0, "series": [{"data": [[1100.0, 2.0], [300.0, 753.0], [600.0, 167.0], [700.0, 16.0], [200.0, 393.0], [400.0, 991.0], [100.0, 39.0], [800.0, 8.0], [900.0, 3.0], [500.0, 999.0], [1000.0, 2.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1190.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2183.0, "series": [{"data": [[0.0, 2183.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1190.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.966183574879224, "minX": 1.581801E12, "maxY": 5.0, "series": [{"data": [[1.58180124E12, 5.0], [1.58180106E12, 5.0], [1.581801E12, 4.966183574879224], [1.58180118E12, 5.0], [1.58180112E12, 5.0], [1.5818013E12, 4.978213507625273]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5818013E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 304.5, "minX": 1.0, "maxY": 503.0, "series": [{"data": [[4.0, 304.5], [2.0, 427.0], [1.0, 503.0], [5.0, 443.7690249702726], [3.0, 319.3333333333333]], "isOverall": false, "label": "getProductByCategory", "isController": false}, {"data": [[4.994959976282252, 443.5057812036768]], "isOverall": false, "label": "getProductByCategory-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 684.2166666666667, "minX": 1.581801E12, "maxY": 187194.11666666667, "series": [{"data": [[1.58180124E12, 187194.11666666667], [1.58180106E12, 182302.46666666667], [1.581801E12, 56236.01666666667], [1.58180118E12, 182568.7], [1.58180112E12, 183391.93333333332], [1.5818013E12, 124706.91666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58180124E12, 2277.0333333333333], [1.58180106E12, 2217.6], [1.581801E12, 684.2166666666667], [1.58180118E12, 2221.0333333333333], [1.58180112E12, 2230.883333333333], [1.5818013E12, 1517.0333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5818013E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 433.5399129172718, "minX": 1.581801E12, "maxY": 461.4492753623189, "series": [{"data": [[1.58180124E12, 433.5399129172718], [1.58180106E12, 445.79582712369574], [1.581801E12, 461.4492753623189], [1.58180118E12, 447.15625000000017], [1.58180112E12, 443.5748148148145], [1.5818013E12, 441.57952069716777]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5818013E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 395.66908563134956, "minX": 1.581801E12, "maxY": 423.62318840579695, "series": [{"data": [[1.58180124E12, 395.66908563134956], [1.58180106E12, 407.68107302533514], [1.581801E12, 423.62318840579695], [1.58180118E12, 408.7752976190474], [1.58180112E12, 404.79259259259265], [1.5818013E12, 403.23093681917186]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5818013E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 40.632850241545924, "minX": 1.581801E12, "maxY": 41.31808278867103, "series": [{"data": [[1.58180124E12, 40.79100145137882], [1.58180106E12, 40.92101341281672], [1.581801E12, 40.632850241545924], [1.58180118E12, 40.811011904761926], [1.58180112E12, 41.127407407407404], [1.5818013E12, 41.31808278867103]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5818013E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 176.0, "minX": 1.581801E12, "maxY": 1139.0, "series": [{"data": [[1.58180124E12, 684.0], [1.58180106E12, 912.0], [1.581801E12, 1139.0], [1.58180118E12, 907.0], [1.58180112E12, 749.0], [1.5818013E12, 686.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58180124E12, 176.0], [1.58180106E12, 178.0], [1.581801E12, 189.0], [1.58180118E12, 177.0], [1.58180112E12, 176.0], [1.5818013E12, 183.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58180124E12, 566.0], [1.58180106E12, 578.0], [1.581801E12, 604.4000000000001], [1.58180118E12, 584.0], [1.58180112E12, 572.4], [1.5818013E12, 579.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58180124E12, 620.0], [1.58180106E12, 725.4799999999996], [1.581801E12, 1113.999999999999], [1.58180118E12, 709.2399999999998], [1.58180112E12, 677.24], [1.5818013E12, 665.4]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58180124E12, 583.0], [1.58180106E12, 610.0], [1.581801E12, 757.1999999999991], [1.58180118E12, 615.35], [1.58180112E12, 602.5999999999998], [1.5818013E12, 612.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5818013E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 405.0, "minX": 5.0, "maxY": 563.5, "series": [{"data": [[8.0, 510.0], [9.0, 500.0], [5.0, 427.0], [10.0, 499.0], [11.0, 461.0], [12.0, 408.0], [6.0, 563.5], [13.0, 406.0], [14.0, 405.0], [7.0, 537.0], [15.0, 438.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 365.0, "minX": 5.0, "maxY": 524.0, "series": [{"data": [[8.0, 471.5], [9.0, 463.0], [5.0, 391.0], [10.0, 462.0], [11.0, 420.0], [12.0, 370.0], [6.0, 524.0], [13.0, 367.0], [14.0, 365.0], [7.0, 501.0], [15.0, 402.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.533333333333333, "minX": 1.581801E12, "maxY": 11.483333333333333, "series": [{"data": [[1.58180124E12, 11.483333333333333], [1.58180106E12, 11.183333333333334], [1.581801E12, 3.533333333333333], [1.58180118E12, 11.2], [1.58180112E12, 11.25], [1.5818013E12, 7.566666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5818013E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.45, "minX": 1.581801E12, "maxY": 11.483333333333333, "series": [{"data": [[1.58180124E12, 11.483333333333333], [1.58180106E12, 11.183333333333334], [1.581801E12, 3.45], [1.58180118E12, 11.2], [1.58180112E12, 11.25], [1.5818013E12, 7.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.5818013E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.45, "minX": 1.581801E12, "maxY": 11.483333333333333, "series": [{"data": [[1.58180124E12, 11.483333333333333], [1.58180106E12, 11.183333333333334], [1.581801E12, 3.45], [1.58180118E12, 11.2], [1.58180112E12, 11.25], [1.5818013E12, 7.65]], "isOverall": false, "label": "getProductByCategory-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5818013E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.45, "minX": 1.581801E12, "maxY": 11.483333333333333, "series": [{"data": [[1.58180124E12, 11.483333333333333], [1.58180106E12, 11.183333333333334], [1.581801E12, 3.45], [1.58180118E12, 11.2], [1.58180112E12, 11.25], [1.5818013E12, 7.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.5818013E12, "title": "Total Transactions Per Second"}},
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

