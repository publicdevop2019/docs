EMAIL_USERNAME={replace_w_gmail_account}
EMAIL_PWD={replace_w_gmail_pwd}
# start of ui #
docker run -td --rm -p 4300:80 --name oauth2-ui publicdevop2019/oauth-ui:hw
docker run -td --rm -p 4200:80 --name object-market publicdevop2019/object-market:hw
# end of ui #
# start of micro-services #
#docker run --rm -p 8111:8111 aio:latest $EMAIL_USERNAME $EMAIL_PWD
# end of micro-services #