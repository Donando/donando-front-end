FROM registry.opensource.zalan.do/stups/ubuntu:16.04-29
MAINTAINER Zalando SE

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get -y dist-upgrade
RUN apt-get install -y nginx

# remove the default config and html
RUN rm -r /etc/nginx/*

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log


VOLUME ["/var/cache/nginx"]

# add our files
ADD docker/startApplication /opt/
ADD docker/config/ /etc/nginx
ADD dist/ /var/www/html
ADD scm-source.json /

RUN chown -R www-data /var/www/html

EXPOSE 8080

CMD [ "/opt/startApplication" ]
