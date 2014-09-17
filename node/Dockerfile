from ubuntu:14.04

run apt-get update
run apt-get -qy install curl git-core build-essential python
run curl -fs https://raw.githubusercontent.com/mafintosh/node-install/master/install | sh
run node-install 0.10.32
run npm install -g npm-start@1.3.2
run npm install -g node-gyp; node-gyp install; npm uninstall -g node-gyp
run echo README > /root/README.md; npm config set color always

workdir /root

onbuild add package.json /root/
onbuild run npm install --loglevel http --unsafe-perm 2>&1
onbuild add . /root/
onbuild run npm run build --unsafe-perm

entrypoint ["npm-start"]
