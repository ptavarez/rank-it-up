# TOKEN="" NAME="" DESCRIPTION="" sh  scripts/players/create-player.sh

curl "https://rank-it-up.herokuapp.com//players" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "player": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

  echo
