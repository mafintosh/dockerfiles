from ubuntu:14.04

run apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
run echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/10gen.list

env MONGODB_VERSION 2.6.1

run apt-get update
run apt-get install -qy \
  mongodb-org=$MONGODB_VERSION \
  mongodb-org-server=$MONGODB_VERSION \
  mongodb-org-shell=$MONGODB_VERSION \
  mongodb-org-mongos=$MONGODB_VERSION \
  mongodb-org-tools=$MONGODB_VERSION

run mkdir -p /data/db

expose 27017

entrypoint ["/usr/bin/mongod"]
