alias ls="ls --color=auto --group-directories-first"
alias ll="ls -l"
alias ..="cd .."
alias npm-offline="npm --cache-min 99999999 "

if [ -f /etc/bash_completion ]; then
  . /etc/bash_completion
fi

export EDITOR=vim
export PS1="\[\033[41m\] $HOSTNAME \[\033[49m\]\[\033[44m\] \W \[\033[49m\]\[\033[42m\]\$(__git_ps1 \" %s \")\[\033[49m\] "
