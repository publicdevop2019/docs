# Requirement
- cache aggregate query results e.g. query=name\:abc&page=num\:0,size\:10,by\:price,order\:asc&config=sc\:1
- cache single aggregate e.g. query=id:1000 or objects/1000
- invalid cache based on cache evict strategy
# Tech Cases
- case1:query=name\:abc&page=num\:0,size\:10,by\:price,order\:asc&config=sc\:1
- case2:query=id:1000
- case3:URL objects/1000
- case4:query=id:1000.1001.1002
- case5:query=id:1000.1001.1002,price>=10
- case6:query=id:1000.1001.1002&page=num\:0,size\:10,by\:price,order\:asc&config=sc\:1
# Challenge
- create separate cache key for query with ids (query=id:1000 or query=id:1000,1001 or query=id:1000.1001.1002,price>=10)
- query=id:1000,1001 and query=id:1001,1000 should result in same cache
- when new aggregate created, any none id query results cache should be cleared, id query that contains created id will be cleared (by checking range)
- when aggregate updated/delete, all query results should be cleared, id query that contains updated id will be cleared
- clear linked aggregates e.g. product create should update sku cache as well
# Cache key
- e.g. \[aggregate]\[query]\[hashcode of role, query, page, config]
- e.g. \[aggregate]\[id]\[hashcode of role, query, page, config]\[min-id]\[max-id]
# Issues
- min-id and max-id can confirm if id not in range but for id within range, id may not be included in original