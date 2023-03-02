#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build

pipenv install python3.10.7 
