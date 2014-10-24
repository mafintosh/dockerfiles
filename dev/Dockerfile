FROM mafintosh/base
RUN apt-get -y install sudo libgraphicsmagick1-dev vim ruby1.9.3 bash bash-completion
RUN curl -fs https://raw.githubusercontent.com/mafintosh/node-install/master/install | sh; node-install 0.10.32
ADD .bashrc /root/
WORKDIR /root
ENTRYPOINT /bin/bash --rcfile .bashrc