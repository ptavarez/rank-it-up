#!/bin/bash

# TOKEN= DESCRIPTION="Test Duel" CHALLENGER=Dro OPPONENT=Gabe WINNER=Gabe LOSER=Dro sh  scripts/matches/create-match.sh

curl "http://localhost:4741/matches" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "match": {
      "description": "'"${DESCRIPTION}"'",
      "challenger": "'"${CHALLENGER}"'",
      "opponent": "'"${OPPONENT}"'",
      "winner": "'"${WINNER}"'",
      "loser": "'"${LOSER}"'"
    }
  }'

  echo
