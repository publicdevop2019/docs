# Business Use Cases
- send user password changed event so token can be revoked 
- send user reset coded updated event so email can be sent 
- send endpoint updated event so proxy can reload cached endpoints 
# Tech Use Cases
- send events to internal then consume internal events as work queue 
- send events to external then consume external events as work queue
- send events to external then consume external events as fanout
# Challenge
- how to deal with different internal events like userPwdChanged and clientSecretChanged
# Solution
- use topic to distribute events
- exchange topic routing key: identityaccess.internal.workqueue.user or identityaccess.external.workqueue.user or identityaccess.external.fanout.user
- internal work queue(with same queue name) queue routing key: identityaccess.internal.workqueue.user
- external work queue(with same queue name) queue routing key: identityaccess.external.workqueue.user
- external fanout(with random queue name) routing key: identityaccess.external.fanout.user
# Remain Issues