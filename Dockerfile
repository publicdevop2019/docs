FROM publicdevop2019/eureka:latest AS eureka
FROM publicdevop2019/oauth2service:latest AS oauth2
FROM publicdevop2019/edgeproxy:latest AS proxy
FROM publicdevop2019/messenger:latest AS messenger
FROM publicdevop2019/file-upload:latest AS file-upload
FROM publicdevop2019/payment:latest AS payment
FROM publicdevop2019/userprofile:latest AS user-profile
FROM publicdevop2019/product:latest AS product
FROM publicdevop2019/saga-orchestrator:latest AS saga
FROM publicdevop2019/validator:latest AS validator
FROM publicdevop2019/object-store:latest AS object-store
FROM hirokimatsumoto/alpine-openjdk-11:latest as jlink-package

RUN jlink \
     --module-path /opt/java/jmods \
     --compress=2 \
     --add-modules jdk.jfr,jdk.management.agent,java.base,java.logging,java.xml,jdk.unsupported,java.sql,java.naming,java.desktop,java.management,java.security.jgss,java.instrument \
     --no-header-files \
     --no-man-pages \
     --output /opt/jdk-11-mini-runtime

FROM node:14.15.1-alpine3.12

ENV JAVA_HOME=/opt/jdk-11-mini-runtime
ENV PATH="$PATH:$JAVA_HOME/bin"

COPY --from=jlink-package /opt/jdk-11-mini-runtime /opt/jdk-11-mini-runtime

COPY --from=eureka ./Eureka.jar ./
COPY --from=oauth2 ./AuthService.jar ./
COPY --from=proxy ./EdgeProxyService.jar ./
COPY --from=messenger ./Messenger.jar ./
COPY --from=file-upload ./FileUpload.jar ./
COPY --from=payment ./Payment.jar ./
COPY --from=user-profile ./UserProfile.jar ./
COPY --from=product ./Product.jar ./
COPY --from=saga ./SagaOrchestrator.jar ./
COPY --from=object-store ./ObjectStore.jar ./
RUN mkdir validator
COPY --from=validator /usr/src/app ./validator

COPY ./start-up.sh /
RUN chmod 777 ./start-up.sh

EXPOSE 8111
# EXPOSE 8080 8082 8083 8085 8761 8086 8087 8111

ENTRYPOINT ["./start-up.sh"]
