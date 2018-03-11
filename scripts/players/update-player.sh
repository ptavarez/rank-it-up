# TOKEN="" ID= WINS= LOSSES= sh scripts/players/update-player.sh

curl "https://rank-it-up.herokuapp.com//players/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "player": {
      "wins": "'"${WINS}"'",
      "losses": "'"${LOSSES}"'"
    }
  }'

echo
