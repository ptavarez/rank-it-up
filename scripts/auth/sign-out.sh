#!/bin/bash

# TOKEN="" sh scripts/auth/sign-out.sh

curl "https://rank-it-up.herokuapp.com/sign-out" \
--include \
--request DELETE \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
