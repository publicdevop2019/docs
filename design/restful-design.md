# Combine DDD with restful api design
- In SQL world, root is accessed through SQL query
- SELECT what can be read
- UPDATE what to update
- DELETE what to delete
- Design system based on roles
- Roles have different SQL query builder for SELECT/UPDATE/DELETE operation (INSERT TBD)
- Root has different representation with each role

## API List
| api  | method|description|sample|
|---|---|---|---|
| service-name/object-collection/role-name  |POST| create an object|[sample1](#sample1)|
| service-name/object-collection/role-name  |GET| read object collection with pagination|[sample2](#sample2)|
| service-name/object-collection/role-name/{object-id}  |GET| read an object|[sample3](#sample3)|
| service-name/object-collection/role-name/{object-id}  |PUT| replace an object|[sample4](#sample4)|
| service-name/object-collection/role-name/{object-id}  |DELETE| delete an object|[sample5](#sample5)|
| service-name/object-collection/role-name/{object-id}  |PATCH| patch an object (rfc6902)|[sample6](#sample6)|
| service-name/object-collection/role-name?query={condition-clause}  |GET| get object collection which match query condition with pagination|[sample7](#sample7)|
| service-name/object-collection/role-name?query={condition-clause}  |DELETE| delete object collection which match query condition, will read by query first then delete by id(s) |[sample8](#sample8)|
| service-name/object-collection/role-name  |PATCH| modify object collection|[sample9](#sample9)|
###  sample1
```
POST url: /product-svc/products/admin
{
  "name": "foo",
  "totalSales": "100",
  "price": "89.74"
}
```
###  sample2
```
GET url: /product-svc/products/admin?page=size:2,num:0,by:id,order:asc
{
  "data": [
    {
      "id": "001",
      "name": "foo",
      "price": "89.74"
    },
    {
      "id": "002",
      "name": "bar",
      "price": "10.00"
    }
  ],
  "totalItemCount": "5"
}
```
###  sample3
```
GET url: /product-svc/products/admin/001
{
  "id":"001",
  "name": "foo",
  "totalSales": "100",
  "price": "89.74",
  "createdAt":"2020-07-31"
}
```
###  sample4
```
PUT url: /product-svc/products/admin/001
{
  "name": "bar",
  "price": "99.99"
  "skus:[
      {
          "attributesSales":"004:XXL",
          "increaseOrderStorage:1
      }
  ]
}
```
###  sample5
```
DELETE url: /product-svc/products/admin/001
```
###  sample6
```
PATCH url: /product-svc/products/admin/001
[
  {"op":"replace","path":"/name","value":"zoo"}
]
```
###  sample7
1. query by multiple ids
```
GET url: /product-svc/products/admin?query=id:001.002&page=size:2,num:0,by:id,order:asc
{
  "data": [
    {
      "id": "001",
      "name": "foo",
      "price": "89.74"
    },
    {
      "id": "002",
      "name": "bar",
      "price": "10.00"
    }
  ],
  "totalItemCount": "3"
}
```
2. query by a number field
```
GET url: /product-svc/products/admin?query=price<:500
{
  "data": [
    {
      "id": "001",
      "name": "foo",
      "price": "89.74"
    },
    {
      "id": "002",
      "name": "bar",
      "price": "10.00"
    }
  ],
  "totalItemCount": "5"
}
```
###  sample8
1. delete multiple ids
```
DELETE url: /product-svc/products/admin?query=id:001.002
```
1. delete matching objects
```
DELETE url: /product-svc/products/admin?query=price<:500
```
###  sample9
1. basic
```
PATCH url: /product-svc/products/admin
[
  {"op":"replace","path":"/001/name","value":"zoo"},
  {"op":"replace","path":"/002/name","value":"bar"},
  {"op":"replace","path":"/001/price","value":"99.99"},
]
```
2. sum/diff a number field (atomic operation)
```
PATCH url: /product-svc/products/admin
[
  {"op":"sum","path":"/001/storageOrder","value":"1"},
  {"op":"diff","path":"/002/storageActual","value":"2"}
]
```
3. sum/diff a number field with [Expect](#expect)
```
PATCH url: /product-svc/products/admin
[
  {"op":"sum","path":"/001/storageOrder","value":"1",expect:1},
  {"op":"diff","path":"/002/storageActual","value":"2",expect:1}
]
```
4. update nested field
```
PATCH url: /product-svc/products/admin
[
  {"op":"sum","path":"/001/skus/0/storageOrder","value":"1"},
  //update first element of skus
  {"op":"sum","path":"/001/skus/?query=attributeSales:8001-foo,8002-bar/storageOrder","value":"1"} 
  // update skus that match query
]
```
5. decrease storage actual and increase sales
```
PATCH url: /product-svc/admin/products
[
  {
    "op": "diff",
    "path": "/835605166055424/skus?query=attributesSales:835604663263232-185~/100A~/XXL,835604723556352-淡粉色/storageActual",
    "value": "1"
  },
  {
    "op": "sum",
    "path": "/835605166055424/skus?query=attributesSales:835604663263232-185~/100A~/XXL,835604723556352-淡粉色/sales",
    "value": "1"
  },
  {
    "op": "sum",
    "path": "/835605166055424/totalSales",
    "value": "1"
  }
]
```
## PUT vs PATCH an object
- PUT replace entire resource or majority parts of a resource
- PATCH replace limited fields of a resource
- PUT need to read then write
- Object PATCH leverage [RFC6902](https://tools.ietf.org/html/rfc6902)
- Design rule: for simple fields, use PATCH, for complex structure, use PUT
## Expect
- use expect to do some simple validation e.g. validate updated row count is 1
1. update sku and validate result
```
[
  {
    "op": "sum",
    "path": "/837195323695104/skus?query=attributeSales:835604723556352-淡粉色,835604663263232-185~/100A~/XXL/storageActual",
    "value": "1",
    "expect":"1"
  }
] 
```
## Transactional
- By default transactional is turned on for all write operations
## Idempotent and track change for patch
- By default apis are all idempotent, change id is required for POST,PUT,PATCH
- GET, DELETE is designed naturally idempotent, no changeId required
- POST, PUT and PATCH may or may not be idempotent depends on implementation
- {ChangeId + Object name} is a unique value across applications
- By default patch change request is saved
## Rollback a change
- PATCH change on object-collection with sum/diff operation supports rollback
- DELETE call with changeId will rollback operation recorded (TBD)
## Method naming convention
- {operation}For{role}{optional field}
- {read|replace|patch|delete}For{admin|Customer}By{Id|Query}
- e.g readForCustomerByQuery, patchForAdminById
## Skip count flag
- User can explicitly skip count query by adding ?sc:1 in GET url
## /{object-id} vs query=id:{object-id}
- /{object-id} will return 400 if object-id is not found
- query=id:{object-id} will return 200 with data as empty if object-id is not found
## Escape special char in path with ~
```
[
  {
    "op": "sum",
    "path": "/837195323695104/skus?query=attributeSales:835604723556352-淡粉色,835604663263232-185~/100A~/XXL/storageActual",
    "value": "1"
  }
]
```
