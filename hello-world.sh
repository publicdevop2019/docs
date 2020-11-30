REGISTRY=--service.url.eureka=http://localhost:8761/eureka
REGISTRY_IP=--eureka.instance.ip-address=127.0.0.1
OAUTH=--service.url.oauth2=http://localhost:8080
DATA_SOURCE_URL=--aws-instance-uri=localhost
DATA_SOURCE_DDL=--spring.jpa.hibernate.ddl-auto=create
DATA_SOURCE_USERNAME=--spring.datasource.username=root
EMAIL_USERNAME=--spring.mail.username={replace_w_gmail_account}
EMAIL_PWD=--spring.mail.password={replace_w_gmail_pwd}
# mongodb
docker run -td --rm --name mongodb --network="host" -v "/$(pwd)/configs:/etc/mongo" -v ~/db/mongo:/data/db -v "/$(pwd)/helloworld:/helloworld" mongo:4.4.2-bionic --config /etc/mongo/mongod.conf
sleep 3
sh scripts/mongo-init.sh
# mysql
docker run -td --rm --name mysqldb --network="host" -v ~/db/mysql:/var/lib/mysql -v ~/logs:/logs -e MYSQL_ALLOW_EMPTY_PASSWORD=1 mysql:8.0.22
sleep 30
sh scripts/mysql-init.sh
# redis cache
docker run -td --rm -v ~/db/cache:/data --name redis-cache --network="host" redis:6.0.8
# rabbitmq
docker run -td --rm --name rabbitmq --network="host" rabbitmq:3-management
# start of ui #
docker run -td --rm -p 4300:80 --name oauth2-ui publicdevop2019/oauth-ui:hw
docker run -td --rm -p 4200:80 --name object-market publicdevop2019/object-market:hw
# end of ui #

# start of micro-services #
docker run -td --rm --name eureka --network="host" publicdevop2019/eureka:latest -jar Eureka.jar
docker run -td --rm --name validator --network="host" publicdevop2019/validator:latest
docker run -td --rm --name oauth2 --network="host" publicdevop2019/oauth2service:latest -jar AuthService.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME
sleep 20
docker run -td --rm --name proxy --network="host" publicdevop2019/edgeproxy:latest -jar EdgeProxyService.jar $OAUTH $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME
docker run -td --rm --name objectstore --network="host" publicdevop2019/object-store:latest -jar ObjectStore.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL

docker run -td --rm --name messenger --network="host" publicdevop2019/messenger:latest -jar Messenger.jar $EMAIL_USERNAME $EMAIL_PWD $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME
docker run -td --rm --name file-upload --network="host" publicdevop2019/file-upload:latest -jar FileUpload.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME
docker run -td --rm --name payment --network="host" publicdevop2019/payment:latest -jar Payment.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME
docker run -td --rm --name saga-orchestrator --network="host" publicdevop2019/saga-orchestrator:latest -jar SagaOrchestrator.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME

docker run -td --rm --name profile --network="host" publicdevop2019/userprofile:latest -jar UserProfile.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME
docker run -td --rm --name product --network="host" publicdevop2019/product:latest -jar Product.jar $REGISTRY $REGISTRY_IP $DATA_SOURCE_URL $DATA_SOURCE_DDL $DATA_SOURCE_USERNAME
# end of micro-services #
