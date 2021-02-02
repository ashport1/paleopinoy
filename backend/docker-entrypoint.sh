#!/usr/bin/env bash

rsync --rsync-path=/usr/bin/rsync -ar /usr/src/cache/node_modules/ /usr/src/app/node_modules/
exec npm start
