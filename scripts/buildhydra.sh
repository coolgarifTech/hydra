#!/bin/bash

# get fullpath to dir in which script resides, no matter where it's called from
# form: http://stackoverflow.com/questions/59895/can-a-bash-script-tell-what-directory-its-stored-in
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# navigate to dev dir
cd $DIR
cd ../dev
echo -e 'Building hydra-standalone.js from d3, lodash, and hydra-production.js... \t\t\c'
# concatenate, compress, and output hydra-standalone.js using uglifyjs
uglifyjs js/lib/d3.v3.min.js js/lib/lodash.min.js js/hydra-production.js --output hydra-standalone.js
echo "[ Done ]"