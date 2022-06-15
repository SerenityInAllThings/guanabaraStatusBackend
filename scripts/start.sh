#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

cd /app
npm install
pm2 start npm --name guanabara_status_be --log /logs/guanabara_status_be.log --time -- --prefix /app start