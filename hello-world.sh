REGISTRY=--service.url.eureka=http://localhost:8761/eureka
SPRING_PROFILE=--spring.profiles.active=shared-hw
OAUTH=--service.url.oauth2=http://localhost:8080
EMAIL_USERNAME=--spring.mail.username={replace_w_gmail_account}
EMAIL_PWD=--spring.mail.password={replace_w_gmail_pwd}
# start of ui #
docker run -td --rm -p 4300:80 --name oauth2-ui publicdevop2019/oauth-ui:hw
docker run -td --rm -p 4200:80 --name object-market publicdevop2019/object-market:hw
#docker run -td --rm -p 8081:80 --name form-builder-platform publicdevop2019/mt-form-builder-platform:latest
# end of ui #
# start of micro-services #
docker run -td --rm -p 8761:8761 --name eureka --network="host" publicdevop2019/eureka:latest -jar Eureka.jar
docker run -td --rm -p 8080:8080 --name oauth2 --network="host" publicdevop2019/oauth2service:latest -jar AuthService.jar $REGISTRY $SPRING_PROFILE
sleep 20
docker run -td --rm -p 8111:8111 --name proxy --network="host" publicdevop2019/edgeproxy:latest -jar EdgeProxyService.jar $OAUTH $REGISTRY $SPRING_PROFILE

docker run -td --rm -p 8085:8085 --name messenger --network="host" publicdevop2019/messenger:latest -jar Messenger.jar $EMAIL_USERNAME $EMAIL_PWD $REGISTRY $SPRING_PROFILE
docker run -td --rm -p 8086:8086 --name file-upload --network="host" publicdevop2019/file-upload:latest -jar FileUpload.jar $REGISTRY $SPRING_PROFILE
docker run -td --rm -p 8087:8087 --name payment --network="host" publicdevop2019/payment:latest -jar Payment.jar $REGISTRY $SPRING_PROFILE

docker run -td --rm -p 8082:8082 --name profile --network="host" publicdevop2019/userprofile:latest -jar UserProfile.jar $REGISTRY $SPRING_PROFILE
docker run -td --rm -p 8083:8083 --name product --network="host" publicdevop2019/product:latest -jar Product.jar $REGISTRY $SPRING_PROFILE
# end of micro-services #