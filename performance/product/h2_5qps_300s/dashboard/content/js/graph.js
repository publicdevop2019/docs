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
        data: {"result": {"minY": 1289.0, "minX": 0.0, "maxY": 5490.0, "series": [{"data": [[0.0, 1289.0], [0.1, 1289.0], [0.2, 1374.0], [0.3, 1374.0], [0.4, 1375.0], [0.5, 1400.0], [0.6, 1400.0], [0.7, 1410.0], [0.8, 1422.0], [0.9, 1422.0], [1.0, 1473.0], [1.1, 1570.0], [1.2, 1570.0], [1.3, 1608.0], [1.4, 1627.0], [1.5, 1627.0], [1.6, 1628.0], [1.7, 1631.0], [1.8, 1631.0], [1.9, 1637.0], [2.0, 1665.0], [2.1, 1665.0], [2.2, 1666.0], [2.3, 1669.0], [2.4, 1669.0], [2.5, 1676.0], [2.6, 1681.0], [2.7, 1681.0], [2.8, 1704.0], [2.9, 1704.0], [3.0, 1714.0], [3.1, 1715.0], [3.2, 1715.0], [3.3, 1719.0], [3.4, 1722.0], [3.5, 1722.0], [3.6, 1724.0], [3.7, 1725.0], [3.8, 1725.0], [3.9, 1733.0], [4.0, 1742.0], [4.1, 1742.0], [4.2, 1751.0], [4.3, 1759.0], [4.4, 1759.0], [4.5, 1768.0], [4.6, 1773.0], [4.7, 1773.0], [4.8, 1799.0], [4.9, 1804.0], [5.0, 1804.0], [5.1, 1804.0], [5.2, 1808.0], [5.3, 1808.0], [5.4, 1809.0], [5.5, 1809.0], [5.6, 1812.0], [5.7, 1815.0], [5.8, 1815.0], [5.9, 1818.0], [6.0, 1822.0], [6.1, 1822.0], [6.2, 1829.0], [6.3, 1829.0], [6.4, 1829.0], [6.5, 1840.0], [6.6, 1844.0], [6.7, 1844.0], [6.8, 1846.0], [6.9, 1853.0], [7.0, 1853.0], [7.1, 1856.0], [7.2, 1868.0], [7.3, 1868.0], [7.4, 1882.0], [7.5, 1884.0], [7.6, 1884.0], [7.7, 1884.0], [7.8, 1889.0], [7.9, 1889.0], [8.0, 1893.0], [8.1, 1893.0], [8.2, 1894.0], [8.3, 1895.0], [8.4, 1895.0], [8.5, 1897.0], [8.6, 1903.0], [8.7, 1903.0], [8.8, 1905.0], [8.9, 1906.0], [9.0, 1906.0], [9.1, 1912.0], [9.2, 1914.0], [9.3, 1914.0], [9.4, 1914.0], [9.5, 1921.0], [9.6, 1921.0], [9.7, 1924.0], [9.8, 1930.0], [9.9, 1930.0], [10.0, 1932.0], [10.1, 1933.0], [10.2, 1933.0], [10.3, 1933.0], [10.4, 1933.0], [10.5, 1933.0], [10.6, 1935.0], [10.7, 1935.0], [10.8, 1938.0], [10.9, 1938.0], [11.0, 1938.0], [11.1, 1945.0], [11.2, 1949.0], [11.3, 1949.0], [11.4, 1949.0], [11.5, 1956.0], [11.6, 1956.0], [11.7, 1957.0], [11.8, 1957.0], [11.9, 1957.0], [12.0, 1958.0], [12.1, 1959.0], [12.2, 1959.0], [12.3, 1959.0], [12.4, 1959.0], [12.5, 1959.0], [12.6, 1961.0], [12.7, 1963.0], [12.8, 1963.0], [12.9, 1964.0], [13.0, 1965.0], [13.1, 1965.0], [13.2, 1967.0], [13.3, 1967.0], [13.4, 1968.0], [13.5, 1969.0], [13.6, 1969.0], [13.7, 1971.0], [13.8, 1975.0], [13.9, 1975.0], [14.0, 1977.0], [14.1, 1980.0], [14.2, 1980.0], [14.3, 1983.0], [14.4, 1984.0], [14.5, 1984.0], [14.6, 1989.0], [14.7, 1990.0], [14.8, 1990.0], [14.9, 1991.0], [15.0, 1991.0], [15.1, 1991.0], [15.2, 1992.0], [15.3, 1995.0], [15.4, 1995.0], [15.5, 1995.0], [15.6, 1998.0], [15.7, 1998.0], [15.8, 1999.0], [15.9, 1999.0], [16.0, 2001.0], [16.1, 2003.0], [16.2, 2003.0], [16.3, 2004.0], [16.4, 2005.0], [16.5, 2005.0], [16.6, 2006.0], [16.7, 2007.0], [16.8, 2007.0], [16.9, 2007.0], [17.0, 2008.0], [17.1, 2008.0], [17.2, 2011.0], [17.3, 2012.0], [17.4, 2012.0], [17.5, 2013.0], [17.6, 2014.0], [17.7, 2014.0], [17.8, 2016.0], [17.9, 2017.0], [18.0, 2017.0], [18.1, 2017.0], [18.2, 2017.0], [18.3, 2017.0], [18.4, 2018.0], [18.5, 2018.0], [18.6, 2020.0], [18.7, 2022.0], [18.8, 2022.0], [18.9, 2027.0], [19.0, 2028.0], [19.1, 2028.0], [19.2, 2029.0], [19.3, 2031.0], [19.4, 2031.0], [19.5, 2033.0], [19.6, 2037.0], [19.7, 2037.0], [19.8, 2039.0], [19.9, 2040.0], [20.0, 2040.0], [20.1, 2040.0], [20.2, 2042.0], [20.3, 2042.0], [20.4, 2043.0], [20.5, 2047.0], [20.6, 2047.0], [20.7, 2048.0], [20.8, 2050.0], [20.9, 2050.0], [21.0, 2051.0], [21.1, 2051.0], [21.2, 2051.0], [21.3, 2052.0], [21.4, 2052.0], [21.5, 2052.0], [21.6, 2052.0], [21.7, 2052.0], [21.8, 2055.0], [21.9, 2057.0], [22.0, 2057.0], [22.1, 2062.0], [22.2, 2063.0], [22.3, 2063.0], [22.4, 2065.0], [22.5, 2069.0], [22.6, 2069.0], [22.7, 2070.0], [22.8, 2070.0], [22.9, 2070.0], [23.0, 2071.0], [23.1, 2072.0], [23.2, 2072.0], [23.3, 2073.0], [23.4, 2074.0], [23.5, 2074.0], [23.6, 2075.0], [23.7, 2075.0], [23.8, 2075.0], [23.9, 2075.0], [24.0, 2075.0], [24.1, 2078.0], [24.2, 2078.0], [24.3, 2078.0], [24.4, 2078.0], [24.5, 2080.0], [24.6, 2080.0], [24.7, 2081.0], [24.8, 2082.0], [24.9, 2082.0], [25.0, 2082.0], [25.1, 2083.0], [25.2, 2083.0], [25.3, 2084.0], [25.4, 2085.0], [25.5, 2085.0], [25.6, 2085.0], [25.7, 2086.0], [25.8, 2086.0], [25.9, 2087.0], [26.0, 2089.0], [26.1, 2089.0], [26.2, 2090.0], [26.3, 2090.0], [26.4, 2090.0], [26.5, 2092.0], [26.6, 2092.0], [26.7, 2094.0], [26.8, 2094.0], [26.9, 2094.0], [27.0, 2095.0], [27.1, 2098.0], [27.2, 2098.0], [27.3, 2098.0], [27.4, 2100.0], [27.5, 2100.0], [27.6, 2101.0], [27.7, 2101.0], [27.8, 2101.0], [27.9, 2102.0], [28.0, 2102.0], [28.1, 2102.0], [28.2, 2104.0], [28.3, 2106.0], [28.4, 2106.0], [28.5, 2108.0], [28.6, 2110.0], [28.7, 2110.0], [28.8, 2113.0], [28.9, 2114.0], [29.0, 2114.0], [29.1, 2115.0], [29.2, 2115.0], [29.3, 2115.0], [29.4, 2115.0], [29.5, 2115.0], [29.6, 2116.0], [29.7, 2117.0], [29.8, 2117.0], [29.9, 2118.0], [30.0, 2119.0], [30.1, 2119.0], [30.2, 2120.0], [30.3, 2120.0], [30.4, 2120.0], [30.5, 2123.0], [30.6, 2123.0], [30.7, 2123.0], [30.8, 2124.0], [30.9, 2124.0], [31.0, 2124.0], [31.1, 2124.0], [31.2, 2125.0], [31.3, 2125.0], [31.4, 2126.0], [31.5, 2126.0], [31.6, 2126.0], [31.7, 2127.0], [31.8, 2127.0], [31.9, 2127.0], [32.0, 2128.0], [32.1, 2128.0], [32.2, 2128.0], [32.3, 2128.0], [32.4, 2128.0], [32.5, 2129.0], [32.6, 2130.0], [32.7, 2130.0], [32.8, 2130.0], [32.9, 2130.0], [33.0, 2130.0], [33.1, 2131.0], [33.2, 2133.0], [33.3, 2133.0], [33.4, 2133.0], [33.5, 2133.0], [33.6, 2133.0], [33.7, 2134.0], [33.8, 2134.0], [33.9, 2134.0], [34.0, 2134.0], [34.1, 2135.0], [34.2, 2135.0], [34.3, 2136.0], [34.4, 2136.0], [34.5, 2137.0], [34.6, 2139.0], [34.7, 2139.0], [34.8, 2139.0], [34.9, 2140.0], [35.0, 2140.0], [35.1, 2140.0], [35.2, 2141.0], [35.3, 2141.0], [35.4, 2141.0], [35.5, 2142.0], [35.6, 2142.0], [35.7, 2142.0], [35.8, 2143.0], [35.9, 2143.0], [36.0, 2144.0], [36.1, 2146.0], [36.2, 2146.0], [36.3, 2147.0], [36.4, 2148.0], [36.5, 2148.0], [36.6, 2149.0], [36.7, 2150.0], [36.8, 2150.0], [36.9, 2151.0], [37.0, 2151.0], [37.1, 2151.0], [37.2, 2152.0], [37.3, 2152.0], [37.4, 2153.0], [37.5, 2154.0], [37.6, 2154.0], [37.7, 2156.0], [37.8, 2157.0], [37.9, 2157.0], [38.0, 2157.0], [38.1, 2158.0], [38.2, 2158.0], [38.3, 2158.0], [38.4, 2161.0], [38.5, 2161.0], [38.6, 2162.0], [38.7, 2164.0], [38.8, 2164.0], [38.9, 2164.0], [39.0, 2165.0], [39.1, 2165.0], [39.2, 2166.0], [39.3, 2166.0], [39.4, 2166.0], [39.5, 2166.0], [39.6, 2166.0], [39.7, 2167.0], [39.8, 2170.0], [39.9, 2170.0], [40.0, 2171.0], [40.1, 2176.0], [40.2, 2176.0], [40.3, 2177.0], [40.4, 2180.0], [40.5, 2180.0], [40.6, 2180.0], [40.7, 2182.0], [40.8, 2182.0], [40.9, 2184.0], [41.0, 2187.0], [41.1, 2187.0], [41.2, 2190.0], [41.3, 2191.0], [41.4, 2191.0], [41.5, 2192.0], [41.6, 2194.0], [41.7, 2194.0], [41.8, 2194.0], [41.9, 2194.0], [42.0, 2194.0], [42.1, 2195.0], [42.2, 2195.0], [42.3, 2195.0], [42.4, 2197.0], [42.5, 2197.0], [42.6, 2199.0], [42.7, 2199.0], [42.8, 2199.0], [42.9, 2200.0], [43.0, 2201.0], [43.1, 2201.0], [43.2, 2205.0], [43.3, 2205.0], [43.4, 2205.0], [43.5, 2205.0], [43.6, 2206.0], [43.7, 2206.0], [43.8, 2206.0], [43.9, 2207.0], [44.0, 2207.0], [44.1, 2207.0], [44.2, 2207.0], [44.3, 2207.0], [44.4, 2209.0], [44.5, 2212.0], [44.6, 2212.0], [44.7, 2213.0], [44.8, 2213.0], [44.9, 2213.0], [45.0, 2214.0], [45.1, 2214.0], [45.2, 2214.0], [45.3, 2215.0], [45.4, 2215.0], [45.5, 2217.0], [45.6, 2218.0], [45.7, 2218.0], [45.8, 2219.0], [45.9, 2219.0], [46.0, 2219.0], [46.1, 2221.0], [46.2, 2222.0], [46.3, 2222.0], [46.4, 2223.0], [46.5, 2223.0], [46.6, 2223.0], [46.7, 2224.0], [46.8, 2224.0], [46.9, 2224.0], [47.0, 2225.0], [47.1, 2225.0], [47.2, 2225.0], [47.3, 2225.0], [47.4, 2225.0], [47.5, 2227.0], [47.6, 2227.0], [47.7, 2227.0], [47.8, 2227.0], [47.9, 2228.0], [48.0, 2228.0], [48.1, 2229.0], [48.2, 2229.0], [48.3, 2229.0], [48.4, 2230.0], [48.5, 2232.0], [48.6, 2232.0], [48.7, 2235.0], [48.8, 2238.0], [48.9, 2238.0], [49.0, 2244.0], [49.1, 2244.0], [49.2, 2244.0], [49.3, 2248.0], [49.4, 2249.0], [49.5, 2249.0], [49.6, 2249.0], [49.7, 2249.0], [49.8, 2249.0], [49.9, 2249.0], [50.0, 2251.0], [50.1, 2251.0], [50.2, 2252.0], [50.3, 2252.0], [50.4, 2252.0], [50.5, 2252.0], [50.6, 2252.0], [50.7, 2253.0], [50.8, 2253.0], [50.9, 2253.0], [51.0, 2254.0], [51.1, 2254.0], [51.2, 2254.0], [51.3, 2256.0], [51.4, 2257.0], [51.5, 2257.0], [51.6, 2257.0], [51.7, 2258.0], [51.8, 2258.0], [51.9, 2259.0], [52.0, 2259.0], [52.1, 2259.0], [52.2, 2259.0], [52.3, 2259.0], [52.4, 2259.0], [52.5, 2260.0], [52.6, 2263.0], [52.7, 2263.0], [52.8, 2265.0], [52.9, 2265.0], [53.0, 2266.0], [53.1, 2266.0], [53.2, 2266.0], [53.3, 2267.0], [53.4, 2268.0], [53.5, 2268.0], [53.6, 2269.0], [53.7, 2272.0], [53.8, 2272.0], [53.9, 2273.0], [54.0, 2277.0], [54.1, 2277.0], [54.2, 2277.0], [54.3, 2277.0], [54.4, 2277.0], [54.5, 2278.0], [54.6, 2281.0], [54.7, 2281.0], [54.8, 2281.0], [54.9, 2282.0], [55.0, 2282.0], [55.1, 2284.0], [55.2, 2284.0], [55.3, 2284.0], [55.4, 2284.0], [55.5, 2284.0], [55.6, 2287.0], [55.7, 2288.0], [55.8, 2288.0], [55.9, 2290.0], [56.0, 2291.0], [56.1, 2291.0], [56.2, 2291.0], [56.3, 2292.0], [56.4, 2292.0], [56.5, 2293.0], [56.6, 2295.0], [56.7, 2295.0], [56.8, 2296.0], [56.9, 2296.0], [57.0, 2296.0], [57.1, 2296.0], [57.2, 2296.0], [57.3, 2296.0], [57.4, 2296.0], [57.5, 2297.0], [57.6, 2297.0], [57.7, 2297.0], [57.8, 2297.0], [57.9, 2297.0], [58.0, 2298.0], [58.1, 2298.0], [58.2, 2304.0], [58.3, 2306.0], [58.4, 2306.0], [58.5, 2307.0], [58.6, 2308.0], [58.7, 2308.0], [58.8, 2308.0], [58.9, 2309.0], [59.0, 2309.0], [59.1, 2309.0], [59.2, 2312.0], [59.3, 2312.0], [59.4, 2313.0], [59.5, 2313.0], [59.6, 2313.0], [59.7, 2314.0], [59.8, 2315.0], [59.9, 2315.0], [60.0, 2316.0], [60.1, 2317.0], [60.2, 2317.0], [60.3, 2317.0], [60.4, 2318.0], [60.5, 2318.0], [60.6, 2320.0], [60.7, 2320.0], [60.8, 2321.0], [60.9, 2324.0], [61.0, 2324.0], [61.1, 2324.0], [61.2, 2324.0], [61.3, 2324.0], [61.4, 2325.0], [61.5, 2325.0], [61.6, 2325.0], [61.7, 2326.0], [61.8, 2326.0], [61.9, 2326.0], [62.0, 2327.0], [62.1, 2328.0], [62.2, 2328.0], [62.3, 2329.0], [62.4, 2329.0], [62.5, 2329.0], [62.6, 2332.0], [62.7, 2335.0], [62.8, 2335.0], [62.9, 2340.0], [63.0, 2340.0], [63.1, 2340.0], [63.2, 2342.0], [63.3, 2342.0], [63.4, 2343.0], [63.5, 2344.0], [63.6, 2344.0], [63.7, 2344.0], [63.8, 2344.0], [63.9, 2344.0], [64.0, 2344.0], [64.1, 2347.0], [64.2, 2347.0], [64.3, 2347.0], [64.4, 2348.0], [64.5, 2348.0], [64.6, 2348.0], [64.7, 2351.0], [64.8, 2351.0], [64.9, 2351.0], [65.0, 2351.0], [65.1, 2351.0], [65.2, 2353.0], [65.3, 2353.0], [65.4, 2353.0], [65.5, 2354.0], [65.6, 2357.0], [65.7, 2357.0], [65.8, 2359.0], [65.9, 2359.0], [66.0, 2363.0], [66.1, 2364.0], [66.2, 2364.0], [66.3, 2365.0], [66.4, 2365.0], [66.5, 2365.0], [66.6, 2365.0], [66.7, 2367.0], [66.8, 2367.0], [66.9, 2367.0], [67.0, 2368.0], [67.1, 2368.0], [67.2, 2368.0], [67.3, 2368.0], [67.4, 2368.0], [67.5, 2370.0], [67.6, 2370.0], [67.7, 2370.0], [67.8, 2372.0], [67.9, 2373.0], [68.0, 2373.0], [68.1, 2374.0], [68.2, 2374.0], [68.3, 2374.0], [68.4, 2375.0], [68.5, 2375.0], [68.6, 2375.0], [68.7, 2376.0], [68.8, 2376.0], [68.9, 2377.0], [69.0, 2378.0], [69.1, 2378.0], [69.2, 2380.0], [69.3, 2381.0], [69.4, 2381.0], [69.5, 2381.0], [69.6, 2381.0], [69.7, 2381.0], [69.8, 2382.0], [69.9, 2382.0], [70.0, 2382.0], [70.1, 2384.0], [70.2, 2385.0], [70.3, 2385.0], [70.4, 2388.0], [70.5, 2389.0], [70.6, 2389.0], [70.7, 2389.0], [70.8, 2395.0], [70.9, 2395.0], [71.0, 2396.0], [71.1, 2396.0], [71.2, 2397.0], [71.3, 2398.0], [71.4, 2398.0], [71.5, 2400.0], [71.6, 2405.0], [71.7, 2405.0], [71.8, 2406.0], [71.9, 2406.0], [72.0, 2406.0], [72.1, 2407.0], [72.2, 2407.0], [72.3, 2407.0], [72.4, 2408.0], [72.5, 2408.0], [72.6, 2408.0], [72.7, 2410.0], [72.8, 2411.0], [72.9, 2411.0], [73.0, 2412.0], [73.1, 2413.0], [73.2, 2413.0], [73.3, 2413.0], [73.4, 2413.0], [73.5, 2413.0], [73.6, 2416.0], [73.7, 2416.0], [73.8, 2416.0], [73.9, 2417.0], [74.0, 2417.0], [74.1, 2417.0], [74.2, 2418.0], [74.3, 2418.0], [74.4, 2418.0], [74.5, 2419.0], [74.6, 2419.0], [74.7, 2420.0], [74.8, 2421.0], [74.9, 2421.0], [75.0, 2421.0], [75.1, 2421.0], [75.2, 2421.0], [75.3, 2422.0], [75.4, 2422.0], [75.5, 2422.0], [75.6, 2422.0], [75.7, 2423.0], [75.8, 2423.0], [75.9, 2424.0], [76.0, 2426.0], [76.1, 2426.0], [76.2, 2428.0], [76.3, 2429.0], [76.4, 2429.0], [76.5, 2431.0], [76.6, 2431.0], [76.7, 2433.0], [76.8, 2437.0], [76.9, 2437.0], [77.0, 2439.0], [77.1, 2439.0], [77.2, 2439.0], [77.3, 2439.0], [77.4, 2439.0], [77.5, 2439.0], [77.6, 2440.0], [77.7, 2440.0], [77.8, 2440.0], [77.9, 2441.0], [78.0, 2443.0], [78.1, 2443.0], [78.2, 2444.0], [78.3, 2445.0], [78.4, 2445.0], [78.5, 2447.0], [78.6, 2450.0], [78.7, 2450.0], [78.8, 2453.0], [78.9, 2454.0], [79.0, 2454.0], [79.1, 2455.0], [79.2, 2455.0], [79.3, 2460.0], [79.4, 2460.0], [79.5, 2460.0], [79.6, 2461.0], [79.7, 2461.0], [79.8, 2461.0], [79.9, 2461.0], [80.0, 2462.0], [80.1, 2462.0], [80.2, 2466.0], [80.3, 2468.0], [80.4, 2468.0], [80.5, 2469.0], [80.6, 2470.0], [80.7, 2470.0], [80.8, 2470.0], [80.9, 2471.0], [81.0, 2471.0], [81.1, 2474.0], [81.2, 2477.0], [81.3, 2477.0], [81.4, 2485.0], [81.5, 2486.0], [81.6, 2486.0], [81.7, 2487.0], [81.8, 2487.0], [81.9, 2489.0], [82.0, 2489.0], [82.1, 2489.0], [82.2, 2489.0], [82.3, 2494.0], [82.4, 2494.0], [82.5, 2495.0], [82.6, 2496.0], [82.7, 2496.0], [82.8, 2497.0], [82.9, 2500.0], [83.0, 2500.0], [83.1, 2503.0], [83.2, 2507.0], [83.3, 2507.0], [83.4, 2508.0], [83.5, 2509.0], [83.6, 2509.0], [83.7, 2516.0], [83.8, 2516.0], [83.9, 2516.0], [84.0, 2517.0], [84.1, 2518.0], [84.2, 2518.0], [84.3, 2523.0], [84.4, 2523.0], [84.5, 2524.0], [84.6, 2531.0], [84.7, 2531.0], [84.8, 2531.0], [84.9, 2541.0], [85.0, 2541.0], [85.1, 2544.0], [85.2, 2548.0], [85.3, 2548.0], [85.4, 2554.0], [85.5, 2557.0], [85.6, 2557.0], [85.7, 2562.0], [85.8, 2562.0], [85.9, 2562.0], [86.0, 2564.0], [86.1, 2566.0], [86.2, 2566.0], [86.3, 2567.0], [86.4, 2569.0], [86.5, 2569.0], [86.6, 2571.0], [86.7, 2573.0], [86.8, 2573.0], [86.9, 2575.0], [87.0, 2575.0], [87.1, 2576.0], [87.2, 2581.0], [87.3, 2581.0], [87.4, 2582.0], [87.5, 2587.0], [87.6, 2587.0], [87.7, 2590.0], [87.8, 2593.0], [87.9, 2593.0], [88.0, 2595.0], [88.1, 2598.0], [88.2, 2598.0], [88.3, 2599.0], [88.4, 2600.0], [88.5, 2600.0], [88.6, 2603.0], [88.7, 2604.0], [88.8, 2604.0], [88.9, 2605.0], [89.0, 2605.0], [89.1, 2605.0], [89.2, 2607.0], [89.3, 2610.0], [89.4, 2610.0], [89.5, 2610.0], [89.6, 2610.0], [89.7, 2613.0], [89.8, 2614.0], [89.9, 2614.0], [90.0, 2617.0], [90.1, 2619.0], [90.2, 2619.0], [90.3, 2623.0], [90.4, 2625.0], [90.5, 2625.0], [90.6, 2628.0], [90.7, 2634.0], [90.8, 2634.0], [90.9, 2636.0], [91.0, 2648.0], [91.1, 2648.0], [91.2, 2654.0], [91.3, 2656.0], [91.4, 2656.0], [91.5, 2659.0], [91.6, 2667.0], [91.7, 2667.0], [91.8, 2667.0], [91.9, 2669.0], [92.0, 2669.0], [92.1, 2671.0], [92.2, 2671.0], [92.3, 2673.0], [92.4, 2677.0], [92.5, 2677.0], [92.6, 2681.0], [92.7, 2701.0], [92.8, 2701.0], [92.9, 2710.0], [93.0, 2716.0], [93.1, 2716.0], [93.2, 2726.0], [93.3, 2735.0], [93.4, 2735.0], [93.5, 2743.0], [93.6, 2743.0], [93.7, 2743.0], [93.8, 2747.0], [93.9, 2752.0], [94.0, 2752.0], [94.1, 2763.0], [94.2, 2767.0], [94.3, 2767.0], [94.4, 2776.0], [94.5, 2793.0], [94.6, 2793.0], [94.7, 2799.0], [94.8, 2799.0], [94.9, 2806.0], [95.0, 2809.0], [95.1, 2809.0], [95.2, 2831.0], [95.3, 2835.0], [95.4, 2835.0], [95.5, 2847.0], [95.6, 2865.0], [95.7, 2865.0], [95.8, 2888.0], [95.9, 2932.0], [96.0, 2932.0], [96.1, 2934.0], [96.2, 2941.0], [96.3, 2941.0], [96.4, 3008.0], [96.5, 3094.0], [96.6, 3094.0], [96.7, 3106.0], [96.8, 3121.0], [96.9, 3121.0], [97.0, 3131.0], [97.1, 3285.0], [97.2, 3285.0], [97.3, 3299.0], [97.4, 3299.0], [97.5, 3327.0], [97.6, 3374.0], [97.7, 3374.0], [97.8, 3416.0], [97.9, 3512.0], [98.0, 3512.0], [98.1, 3590.0], [98.2, 3620.0], [98.3, 3620.0], [98.4, 3867.0], [98.5, 4157.0], [98.6, 4157.0], [98.7, 4200.0], [98.8, 4347.0], [98.9, 4347.0], [99.0, 4593.0], [99.1, 4888.0], [99.2, 4888.0], [99.3, 5035.0], [99.4, 5039.0], [99.5, 5039.0], [99.6, 5223.0], [99.7, 5251.0], [99.8, 5251.0], [99.9, 5490.0], [100.0, 5490.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1200.0, "maxY": 101.0, "series": [{"data": [[1200.0, 1.0], [1300.0, 2.0], [1400.0, 4.0], [1500.0, 1.0], [1600.0, 10.0], [1700.0, 14.0], [1800.0, 24.0], [1900.0, 48.0], [2000.0, 75.0], [2100.0, 101.0], [2200.0, 100.0], [2300.0, 87.0], [2400.0, 75.0], [2500.0, 36.0], [2600.0, 28.0], [2800.0, 7.0], [2700.0, 14.0], [2900.0, 3.0], [3000.0, 2.0], [3100.0, 3.0], [3300.0, 2.0], [3200.0, 2.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 1.0], [3800.0, 1.0], [4200.0, 1.0], [4300.0, 1.0], [4100.0, 1.0], [4500.0, 1.0], [4800.0, 1.0], [5000.0, 2.0], [5200.0, 2.0], [5400.0, 1.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 647.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 647.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.777777777777778, "minX": 1.58180154E12, "maxY": 5.0, "series": [{"data": [[1.58180172E12, 5.0], [1.58180184E12, 4.777777777777778], [1.58180154E12, 5.0], [1.58180166E12, 5.0], [1.5818016E12, 5.0], [1.58180178E12, 5.0]], "isOverall": false, "label": "Scenario 1", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180184E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1375.0, "minX": 1.0, "maxY": 2298.8507692307726, "series": [{"data": [[4.0, 2142.0], [2.0, 1715.0], [1.0, 1829.0], [5.0, 2298.8507692307726], [3.0, 1375.0]], "isOverall": false, "label": "getProductByCategory", "isController": false}, {"data": [[4.984709480122324, 2295.587155963306]], "isOverall": false, "label": "getProductByCategory-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 5.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 149.58333333333334, "minX": 1.58180154E12, "maxY": 37708.183333333334, "series": [{"data": [[1.58180172E12, 37708.183333333334], [1.58180184E12, 12301.366666666667], [1.58180154E12, 19124.966666666667], [1.58180166E12, 36351.4], [1.5818016E12, 36611.7], [1.58180178E12, 36610.183333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58180172E12, 458.6166666666667], [1.58180184E12, 149.58333333333334], [1.58180154E12, 232.66666666666666], [1.58180166E12, 441.93333333333334], [1.5818016E12, 445.3666666666667], [1.58180178E12, 445.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180184E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2164.1111111111113, "minX": 1.58180154E12, "maxY": 2887.7142857142867, "series": [{"data": [[1.58180172E12, 2218.0579710144943], [1.58180184E12, 2164.1111111111113], [1.58180154E12, 2887.7142857142867], [1.58180166E12, 2221.781954887218], [1.5818016E12, 2246.365671641793], [1.58180178E12, 2232.7388059701507]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180184E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2124.0, "minX": 1.58180154E12, "maxY": 2845.428571428572, "series": [{"data": [[1.58180172E12, 2177.115942028985], [1.58180184E12, 2124.0], [1.58180154E12, 2845.428571428572], [1.58180166E12, 2179.999999999999], [1.5818016E12, 2204.6194029850744], [1.58180178E12, 2188.664179104477]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180184E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 40.67164179104479, "minX": 1.58180154E12, "maxY": 42.67164179104478, "series": [{"data": [[1.58180172E12, 41.55797101449278], [1.58180184E12, 41.71111111111112], [1.58180154E12, 42.25714285714285], [1.58180166E12, 40.939849624060166], [1.5818016E12, 40.67164179104479], [1.58180178E12, 42.67164179104478]], "isOverall": false, "label": "getProductByCategory", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180184E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1289.0, "minX": 1.58180154E12, "maxY": 5490.0, "series": [{"data": [[1.58180172E12, 2941.0], [1.58180184E12, 2673.0], [1.58180154E12, 5490.0], [1.58180166E12, 2809.0], [1.5818016E12, 2835.0], [1.58180178E12, 3121.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58180172E12, 1400.0], [1.58180184E12, 1289.0], [1.58180154E12, 1829.0], [1.58180166E12, 1374.0], [1.5818016E12, 1473.0], [1.58180178E12, 1608.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58180172E12, 2557.5], [1.58180184E12, 2507.8], [1.58180154E12, 4568.4], [1.58180166E12, 2479.0], [1.5818016E12, 2588.5], [1.58180178E12, 2604.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58180172E12, 2898.0999999999985], [1.58180184E12, 2673.0], [1.58180154E12, 5490.0], [1.58180166E12, 2775.3399999999997], [1.5818016E12, 2824.8500000000004], [1.58180178E12, 3111.55]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58180172E12, 2659.3999999999996], [1.58180184E12, 2627.1], [1.58180154E12, 5121.8], [1.58180166E12, 2607.9], [1.5818016E12, 2657.75], [1.58180178E12, 2735.25]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180184E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2211.0, "minX": 1.0, "maxY": 2316.0, "series": [{"data": [[2.0, 2211.0], [4.0, 2270.0], [1.0, 2232.5], [5.0, 2316.0], [3.0, 2230.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2169.0, "minX": 1.0, "maxY": 2277.0, "series": [{"data": [[2.0, 2169.0], [4.0, 2230.0], [1.0, 2190.0], [5.0, 2277.0], [3.0, 2190.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6666666666666666, "minX": 1.58180154E12, "maxY": 2.3, "series": [{"data": [[1.58180172E12, 2.3], [1.58180184E12, 0.6666666666666666], [1.58180154E12, 1.25], [1.58180166E12, 2.216666666666667], [1.5818016E12, 2.2333333333333334], [1.58180178E12, 2.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180184E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.58180154E12, "maxY": 2.3, "series": [{"data": [[1.58180172E12, 2.3], [1.58180184E12, 0.75], [1.58180154E12, 1.1666666666666667], [1.58180166E12, 2.216666666666667], [1.5818016E12, 2.2333333333333334], [1.58180178E12, 2.2333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58180184E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.58180154E12, "maxY": 2.3, "series": [{"data": [[1.58180172E12, 2.3], [1.58180184E12, 0.75], [1.58180154E12, 1.1666666666666667], [1.58180166E12, 2.216666666666667], [1.5818016E12, 2.2333333333333334], [1.58180178E12, 2.2333333333333334]], "isOverall": false, "label": "getProductByCategory-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180184E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.58180154E12, "maxY": 2.3, "series": [{"data": [[1.58180172E12, 2.3], [1.58180184E12, 0.75], [1.58180154E12, 1.1666666666666667], [1.58180166E12, 2.216666666666667], [1.5818016E12, 2.2333333333333334], [1.58180178E12, 2.2333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58180184E12, "title": "Total Transactions Per Second"}},
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

