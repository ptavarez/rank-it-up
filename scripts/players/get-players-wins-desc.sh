# TOKEN="" ID= sh scripts/players/get-players-wins-desc.sh

curl "https://rank-it-up.herokuapp.com/most_wins" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
