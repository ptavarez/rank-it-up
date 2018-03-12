# TOKEN="" ID= sh scripts/players/get-player.sh

curl "https://rank-it-up.herokuapp.com//players/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
