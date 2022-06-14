#!/bin/bash
pm2 start app/bin/index.js --name guanabara_status_be --log /logs/guanaba_status_be.log --watch --time