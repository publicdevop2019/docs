REGISTRY=--service.url.eureka=http://localhost:8761/eureka
OAUTH=--service.url.oauth2=http://localhost:8080
EMAIL_USERNAME=--spring.mail.username={replace_w_gmail_account}
EMAIL_PWD=--spring.mail.password={replace_w_gmail_pwd}
# rabbitmq
docker run -td --rm --name rabbitmq --network="host" -p 5672:5672 -p 15672:15672 rabbitmq:3-management
# start of ui #
docker run -td --rm -p 4300:80 --name oauth2-ui publicdevop2019/oauth-ui:hw
docker run -td --rm -p 4200:80 --name object-market publicdevop2019/object-market:hw
# end of ui #
# start of micro-services #
docker run -td --rm --name eureka --network="host" publicdevop2019/eureka:latest -jar Eureka.jar
docker run -td --rm --name oauth2 --network="host" publicdevop2019/oauth2service:hw -jar AuthService.jar $REGISTRY
sleep 20
docker run -td --rm --name proxy --network="host" publicdevop2019/edgeproxy:hw -jar EdgeProxyService.jar $OAUTH $REGISTRY

docker run -td --rm --name messenger --network="host" publicdevop2019/messenger:hw -jar Messenger.jar $EMAIL_USERNAME $EMAIL_PWD $REGISTRY
docker run -td --rm --name file-upload --network="host" publicdevop2019/file-upload:hw -jar FileUpload.jar $REGISTRY
docker run -td --rm --name payment --network="host" publicdevop2019/payment:hw -jar Payment.jar $REGISTRY
docker run -td --rm --name saga-orchestrator --network="host" publicdevop2019/saga-orchestrator:hw -jar SagaOrchestrator.jar $REGISTRY

docker run -td --rm --name profile --network="host" publicdevop2019/userprofile:hw -jar UserProfile.jar $REGISTRY
docker run -td --rm --name product --network="host" publicdevop2019/product:hw -jar Product.jar $REGISTRY
# end of micro-services #