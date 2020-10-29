EMAIL_USERNAME={replace_w_gmail_account}
EMAIL_PWD={replace_w_gmail_pwd}
# start of ui #
docker run -td --rm -p 4300:80 --name oauth2-ui publicdevop2019/oauth-ui:hw
docker run -td --rm -p 4200:80 --name object-market publicdevop2019/object-market:hw
# end of ui #
# rabbitmq
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

# start of micro-services #
docker run -td --rm -p 8111:8111 --name all-in-one publicdevop2019/all-in-one:latest $EMAIL_USERNAME $EMAIL_PWD
# end of micro-services #
