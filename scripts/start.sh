#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

pm2 start app/bin/index.js --name guanabara_status_be --log /logs/guanaba_status_be.log --watch --time