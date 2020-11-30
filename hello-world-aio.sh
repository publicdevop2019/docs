EMAIL_USERNAME={replace_w_gmail_account}
EMAIL_PWD={replace_w_gmail_pwd}
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
docker run -td --rm -p 8111:8111 --name all-in-one  --network="host" publicdevop2019/all-in-one:latest $EMAIL_USERNAME $EMAIL_PWD
# end of micro-services #
