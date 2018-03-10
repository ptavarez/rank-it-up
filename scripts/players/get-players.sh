# TOKEN="" sh scripts/players/get-players.sh

curl "https://rank-it-up.herokuapp.com//players" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  echo
