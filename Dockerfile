FROM publicdevop2019/eureka:latest AS eureka
FROM publicdevop2019/oauth2service:hw AS oauth2
FROM publicdevop2019/edgeproxy:hw AS proxy
FROM publicdevop2019/messenger:hw AS messenger
FROM publicdevop2019/file-upload:hw AS fileUpload
FROM publicdevop2019/payment:hw AS payment
FROM publicdevop2019/userprofile:hw AS userprofile
FROM publicdevop2019/product:hw AS product
FROM hirokimatsumoto/alpine-openjdk-11:latest as jlink-package

RUN jlink \
     --module-path /opt/java/jmods \
     --compress=2 \
     --add-modules jdk.jfr,jdk.management.agent,java.base,java.logging,java.xml,jdk.unsupported,java.sql,java.naming,java.desktop,java.management,java.security.jgss,java.instrument \
     --no-header-files \
     --no-man-pages \
     --output /opt/jdk-11-mini-runtime

FROM alpine:3.8

ENV JAVA_HOME=/opt/jdk-11-mini-runtime
ENV PATH="$PATH:$JAVA_HOME/bin"

COPY --from=jlink-package /opt/jdk-11-mini-runtime /opt/jdk-11-mini-runtime

COPY --from=eureka ./Eureka.jar ./
COPY --from=oauth2 ./AuthService.jar ./
COPY --from=proxy ./EdgeProxyService.jar ./
COPY --from=messenger ./Messenger.jar ./
COPY --from=fileUpload ./FileUpload.jar ./
COPY --from=payment ./Payment.jar ./
COPY --from=userprofile ./UserProfile.jar ./
COPY --from=product ./Product.jar ./

COPY ./start-up.sh /
RUN chmod 777 ./start-up.sh

EXPOSE 8111
# EXPOSE 8080 8082 8083 8085 8761 8086 8087 8111

ENTRYPOINT ["./start-up.sh"]
