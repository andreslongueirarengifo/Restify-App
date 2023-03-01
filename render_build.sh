#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build

pipenv install --version 3.10

pipenv run upgrade
