#!/bin/sh
REGISTRY=--service.url.eureka=http://localhost:8761/eureka
SPRING_PROFILE=--spring.profiles.active=shared-hw
OAUTH=--service.url.oauth2=http://localhost:8080
EMAIL_USERNAME=--spring.mail.username=$1
EMAIL_PWD=--spring.mail.password=$2
java -jar ./Eureka.jar &
java -jar ./AuthService.jar $REGISTRY $SPRING_PROFILE &
sleep 60 && java -jar ./EdgeProxyService.jar $OAUTH $REGISTRY $SPRING_PROFILE &
java -jar ./Messenger.jar $EMAIL_USERNAME $EMAIL_PWD $REGISTRY $SPRING_PROFILE &
java -jar ./FileUpload.jar $REGISTRY $SPRING_PROFILE &
java -jar ./Payment.jar $REGISTRY $SPRING_PROFILE &
java -jar ./UserProfile.jar $REGISTRY $SPRING_PROFILE &
java -jar ./Product.jar $REGISTRY $SPRING_PROFILE
