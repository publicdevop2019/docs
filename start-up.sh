#!/bin/sh
REGISTRY=--service.url.eureka=http://localhost:8761/eureka
OAUTH=--service.url.oauth2=http://localhost:8080
EMAIL_USERNAME=--spring.mail.username=$1
EMAIL_PWD=--spring.mail.password=$2
java -jar ./Eureka.jar &
java -jar ./AuthService.jar $REGISTRY &
sleep 60 && java -jar ./EdgeProxyService.jar $OAUTH $REGISTRY &
java -jar ./Messenger.jar $EMAIL_USERNAME $EMAIL_PWD $REGISTRY &
java -jar ./FileUpload.jar $REGISTRY &
java -jar ./Payment.jar $REGISTRY &
java -jar ./UserProfile.jar $REGISTRY &
java -jar ./Product.jar $REGISTRY &
java -jar ./SagaOrchestrator.jar $REGISTRY
