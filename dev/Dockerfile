from ubuntu:14.04
run apt-get update; apt-get -y install sudo curl git-core build-essential libgraphicsmagick1-dev vim python ruby1.9.3 bash bash-completion
run curl -fs https://raw.githubusercontent.com/mafintosh/node-install/master/install | sh; node-install 0.10.32
add .bashrc /root/
workdir /root
entrypoint /bin/bash --rcfile .bashrc