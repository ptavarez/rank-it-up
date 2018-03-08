#!/bin/bash

# EMAIL="" PASSWORD="" PASSWORD_CONFIRMATION="" sh scripts/auth/sign-in.sh

curl "https://rank-it-up.herokuapp.com/sign-in" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'"
  }
}'

echo
