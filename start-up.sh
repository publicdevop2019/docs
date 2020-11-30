#!/bin/sh
EMAIL_USERNAME=--spring.mail.username=$1
EMAIL_PWD=--spring.mail.password=$2
REGISTRY=--service.url.eureka=http://localhost:8761/eureka
REGISTRY_IP=--eureka.instance.ip-address=127.0.0.1
OAUTH=--service.url.oauth2=http://localhost:8080
DATA_SOURCE_URL=--aws-instance-uri=localhost
DATA_SOURCE_DDL=--spring.jpa.hibernate.ddl-auto=create
DATA_SOURCE_USERNAME=--spring.datasource.username=root
DEBUG_ENABLE=logging.level.com.hw=DEBUG
java -jar ./Eureka.jar &
java -jar ./AuthService.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME &
java -jar ./ObjectStore.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL &
sleep 60 && java -jar ./EdgeProxyService.jar $OAUTH $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME &
java -jar ./Messenger.jar $EMAIL_USERNAME $EMAIL_PWD $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME &
java -jar ./FileUpload.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME &
java -jar ./Payment.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME &
java -jar ./UserProfile.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME &
java -jar ./Product.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME &
java -jar ./SagaOrchestrator.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME
