FROM ubuntu:14.04

RUN apt-get update
RUN apt-get -qy install curl git-core build-essential python
RUN curl -fs https://raw.githubusercontent.com/mafintosh/node-install/master/install | sh
RUN node-install 0.10.32
RUN npm install -g npm-start@1.4.0
RUN npm install -g node-gyp; node-gyp install; npm uninstall -g node-gyp
RUN echo README > /root/README.md; npm config set color always

WORKDIR /root

ONBUILD ADD package.json /root/
ONBUILD RUN npm install --loglevel http --unsafe-perm 2>&1
ONBUILD ADD . /root/
ONBUILD RUN npm run build --unsafe-perm

ENTRYPOINT ["npm-start"]