from ubuntu:14.04
run apt-get update; apt-get -y install curl git-core build-essential libgraphicsmagick1-dev vim python
run curl -fs https://raw.githubusercontent.com/mafintosh/node-install/master/install | sh
run node-install 0.10.29
add .bashrc /root/
workdir /root
entrypoint /bin/bash --rcfile .bashrc