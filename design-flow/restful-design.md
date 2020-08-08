# Restful Design
## Common restful design
| api  | method|description|sample|
|---|---|---|---|
| service-name/role-name/object-collection  |POST| create an object|sample1|
| service-name/role-name/object-collection  |GET| read object collection with pagination|sample2|
| service-name/role-name/object-collection/{object-id}  |GET| read an object|sample3|
| service-name/role-name/object-collection/{object-id}  |PUT| replace an object|sample4|
| service-name/role-name/object-collection/{object-id}  |DELETE| delete an object|sample5|
| service-name/role-name/object-collection/{object-id}  |PATCH| patch an object|sample6|
| service-name/role-name/object-collection?query={condition-clause}  |GET| get object collection which match query condition with pagination|sample7|
| service-name/role-name/object-collection?query={condition-clause}  |DELETE| delete object collection which match query condition with pagination|sample8|
| service-name/role-name/object-collection  |PATCH| modify object collection|sample9|
###  sample1
```
POST url: /product-svc/admin/products
{
  "name": "foo",
  "storageOrder": "100",
  "storageActual": "50",
  "price": "89.74"
}
```
###  sample2
```
GET url: /product-svc/admin/products?page=size:2,num:0,by:id,order:asc
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
GET url: /product-svc/admin/products/001
{
  "id":"001",
  "name": "foo",
  "storageOrder": "100",
  "storageActual": "50",
  "price": "89.74",
  "createdAt":"2020-07-31"
}
```
###  sample4
```
PUT url: /product-svc/admin/products/001
{
  "name": "bar",
  "price": "99.99"
}
```
###  sample5
```
DELETE url: /product-svc/admin/products/001
```
###  sample6
```
PATCH url: /product-svc/admin/products/001
[
  {"op":"replace","path":"/name","value":"zoo"}
]
```
###  sample7
```
GET url: /product-svc/admin/products?query=id:001.002&page=size:2,num:0,by:id,order:asc
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
  "totalItemCount": "2"
}
```
```
GET url: /product-svc/admin/products?query=price<:500
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
```
DELETE url: /product-svc/admin/products?query=id:001.002&page=size:2,num:0,by:id,order:asc
```
```
DELETE url: /product-svc/admin/products?query=price<:500
```
###  sample9
```
PATCH url: /product-svc/admin/products
[
  {"op":"replace","path":"/001/name","value":"zoo"},
  {"op":"replace","path":"/002/name","value":"bar"},
  {"op":"replace","path":"/001/price","value":"99.99"},
]
```
#### add/sub a number field
```
PATCH url: /product-svc/admin/products
[
  {"op":"add","path":"/001/storageOrder","value":"1"},
  {"op":"sub","path":"/002/storageActual","value":"2"}
]
```
#### test object(s) value
```
PATCH url: /product-svc/admin/products
[
  {"op":"test","path":"/001","value":"{"name":"foo","skus":[{"attributeSales":"8001-foo,8002-bar","price":"100.00"}]}"},
  {"op":"sub","path":"/002","value":"{"price":"105.87","options":[{"title":"zoo","selections":[{"length":"bar"}]}]}"}
]
```
#### update nested field
```
PATCH url: /product-svc/admin/products
[
  {"op":"add","path":"/001/skus/0/storageOrder","value":"1"},
  //update first element of skus
  {"op":"add","path":"/001/skus/?query=attributeSales:8001-foo,8002-bar/storageOrder","value":"1"} 
  // update skus that match query
]
```
#### update nested field without transaction management
```
PATCH url: /product-svc/admin/products?config=tx:0
[
  {"op":"add","path":"/001/skus/0/storageOrder","value":"1"}
]
```
#### update nested field with change history enabled
```
PATCH url: /product-svc/admin/products?config=his:1
[
  {"op":"add","path":"/001/skus/0/storageOrder","value":"1"}
]
```
#### update number field with same op, same value multiple times, only one will be taken
```
PATCH url: /product-svc/admin/products?config=his:1
[
  {
    "op": "add",
    "path": "/837195323695104/storageActual",
    "value": "1"
  },
  //below is ignored
  {
    "op": "add",
    "path": "/837195323695104/storageActual",
    "value": "1"
  }
]
```
#### decrease storage actual and increase sales
```
PATCH url: /product-svc/admin/products
[
  {
    "op": "sub",
    "path": "/835605166055424/skus?query=attributesSales:835604663263232-185~/100A~/XXL,835604723556352-淡粉色/storageActual",
    "value": "1"
  },
  {
    "op": "add",
    "path": "/835605166055424/skus?query=attributesSales:835604663263232-185~/100A~/XXL,835604723556352-淡粉色/sales",
    "value": "1"
  },
  {
    "op": "add",
    "path": "/835605166055424/totalSales",
    "value": "1"
  }
]
```

# PUT vs PATCH
- PUT replace entire resource or majority parts of a resource
- PATCH replace limited fields of a resource
- PUT need to read then write
- PATCH directly write, read is optional
# Transactional 
- By default transactional is turned on for all write operations
- User can explicitly disable transaction by adding ?config=tx:0
# Change history for patch
- By default change is not tracked
- User can explicitly enable change history by adding ?config=his:1
- if change history is enabled then transactional is enabled as well
- if change history is enabled then txId is required in request header
- transactionId is a unique value across applications
# Idempotent
- By default apis are not idempotent
- GET, DELETE should be designed naturally idempotent
- POST, PUT and PATCH may or may not be idempotent depends on implementation
- User can make an api idempotent by adding ?config=tx:1 and txId in request header
# Method naming convention
- {operation}For{role}{optional field}
- {read|replace|patch|delete}For{Admin|Customer}By{Id|Query}
- e.g readForCustomerByQuery, patchForAdminById

# Skip count flag
# /{object-id} vs query=id:{object-id}
- /{object-id} will return 400 if object-id is not found
- query=id:{object-id} will return 200 with data as empty if object-id is not found
# Expect
- ?expect=rows:1
- use expect to do some simple validation
- e.g update product p where p.id=foo, expected num of updated rows should be 1
# Escape special char in path with ~
```
[
  {
    "op": "add",
    "path": "/837195323695104/skus?query=attributeSales:835604723556352-淡粉色,835604663263232-185~/100A~/XXL/storageActual",
    "value": "1"
  }
]
```
# Entity representation
- admin view and entity naming
- customer view vs admin view
