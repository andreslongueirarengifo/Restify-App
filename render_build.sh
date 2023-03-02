#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build

pipenv install 

sudo apt install python3.7.10
