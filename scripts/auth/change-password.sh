#!/bin/bash

# TOKEN="" OLD_PASSWORD="" NEW_PASSWORD="" sh scripts/auth/change-password.sh

curl "https://rank-it-up.herokuapp.com/change-password/" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "passwords": {
    "old": "'"${OLD_PASSWORD}"'",
    "new": "'"${NEW_PASSWORD}"'"
  }
}'

echo
