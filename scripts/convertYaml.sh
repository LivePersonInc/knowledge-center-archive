#!/bin/bash

echo "Converting documentupdated to json"
ruby -rjson -ryaml -e "puts YAML.load_file('./_data/reportbuilder.yaml').to_json" > ./js/reportbuild.json
