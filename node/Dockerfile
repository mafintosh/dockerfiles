from ubuntu:12.04
run apt-get update
run apt-get -qy install curl
run curl -fs https://raw.github.com/mafintosh/node-install/master/install | sh
run node-install 0.10.25
run mkdir -p /app
workdir /app
add ./package.json /app/package.json
run npm install
add . /app/