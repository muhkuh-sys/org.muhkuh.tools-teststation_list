#! /bin/bash
set -e
#CACHECFG=--no-cache

docker build ${CACHECFG} --tag ghcr.io/muhkuh-sys/teststations --file dockerfile .
