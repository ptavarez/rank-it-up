# TOKEN="" ID= sh scripts/players/delete-player.sh

curl "https://rank-it-up.herokuapp.com//players/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
