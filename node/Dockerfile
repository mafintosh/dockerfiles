from ubuntu:12.04

run apt-get update
run apt-get -qy install curl
run curl -fs https://raw.github.com/mafintosh/node-install/master/install | sh
run node-install 0.10.25

add package.json /root/
run cd /root; npm install
add . /root/

workdir /root
entrypoint npm start
