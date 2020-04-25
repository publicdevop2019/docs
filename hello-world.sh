REGISTRY=--service.url.eureka=http://localhost:8761/eureka
SPRING_PROFILE=--spring.profiles.active=shared-hw
OAUTH=--service.url.oauth2=http://localhost:8080
EMAIL_USERNAME=--spring.mail.username={replace_w_gmail_account}
EMAIL_PWD=--spring.mail.password={replace_w_gmail_pwd}
# start of ui #
docker run -td --rm -p 4300:80 --name oauth2-ui publicdevop2019/oauth-ui:hw
docker run -td --rm -p 4200:80 --name object-market publicdevop2019/object-market:hw
# end of ui #
# start of micro-services #
docker run -td --rm --name eureka --network="host" publicdevop2019/eureka:latest -jar Eureka.jar
docker run -td --rm --name oauth2 --network="host" publicdevop2019/oauth2service:latest -jar AuthService.jar $REGISTRY $SPRING_PROFILE
sleep 20
docker run -td --rm --name proxy --network="host" publicdevop2019/edgeproxy:latest -jar EdgeProxyService.jar $OAUTH $REGISTRY $SPRING_PROFILE

docker run -td --rm --name messenger --network="host" publicdevop2019/messenger:latest -jar Messenger.jar $EMAIL_USERNAME $EMAIL_PWD $REGISTRY $SPRING_PROFILE
docker run -td --rm --name file-upload --network="host" publicdevop2019/file-upload:latest -jar FileUpload.jar $REGISTRY $SPRING_PROFILE
docker run -td --rm --name payment --network="host" publicdevop2019/payment:latest -jar Payment.jar $REGISTRY $SPRING_PROFILE

docker run -td --rm --name profile --network="host" publicdevop2019/userprofile:latest -jar UserProfile.jar $REGISTRY $SPRING_PROFILE
docker run -td --rm --name product --network="host" publicdevop2019/product:latest -jar Product.jar $REGISTRY $SPRING_PROFILE
# end of micro-services #