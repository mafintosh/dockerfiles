from ubuntu:14.04

run apt-get update
run apt-get -qy install curl
run curl -fs https://raw.githubusercontent.com/mafintosh/node-install/master/install | sh
run node-install 0.10.29
run npm install -g npm-start@1.2.3

workdir /root

add package.json /root/
run npm install
add . /root/
run npm run build

entrypoint ["npm-start"]
