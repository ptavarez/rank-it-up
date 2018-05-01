'use strict'

const getFormFields = require('../../../lib/get-form-fields')
// const store = ('./../store.js')
const matchApi = require('./api')
const matchUi = require('./ui.js')

const onCreateMatch = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  matchApi.createMatch(data)
    .then(matchUi.createMatchSuccess)
    .catch(matchUi.createMatchFailure)
}

const onListPlayers = function (event) {
  matchApi.listPlayers()
    .then(matchUi.listPlayersSuccess)
    .catch(matchUi.listPlayersFailure)
}

const matchHandlers = () => {
  $('.new-match-form').on('submit', onCreateMatch)
  $('.new-match').on('click', onListPlayers)
}

module.exports = {
  matchHandlers
}
