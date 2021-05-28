# Rabbit MQ message design
## Use Cases
### Business
- send user password changed event so token can be revoked
- send user reset coded updated event so email can be sent
- send endpoint updated event so proxy can reload cached endpoints
- internal service write operation
### Tech Use Cases
- send events to internal then consume internal events as work queue
- send events to external then consume external events as work queue
- send events to external then consume external events as fanout
## Challenge
- handle different events like userPwdChanged and clientSecretChanged
- events that across multiple services(without sharing event classes)
- make it easy to check status of MQ(what events got queued)
- multiple instance
## Solution
- use topic to distribute events
- each event is bind to a routing key
- event will get convert to JSON format and deserialized to object(avoid using Java native serializer)
### Exchange
- mt_global_exchange single exchange for all
### Routing Key
- profile.external.user_place_order_event
- saga.external.new_order_decrease_sku_command_event
- mall.external.new_order_decrease_sku_reply_event
- access.internal.application_reboot_event
- access.external.reload_proxy_cache_event
### Queue
- use random queue name for fanout type of message (all instance should consume)
- use fix queue name for work type of message(one of instance should consume)
- queue name: user_place_order_event_saga_handler
### Optimistic Lock
- Optimistic lock does not work well with MQ, bcz it will throw exception which unsubscribe from exchange